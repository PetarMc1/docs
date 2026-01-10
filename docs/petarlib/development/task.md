---
title: Task Scheduling
sidebar_label: Task Scheduling
---

# Task Scheduling API

PetarLib provides a task scheduler for running asynchronous tasks or delayed tasks with built-in exception handling and logging.

## Overview

`TaskScheduler` uses a thread pool to execute tasks asynchronously, catching and logging any exceptions thrown by tasks.

## Usage

### Creating a Scheduler

```java
import com.petarmc.lib.task.TaskScheduler;

TaskScheduler scheduler = new TaskScheduler(4); // 4 threads
```

### Running Tasks Asynchronously

```java
scheduler.runAsync(() -> {
    // Your async task here
    System.out.println("Running in background");
});
```

### Running Delayed Tasks

```java
scheduler.runDelayed(() -> {
    System.out.println("This runs after 1000ms");
}, 1000); // delay in milliseconds
```

### Shutdown

```java
scheduler.shutdown(); // Graceful shutdown with timeout
```

## Features

- Asynchronous execution using a thread pool.
- Delayed execution with millisecond precision.
- Automatic exception catching and logging.
- Graceful shutdown with timeout.
