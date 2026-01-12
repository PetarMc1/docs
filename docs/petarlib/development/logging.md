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
import com.petarmc.lib.log.PLog;
import com.petarmc.lib.log.PLogger;

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

Configure logging globally via `LogConfig`:

```java
import com.petarmc.lib.log.LogConfig;
import com.petarmc.lib.log.LogLevel;

LogConfig.globalLevel = LogLevel.DEBUG;
LogConfig.logToFile = true;
LogConfig.logFilePath = "mymod.log";
LogConfig.globalPrefix = "[MyMod]";
LogConfig.includeTimestamp = true;
LogConfig.includeThread = false;
```

## Message Format
The log message format is:
```
[LogLevel] [GlobalPrefix] [Thread] message
```
where `[Thread]` is included if `includeThread` is true.
 
:::caution
For versions below `v1.3.0` the config message is 
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
