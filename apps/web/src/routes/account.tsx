import AccountSettings from "@/features/account/account-details";
import { beforeLoad } from "@/features/auth/protected-route";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/account")({
  beforeLoad,
  component: RouteComponent,
});

function RouteComponent() {
  return <AccountSettings />;
}
