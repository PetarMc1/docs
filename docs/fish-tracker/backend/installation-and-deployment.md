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
   MONGO_URI=mongodb://localhost:27017/fish-tracker
   PORT=10000
   JWT_SECRET=your-super-secret-jwt-key
   FRONTEND_API_KEY=your-frontend-api-key
   ALLOWED_ORIGIN=https://your-frontend-domain.com
   ADMIN_JWT_SECRET=your-admin-jwt-secret
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
   fish-tracker:
      image: petarmc/fish-tracker-backend:1.x.x
      ports:
         - "10000:10000"
      environment:
         MONGO_URI: "mongodb://exampleUser:examplePass@mongo.example.com:27017/fishdb"
         RANDOM_ORG_API_KEY: "random-org-api-key"
         FRONTEND_API_KEY: "frontend-api-key"
         JWT_SECRET: "your-super-secret-jwt-token"
         ALLOWED_ORIGIN: "https://your-frontend-domain.com"
      restart: unless-stopped

```
Then start the service:
```bash
docker compose up -d
```

### Docker Run Command 
```bash
docker run -d \
   --name fish-tracker \
   -p 10000:10000 \
   -e MONGO_URI="mongodb://exampleUser:examplePass@mongo.example.com:27017/fishdb" \
   -e RANDOM_ORG_API_KEY="random-org-api-key" \
   -e FRONTEND_API_KEY="frontend-api-key" \
   -e JWT_SECRET="your-super-secret-jwt-token" \
   -e ALLOWED_ORIGIN="https://your-frontend-domain.com" \
   petarmc/fish-tracker:backend
```