ARG SERVER_URL=http://localhost:3000
ARG POSTHOG_KEY=phc_
ARG POSTHOG_HOST=https://us.i.posthog.com


FROM oven/bun:1.2.15 AS base
FROM base AS turbo-cli
RUN bun add -g turbo@^2


FROM turbo-cli AS builder
WORKDIR /app
COPY . .
RUN turbo prune web server --docker


FROM builder AS deps
WORKDIR /app
COPY --from=builder /app/out/json/ .
RUN bun install


FROM deps AS dist
WORKDIR /app
ENV NODE_ENV=production
ENV VITE_SERVER_URL=$SERVER_URL
ENV VITE_POSTHOG_KEY=$POSTHOG_KEY
ENV VITE_POSTHOG_HOST=$POSTHOG_HOST

COPY --from=builder /app/out/full/ .
RUN turbo run web#build server#build


FROM base AS runner
COPY --from=dist /app/apps/server/dist/server .
COPY --from=dist /app/apps/web/dist spa

ENV NODE_ENV=production
EXPOSE 3000
CMD ["./server"]