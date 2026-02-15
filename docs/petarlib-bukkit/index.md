---
title: Introduction
sidebar_label: Introduction
---

# PetarLib but for Bukkit
PetarLib is a utility library plugin. It provides common functionalities/listeners for plugins developed by Petar_mc.

## Features
- In-game notifications through chat/action bar (see [Notifications](development/notifications.md))
- HTTP Client Wrapper: Wrapper around Java's HttpClient with retry logic and asynchronous support.
- Task Scheduling: Scheduler for running tasks asynchronously or with delays, with built-in exception handling.
- More features comming soon!


## Getting Started
:::warning
PetarLib-Bukkit is still in development, and the API may change without deprecation. Use with caution and keep an eye on the changelog for updates.
:::

To use PetarLib in your plugin project, add it as a dependency in your `plugin.yml` and include the JAR in your build path. For more details, see the [Developers](development/setup.mdx) guide.

For server owners, check [installation](installation.md) for instructions on how to install the plugin on your server.

:::note
Currently im not planning to publish the plugin to Modrinth or other platforms.
:::

## API Documentation
Explore the API for each module:
- [Notifications](development/notifications.md)
- [HTTP Client](development/net.md)
- [Task Scheduling](development/task.md)
- [Cooldowns](development/cooldowns.md)
For detailed API documentation, see the [Javadocs](development/javadocs.md).