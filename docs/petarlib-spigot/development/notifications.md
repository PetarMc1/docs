---
title: Notifications
sidebar_label: Notifications
---

# Notifications API

PetarLib for Minecraft servers provides a utility class for displaying in-game notifications to the player through the action bar 
(see image below) or through chat.

![Action Bar Notification Example](/img/actionbar.png)

## Overview
You can send 2 types of notifications through the API.

- **Action Bar Notifications**:
```java
NotificationManager.showActionBarNotif("§aThis is an action bar notification!", player);
```

- **Chat Notifications**:
```java
NotificationManager.sendChatNotif("§aThis is a chat notification!", player);
```


## Color codes used by the methods
For now adding support for MiniMessage would mean giving up Spigot support. So for now the API uses Minecraft color codes 
(e.g., `§a` for green). To see the full list of Minecraft color codes, refer to the [Minecraft Color Codes](https://minecraftitemids.com/color-codes#color-codes).