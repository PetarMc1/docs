---
title: Notifications
sidebar_label: Notifications
---

# Notifications API

PetarLib provides a utility class for displaying in-game notifications to the player through the chat. This is useful for mods that need to inform the player about events, errors, or other information.

## Overview

The `NotificationManager` class allows you to send formatted messages to the player's chat. It supports different types of notifications (error, info) and automatically prefixes messages using the global log prefix from [`LogConfig`](./logging).

:::note
This class only works on the client side.
:::

## Usage

### Showing Error Notifications

```java
NotificationManager.showError("An error occurred while processing your request.");
```

This will display: `[Prefix] An error occurred while processing your request.` in red color.

### Showing Info Notifications

```java
NotificationManager.showInfo("Mod loaded successfully.");
```

This will display: `[Prefix] Mod loaded successfully.` in white color.

### Showing Custom Messages

```java
NotificationManager.showChatMessage("§aCustom green message");
```

This allows you to send any formatted message directly to chat.

## Configuration

The notification prefix is automatically taken from [`LogConfig.globalPrefix`](https://jd.petarmc.com/petarlib/1.2.2/com/petarmc/lib/log/LogConfig#globalPrefix). If no prefix is set, the brackets are omitted.

Example:
- If [`LogConfig.globalPrefix`](https://jd.petarmc.com/petarlib/1.2.2/com/petarmc/lib/log/LogConfig#globalPrefix) is `"[MyMod]"`, notifications will be prefixed with `[MyMod]`.
- If no prefix is set, notifications appear without brackets.


### `showError(String message)`

Displays an error notification in red text.

**Parameters:**
- `message`: The error message to display

### `showInfo(String message)`

Displays an info notification in white text.

**Parameters:**
- `message`: The info message to displays

### `showChatMessage(String message)`

Displays a custom message in chat. Supports Minecraft formatting codes.

**Parameters:**
- `message`: The message to display (can include formatting codes like §a, §c, etc.)
