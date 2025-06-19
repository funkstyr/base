import { createFileRoute } from "@tanstack/react-router";

import AccountDetails from "@/features/account/account-details";
import { beforeLoad } from "@/features/auth/protected-route";

export const Route = createFileRoute("/account")({
  beforeLoad,
  component: RouteComponent,
});

function RouteComponent() {
  return <AccountDetails />;
}
