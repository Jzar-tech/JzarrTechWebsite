const assert = require("node:assert/strict");
const { afterEach, test } = require("node:test");
const { createApp } = require("../server");
const {
  normalizeContactPayload,
  validateContactPayload,
} = require("../routes/contact");

const openServers = new Set();

afterEach(async () => {
  await Promise.all(
    [...openServers].map(
      (server) =>
        new Promise((resolve) => {
          server.close(resolve);
        }),
    ),
  );
  openServers.clear();
});

async function startTestServer(sendMail = async () => ({ accepted: ["test"] })) {
  const app = createApp({
    transporter: { sendMail },
    mailConfig: {
      from: "website@example.com",
      to: "contact@example.com",
    },
    rateLimiter: (_req, _res, next) => next(),
  });
  const server = app.listen(0);
  openServers.add(server);

  await new Promise((resolve) => server.once("listening", resolve));

  return {
    baseUrl: `http://127.0.0.1:${server.address().port}`,
  };
}

test("normalizes frontend and legacy contact fields", () => {
  const frontend = normalizeContactPayload({
    formId: "website-contact",
    name: "Ada Lovelace",
    email: "ADA@EXAMPLE.COM ",
    whatsapp: "+1 555 0100",
    message: "Build a website",
  });

  assert.equal(frontend.email, "ada@example.com");
  assert.equal(frontend.name, "Ada Lovelace");
  assert.equal(frontend.message, "Build a website");

  const legacy = normalizeContactPayload({
    firstName: "Ada",
    lastName: "Lovelace",
    email: "ada@example.com",
    phone: "+1 555 0100",
    details: "Build a website",
  });

  assert.equal(legacy.name, "Ada Lovelace");
  assert.equal(legacy.whatsapp, "+1 555 0100");
  assert.equal(legacy.message, "Build a website");
});

test("validates required contact fields", () => {
  assert.equal(
    validateContactPayload(normalizeContactPayload({})),
    "Name is required.",
  );
  assert.equal(
    validateContactPayload(
      normalizeContactPayload({ name: "Ada", email: "invalid", message: "Hi" }),
    ),
    "A valid email address is required.",
  );
});

test("serves the production health endpoint", async () => {
  const { baseUrl } = await startTestServer();
  const response = await fetch(`${baseUrl}/api/health`);

  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { ok: true });
});

test("sends text email using the frontend payload contract", async () => {
  let sentMessage;
  const { baseUrl } = await startTestServer(async (message) => {
    sentMessage = message;
    return { accepted: ["contact@example.com"] };
  });

  const response = await fetch(`${baseUrl}/api/contact`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      formId: "website-consultation",
      name: "Ada Lovelace",
      email: "ada@example.com",
      whatsapp: "+1 555 0100",
      service: "Web development",
      message: "Build a secure website",
    }),
  });
  const body = await response.json();

  assert.equal(response.status, 200);
  assert.equal(body.success, true);
  assert.equal(sentMessage.replyTo, "ada@example.com");
  assert.match(sentMessage.text, /Build a secure website/);
  assert.equal("html" in sentMessage, false);
});

test("rejects invalid input without sending email", async () => {
  let sendCount = 0;
  const { baseUrl } = await startTestServer(async () => {
    sendCount += 1;
  });

  const response = await fetch(`${baseUrl}/api/contact`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      name: "Ada Lovelace",
      email: "not-an-email",
      message: "Hello",
    }),
  });

  assert.equal(response.status, 400);
  assert.equal(sendCount, 0);
});
