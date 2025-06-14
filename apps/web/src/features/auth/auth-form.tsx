import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import SignInForm from "@/features/auth/sign-in-form";
import SignUpForm from "@/features/auth/sign-up-form";
import { orpc } from "@/lib/orpc-client";
import { auth } from "@base/auth/client/web";

export function AuthForm() {
  const [showSignIn, setShowSignIn] = useState(true);

  const { data: session } = auth.useSession();
  const { data } = useQuery(orpc.health.queryOptions());

  if (session || !data) return;
  return showSignIn ? (
    <SignInForm onSwitchToSignUp={() => setShowSignIn(false)} />
  ) : (
    <SignUpForm onSwitchToSignIn={() => setShowSignIn(true)} />
  );
}
