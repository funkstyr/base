---
title: June
description: Getting hosted.
---

## Goals

- [ ] Get applications hosted and available via url.
  - [x] Available at [base.gratis](https://base.gratis)
  - [ ] Need to get api working in Vercel like Docker container
- [x] Have auth with signup/login with guarded pages.
- [ ] Start creating examples for creating/joining a chat room.
- [x] Get CI publishing docker containers.
  - [ ] Get UI unit tests working and test auth form

---

## Accomplishments / Tasks Completed

- **Auth:**
  - [x] Added `beforeLoad` util to protect routes
    - There is a non redirect way if that feels better: [docs](https://tanstack.com/router/latest/docs/framework/react/guide/authenticated-routes#non-redirected-authentication)
- **Documentation:**
  - [x] Added open api docs for api
    - Auth api docs too
    - Scalar UI + llms.txt/openapi.json
- **Hosting:**
  - Setup supabase and using for dev db
    - need to get api working on vercel and working for prod instance
  - Setup vercel
    - loading SPA static assets fine
    - haven't figured out the api routes yet
    - the Dockerfile runs both, need to setup auth to work this way
      - need to setup dev proxy when separate dev servers
    - enabled analytics and speed insights
  - Posthog
    - easy to setup and throw a provider around the app
      - was able to enable filtering out localhost traffic

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
- Having to deal with env variables at build time is kind of annoying
  - will probably add `tanstack/start` and SSR in the dynamic env vars

---
