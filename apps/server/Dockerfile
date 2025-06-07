ARG SERVER_URL=http://localhost:3000
ARG POSTHOG_KEY=phc_
ARG POSTHOG_HOST=https://us.i.posthog.com


FROM oven/bun:1.2.15 AS base
ARG SERVER_URL=http://localhost:3000
ARG POSTHOG_KEY=phc_
ARG POSTHOG_HOST=https://us.i.posthog.com

FROM base AS turbo-cli
ARG SERVER_URL=http://localhost:3000
ARG POSTHOG_KEY=phc_
ARG POSTHOG_HOST=https://us.i.posthog.com
RUN bun add -g turbo@^2


FROM turbo-cli AS builder
ARG SERVER_URL=http://localhost:3000
ARG POSTHOG_KEY=phc_
ARG POSTHOG_HOST=https://us.i.posthog.com
WORKDIR /app
COPY . .
RUN turbo prune web server --docker


FROM builder AS deps
ARG SERVER_URL=http://localhost:3000
ARG POSTHOG_KEY=phc_
ARG POSTHOG_HOST=https://us.i.posthog.com
WORKDIR /app
COPY --from=builder /app/out/json/ .
RUN bun install


FROM deps AS dist
ARG SERVER_URL=http://localhost:3000
ARG POSTHOG_KEY=phc_
ARG POSTHOG_HOST=https://us.i.posthog.com
WORKDIR /app
ENV NODE_ENV=production
ENV VITE_SERVER_URL=$SERVER_URL
ENV VITE_POSTHOG_KEY=$POSTHOG_KEY
ENV VITE_POSTHOG_HOST=$POSTHOG_HOST

COPY --from=builder /app/out/full/ .
RUN turbo run web#build server#compile


FROM base AS runner
COPY --from=dist /app/apps/server/dist/main .
COPY --from=dist /app/apps/web/dist .

ENV NODE_ENV=production
EXPOSE 3000
CMD ["./main"]