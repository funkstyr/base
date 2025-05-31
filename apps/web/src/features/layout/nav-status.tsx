import { useQuery } from "@tanstack/react-query";
import clsx from "clsx";

import { orpc } from "@/lib/orpc-client";

export function NavStatus() {
  const { data, isLoading } = useQuery(orpc.health.queryOptions());

  return (
    <div className="grid gap-6">
      <section className="rounded-lg p-4">
        <div className="flex items-center gap-2">
          <div
            className={clsx("mx-auto h-2 w-2 rounded-full", {
              "bg-yellow-500": isLoading,
              "bg-green-500": !isLoading && data,
              "bg-red-500": !isLoading && !data,
            })}
          />
        </div>
      </section>
    </div>
  );
}
