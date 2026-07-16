# Offshore Monitoring — Website

Modern static marketing site for [Offshore Monitoring](https://offshoremonitoring.com/), rebuilt from the homepage redesign handoff.

**Repo:** https://github.com/OffshoreMonitoringLtd/Website_OffshoreMonitoring

**Live (GitHub Pages):** https://offshoremonitoringltd.github.io/Website_OffshoreMonitoring/

## Stack

- Static HTML / CSS / JS (hash-router SPA)
- Free HTTPS hosting via GitHub Pages
- Docker + nginx for VPS / Cloudflare deploy
- GitHub Actions → Pages deploy, GHCR image, optional SSH deploy

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
