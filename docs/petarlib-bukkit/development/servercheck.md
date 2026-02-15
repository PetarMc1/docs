---
title: Server Type Check
sidebar_label: Server Type Check
---
# Server Type Check
PetarLib provides a utility to check the server type (e.g., Bukkit/Paper) at runtime.

## Usage

```java
import com.petarmc.petarlib;

public class MyPlugin extends JavaPlugin {
    @Override
    public void onEnable() {
        if (CheckForPaper.isPaperServer()) {
            getLogger().info("Running on Paper!");
        } else {
            getLogger().info("Running on Spigot/Bukkit");
        }
    }
}
```