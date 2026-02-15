---
title: Cooldowns
sidebar_label: Cooldowns
---

# Cooldowns API

- `CooldownManager` stores expiration timestamps keyed by `UUID -> cooldownId`.
- `CooldownStartEvent` fires before a cooldown is stored; it is cancellable.
- `CooldownEndEvent` fires when a cooldown expires and gets removed.

## Quick start (Java)

Keep one `CooldownManager` instance in your plugin:

```java
public class MyPlugin extends JavaPlugin {
    public final CooldownManager cooldowns = new CooldownManager();

    @Override
    public void onEnable() {
        // Register listeners if you want start/end events
        getServer().getPluginManager().registerEvents(new MyCooldownListener(), this);
    }

    public CooldownManager cooldowns() {
        return cooldowns;
    }
}
```

Command example with a 5s lockout:

```java
public boolean onCommand(CommandSender sender, Command cmd, String label, String[] args) {
    if (!(sender instanceof Player player)) return true;
    String id = "command.example";

    if (cooldowns.isOnCooldown(player, id)) {
        long remaining = cooldowns.getRemaining(player, id);
        player.sendMessage("Wait " + CooldownManager.formatRemaining(remaining) + " before reusing.");
        return true;
    }

    // Do work here
    runAbility(player);

    // Apply 5 seconds (5000 ms)
    cooldowns.setCooldown(player, id, 5000L);
    return true;
}
```

## Events

`CooldownStartEvent`

- Fired when `setCooldown(...)` is called (after computing `endTimestamp`).
- Cancellable: call `event.setCancelled(true)` to block applying the cooldown.

`CooldownEndEvent`

- Called when an expiration is detected and the entry is removed.
- Triggers on first read after expiry via `getRemaining(...)` or when you manually invoke `checkAndTriggerEnd(...)`.


Listener example:

```java
public class MyCooldownListener implements Listener {
    @EventHandler
    public void onCooldownStart(CooldownStartEvent event) {
        if (event.getCooldownId().equals("command.example") && event.getDurationMillis() > 20_000) {
            event.setCancelled(true); // cap long cooldowns
        }
    }

    @EventHandler
    public void onCooldownEnd(CooldownEndEvent event) {
        UUID playerId = event.getPlayerId();
        // Notify or log
    }
}
```

## API reference (CooldownManager)
For more info check the [Javadocs](javadocs.md).
