import { MessageCircleMore, Settings, SquareTerminal } from "lucide-react";

import { AppSidebar } from "@base/ui/components/app-sidebar";
import { Separator } from "@base/ui/components/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@base/ui/components/sidebar";
// import {
//   Breadcrumb,
//   BreadcrumbList,
//   BreadcrumbLink,
//   BreadcrumbItem,
// } from "@base/ui/components/breadcrumb";
import { ModeToggle } from "./header/mode-toggle";

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

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout(props: LayoutProps) {
  return (
    <SidebarProvider>
      <AppSidebar
        routes={routes}
        user={{
          name: "funkstyr",
          email: "m@example.com",
          avatar: "/avatars/shadcn.jpg",
        }}
      />

      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />

            <Separator orientation="vertical" className="mr-2 h-4" />
            {/* 
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className='hidden md:block'>
                  <BreadcrumbLink className='capitalize'>
                    {route}
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb> */}
          </div>

          <div className="mr-4 ml-auto">
            <ModeToggle />
          </div>
        </header>

        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          {props.children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
