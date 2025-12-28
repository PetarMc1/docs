---
title: Features
sidebar_label: Features
---

# Features

FishTracker offers a range of features.

## Core Features

:::warning
Fish caught in mythical waters are not being tracked due to the format of the chat message. (`MYTHICAL WATERS! You caught a Moonshade Snapper!` - it doesnt specify rarity) A fix might not be available! on the mod side.
:::

### Automatic Fish Tracking
- Parses chat messages in real-time to detect fish catches.
- Supports various fish rarities.

:::warning 
New Entry Detection was fixed in version [v1.0.5](https://github.com/PetarMc1/fish-tracker-mod/releases/tag/1.0.5) of the mod! It sends the fish rarity with the name in versons v1.0.4 and below, causing new entry fish to have their rarity in the name too. So instad of `Koi` it sends `Bronze Koi`.
:::

### New Entry Detection
- Identifies when you catch a fish for the first time.
- Helps build your complete fish collection.

### Crab Detection
- Special recognition for crab catches, which have unique chat messages.

### Secure Data Sending
- Uses Fernet encryption to protect your data during sending.

## User Interface

### Configurable GUI
- In-game configuration menu accessible via keybind.
- Easy-to-use interface for setting credentials and preferences.
- Real-time validation of settings.
