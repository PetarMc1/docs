---
title: Configuration
sidebar_label: Configuration
---

# Configuration

FishTracker requires configuration to connect to the API and track your fish catches. All settings are managed through an in-game GUI.

## Accessing the Configuration GUI

1. Launch Minecraft with the mod installed.
2. Join the CosmosMc server.
3. Press the default keybind **K** to open the configuration menu.
   - You can change this keybind in the Minecraft controls settings under "FishTracker Config".

## Required Settings

These settings are mandatory for the mod to function:

- **Username**: Enter your username.
- **Password**: Your account password for API authentication.
- **API Key**: To obtain an API key check the [Request Access](../getting-started.md#request-access) page.
- **Endpoint URL**: The API endpoint URL (default: `https://api.tracker.petarmc.com`).

:::caution
Keep your password and API key secure.
:::

## Optional Settings

- **Debug Mode**: Enable this to log detailed information for troubleshooting. Useful if you're experiencing issues.

## Saving Configuration

- Changes are saved automatically when you close the GUI.
- Configuration is stored in `fishtracker.properties` in your Minecraft directory (e.g., `.minecraft/config/fishtracker.properties`).

## Resetting Configuration

If you need to reset settings:

1. Close Minecraft.
2. Delete the `fishtracker.properties` file.
3. Relaunch Minecraft and reconfigure.
