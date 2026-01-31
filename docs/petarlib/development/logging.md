---
title: Logging
sidebar_label: Logging
---

# Logging API

PetarLib provides a simple and performant logging system designed for Minecraft mods.

## Overview

The logging system consists of:

- `PLogger` interface: Defines the logging methods.
- `PLog` class: Implementation that logs to console and optionally to a file.
- `LogConfig` class: Static configuration for global logging settings.
- `LogLevel` enum: Defines log levels (DEBUG, INFO, WARN, ERROR, OFF).

## Usage

### Creating a Logger

```java
import com.petarmc.petarlib.log.PLog;
import com.petarmc.petarlib.log.PLogger;

PLogger logger = new PLog("MyMod");
```

### Logging Messages

```java
logger.debug("This is a debug message");
logger.info("This is an info message");
logger.warn("This is a warning");
logger.error("This is an error");
logger.error("Error with exception", exception);
```

### Configuration
:::note
`LogConfig.globalPrefix` has been removed in `v1.3.1`. It now uses prefixes per logger instead.
:::
Configure logging globally via `LogConfig`:

```java
import com.petarmc.petarlib.log.LogConfig;
import com.petarmc.petarlib.log.LogLevel;

LogConfig.globalLevel = LogLevel.DEBUG;
LogConfig.logToFile = true;
LogConfig.logFilePath = "mymod.log";
LogConfig.includeTimestamp = true;
LogConfig.includeThread = false;
```

## Message Format
The log message format is:
```
[LogLevel] [LoggerPrefix] [Thread] message
```
where `[Thread]` is included if `includeThread` is true and `LoggerPrefix` is provided when constructing the logger.

:::caution
For versions below `v1.3.0` the config message format used a global prefix and a diffrent order:
```
[GlobalPrefix] [LogLevel] [Thread] [PloggerName] message
```
:::

## Log Levels

- **DEBUG**: Detailed information for developers.
- **INFO**: General information.
- **WARN**: Potential issues.
- **ERROR**: Failures or critical issues.
- **OFF**: Suppress all logging.

Messages below the `globalLevel` are ignored.
