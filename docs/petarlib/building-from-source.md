---
title: Building from Source
sidebar_label: Building from Source
---

# Building from Source

To build PetarLib from source, follow these steps:

1. Ensure you have Java 21+ and Git installed.
:::warning
Minecraft version `26.1-snapshot-1` (PetarLib v2.0.0+) and above require Java 25 and using java 21 wont work
:::
2. Clone the repository:
   ```bash
   git clone https://github.com/PetarMc1/PetarLib.git
   cd PetarLib
   ```
3. Build using Gradle:
   ```bash
   ./gradlew build
   # or
   gradlew.bat build
   ```
4. The built jars will be in `build/libs/`.

## Building All Versions

To build PetarLib for all supported Minecraft versions, use the `buildAllVers` task:

```bash
./gradlew buildAllVers
# or
gradlew.bat buildAllVers 
```

This will build the library for the default version and all versions defined in the `props/` directory. The output jars will be in `build/libs-versioned/`.

## Jenkins Builds

If you prefer not to build from source but you want build for the current commit you can download pre-built jars for each commit from the CI server.

1. Visit the [PetarLib Jenkins page](https://ci.petarmc.com/job/PetarLib/).
2. Download the jar files from the latest (or the build you want from) artifacts.
3. Use these jars directly in your mods folder, similar to the installation instructions.
