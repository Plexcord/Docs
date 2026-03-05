# Plexcord Documentation

Official documentation site for [Plexcord](https://plexcord.club) an open-source Discord client modification built for extensibility and developed by MutanPlex.

## About

This repository contains the source code for the Plexcord plugin development documentation, hosted at [docs.plexcord.club](https://docs.plexcord.club).

The documentation covers everything a developer needs to build Plexcord plugins:

- **Getting Started** — Environment setup, project structure, and a quick-start guide to writing your first plugin
- **Core Concepts** — Plugin lifecycle, metadata, settings, debugging, and platform-specific considerations
- **Advanced Features** — Patches, context menus, commands, Flux events, message decorations, and button UI
- **API Reference** — Core APIs, data storage, i18n, notifications, utilities, and webpack integration
- **Best Practices** — Code quality, performance, and security guidelines
- **Examples** — Real-world plugin examples including keyword alerts, message formatters, voice loggers, and more

## Development

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

Build for production:

```bash
pnpm build
```

## License

This project is licensed under the **GNU Lesser General Public License v2.1 (LGPL-2.1)**.  
See the [LICENSE](LICENSE) file for details, or refer to the `"license"` field in [package.json](package.json).

Copyright (c) 2026 Plexcord / MutanPlex.
