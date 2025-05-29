import { Separator } from "@base/ui/components/separator";
import { SidebarTrigger } from "@base/ui/components/sidebar";
import { AppBreadcrumb } from "./app-breadcrumb";
import { ModeToggle } from "./mode-toggle";

export function AppHeader() {
  return (
    <header className="flex h-16 shrink-0 items-center gap-2">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />

        <Separator orientation="vertical" className="mr-2 h-4" />

        <AppBreadcrumb />
      </div>

      <div className="mr-4 ml-auto">
        <ModeToggle />
      </div>
    </header>
  );
}
