# Offshore Monitoring — Website

Modern static marketing site for [Offshore Monitoring](https://offshoremonitoring.com/), rebuilt from the homepage redesign handoff.

**Repo:** https://github.com/OffshoreMonitoringLtd/Website_OffshoreMonitoring

## Stack

- Static HTML / CSS / JS (hash-router SPA)
- Docker + nginx for production
- GitHub Actions → GHCR image + optional SSH deploy behind Cloudflare

## Quick start (local)

```bash
# Option A — any static server
python3 -m http.server 4173 --bind 0.0.0.0

# Option B — Docker
docker compose up --build -d
# http://localhost:8080
```

## Deploy

See **[DEPLOY.md](./DEPLOY.md)** for:

- GHCR image publish
- VPS + SSH secrets
- Cloudflare proxied DNS or Tunnel setup

## Project layout

| Path | Role |
|------|------|
| `index.html` | Shell, header, footer |
| `app.js` | Routes & page content |
| `styles.css` | Design system |
| `assets/` | Hero video & images |
| `Dockerfile` / `nginx.conf` | Production container |
| `.github/workflows/` | CI + Deploy |
