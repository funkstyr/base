import type { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  HeadContent,
  Outlet,
  createRootRouteWithContext,
  useRouterState,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import "@base/ui/web.css";
import { Layout } from "@/features/layout";
import type { orpc } from "@/lib/orpc-client";
import { Loader } from "@base/ui/components/loader";
import { Toaster } from "@base/ui/components/sonner";
import { ThemeProvider } from "@base/ui/components/theme-provider";

export interface RouterAppContext {
  orpc: typeof orpc;
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<RouterAppContext>()({
  component: RootComponent,
  head: () => ({
    meta: [
      {
        title: "Base",
      },
      {
        name: "description",
        content: "A simple web application",
      },
    ],
    links: [
      {
        rel: "icon",
        href: "/favicon.ico",
      },
    ],
  }),
});

function RootComponent() {
  const isFetching = useRouterState({
    select: (s) => s.isLoading,
  });

  return (
    <>
      <HeadContent />

      <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
        <Layout>{isFetching ? <Loader /> : <Outlet />}</Layout>

        <Toaster richColors />
      </ThemeProvider>

      <TanStackRouterDevtools position="bottom-right" />
      <ReactQueryDevtools position="bottom" buttonPosition="bottom-right" />
    </>
  );
}
