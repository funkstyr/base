import { $ } from "bun";

await $`echo running vercel build in $(pwd)`;

await $`turbo run web#build server#build`;
await $`mv ./apps/web/dist ./apps/server/dist`;
