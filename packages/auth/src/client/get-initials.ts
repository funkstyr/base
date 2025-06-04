import type { AuthSession } from "@base/auth/client/web";

export function getInitials(session: AuthSession) {
  const nameSplit = session?.user?.name
    .split(" ")
    .map((word) => word.charAt(0));

  return `${nameSplit?.at(0) ?? ""} ${nameSplit?.at(1) ?? ""}`;
}
