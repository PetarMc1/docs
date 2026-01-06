---
title: Installation and Deployment
sidebar_label: Installation and Deployment
---

# Installation

This guide will help you set up the Fish Tracker Backend API for development.

## Prerequisites

Before installing, ensure you have the following:

- **Node.js**: Version 20 or higher
- **MongoDB**: A running MongoDB instance (local or cloud)
- **pnpm**: Package manager (recommended) or npm

## Environment Setup

1. **Clone the repository** (if not already done):
   ```bash
   git clone https://github.com/PetarMc1/fish-tracker
   cd fish-tracker/backend
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Create environment file**:
   Create a `.env` file in the backend root directory with the following variables:
   ```env
   MONGO_URI=mongodb://exampleUser:examplePass@mongo.example.com:27017/fishdb
   PORT=10000 # optional otherwise defaults to 10000
   RANDOM_ORG_API_KEY=your-random-org-api-key
   JWT_SECRET=your-super-secret-jwt-key
   FRONTEND_API_KEY=your-frontend-api-key
   ALLOWED_ORIGIN=https://your-frontend-domain.com # optional otherwise will use https://tracker.petarmc.com
   RATE_LIMIT_WINDOW=5  # optional otherwise defaults to 5 minutes
   RATE_LIMIT_MAX_REQUESTS=25   # optional otherwise defaults to 25 requests per window
   ```

:::caution
 Never commit the `.env` file to version control. Add it to `.gitignore`.
:::

## Database Setup

The API uses MongoDB. To see the database structure check the [Data Models](./models.md) page.


## Running the Application

### Development Mode

Start the development server with hot reloading:
```bash
pnpm run dev
# or
npm run dev
```

The server will start on `http://localhost:10000` (or the port specified in your `.env`).


## Docker Deployment

### Docker Compose (Recommended)
Create `docker-compose.yml`:
```yml
version: "3.9"

services:
   fish-tracker-backend:
      image: petarmc/fish-tracker-backend:1.x.x
      ports:
         - "10000:10000"
      environment:
         MONGO_URI: "mongodb://exampleUser:examplePass@mongo.example.com:27017/fishdb"
         RANDOM_ORG_API_KEY: "random-org-api-key"
         FRONTEND_API_KEY: "frontend-api-key"
         JWT_SECRET: "your-super-secret-jwt-token"
         ALLOWED_ORIGIN: "https://your-frontend-domain.com" # optional
         RATE_LIMIT_WINDOW: 5  # optional otherwise defaults to 5 minutes
         RATE_LIMIT_MAX_REQUESTS: 25   # optional otherwise defaults to 25 requests per window
         PORT: 10000  # optional, if you change it here, change the port mapping above too
      restart: unless-stopped

```
Then start the service:
```bash
docker compose up -d
```

### Docker Run Command 
```bash
docker run -d \
   --name fish-tracker-backend \
   -p 10000:10000 \
   -e MONGO_URI="mongodb://exampleUser:examplePass@mongo.example.com:27017/fishdb" \
   -e RANDOM_ORG_API_KEY="random-org-api-key" \
   -e FRONTEND_API_KEY="frontend-api-key" \
   -e JWT_SECRET="your-super-secret-jwt-token" \
   # -e ALLOWED_ORIGIN="https://your-frontend-domain.com" \
   # -e PORT=10000 \
   # -e RATE_LIMIT_WINDOW=5 \
   # -e RATE_LIMIT_MAX_REQUESTS=25 \
   --restart unless-stopped \
   petarmc/fish-tracker-backend:1.x.x
```

### Development Docker Images

Download from [Jenkins](https://ci.petarmc.com/job/Fish%20Tracker/)

```bash
curl -o backend-docker.tar.gz https://ci.petarmc.com/job/Fish%20Tracker/10/artifact/backend-docker-X.tar.gz
```

On target machine, load into Docker:

```bash
gzip -d backend-docker.tar.gz
docker load -i backend-docker.tar
```

Or directly without unzipping:

```bash
gunzip -c backend-docker.tar.gz | docker load
```

Run containers:

```bash
docker run -d \
   --name fish-tracker-backend-dev \
   -p 10000:10000 \
   -e MONGO_URI="mongodb://exampleUser:examplePass@mongo.example.com:27017/fishdb" \
   -e RANDOM_ORG_API_KEY="random-org-api-key" \
   -e FRONTEND_API_KEY="frontend-api-key" \
   -e JWT_SECRET="your-super-secret-jwt-token" \
   # -e ALLOWED_ORIGIN="https://your-frontend-domain.com" \
   # -e PORT=10000 \
   # -e RATE_LIMIT_WINDOW=5 \
   # -e RATE_LIMIT_MAX_REQUESTS=25 \
   --restart unless-stopped \
   petarmc/fish-tracker-backend:X
```
