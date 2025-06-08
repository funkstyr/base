import type { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  HeadContent,
  Outlet,
  createRootRouteWithContext,
  useRouterState,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import "@base/ui/web.css?url";
import { Layout } from "@/features/layout";
import type { orpc } from "@/lib/orpc-client";
import { seo } from "@base/seo";
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
    meta: seo({
      title: "Base",
      description: "Simple online games",
      keywords: "base games social",
    }),
    links: [
      {
        rel: "mask-icon",
        href: "/mask-icon.svg",
        color: "#4caf50",
      },
      {
        rel: "apple-touch-icon",
        href: "/apple-touch-icon.png",
        sizes: "180x180",
      },
      {
        rel: "icon",
        href: "https://fav.farm/%F0%9F%9F%A9",
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
