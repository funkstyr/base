import { useQuery } from "@tanstack/react-query";
import clsx from "clsx";

import { orpc } from "@/lib/orpc-client";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@base/ui/components/tooltip";

export function NavStatus() {
  const { data, isLoading } = useQuery(orpc.health.queryOptions());

  const indicator = (
    <div className="flex items-center gap-2">
      <div
        className={clsx("mx-auto h-2 w-2 rounded-full", {
          "bg-yellow-500": isLoading,
          "bg-green-500": !isLoading && data,
          "bg-red-500": !isLoading && !data,
        })}
      />
    </div>
  );

  return (
    <div className="grid gap-6">
      <section className="p-4">
        {data ? (
          indicator
        ) : (
          <Tooltip>
            <TooltipTrigger>{indicator}</TooltipTrigger>
            <TooltipContent>Services Unavailable</TooltipContent>
          </Tooltip>
        )}
      </section>
    </div>
  );
}
