---
sidebar_position: 1
title: API Overview
sidebar_label: API Overview
---

# API Overview

The Fish Tracker Backend API provides RESTful endpoints for managing fish and crab tracking data across multiple Minecraft gamemodes.

## Base URL

```
https://api.tracker.petarmc.com
```

## Authentication

### Public Endpoints
Most endpoints are public but rate-limited. No authentication required. See more details in the [Rate Limiter](./rate-limiter) page.

### Admin Endpoints
Admin endpoints require JWT authentication and CSRF protection.

**Authentication Headers:**
```
Authorization: Bearer <jwt-token>
x-csrf-Token: <csrf-token>
```

## HTTP Status Codes

- `200`: Success
- `400`: Bad Request (missing/invalid parameters)
- `401`: Unauthorized (admin endpoints)
- `403`: Forbidden (insufficient permissions)
- `404`: Not Found
- `405`: Method Not Allowed
- `429`: Too Many Requests (rate limited)
- `500`: Internal Server Error

## Gamemode Support

Currently the API supports the following gamemodes:
- `oneblock`
- `earth`
- `survival`
- `factions`
