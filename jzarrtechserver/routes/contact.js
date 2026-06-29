const express = require("express");

const nodemailer = require("nodemailer");

const router = express.Router();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

transporter.verify(function (error, success) {
  if (error) {
    console.log("SMTP Error:", error);
  } else {
    console.log("SMTP Server Ready");
  }
});

// Contact API
router.post("/", async (req, res) => {
  try {
   const {
  firstName,
  lastName,
  email,
  phone,
  service,
  details,
} = req.body;

    console.log("First Name:", firstName);
console.log("Last Name:", lastName);
console.log("Email:", email);
console.log("Phone:", phone);
console.log("Service:", service);
console.log("Project Details:", details);

await transporter.sendMail({
  from: process.env.MAIL_FROM,
  to: process.env.MAIL_TO,
  subject: "New Contact Form - JzarrTech",
  html: `
    <h2>New Contact Inquiry</h2>

    <p><strong>First Name:</strong> ${firstName}</p>
    <p><strong>Last Name:</strong> ${lastName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Service:</strong> ${service}</p>
    <p><strong>Project Details:</strong></p>
    <p>${details}</p>
  `,
});

    res.status(200).json({
      success: true,
      message: "Form Received Successfully",
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });

  }
});

module.exports = router;