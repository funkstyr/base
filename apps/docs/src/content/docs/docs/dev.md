---
title: Dev
description: Quick links and commands for dev environment.
---

## Links

- [docs](http://localhost:4321)
- [web app](http://localhost:3001)
- [web api docs](http://localhost:3000)
  - [llms.txt](http://localhost:3000/llms.txt)
- [auth api docs](http://localhost:3000/api/auth/reference)
  - [llms.txt](http://localhost:3000/auth/llms.txt)

## Commands

- `bun dev`: runs every app dev server
- `bun lint:fix`: formats and lints
  - root level only
- `bun type-check`: runs tsc in every package
- `bun build`: builds every app
- `bun up-deps`: minor update for every package
  - `bun up-deps:major` major update for every package

## Environment

1. [bun](https://bun.sh/)
2. [warp](https://www.warp.dev/)