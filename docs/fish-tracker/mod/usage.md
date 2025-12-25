---
title: Usage
sidebar_label: Usage
---

# Usage

Once FishTracker is installed and configured, it operates automatically. Here's how to use it effectively.

## Getting Started

1. Ensure the mod is configured with your credentials (see [Configuration](./configuration.md)).
2. Join the CosmosMc server.
3. Start fishing as usual.

## How It Works

FishTracker monitors chat messages for fish catch notifications. When you catch a fish, the mod:

- Parses the message to identify the fish type and rarity.
- Encrypts the data using Fernet encryption.
- Sends the data to the configured API endpoint.

## Supported Fish Types

See the [fish rarity mappings](../rarity-mappings).

## Viewing Your Data

The Fish Tracker mod itself doesn't provide in-game statistics viewing. Your catch data is sent to the remote API and it can be viewed on the tracker [site](https://tracker.petarmc.com).

## Debug Mode

If enabled in configuration, debug information is logged to the console. This can help troubleshoot issues.

To view logs check the Minecraft game output console.

## Troubleshooting

- **Data not sending**: Check your [API credentials](./configuration.md#required-settings).
- **Mod not detecting catches**: Ensure you're on CosmosMc and chat messages are visible.
- **Errors in logs**: Enable debug mode and share logs with the developer or open an [issue](https://github.com/PetarMc1/fish-tracker-mod/issues).
