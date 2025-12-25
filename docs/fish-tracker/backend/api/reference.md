---
sidebar_position: 1
title: API Reference
sidebar_label: API Reference
---

# API Reference

This section contains detailed documentation for all API endpoints in the Fish Tracker Backend.

## Quick Reference

### Public Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/status` | API health check |
| GET | `/demo/fish` | Sample fish data |
| GET | `/demo/crab` | Sample crab data |
| GET | `/get/fish` | User fish data |
| GET | `/get/crab` | User crab data |
| GET | `/get/user/key` | User encryption key |
| POST | `/post/fish` | Submit fish data |
| POST | `/post/crab` | Submit crab data |

### Admin Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/admin/auth/csrf-token` | Get CSRF token |
| POST | `/admin/auth/login` | Admin login |
| GET | `/admin/auth/me` | Current admin info |
| POST | `/admin/auth/create-admin` | Create admin user |
| GET | `/admin/users` | List users |
| GET | `/admin/users/:id` | Get user details |
| POST | `/admin/users` | Create user |
| POST | `/admin/users/:id/reset` | Reset user data |
| DELETE | `/admin/users/:id` | Delete user |
| GET | `/admin/users/:id/fish` | Get user fish |
| GET | `/admin/users/:id/crabs` | Get user crabs |
| POST | `/admin/fish` | Create fish data |
| POST | `/admin/crab` | Create crab data |
| DELETE | `/admin/fish/:fishId` | Delete fish |
| DELETE | `/admin/crab/:crabId` | Delete crab |
| GET | `/admin/stats` | System statistics |
| GET | `/admin/leaderboard` | Activity leaderboard |
