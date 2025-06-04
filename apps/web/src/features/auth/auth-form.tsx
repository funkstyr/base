import { useState } from "react";

import SignInForm from "@/features/auth/sign-in-form";
import SignUpForm from "@/features/auth/sign-up-form";
import { auth } from "@base/auth/client/web";

export function AuthForm() {
  const { data: session } = auth.useSession();

  const [showSignIn, setShowSignIn] = useState(true);

  if (session) return;
  return showSignIn ? (
    <SignInForm onSwitchToSignUp={() => setShowSignIn(false)} />
  ) : (
    <SignUpForm onSwitchToSignIn={() => setShowSignIn(true)} />
  );
}
