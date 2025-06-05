import { Button } from "@base/ui/components/button";
import { cn } from "@base/ui/lib/utils";

export function MicrosoftButton(props: React.ComponentProps<"button">) {
  return (
    <Button
      variant="outline"
      className={cn("flex-grow")}
      onClick={props.onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <title>microsoft logo</title>
        <path
          fill="currentColor"
          d="M2 3h9v9H2zm9 19H2v-9h9zM21 3v9h-9V3zm0 19h-9v-9h9z"
        />
      </svg>
    </Button>
  );
}
