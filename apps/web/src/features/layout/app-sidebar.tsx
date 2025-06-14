"use client";

import { Dices, SquareTerminal } from "lucide-react";
import type * as React from "react";

import { auth } from "@base/auth/client/web";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@base/ui/components/sidebar";
import { Link } from "@tanstack/react-router";
import { NavMain } from "./nav-main";
import { NavSecondary } from "./nav-secondary";
import { NavStatus } from "./nav-status";
import { NavUser } from "./nav-user";

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {}

const routes = {
  navMain: [
    // {
    //   title: "Games",
    //   url: "/games",
    //   icon: Computer,
    //   isActive: true,
    //   items: [
    //     {
    //       title: "New",
    //       url: "/games/new",
    //     },
    //     {
    //       title: "History",
    //       url: "/games/history",
    //     },
    //     {
    //       title: "Starred",
    //       url: "/games/starred",
    //     },
    //   ],
    // },
    {
      title: "Examples",
      url: "/dashboard",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Todos",
          url: "/todos",
        },
        {
          title: "Ai",
          url: "/ai",
        },
      ],
    },
  ],
  navSecondary: [
    // {
    //   title: "Settings",
    //   url: "/settings",
    //   icon: Settings,
    // },
  ],
};

export function AppSidebar(props: AppSidebarProps) {
  const { data: session } = auth.useSession();

  return (
    <Sidebar variant="inset" collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link to="/">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Dices className="size-4" />
                </div>

                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">Base</span>
                  {/* <span className="truncate text-xs">Platform</span> */}
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      {!!session && (
        <SidebarContent>
          <NavMain items={routes.navMain} />
          <NavSecondary items={routes.navSecondary} className="mt-auto" />
        </SidebarContent>
      )}

      <SidebarFooter className="mt-auto">
        <NavUser />

        <NavStatus />
      </SidebarFooter>
    </Sidebar>
  );
}
