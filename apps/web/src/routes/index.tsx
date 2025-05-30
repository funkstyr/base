import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

const TITLE_TEXT = `
██████╗  █████╗  ██████╗ ███████╗
██╔══██╗██╔══██╗██╔════╝ ██╔════╝
██████╔╝███████║╚█████╗  █████╗
██╔══██╗██╔══██║ ╚═══██╗ ██╔══╝
██████╔╝██║  ██║██████╔╝ ███████╗
╚═════╝ ╚═╝  ╚═╝╚═════╝  ╚══════╝
`;

function HomeComponent() {
  return (
    <div className="center container mx-auto max-w-3xl px-4 py-2">
      <pre className="center overflow-x-auto pb-2 font-mono text-sidebar-primary text-sm">
        {TITLE_TEXT}
      </pre>
    </div>
  );
}
