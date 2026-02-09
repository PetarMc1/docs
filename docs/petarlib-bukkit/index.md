---
title: Introduction
sidebar_label: Introduction
---

# PetarLib but for Bukkit
:::caution
Bukkit doesnt have the option to send messages
in the action bar without using NMS (`net.minecraft.server`). Instad PetarLib uses the spigot message sender
(`p.spigot().sendMessage(ChatMessageType.ACTION_BAR, new TextComponent(msg));`)
This means that the action bar notifications may not work on CraftBukkit servers!
:::
PetarLib is a utility library plugin. It provides common functionalities/listeners for plugins developed by Petar_mc.

## Features
- In-game notifications through chat/action bar (see [Notifications](development/notifications.mdx))
- HTTP Client Wrapper: Wrapper around Java's HttpClient with retry logic and asynchronous support.
- Task Scheduling: Scheduler for running tasks asynchronously or with delays, with built-in exception handling.
- More features comming soon!


## Getting Started
:::warning
PetarLib-Bukkit is still in development, and the API may change without deprecation. Use with caution and keep an eye on the changelog for updates.
:::

To use PetarLib in your plugin project, add it as a dependency in your `plugin.yml` and include the JAR in your build path. For more details, see the [Developers](development/setup.md) guide.

For server owners, simply download the latest release from the [Github Releases](https://github.com/PetarMc1/PetarLib-Bukkit/releases)
and place the JAR file in your server's `plugins` directory.

:::note
Currently im not planning to publish the plugin to Modrinth or other platforms 
:::

## API Documentation
Explore the API for each module:
- [Notifications](development/notifications.mdx)
- [HTTP Client](development/net.mdx)
- [Task Scheduling](development/task.md)
For detailed API documentation, see the [Javadocs](./javadocs.md).