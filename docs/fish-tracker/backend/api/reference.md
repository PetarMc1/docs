---
sidebar_position: 1
title: API Reference
sidebar_label: API Reference
---

# API Reference

This section contains detailed documentation for all API endpoints in the Fish Tracker Backend.

## Quick Reference

### Public Endpoints

:::tip
These endpoints are backward compatible. (aka without the `/v1` prefix) 
:::

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /status | API health check |
| GET | /demo/fish | Sample fish data |
| GET | /demo/crab | Sample crab data |
| GET | /v1/get/fish | User fish data |
| GET | /v1/get/crab | User crab data |
| GET | /v1/get/user/key | User encryption key |
| POST | /v1/post/fish | Submit fish data |
| POST | /v1/post/crab | Submit crab data |
### Admin Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /v2/admin/users | List users (supports ?search=) |
| POST | /v2/admin/user/create | Create user (returns API key / password when generated) |
| GET | /v2/admin/user/get/&#123;id&#125; | Get user by id |
| DELETE | /v2/admin/user/&#123;id&#125;/delete | Delete user (superadmin only) |
| POST | /v2/admin/user/&#123;id&#125;/reset?type=&#123;password|fernet|api-key&#125; | Reset password / fernet key / API key for user |
| GET | /v2/admin/user/&#123;id&#125;/fish | List user's fish by gamemode |
| GET | /v2/admin/user/&#123;id&#125;/crabs | List user's crabs by gamemode |
| POST | /v2/admin/user/&#123;id&#125;/fish/create | Create fish for user (requires gamemode query) |
| DELETE | /v2/admin/user/&#123;id&#125;/fish/delete/&#123;fishId&#125; | Delete fish entry (requires gamemode query) |
| DELETE | /v2/admin/user/&#123;id&#125;/crab/delete | Delete crab entries by count (requires gamemode + count query) |
| GET | /v2/admin/admins | List admin accounts |
| POST | /v2/admin/admins/create?role=&#123;role&#125; | Create admin account (superadmin only) |
| DELETE | /v2/admin/admins/delete/&#123;id&#125; | Delete admin account (superadmin only) |
| GET | /v2/admin/logs | List request logs and logger configuration |
| DELETE | /v2/admin/logs/delete/&#123;logid&#125; | Delete a specific log entry (superadmin only) |
| GET | /v1/admin/auth/csrf-token | Fetch CSRF token for admin routes |
| POST | /v1/admin/auth/login | Admin login (returns auth token) |
| GET | /v1/admin/auth/me | Current admin information (requires auth) |
| POST | /v1/admin/auth/create-admin | Create admin (superadmin only) |
| GET | /v1/admin/stats | System statistics |
| GET | /v1/admin/leaderboard | Activity leaderboard (requires type & gamemode query) |


### Deprecated v1 Admin Endpoints

These older admin endpoints are marked deprecated and will be removed in a future release. Use the v2 equivalents above where possible.

| Method | Endpoint |
|--------|----------|
| GET | /v1/admin/users (DEPRECATED) |
| POST | /v1/admin/users (DEPRECATED) |
| GET | /v1/admin/users/&#123;id&#125; (DEPRECATED) |
| DELETE | /v1/admin/users/&#123;id&#125; (DEPRECATED) |
| POST | /v1/admin/users/&#123;id&#125;/reset (DEPRECATED) |
| GET | /v1/admin/users/&#123;id&#125;/fish (DEPRECATED) |
| GET | /v1/admin/users/&#123;id&#125;/crab (DEPRECATED) |
| POST | /v1/admin/fish (DEPRECATED) |
| POST | /v1/admin/crab (DEPRECATED) |
| DELETE | /v1/admin/fish/&#123;fishId&#125; (DEPRECATED) |
| DELETE | /v1/admin/crab/&#123;crabId&#125; (DEPRECATED) |
