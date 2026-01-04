---
title: Building from Source
sidebar_label: Building from Source
---

# Building from Source

If you want to contribute to FishTracker or build a custom version, follow these steps to compile the mod from source.

## Prerequisites

- Java Development Kit (JDK) 21 or higher
- Git
- Gradle (included via wrapper)

## Clone the Repository

```bash
git clone https://github.com/PetarMc1/fish-tracker-mod.git
cd fish-tracker-mod
```

## Build the Project

Use the included Gradle wrapper to build:
```bash
./gradlew build
```

## Building All Versions

To build FishTracker for all supported Minecraft versions, use the `buildAllVersions` command:

```bash
./gradlew buildAllVersions
# or
gradlew.bat buildAllVersions
```

This task builds the mod for the default Minecraft version and all versions defined in the `props/` directory. The output jars will be placed in `build/libs/` with names like `FishTracker-mc{version}-v{modVersion}.jar`.

## Output

The built jar file will be located in `build/libs/`:
- `FishTracker-<version>.jar` - The main mod JAR

## Running in Development

If you are using IntelliJ IDEA, when you initialize the project there will be an option to run the mod in a Minecraft client for testing.

## Jenkins Builds

If you prefer not to build from source but you need latest commit builds you can download pre-built jars from the Jenkins server.

1. Visit the [Fish Tracker Mod Jenkins page](https://ci.petarmc.com/job/Fish%20Tracker%20Mod/).
2. Download the jar files from the latest artifacts.
3. Use these jars directly in your mods folder, similar to the installation instructions.