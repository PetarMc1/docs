---
title: Build
sidebar_label: Build
---

## Build Executable (Optional)

If you want you can package the program into your Windows standalone `.exe` although its better to use the [stable version](https://github.com/PetarMc1/fish-tracker/releases).

```bash
pyinstaller --onefile --windowed --noconsole fish_logger.py
```