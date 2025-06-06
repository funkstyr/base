---
title: June
description: Getting hosted.
---

## Goals

- [ ] Get applications hosted and available via url.
- [x] Have auth with signup/login with guarded pages.
- [ ] Start creating examples for creating/joining a chat room.
- [ ] Get CI publishing docker containers.

---

## Accomplishments / Tasks Completed

- **Auth:**
  - [x] Added `beforeLoad` util to protect routes
    - There is a non redirect way if that feels better: [docs](https://tanstack.com/router/latest/docs/framework/react/guide/authenticated-routes#non-redirected-authentication)
- **Documentation:**
  - [x] Added open api docs for api
    - Auth api docs too
    - Scalar UI + llms.txt/openapi.json

---

## Next Plans

- Look into k8s infra + deploy via actions.
- Figure out simple game room mechanics
  - tic-tac-toe
  - war/egyptian rat
- Build example using atproto

---

## Overall Mood/Notes

- Arktype is fine, but most things output a schema for zod only
  - a lot more tools reference zod
  - may try and convert to zod v4 soon
- ~~Need to figure out why any new ui pkg doesn't import to web app~~
  - `@base/posthog` causes vite import error
    - needed to export as `*.tsx` not `*.ts`

---
