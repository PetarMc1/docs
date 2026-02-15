# Installation

## Downlading
To install PetarLib for Bukkit, simply download the latest release from the the [Github Releases](https://github.com/PetarMc1/PetarLib-Bukkit/releases).

If you are running a craftbukkit/spigot server downlaod the `-bukkit` version (for example: `PetarLib-0.4.0-bukkit.jar`), if you are running a paper server download the normal version. Its reccomended to use Paper as it has Adventure API built in.

## Installation
After downloading the JAR file, place it in your server's `plugins` directory. Then, restart your server to load the plugin. You should see a message like this in the console:
```log
[14:33:12 INFO]: -----------------------------------------------------------
[14:33:12 INFO]:  ____      _             _     _ _
[14:33:12 INFO]: |  _ \ ___| |_ __ _ _ __| |   (_) |__
[14:33:12 INFO]: | |_) / _ \ __/ _` | '__| |   | | '_ \
[14:33:12 INFO]: |  __/  __/ || (_| | |  | |___| | |_) |
[14:33:12 INFO]: |_|   \___|\__\__,_|_|  |_____|_|_.__/
[14:33:12 INFO]:
[14:33:12 INFO]:
[14:33:12 INFO]: - Running version v0.4.0-SNAPSHOT for Paper.
[14:33:12 INFO]: - PlaceHolderAPI detected, registering expansions...
[14:33:12 INFO]: -----------------------------------------------------------
```

## Updating
To update PetarLib, simply download the latest release and replace the old JAR file in your `plugins` directory with the new one. Then, restart your server to apply the update. Always check the changelog for any breaking changes or new features before updating to ensure compatibility with your existing plugins.

## Dependencies
PetarLib has a PlaceHolderAPI expansion that provides a few placeholders for use in other plugins. If PlaceHolderAPI is detected, the expansion will be registered automatically. To see the placeholders check [Placeholders](placeholders.md) documentation.