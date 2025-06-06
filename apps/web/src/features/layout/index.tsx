import { SidebarInset, SidebarProvider } from "@base/ui/components/sidebar";

import { PostHogProvider } from "@base/analytics/posthog/client";
import { VercelAnalytics } from "@base/analytics/vercel";

import { AppHeader } from "./app-header";
import { AppSidebar } from "./app-sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout(props: LayoutProps) {
  return (
    <PostHogProvider>
      <SidebarProvider defaultOpen={false}>
        <AppSidebar />

        <SidebarInset>
          <AppHeader />

          <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            {props.children}
          </div>

          <VercelAnalytics />
        </SidebarInset>
      </SidebarProvider>
    </PostHogProvider>
  );
}
