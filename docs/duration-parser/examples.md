# Examples

## Basic Parsing and Formatting

```java
import com.petarmc.durationparser.DurationParser;
import java.time.Duration;

public class Example {
    public static void main(String[] args) {
        // Parse different formats
        DurationParser parser1 = DurationParser.parse("1d 2h 30m");
        DurationParser parser2 = DurationParser.parse("90 minutes");
        DurationParser parser3 = DurationParser.parse("45s");

        // Access the Duration
        Duration d1 = parser1.duration();
        System.out.println("Duration: " + d1); // PT26H30M

        // Format in different ways
        System.out.println("Short: " + parser1.toShortString());     // "1d2h30m"
        System.out.println("Compact: " + parser1.toCompactString()); // "1d 2h 30m"
        System.out.println("Long: " + parser1.toLongString());       // "1 day, 2 hours and 30 minutes"
    }
}
```

## Converting Between Formats

```java
DurationParser parser = DurationParser.parse("2 hours 30 minutes");

// All formats
System.out.println(parser.toShortString());     // "2h30m"
System.out.println(parser.toCompactString());   // "2h 30m"
System.out.println(parser.toLongString());      // "2 hours and 30 minutes"
```

## Working with Duration Objects

```java
// Create from Duration
Duration duration = Duration.ofHours(5).plusMinutes(45);
DurationParser parser = new DurationParser(duration);

System.out.println(parser.toLongString()); // "5 hours and 45 minutes"

// Parse and manipulate
DurationParser parsed = DurationParser.parse("1h 30m");
Duration modified = parsed.duration().plusMinutes(15);
DurationParser newParser = new DurationParser(modified);

System.out.println(newParser.toCompactString()); // "1h 45m"
```

## Error Handling

```java
try {
    DurationParser invalid = DurationParser.parse("invalid input");
} catch (IllegalArgumentException e) {
    System.out.println("Error: " + e.getMessage());
}

try {
    DurationParser negative = DurationParser.parse("-1h");
} catch (IllegalArgumentException e) {
    System.out.println("Error: " + e.getMessage());
}
```

## Real-world Usage

```java
// Configuration parsing
String timeoutConfig = "30m";
DurationParser timeout = DurationParser.parse(timeoutConfig);
Duration timeoutDuration = timeout.duration();

// Logging
System.out.println("Operation timed out after " + timeout.toLongString());

// Cache expiration
String cacheTtl = "1h";
DurationParser cacheParser = DurationParser.parse(cacheTtl);
long ttlSeconds = cacheParser.duration().getSeconds();
```