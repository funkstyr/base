import { PostHogProvider as _PostHogProvider } from "posthog-js/react";

export function PostHogProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <_PostHogProvider
      apiKey={import.meta.env.VITE_POSTHOG_KEY ?? ""}
      options={{
        api_host: import.meta.env.VITE_POSTHOG_HOST,
      }}
    >
      {children}
    </_PostHogProvider>
  );
}
