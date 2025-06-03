---
title: Dev Environment
description: Quick links and commands for local environment.
---

## Tech

1. [bun](https://bun.sh/)
2. [code](https://code.visualstudio.com/)
3. [warp](https://www.warp.dev/)

#### Clone

```bash
git clone https://github.com/funkstyr/base.git
cd base
```

#### Install and Run

```bash
bun i
bun dev
```

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
