"use client";

import {
  BookOpen,
  Bot,
  Command,
  Frame,
  LifeBuoy,
  type LucideProps,
  Map as MapIcon,
  PieChart,
  Send,
  Settings2,
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

type RouteIcon = React.ForwardRefExoticComponent<
  Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
>;

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  user?: {
    name: string;
    email: string;
    avatar: string;
  };
  routes: {
    navMain: {
      title: string;
      url: string;
      icon: RouteIcon;
      isActive: boolean;
      items?: {
        title: string;
        url: string;
      }[];
    }[];

    navSecondary: {
      title: string;
      url: string;
      icon: RouteIcon;
    }[];
  };
}

export function AppSidebar(props: AppSidebarProps) {
  const { routes, user, ...sidebarProps } = props;

  return (
    <Sidebar variant="inset" {...sidebarProps}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="/">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">Acme Inc</span>
                  <span className="truncate text-xs">Enterprise</span>
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
