const express = require("express");
const cors = require("cors");
const {
  createContactRouter,
  createMailTransport,
  getMailConfig,
} = require("./routes/contact");

require("dotenv").config();

const DEFAULT_PORT = 8787;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
const RATE_LIMIT_MAX = 20;

function createRateLimiter({
  windowMs = RATE_LIMIT_WINDOW_MS,
  maxRequests = RATE_LIMIT_MAX,
} = {}) {
  const buckets = new Map();

  return (req, res, next) => {
    const now = Date.now();
    const key = req.ip || req.socket.remoteAddress || "unknown";
    let bucket = buckets.get(key);

    if (!bucket || now - bucket.startedAt >= windowMs) {
      bucket = { startedAt: now, count: 0 };
    }

    bucket.count += 1;
    buckets.set(key, bucket);

    if (bucket.count > maxRequests) {
      return res.status(429).json({
        ok: false,
        success: false,
        message: "Too many requests. Please try again later.",
      });
    }

    return next();
  };
}

function getCorsMiddleware() {
  const allowedOrigins = (process.env.CORS_ORIGIN || "")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);

  if (!allowedOrigins.length) {
    return null;
  }

  return cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Origin is not allowed."));
    },
  });
}

function createApp({ transporter, mailConfig, rateLimiter } = {}) {
  const app = express();

  app.set("trust proxy", 1);

  const corsMiddleware = getCorsMiddleware();
  if (corsMiddleware) {
    app.use(corsMiddleware);
  }

  app.use(express.json({ limit: "32kb" }));

  app.get("/api/health", (_req, res) => {
    res.json({ ok: true });
  });

  app.use(
    "/api/contact",
    rateLimiter || createRateLimiter(),
    createContactRouter({ transporter, mailConfig }),
  );

  app.use((err, _req, res, _next) => {
    if (err?.type === "entity.too.large") {
      return res.status(413).json({
        ok: false,
        success: false,
        message: "Request is too large.",
      });
    }

    if (err instanceof SyntaxError && err.status === 400) {
      return res.status(400).json({
        ok: false,
        success: false,
        message: "Request body must be valid JSON.",
      });
    }

    console.error("Request failed", err);
    return res.status(500).json({
      ok: false,
      success: false,
      message: "Server error. Please try again later.",
    });
  });

  return app;
}

function startServer() {
  const mailConfig = getMailConfig();
  const transporter = createMailTransport(mailConfig);
  const app = createApp({ transporter, mailConfig });
  const port = Number(process.env.PORT || DEFAULT_PORT);

  const server = app.listen(port, () => {
    console.log(`JzarrTech mail API listening on port ${port}`);
  });

  transporter.verify().catch((error) => {
    console.error("SMTP verification failed", {
      code: error?.code,
      command: error?.command,
    });
  });

  return server;
}

if (require.main === module) {
  try {
    startServer();
  } catch (error) {
    console.error("Failed to start JzarrTech mail API:", error.message);
    process.exit(1);
  }
}

module.exports = {
  createApp,
  createRateLimiter,
  startServer,
};
