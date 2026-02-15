# Config
PetarLib provides a simple configuration file that allows you to easily manage plugin settings. The configuration is stored in a YAML file and can be accessed in `/plugins/PetarLib/config.yml`. The configuration file is automatically generated with default values when the plugin is first run.

## Configuration Options
The configuration file contains the following options:

Option | Description
--- | ---
`debug` | Whether to enable debug mode for the plugin, which may provide additional logging and information for troubleshooting.
`defaultMaxRetries` | Default maximum number of retries for failed operations for the HTTP client. It can be overridden on a per-request basis.
`use-minimessage` | Whether to use MiniMessage format for messages sent using the `/petarlib send <type> <player> <message>`, and for messages in messages.yml. Enabling this will disable legacy color codes (e.g., &c) in favor of MiniMessage tags.

### Debug Mode
Enabling debug mode will provide additional logging in the console, which can be helpful for troubleshooting issues with the plugin. You can also toggle debug mode using the `/petarlib debug` command.

### messages.yml
The `messages.yml` file allows you to customize the messages used by PetarLib. It includes a few placeholders that you can use in your messages:
Placeholder | Description
--- | ---
`{version}` | The current version of PetarLib.
`{author}` | The author of PetarLib (Petar_mc).

*more comming soon...*

## Default Configurations

```yaml title="config.yml"
##########################################################################################################
#
#
#                                 ____      _             _     _ _
#                                |  _ \ ___| |_ __ _ _ __| |   (_) |__
#                                | |_) / _ \ __/ _` | '__| |   | | '_ \
#                                |  __/  __/ || (_| | |  | |___| | |_) |
#                                |_|   \___|\__\__,_|_|  |_____|_|_.__/
#
#
# Website: https://petarmc.com
# GitHub: https://github.com/PetarMc1/PetarLib-Bukkit
# License: MIT
# Made with ❤️ by Petar_mc
##########################################################################################################
config_version: 1

debug: false # Whether to enable debug mode for the plugin, which may provide additional logging and information for troubleshooting.

# If you added this plugin as a dependency of another plugin, you dont have to chnage these settings.
# However, if you are using things like the /petarlib send command you might need to check these settings.
defaultMaxRetries: 3 # Default maximum number of retries for failed operations for the HTTP client.
use-minimessage: true # Whether to use MiniMessage format for messages sent using the /petarlib send <player> <message> and for messages in messages.yml.
# Warrning: Enabling this will disable legacy color codes (e.g., &c) in favor of MiniMessage tags (e.g., <red>).
```
```yaml title="messages.yml"
# All messages use the MiniMessage format. Currently no legacy color codes are supported.
# There are some placeholders available for messages:
# {version} - The current version of PetarLib.
# {author} - The author of PetarLib (Petar_mc).

usage-send: "<yellow>Usage: /petarlib send <type> <player> <message>"
info-version: "<green>PetarLib version v{version}"
reload: "<green>PetarLib configuration reloaded."
debug-enabled: "<green>Debug mode set to <green>true"
debug-disabled: "<green>Debug mode set to <red>false"
no-permission: "<red>You don't have permission to use this command."
player-not-found: "<red>Player not found."
invalid-type: "<red>Invalid type. Use 'actionbar' or 'chat'."
unknown-subcommand: "<red>Unknown subcommand. Use /petarlib help"
```