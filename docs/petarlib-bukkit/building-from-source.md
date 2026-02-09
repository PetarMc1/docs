---
title: Building from Source
sidebar_label: Building from Source
---

# Building from Source

To build PetarLib from source, follow these steps:

1. Ensure you have Java 21+ and Git installed.
2. Clone the repository:
   ```bash
   git clone https://github.com/PetarMc1/PetarLib-Bukkit.git
   cd PetarLib
   ```
3. Build using Gradle:
   ```bash
   ./gradlew build
   ```
4. The built plugin will be in `build/libs/`.

## Jenkins Builds

If you prefer not to build from source but you want build for the current commit you can download pre-built jars for each commit from the CI server.

1. Visit the [PetarLib Jenkins page](https://ci.petarmc.com/job/PetarLib%20Bukkit/).
2. Download the jar files from the latest (or the build you want from) artifacts.
3. Use these jars directly in your mods folder, similar to the installation instructions.
