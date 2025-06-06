import type { ReactNode } from "react";

import { PostHogProvider } from "./posthog/client";
import { VercelAnalytics, VercelSpeedInsights } from "./vercel";

type AnalyticsProviderProps = {
  readonly children: ReactNode;
};

export const AnalyticsProvider = (props: AnalyticsProviderProps) => (
  <PostHogProvider>
    {props.children}
    <VercelAnalytics />
    <VercelSpeedInsights />
  </PostHogProvider>
);
