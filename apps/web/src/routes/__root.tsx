import { createORPCClient } from "@orpc/client";
import { createORPCReactQueryUtils } from "@orpc/react-query";
import type { RouterClient } from "@orpc/server";
import type { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  HeadContent,
  Outlet,
  createRootRouteWithContext,
  useRouterState,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { useState } from "react";

import "@base/ui/web.css";

import { ORPCContext, link, type orpc } from "@/lib/orpc-client";
import type { AppRouter } from "@base/api";

import { Layout } from "@/features/layout";
import { Loader } from "@base/ui/components/loader";
import { SidebarProvider } from "@base/ui/components/sidebar";
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
        title: "My App",
      },
      {
        name: "description",
        content: "My App is a web application",
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
  const [client] = useState<RouterClient<AppRouter>>(() =>
    createORPCClient(link),
  );
  const [orpc] = useState(() => createORPCReactQueryUtils(client));

  const isFetching = useRouterState({
    select: (s) => s.isLoading,
  });
  return (
    <>
      <HeadContent />
      <ORPCContext.Provider value={orpc}>
        <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
          <Layout>{isFetching ? <Loader /> : <Outlet />}</Layout>

          <Toaster richColors />
        </ThemeProvider>
      </ORPCContext.Provider>
      <TanStackRouterDevtools position="bottom-left" />
      <ReactQueryDevtools position="bottom" buttonPosition="bottom-right" />
    </>
  );
}
