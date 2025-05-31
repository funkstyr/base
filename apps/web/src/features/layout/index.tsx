import { SidebarInset, SidebarProvider } from "@base/ui/components/sidebar";
import { AppHeader } from "./app-header";
import { AppSidebar } from "./app-sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout(props: LayoutProps) {
  return (
    <SidebarProvider defaultOpen={false}>
      <AppSidebar />

      <SidebarInset>
        <AppHeader />

        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          {props.children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
