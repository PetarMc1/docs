---
title: Chat Pattern Matching
sidebar_label: Chat Pattern Matching
---

# Chat Pattern Matching API

PetarLib provides a system for matching chat messages using regex patterns or exact strings, with custom handlers.

## Overview

The chat matching system allows you to register patterns and handlers to process incoming chat messages automatically.

Key classes:

- `ChatPatternMatcher`: Main class for registering patterns and processing messages.
- `ChatMatch`: Represents a regex match with captured groups.
- `ChatMatchHandler`: Functional interface for handling regex matches.
- `ExactMatchHandler`: Functional interface for handling exact string matches.

## Usage

### Creating a Matcher

```java
import com.petarmc.lib.chat.ChatPatternMatcher;

ChatPatternMatcher matcher = new ChatPatternMatcher();
```

### Registering Patterns

```java
// Register a regex pattern
matcher.registerPattern("greeting", "hello (\\w+)", (match) -> {
    String name = match.getGroup(1);
    System.out.println("Hello to " + name);
});

// Register with flags
matcher.registerPattern("case_insensitive", "HELLO", Pattern.CASE_INSENSITIVE, handler);

// Register exact match
matcher.registerExactMatch("exact_hello", "Hello World", (message, matchId) -> {
    System.out.println("Exact match: " + message);
});
```

### Processing Messages

```java
// Process a chat message
matcher.processMessage("hello Alice");
```

### Managing Patterns

```java
// Remove a pattern
matcher.removePattern("greeting");

// Clear all
matcher.clear();
```

## Handlers

### ChatMatchHandler

```java
ChatMatchHandler handler = (match) -> {
    System.out.println("Matched: " + match.getOriginalMessage());
    System.out.println("Pattern ID: " + match.getPatternId());
    String group1 = match.getGroup(1); // Captured groups
};
```

### ExactMatchHandler

```java
ExactMatchHandler handler = (message, matchId) -> {
    System.out.println("Exact match for " + matchId + ": " + message);
};
```
