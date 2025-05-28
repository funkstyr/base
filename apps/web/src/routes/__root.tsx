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
import Header from "@/features/header";
import { ORPCContext, link, type orpc } from "@/lib/orpc-client";
import type { AppRouter } from "@base/api";
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
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <div className="grid h-svh grid-rows-[auto_1fr]">
            <Header />
            {isFetching ? <Loader /> : <Outlet />}
          </div>
          <Toaster richColors />
        </ThemeProvider>
      </ORPCContext.Provider>
      <TanStackRouterDevtools position="bottom-left" />
      <ReactQueryDevtools position="bottom" buttonPosition="bottom-right" />
    </>
  );
}
