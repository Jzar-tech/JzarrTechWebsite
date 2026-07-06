const express = require("express");
const nodemailer = require("nodemailer");

const MAX_LENGTHS = {
  formId: 80,
  name: 120,
  email: 254,
  whatsapp: 50,
  occupation: 120,
  service: 120,
  timeline: 120,
  subject: 180,
  message: 5000,
};

function requireEnv(name) {
  const value = process.env[name]?.trim();

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

function getMailConfig() {
  const smtpPort = Number(process.env.SMTP_PORT || 587);

  if (!Number.isInteger(smtpPort) || smtpPort < 1 || smtpPort > 65535) {
    throw new Error("SMTP_PORT must be a valid port number.");
  }

  const smtpUser = requireEnv("SMTP_USER");

  return {
    host: requireEnv("SMTP_HOST"),
    port: smtpPort,
    secure:
      process.env.SMTP_SECURE == null
        ? smtpPort === 465
        : process.env.SMTP_SECURE === "true",
    user: smtpUser,
    password: requireEnv("SMTP_PASS"),
    from: process.env.MAIL_FROM?.trim() || smtpUser,
    to: requireEnv("MAIL_TO"),
  };
}

function createMailTransport(config) {
  return nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    auth: {
      user: config.user,
      pass: config.password,
    },
  });
}

function cleanText(value, maxLength) {
  if (typeof value !== "string") {
    return "";
  }

  return value.replace(/\0/g, "").trim().slice(0, maxLength);
}

function normalizeContactPayload(body = {}) {
  const firstName = cleanText(body.firstName, 60);
  const lastName = cleanText(body.lastName, 60);

  return {
    website: cleanText(body.website, 200),
    formId: cleanText(body.formId, MAX_LENGTHS.formId) || "website-contact",
    name:
      cleanText(body.name, MAX_LENGTHS.name) ||
      `${firstName} ${lastName}`.trim(),
    email: cleanText(body.email, MAX_LENGTHS.email).toLowerCase(),
    whatsapp:
      cleanText(body.whatsapp, MAX_LENGTHS.whatsapp) ||
      cleanText(body.phone, MAX_LENGTHS.whatsapp),
    occupation:
      cleanText(body.occupation, MAX_LENGTHS.occupation) ||
      cleanText(body.company, MAX_LENGTHS.occupation),
    service: cleanText(body.service, MAX_LENGTHS.service),
    timeline: cleanText(body.timeline, MAX_LENGTHS.timeline),
    subject: cleanText(body.subject, MAX_LENGTHS.subject),
    message:
      cleanText(body.message, MAX_LENGTHS.message) ||
      cleanText(body.details, MAX_LENGTHS.message),
  };
}

function validateContactPayload(payload) {
  if (!payload.name) {
    return "Name is required.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    return "A valid email address is required.";
  }

  if (!payload.message) {
    return "Project details are required.";
  }

  return null;
}

function createContactRouter({ transporter, mailConfig } = {}) {
  const router = express.Router();
  const transport = transporter || createMailTransport(mailConfig || getMailConfig());
  const config = mailConfig || getMailConfig();

  router.post("/", async (req, res) => {
    try {
      const payload = normalizeContactPayload(req.body);

      // Honeypot submissions receive a normal response without sending mail.
      if (payload.website) {
        return res.json({
          ok: true,
          success: true,
          message: "Your message has been received.",
        });
      }

      const validationError = validateContactPayload(payload);

      if (validationError) {
        return res.status(400).json({
          ok: false,
          success: false,
          message: validationError,
        });
      }

      const text = [
        `New lead from JzarrTech (${payload.formId})`,
        "",
        `Name: ${payload.name}`,
        `Email: ${payload.email}`,
        payload.whatsapp ? `WhatsApp: ${payload.whatsapp}` : null,
        payload.occupation ? `Occupation: ${payload.occupation}` : null,
        payload.service ? `Service: ${payload.service}` : null,
        payload.timeline ? `Timeline: ${payload.timeline}` : null,
        "",
        "Project details:",
        payload.message,
      ]
        .filter(Boolean)
        .join("\n");

      await transport.sendMail({
        from: config.from,
        to: config.to,
        replyTo: payload.email,
        subject: payload.subject || `New inquiry from ${payload.name}`,
        text,
      });

      console.log("Contact email accepted by SMTP", {
        formId: payload.formId,
      });

      return res.json({
        ok: true,
        success: true,
        message: "Thanks. Your message has been received.",
      });
    } catch (error) {
      console.error("Failed to send contact email", {
        code: error?.code,
        command: error?.command,
      });

      return res.status(500).json({
        ok: false,
        success: false,
        message: "We could not send your message. Please try again later.",
      });
    }
  });

  return router;
}

module.exports = {
  createContactRouter,
  createMailTransport,
  getMailConfig,
  normalizeContactPayload,
  validateContactPayload,
};
