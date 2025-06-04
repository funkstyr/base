import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

import { beforeLoad } from "@/features/auth/protected-route";
import { orpc } from "@/lib/orpc-client";
import { auth } from "@base/auth/client/web";

export const Route = createFileRoute("/dashboard")({
  component: RouteComponent,
  beforeLoad,
});

function RouteComponent() {
  const navigate = Route.useNavigate();
  const { data: session, isPending } = auth.useSession();
  const privateData = useQuery(orpc.privateData.queryOptions());

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (!session && !isPending) {
      navigate({
        to: "/login",
      });
    }
  }, [session, isPending]);

  if (isPending) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome {session?.user?.name}</p>
      <p>privateData: {privateData.data?.message}</p>
    </div>
  );
}
