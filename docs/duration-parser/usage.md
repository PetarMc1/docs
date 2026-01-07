# Usage

## Parsing Durations

Use the static `parse` method to create a `DurationParser` from a string:

```java
DurationParser parser = DurationParser.parse("1d 2h 30m 45s");
```

### Supported Formats

- **Units**: `d`, `day`, `days`, `h`, `hr`, `hrs`, `hour`, `hours`, `m`, `min`, `mins`, `minute`, `minutes`, `s`, `sec`, `secs`, `second`, `seconds`
- **Case-insensitive**: `"1D 2H"` works the same as `"1d 2h"`
- **Whitespace**: Tokens can be separated by any whitespace
- **Examples**:
  - `"1d 2h 3m 4s"`
  - `"2 hours 30 minutes"`
  - `"45s"`
  - `"90 minutes"`

### Validation

- Input must not be null or blank
- Only valid tokens and whitespace allowed
- Negative values are not permitted
- Resulting duration must not exceed `Duration` limits

## Accessing the Duration

Get the underlying `Duration` object:

```java
Duration duration = parser.duration();
```

## Formatting Durations

### Short Format

Compact representation without spaces:

```java
String shortFormat = parser.toShortString(); // "1d2h30m45s"
```

### Compact Format

Readable with spaces between units:

```java
String compactFormat = parser.toCompactString(); // "1d 2h 30m 45s"
```

### Long Format

Human-readable with full words and proper grammar:

```java
String longFormat = parser.toLongString(); // "1 day, 2 hours, 30 minutes and 45 seconds"
```

## API Reference

For complete API documentation, including all methods, parameters, and exceptions, see the [Javadocs](https://petarmc.com/javadocs/duration-parser).