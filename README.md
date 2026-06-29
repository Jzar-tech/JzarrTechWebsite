# JzarrTech

Single repository containing the JzarrTech frontend and backend.

## Projects

- `jzarrtech` - React frontend
- `jzarrtechserver` - production mail-only Express contact API

## Local commands

```bash
npm run client
npm run server
npm run build
```

## Backend configuration

The backend intentionally has no database or admin dashboard. It exposes
`POST /api/contact` and `GET /api/health`.

Create its environment configuration from `jzarrtechserver/.env.example`.
Production secrets belong only in the server-side `.env` and must not be
committed.
