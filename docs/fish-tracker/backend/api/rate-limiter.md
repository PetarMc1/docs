---
title: Rate Limiter
sidebar_label: Rate Limiter
---

# Rate Limiter

The Fish Tracker API implements rate limiting to ensure fair usage and protect against abuse. This document explains how rate limiting works, how to bypass it. Rate limiting is applied to all [public endpoints](./public).

## Rate Limit Types

### Public Endpoints (No API Key)
- **Limit**: 25 requests per 5 minutes
- **Reset**: Automatic reset every 5 minutes
- **Scope**: All [public endpoints](./public) without a valid API key

### API Key Bypass
- **Limit**: Unlimited requests
- **Requirements**: Valid `x-api-key` header
- **Scope**: All [public endpoints](./public)

:::note
Requests coming from configured allowed origins also bypass rate limiting. Only add trusted origins to this list!
:::

### Admin Endpoints
- **Limit**: Separate rate limiting applied
- **Requirements**: JWT authentication
- **Scope**: All [admin endpoints](./admin)

## How It Works

### Rate Limit Headers

When rate limiting is active, the following headers are included in responses:

```
X-RateLimit-Remaining: 24  // Requests remaining in current window
X-RateLimit-Reset: 1640995200  // Unix timestamp when limit resets
```

## API Key Authentication

### Obtaining an API Key

To bypass rate limiting, you need a valid API key. To obtain an API key check the [Request Access](../../getting-started#request-access) page.

Each user is issued their own API key for bypassing public endpoint limits. In addition, the platform has a single master key - `MASTER_API_KEY` which provides global bypass.

### Using the API Key

Include the `x-api-key` header in your requests:

```bash
# Example with curl
curl -H "x-api-key: your-api-key" \
  "https://api.tracker.petarmc.com/get/fish?name=user&gamemode=earth"
```

```javascript
// Example with fetch
fetch('https://api.tracker.petarmc.com/get/fish?name=user&gamemode=earth', {
  headers: {
    'x-api-key': 'your-api-key'
  }
})
```

### API Key Validation

- Keys are validated against the `MASTER_API_KEY` environment variable
- Invalid keys are ignored (rate limiting still applies)
- Keys should be kept secure and not exposed in client-side code

## Error Responses

### Rate Limit Exceeded

When the rate limit is exceeded, the API returns: 

**Status Code:** `429 Too Many Requests`

**Response Body:**
```json
{
  "error": "Try again later. Contact the site owner for more info."
}
```


## Configuration

Rate limiting can be configured via the [environment variables](../installation-and-deployment#environment-setup):


## Why is Rate Limiting Important in this situation?

### Abuse Prevention

The rate limiting system helps prevent:
- **DDoS attacks**: Limits request volume
- **Data scraping**: Slows down bulk data collection
- **Resource exhaustion**: Prevents server overload
