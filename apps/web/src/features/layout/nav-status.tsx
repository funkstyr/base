import { useQuery } from "@tanstack/react-query";

import { orpc } from "@/lib/orpc-client";

export function NavStatus() {
  const healthCheck = useQuery(orpc.healthCheck.queryOptions());

  return (
    <div className="mt-auto grid gap-6">
      <section className="rounded-lg border p-4">
        <div className="flex items-center gap-2">
          <div
            className={`h-2 w-2 rounded-full ${healthCheck.data ? "bg-green-500" : "bg-red-500"}`}
          />
          {/* TODO: use same mechanism as sidebar to hide text when collapsed */}
          <span className="text-muted-foreground text-sm">
            {healthCheck.isLoading
              ? "Checking..."
              : healthCheck.data
                ? "Connected"
                : "Disconnected"}
          </span>
        </div>
      </section>
    </div>
  );
}
