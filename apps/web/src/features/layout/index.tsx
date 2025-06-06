import { SidebarInset, SidebarProvider } from "@base/ui/components/sidebar";
import { PostHogProvider } from "posthog-js/react";
// import { PostHogProvider } from "@base/posthog/provider";

import { AppHeader } from "./app-header";
import { AppSidebar } from "./app-sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout(props: LayoutProps) {
  return (
    <PostHogProvider
      apiKey={import.meta.env.VITE_POSTHOG_KEY ?? ""}
      options={{
        api_host: import.meta.env.VITE_POSTHOG_HOST,
        defaults: "2025-05-24",
      }}
    >
      <SidebarProvider defaultOpen={false}>
        <AppSidebar />

        <SidebarInset>
          <AppHeader />

          <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            {props.children}
          </div>
        </SidebarInset>
      </SidebarProvider>
    </PostHogProvider>
  );
}
