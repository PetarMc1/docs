---
title: Introduction
sidebar_label: Introduction
---

# Introduction

Welcome to the Fish Tracker Backend API documentation. This API serves as the backend for the Fish Tracker application, a system designed to track and manage fish and crab data for various Minecraft gamemodes in the CosmosMc minecraft server.

## Overview

The Fish Tracker API is built with Node.js and Express, using MongoDB as the database. It provides endpoints for:

- **Public Access**: Retrieving demo data and user-specific fish/crab information
- **User Management**: Handling user authentication and data operations
- **Admin Panel**: Comprehensive administrative controls for managing users, data, and system statistics

## Key Features

- **Multi-Gamemode Support**: Supports OneBlock, Earth, Survival, and Factions gamemodes
- **Rarity System**: Fish are categorized by rarity levels (Bronze, Silver, Gold, Diamond, Platinum, Mythical)
- **Admin Dashboard**: Full administrative interface with user management, data manipulation, and analytics
- **Security**: JWT authentication, CSRF protection, rate limiting, and CORS configuration
- **Scalable Architecture**: Modular design with separate controllers, models, and middleware

## Architecture

The backend follows a modular architecture:

- **Routes**: Define API endpoints and route handlers
- **Models**: Handle database interactions and data mapping
- **Middleware**: Authentication, CSRF protection, rate limiting
- **Utilities**: Helper functions and configurations

## Getting Started

To get started with the API:

1. [Installation and Deployment](./installation-and-deployment.md) - Set up the development environment
2. [API Overview](./api/overview.md) - Understand the available endpoints
3. [Models](./models.md) - Learn about the data structures
