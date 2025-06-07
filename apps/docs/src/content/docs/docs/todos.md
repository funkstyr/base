---
title: Todos
description: List of outstanding tasks
---

## Phase 1 - Foundation

1. hosting
   1. get vercel deployment working with api calls\
      1. is it just a CORS issue?
   2. currently just serves static assets
   3. look into k8s since docker container is working locally
2. account
   1. update password
   2. saving notification setting
      1. add to schema
   3. delete account
      1. soft delete; add bool to schema
      2. add check on login
   4. add organization management
      1. add team management?
         1. make dynamic by org field/role?
3. auth
   1. hook up discord
   2. hide apple/microsft buttons for now
   3. figure out how to disable email sign up and use only social buttons
      1. does this involve using invites(better-auth)?
      2. disable email for login, and validate to only gmail accounts for signup?
   4. super stretch: emails
      1. verification
      2. reset password
4. rooms
   1. add schema for rooms + messages
   2. page that can create new room
      1. list available rooms to join too
   3. create route for room by id (`/room/:id`)
      1. both orpc + web app
      2. right side panel that will display the list of messages
      3. input + button to add new message
      4. react/reply to message?
   4. spike: better-auth anonymous plugin
5. look into using `tanstack/start`
   1. this would allow no env variables at build time
   2. create global fetcher to inject env variables into window/hydrate on load
6. something else
7. swap `arktype` to `zod@^4`
   1. on hold, still using arktype
   2. some libraries are nice and export zod schemas
   

