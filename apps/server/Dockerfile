ARG SERVER_URL=http://localhost:3000
ARG POSTHOG_KEY=phc_
ARG POSTHOG_HOST=https://us.i.posthog.com

# use the official Bun image
# see all versions at https://hub.docker.com/r/oven/bun/tags
FROM oven/bun:1 AS base
WORKDIR /usr/src/app
RUN bun add -g turbo@^2

# install dependencies into temp directory
# this will cache them and speed up future builds
FROM base AS install
COPY . .
RUN bun install --production

# [optional] tests & build
# RUN bun test
ENV NODE_ENV=production
ENV VITE_SERVER_URL=$SERVER_URL
ENV VITE_POSTHOG_KEY=$POSTHOG_KEY
ENV VITE_POSTHOG_HOST=$POSTHOG_HOST
RUN turbo run web#build server#build

# copy production dependencies and source code into final image
FROM base AS release
COPY --from=install /node_modules node_modules
COPY --from=install /usr/src/app/apps/server/dist .
COPY --from=install /usr/src/app/apps/web/dist spa

# run the app
USER bun
EXPOSE 3000/tcp
ENTRYPOINT [ "bun", "run", "index.ts" ]