---
title: Introduction
sidebar_label: Introduction
---

# PetarLib

PetarLib is a utility library mod for Minecraft Fabric, designed to provide common functionalities for mods developed by Petar_mc. It simplifies tasks such as logging, chat message processing, HTTP requests, task scheduling, and in-game notifications.

## Features

- **Logging**: Simple and performant logging system with configurable output to console and files.
- **Chat Pattern Matching**: System for registering regex patterns and exact matches for chat messages with custom handlers.
- **HTTP Client Wrapper**: Wrapper around Java's HttpClient with retry logic and asynchronous support.
- **Task Scheduling**: Scheduler for running tasks asynchronously or with delays, with built-in exception handling.
- **Notifications**: Utility for displaying in-game notifications to the player through the chat.

## Getting Started

To use PetarLib in your mod, add it as a dependency in your `build.gradle` or `fabric.mod.json`.

For more details, see the [Installation](installation.md) guide.

## API Documentation

Explore the API for each module:

- [Logging](dev/logging.md)
- [Chat Pattern Matching](dev/chat.md)
- [HTTP Client](dev/net.md)
- [Task Scheduling](dev/task.md)
- [Notifications](dev/notifications.md)

For detailed API documentation, see the [Javadocs](https://jd.petarmc.com).
