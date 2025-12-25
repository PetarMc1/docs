---
title: Introduction
sidebar_label: Introduction
---

# Fish Tracker

Fish Tracker is a comprehensive system designed to track and manage fish and crab catches in various Minecraft gamemodes on the CosmosMC server. The system consists of three main components: the Backend API, the Desktop App, and the Frontend Web Application.

## Overview

Fish Tracker provides real-time monitoring, data visualization, and administrative controls for Minecraft fishing activities. It supports multiple gamemodes including OneBlock, Earth, Survival, and Factions, with a sophisticated rarity system for fish categorization.

## Components

### Backend API

The backend serves as the core data management system, built with Node.js, Express, and MongoDB. It provides RESTful endpoints for:

- User authentication and management
- Fish and crab data storage and retrieval
- Administrative controls and analytics
- Rate limiting and security features

[Learn more about the Backend](./backend/introduction.md)

### Frontend Web App

A modern web application built with Next.js and TypeScript, providing an intuitive interface for:

- User authentication and profile management
- Viewing detailed fishing statistics and visualizations
- Administrative dashboard for data management
- Demo mode for testing without registration

[Learn more about the Frontend](./frontend/introduction.md)

### Desktop App

:::warning Deprecation Notice
This application is deprecated and no longer compatible with recent API changes. Please use the [Fish Tracker Mod](./mod/index.md) instead.
:::
A desktop application that monitors Minecraft Lunar Client logs in real-time, detecting fish and crab catches and securely transmitting encrypted data to the backend API.


[Learn more about the App](./app/intro.md)

## Key Features

- **Multi-Gamemode Support**: Compatible with OneBlock, Earth, Survival, and Factions
- **Rarity System**: Fish categorized by Bronze, Silver, Gold, Diamond, Platinum, and Mythical rarities
- **Real-time Tracking**: Live monitoring of catches through log analysis
- **Secure Data Transmission**: Encrypted communication between components
- **Comprehensive Analytics**: Detailed statistics and visualization tools
- **Admin Panel**: Full administrative controls for system management
