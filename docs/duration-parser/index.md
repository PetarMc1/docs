# Duration Parser

Duration Parser is a Java utility library that provides easy parsing and formatting of human-readable duration strings. It wraps Java's `Duration` class and offers convenient methods to convert between string representations and `Duration` objects.

## Features

- Parse human-friendly duration strings like "1d 2h 3m 4s" or "2 hours 30 minutes"
- Format durations in short ("1d2h3m4s"), compact ("1d 2h 3m 4s"), or long ("1 day, 2 hours and 3 minutes") formats
- Case-insensitive parsing
- Supports multiple time units: days, hours, minutes, seconds with various abbreviations
- Validates input and prevents negative durations

## Package

`com.petarmc.durationparser`

## Documentation

- [Javadocs](https://petarmc.com/javadocs/duration-parser)

## Quick Start

```java
import com.petarmc.durationparser.DurationParser;
import java.time.Duration;

// Parse a duration string
DurationParser parser = DurationParser.parse("1d 2h 30m");

// Get the underlying Duration
Duration duration = parser.duration();

// Format in different ways
String shortFormat = parser.toShortString();    // "1d2h30m"
String compactFormat = parser.toCompactString(); // "1d 2h 30m"
String longFormat = parser.toLongString();       // "1 day, 2 hours and 30 minutes"
```