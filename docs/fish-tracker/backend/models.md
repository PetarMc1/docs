---
title: Data Models
sidebar_label: Data Models
---

# Data Models

This document describes the data models and database schema used in the Fish Tracker Backend API.

## Overview

The API uses MongoDB with a multi-database architecture. Each gamemode has separate databases for fish and crab data, with a central database for user information.

## User Model

### Database: `core_users_data`
### Collection: `users`

Represents a user account in the system.

**Fields:**
- `id` (string): Unique user identifier
- `name` (string): Username (unique)
- `created_at` (timestamp): Account creation date
- Additional metadata fields as needed

**Example Document:**
```json
{
  "id": "12345",
  "name": "player123",
  "created_at": "2024-01-15T10:30:00Z"
}
```

## Fish Model

### Database: `user_data_fish_{gamemode}`
### Collection: `{username}` (one collection per user)

Stores fish data for a specific user and gamemode.

**Fields:**
- `_id` (ObjectId): MongoDB document ID
- `fish` (string): Name of the fish
- `rarity` (number): Rarity level (1-7)

For rarity levels check the [Rarity System](../rarity-tiers.md) section.

**Example Document:**
```json
{
  "_id": "some id",
  "fish": "Salmon",
  "rarity": 3,
}
```

### Rarity Storage Optimization

Fish rarity tiers are stored as numbers (1-7) in the database to optimize space usage and improve query performance. This numeric representation is used for:

- **POST requests**: When submitting new fish/crab data to the API
- **Database storage**: Efficient indexing and storage of rarity information

When retrieving data through GET requests for fish/crab information, the numeric tiers are automatically converted back to their corresponding string rarity names (e.g., "Gold", "Diamond") for better readability in API responses.

## Crab Model

### Database: `user_data_crab_{gamemode}`
### Collection: `{username}` (one collection per user)

Stores crab data for a specific user and gamemode. Similar structure to Fish model.

**Fields:**
- `_id` (ObjectId): MongoDB document ID
- `fish` (string): Always `crab`

**Example Document:**
```json
{
  "_id": "some id",
  "fish": "crab",
}
```


## Admin Model

### Database: `core_users_data`
### Collection: `admins`

Manages administrative users with role-based access.

**Fields:**
- `username` (string): Admin username
- `password` (string): Bcrypt hashed password
- `role` (string): Admin role (admin/superadmin)
- `created_at` (timestamp): Account creation date

**Roles:**
- `admin`: Standard administrative privileges
- `superadmin`: Full system access including user deletion

**Example Document:**
```json
{
  "username": "admin",
  "password": "$2a$10$...",
  "role": "admin",
  "created_at": "2024-01-01T00:00:00Z"
}
```

## Database Architecture

**Multi-Database Design**

The system uses separate databases for each gamemode to:
- Isolate data between gamemodes
- Simplify backup and maintenance operations

**Database Naming Convention:**
- `core_users_data`: Central user database
- `user_data_fish_{gamemode}`: Fish data per gamemode
- `user_data_crab_{gamemode}`: Crab data per gamemode
