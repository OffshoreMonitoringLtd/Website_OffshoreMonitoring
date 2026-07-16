# Deploy guide — Website Offshore Monitoring

Static site in Docker (nginx), built on GitHub Actions, runnable on any VPS behind Cloudflare.

## Local run

```bash
docker compose up --build -d
# open http://localhost:8080
```

Stop:

```bash
docker compose down
```

## What CI/CD does

| Workflow | Trigger | Action |
|----------|---------|--------|
| `CI` | push / PR to `main` | Builds the Docker image (no push) |
| `Deploy` | push to `main` or manual | Builds & pushes to **GHCR**, optionally SSH-deploys to a VPS |

Image name:

`ghcr.io/offshoremonitoringltd/website_offshoremonitoring:latest`

## GitHub secrets & variables

### Always (image push)

Uses the default `GITHUB_TOKEN` — ensure the package is allowed for this repo under **Settings → Actions → General**.

After the first push, make the package visible to the org if needed:

**GitHub → Packages → website_offshoremonitoring → Package settings → Manage Actions access**

### SSH deploy (optional — turn on when the server is ready)

Repository **variable**:

| Name | Value |
|------|--------|
| `ENABLE_SSH_DEPLOY` | `true` |

Repository **secrets**:

| Secret | Example | Purpose |
|--------|---------|---------|
| `DEPLOY_HOST` | `203.0.113.10` | VPS public / origin IP (or hostname) |
| `DEPLOY_USER` | `deploy` | SSH user |
| `DEPLOY_SSH_KEY` | (private key PEM) | Deploy key with access to the server |
| `DEPLOY_PORT` | `22` | Optional SSH port |
| `DEPLOY_PATH` | `/opt/osm-website` | Optional app directory on the server |
| `GHCR_USER` | `Mjdhsn49` | Optional if image pull needs a PAT |
| `GHCR_TOKEN` | `ghp_...` | Optional PAT with `read:packages` for private GHCR pulls |

Until `ENABLE_SSH_DEPLOY=true`, Deploy still **builds and publishes the image** but skips the SSH step.

## VPS setup (once)

1. Install Docker Engine + Compose plugin.
2. Create deploy user and add your public key.
3. Clone this repo (or copy `docker-compose.yml` + `.env`):

```bash
git clone git@github.com:OffshoreMonitoringLtd/Website_OffshoreMonitoring.git /opt/osm-website
cd /opt/osm-website
cp .env.example .env
# edit IMAGE_TAG / HOST_PORT if needed
docker login ghcr.io
docker compose pull
docker compose up -d
```

4. Confirm health: `curl http://127.0.0.1:8080/healthz` → `ok`

5. Put a reverse proxy in front if you want host port 80/443 without Cloudflare Tunnel (Caddy/nginx), **or** only expose `8080` to Cloudflare / tunnel.

## Cloudflare in front of a personal origin IP

### Option A — Proxied DNS (orange cloud)

1. In Cloudflare DNS, create an **A** record pointing to your VPS public IP.
2. Proxy status: **Proxied**.
3. SSL/TLS mode: **Full** (or **Full (strict)** with an origin certificate).
4. On the VPS firewall, allow **80/443** (and ideally only Cloudflare IP ranges).
5. Origin serves HTTP on `8080` (or 80 via reverse proxy). Cloudflare terminates visitor HTTPS.

### Option B — Cloudflare Tunnel (recommended if you want to hide the origin IP)

1. Install `cloudflared` on the VPS.
2. Create a tunnel that routes `your.domain` → `http://127.0.0.1:8080`.
3. No need to open inbound 80/443 on the public IP.

See: https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/

## Checklist before go-live

- [ ] Image builds in Actions (green CI / Deploy)
- [ ] Package readable by the server (`docker pull` works)
- [ ] `ENABLE_SSH_DEPLOY=true` only after secrets are set
- [ ] Cloudflare DNS + SSL configured
- [ ] `/healthz` returns `ok` through the public hostname

## Rollback

On the server:

```bash
docker pull ghcr.io/offshoremonitoringltd/website_offshoremonitoring:<previous-sha>
# set IMAGE_TAG=<previous-sha> in .env then:
docker compose up -d
```
