---
sidebar_position: 2
title: Public API
sidebar_label: Public API
---

# Public API Endpoints

Public endpoints for accessing demo data and user information. These endpoints are rate-limited but do not require authentication.

## Demo Endpoints

### Get Demo Fish
Retrieve sample fish data for demonstration purposes.

**Endpoint:** `GET /demo/fish`
`

### Get Demo Crabs
Retrieve sample crab data for demonstration purposes.

**Endpoint:** `GET /demo/crab`


## User Data Retrieval

### Get User Fish
Retrieve all fish for a specific user in a gamemode.

**Endpoint:** `GET /get/fish`

**Query Parameters:**
- `name` (required): Username
- `gamemode` (required): Gamemode (oneblock, earth, survival, factions)

**Example Request:**
```
GET /get/fish?name=player123&gamemode=earth
```

**Success Response:**
```json
{
  "user": "player123",
  "fish": [
    {
      "name": "Salmon",
      "rarity": "Gold"
    },
    {
      "name": "Tropical Fish",
      "rarity": "Diamond"
    }
  ]
}
```

**Error Responses:**
- `400`: Missing name or gamemode parameter
- `400`: Invalid gamemode
- `404`: User not found
- `500`: Database error

### Get User Crabs
Retrieve all crabs for a specific user in a gamemode.

**Endpoint:** `GET /get/crab`

**Query Parameters:**
- `name` (required): Username
- `gamemode` (required): Gamemode

**Example Request:**
```
GET /get/crab?name=player123&gamemode=survival
```

**Response Format:** Similar to fish endpoint, with `crab` array instead of `fish`.

### Get User Fernet Key
Retrieve the user's encryption key for secure data handling.

**Endpoint:** `GET /get/user/key`

**Authentication:** HTTP Basic (requires admin credentials)
**Response:**
```json
{
  "fernetKey": "base64-encoded-fernet-key"
}
```

## Data Submission

### Submit User Fish
Add new fish data for a user.

**Endpoint:** `POST /post/fish`

**Content-Type:** `application/octet-stream` (encrypted binary payload)

**Request Body:**
The request body must be an encrypted binary (application/octet-stream) containing the JSON payload below before encryption. The server will decrypt and process the contained JSON.

Plain JSON example (must be encrypted by the client):
```json
{
  "fish": "fish",
  "rarity": 1
}
```

**Success Response:**
```json
{
  "message": "Fish saved for user <username>",
  "id": "some id"
}
```

**Validation:**
- `user`: Required, must exist in database
- `gamemode`: Required, must be valid
- `fish`: Array of fish objects with `name` and `rarity`

### Submit User Crabs
Add new crab data for a user.

**Endpoint:** `POST /post/crab`

**Content-Type:** `application/octet-stream` (encrypted binary payload)

**Request Body:**
The request body must be an encrypted binary (application/octet-stream) containing the JSON payload below before encryption. The server will decrypt and process the contained JSON.

Plain JSON example (must be encrypted by the client):
```json
{
  "fish": "crab"
}
```

**Success Response:**
```json
{
  "message": "Crab saved for user <username>",
  "id": "some id"
}
```

## System Status

### Get API Status
Check if the API is running and database is accessible.

**Endpoint:** `GET /status`

**Response:**
```json
{
  "status": "ok",
  "timestamp": "2024-01-15T10:30:00Z",
  "version": "1.0.0"
}
```