"use client";

import {
  Command,
  MessageCircleMore,
  Settings,
  SquareTerminal,
} from "lucide-react";
import type * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@base/ui/components/sidebar";
import { NavMain } from "./nav-main";
import { NavSecondary } from "./nav-secondary";
import { NavUser } from "./nav-user";

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {}

const user = {
  name: "funkstyr",
  email: "m@example.com",
  avatar: "/avatars/shadcn.jpg",
};

const routes = {
  navMain: [
    {
      title: "Chat",
      url: "#",
      icon: MessageCircleMore,
      isActive: true,
      items: [
        {
          title: "New",
          url: "/?id=new",
        },
        {
          title: "History",
          url: "/history",
        },
        {
          title: "Starred",
          url: "/starred",
        },
      ],
    },
    {
      title: "Examples",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Login",
          url: "/login",
        },
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
    {
      title: "Settings",
      url: "/settings",
      icon: Settings,
    },
  ],
};

export function AppSidebar(props: AppSidebarProps) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="/">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">Base</span>
                  <span className="truncate text-xs">Platform</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={routes.navMain} />

        <NavSecondary items={routes.navSecondary} className="mt-auto" />
      </SidebarContent>

      <SidebarFooter>{!!user && <NavUser user={user} />}</SidebarFooter>
    </Sidebar>
  );
}
