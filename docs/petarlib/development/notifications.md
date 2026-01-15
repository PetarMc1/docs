---
title: Notifications
sidebar_label: Notifications
---

# Notifications API

PetarLib provides a utility class for displaying in-game notifications to the player through the chat. This is useful for mods that need to inform the player about events, errors, or other information.

## Overview

The `NotificationManager` class allows you to send formatted messages to the player's chat. It supports different types of notifications (error, info) and no longer reads a global log prefix; callers must supply a prefix string (may be empty) when using the convenience methods.

:::note
This class only works on the client side.
:::

## Usage

### Showing Error Notifications

```java
NotificationManager.showError("An error occurred while processing your request.", "Prefix");
```

This will display: `[Prefix] An error occurred while processing your request.` in red color.

### Showing Info Notifications

```java
NotificationManager.showInfo("Mod loaded successfully.", "Prefix");
```

This will display: `[Prefix] Mod loaded successfully.` in white color.

### Showing Custom Messages

```java
NotificationManager.showChatMessage("§aCustom green message");
```

This allows you to send any formatted message directly to chat. 
:::caution
`showChatMessage` does not add any prefix; use the methods (`showError`/`showInfo`) when you want the library to add prefix and default coloring.
:::

## Configuration

:::note
NotificationManager no longer reads `LogConfig.globalPrefix`. Callers must provide a prefix string to the methods (the library will remove any surrounding characters and display the prefix in square brackets). If you do not want a prefix, pass an empty string `""`.

Examples:
- `NotificationManager.showInfo("Ready", "MyMod")` displays `§e[MyMod] §fReady`.
- `NotificationManager.showInfo("Ready", "")` displays `Ready` (no brackets and prefix).
:::

For more information on configuring logging, see the [Javadocs](./javadocs.md).

## Color codes used by the methods

- Prefix is shown in yellow: `§e` (displayed as `§e[Prefix]`)
- Error messages use red: `§c`
- Info messages use white: `§f`

:::tip
When using `showChatMessage` you can add color codes (e.g., `§a` for green, `§c` for red). To see the full list of Minecraft color codes, refer to the [Minecraft Color Codes](https://minecraftitemids.com/color-codes#color-codes).
:::
