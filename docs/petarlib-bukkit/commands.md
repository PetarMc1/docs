# Commands
PetarLib provides a few simple commands. To use any of the commands, simply type `/petarlib <command>` in the chat. Here is a list of available commands:
Command | Description
--- | ---
`/petarlib send <type> <player> <message>` | Sends a message to a player. The `<type>` can be either `chat` or `actionbar`. The `<message>` supports MiniMessage format if `use-minimessage` is enabled in the config.
`/petarlib debug` | Toggles debug mode for the plugin, which may provide additional logging and information for troubleshooting.
`/petarlib reload` | Reloads the plugin's configuration and messages from the config files.
`/petarlib version` | Displays the current version of PetarLib installed on the server.
`/petarlib help` | Displays a help message with information about available commands and their usage.
`/petarlib info` | Displays information about the plugin, including version and author.

## Required Permissions
To use the commands, players need the following permissions:
Permission | Description
--- | ---
`petarlib.send` | Required to use the `/petarlib send` command.
`petarlib.admin` | Required to use the `/petarlib debug` and `/petarlib reload` commands.