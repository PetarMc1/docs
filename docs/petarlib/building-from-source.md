---
title: Building from Source
sidebar_label: Building from Source
---

# Building from Source

To build PetarLib from source, follow these steps:

1. Ensure you have Java 17+ and Git installed.
2. Clone the repository:
   ```bash
   git clone https://github.com/Petar_mc/PetarLib.git
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
