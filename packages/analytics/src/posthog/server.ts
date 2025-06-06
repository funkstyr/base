import { PostHog } from "posthog-node";

export const analytics = new PostHog(process.env.VITE_POSTHOG_KEY ?? "", {
  host: process.env.VITE_POSTHOG_HOST,

  // Don't batch events and flush immediately - we're running in a serverless environment
  flushAt: 1,
  flushInterval: 0,
});
