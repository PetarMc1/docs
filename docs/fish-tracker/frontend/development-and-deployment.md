---
title: Frontend Development and Deployment
sidebar_label: Development and deployment
---

# Frontend Development Guide

## Prerequisites
- Node.js 18+
- pnpm package manager

## Installation
```bash
cd frontend
pnpm install
```

## Development
```bash
pnpm dev
```
Starts the development server at `http://localhost:3000`

## Build Process
```bash
pnpm build
pnpm start 
```

## Docker Support
- **Dockerfile**: Containerized deployment
- **Docker Compose**: Orchestrated with backend services
- **Production ready**: Optimized for container environments

### Docker Compose (Recommended)
```yaml
version: "3.9"

services:
  frontend:
    image: petarmc/fish-tracker-frontend:1.x.x
    restart: unless-stopped
    ports:
      - "3000:3000"
    environment:
      - API_URL=https://api.example.com
      - API_KEY=your-api-key-here
```

### Docker Run Command
```bash
docker run -d \
  -p 3000:3000 \
  --restart unless-stopped \
  -e API_URL=https://api.example.com \
  -e API_KEY=your-api-key-here \
  petarmc/fish-tracker-frontend:1.x.x
```

### Development Docker Images

Download from [Jenkins](https://ci.petarmc.com/job/Fish%20Tracker/):

```bash
curl -o frontend-docker.tar.gz https://ci.petarmc.com/job/Fish%20Tracker/10/artifact/frontend-docker-X.tar.gz
```

Load into Docker:

```bash
gzip -d frontend-docker.tar.gz
docker load -i frontend-docker.tar
```

Or directly without unzipping:

```bash
gunzip -c frontend-docker.tar.gz | docker load
```

Run containers:

```bash
docker run -d \
  --name frontend \
  -p 80:3000 \
  --restart unless-stopped \
  -e API_URL=https://api.example.com \
  -e API_KEY=your-api-key-here \
  petarmc/fish-tracker-frontend:X
```



## Environment Variables
- **API_URL**: Backend API base URL (defaults to production)
- **API_KEY**: Authentication key for API requests
