---
title: Dev Environment
description: Quick links and commands for local environment.
---

## Links

- [docs](http://localhost:4321)
- [web app](http://localhost:3001)
- [web api docs](http://localhost:3000/rpc/docs)
  - [llms.txt](http://localhost:3000/rpc/llms.txt)
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

## Setup

1. [Get](https://aistudio.google.com/app/u/1/apikey) gemini api key and paste in `apps/server/.env`

> Clone and install deps

```bash
git clone https://github.com/funkstyr/base.git
cd base
bun i
```

> Postgres

```bash
cd tools/postgres && bun _dev
cd packages/db && bun db:push
```

## Tech

1. [bun](https://bun.sh/)
2. [code](https://code.visualstudio.com/)
3. [warp](https://www.warp.dev/)
