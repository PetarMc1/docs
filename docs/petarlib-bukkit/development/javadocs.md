---
title: Javadocs
sidebar_label: Javadocs
---

# Javadocs

Javadocs are the official API documentation for PetarLib, generated from the source code comments.

## Online Javadocs

The latest Javadocs are available at: [https://jd.petarmc.com/petarlib-bukkit](https://jd.petarmc.com/petarlib-bukkit)
## Generating Javadocs Locally

If you want to generate the Javadocs locally from the source code:

1. Follow the steps in [Building from Source](../building-from-source) to clone and set up the project.
2. Run the javadoc task:
   ```bash
   ./gradlew javadoc
   ```
3. The generated documentation will be in the `build/docs` directory.
4. Open `javadoc/index.html` in your web browser to view the documentation.