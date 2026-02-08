---
title: HTTP Client
sidebar_label: HTTP Client
---

# HTTP Client API

:::warning
This API is copied from PetarLib for Fabric and may not be fully functional in the Spigot version. The only changes were made are
related to logging.
:::

PetarLib provides a wrapper around Java's HttpClient for simplified asynchronous HTTP requests with retry logic.

## Overview

`HttpClientWrapper` handles GET and POST requests asynchronously, with automatic retries on failure.

## Usage

### Creating a Client

```java
import com.petarmc.petarlib.net.HttpClientWrapper;

HttpClientWrapper client = new HttpClientWrapper(3); // max 3 retries
```

### GET Request

```java
CompletableFuture<String> future = client.get("https://api.example.com/data");
future.thenAccept(body -> {
    System.out.println("Response: " + body);
}).exceptionally(throwable -> {
    System.err.println("Request failed: " + throwable.getMessage());
    return null;
});
```

### POST Request

```java
import java.net.http.HttpRequest;
import java.net.URI;

HttpRequest postRequest = HttpRequest.newBuilder()
    .uri(URI.create("https://api.example.com/post"))
    .POST(HttpRequest.BodyPublishers.ofString("{\"key\":\"value\"}"))
    .header("Content-Type", "application/json")
    .build();

CompletableFuture<String> future = client.post(postRequest);
// Handle response as above
```

### Shutdown

```java
client.shutdown(); // Call when done to free resources
```

## Features

- Asynchronous requests using `CompletableFuture`.
- Automatic retries on failure (configurable max retries).
- Logging of requests and errors.
- Timeout settings (10s connect, 20s request).
