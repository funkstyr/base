---
title: Hosting
description: Walkthrough on how we got hosted.
---

## Phase 1

> Simple, easy third parties

- [Vercel](https://vercel.com/)
  - hosting app/server
- [Supabase](https://supabase.com/)
  - hosting postgres db
  - other realtime features
- [Posthog](https://posthog.com/)
  - user analytics + product suite

Will probably create a way to combine the web SPA and the hono backed where it serves the assets and api.

<br/>

### Vercel

1. Create project
   1. connect to github project
   2. change root directory > `apps/web`
      1. Add env variable for `VITE_SERVER_URL`
         1. Probably can do later, will need to know what url structure for the project

### Supabase

1. Create org
   1. Create project
      1. integrations: github, vercel
         1. github
            1. update supbase directory > `packages/supabase`
2. Create new supabase pkg
   1. use supabase pkg to generate client
   2. get db url and `db:push`
   3. use cli to generate db types


### Posthog


<br/>

## Phase 2

> code as infra, k8s, aws/gc

Not sure when or if we will get this far
