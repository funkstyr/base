import { useForm } from "@tanstack/react-form";
import { useRouter } from "@tanstack/react-router";
import { type } from "arktype";
import clsx from "clsx";
import { toast } from "sonner";

import { auth } from "@base/auth/client/web";
import { Button } from "@base/ui/components/button";
import { Input } from "@base/ui/components/input";
import { Label } from "@base/ui/components/label";
import { Loader } from "@base/ui/components/loader";
import { AppleButton } from "./buttons/apple";
import { DiscordButton } from "./buttons/discord";
import { GoogleButton } from "./buttons/google";
import { MicrosoftButton } from "./buttons/microsoft";

export default function SignInForm({
  onSwitchToSignUp,
}: {
  onSwitchToSignUp: () => void;
}) {
  const { isPending } = auth.useSession();
  const router = useRouter();
  const redirectPath =
    (router.latestLocation.search as Record<string, string>)?.redirect ?? "";

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    onSubmit: async ({ value }) => {
      await auth.signIn.email(
        {
          email: value.email,
          password: value.password,
        },
        {
          onSuccess: () => {
            router.navigate({
              to: redirectPath ? redirectPath : "/todos",
            });
            toast.success("Sign in successful");
          },
          onError: (error) => {
            toast.error(error.error.message);
          },
        },
      );
    },
    validators: {
      onSubmit: type({
        email: "string.email",
        password: type.string.atLeastLength(8),
      }),
    },
  });

  if (isPending) {
    return <Loader />;
  }

  return (
    <div className="mx-auto mt-10 w-full max-w-md p-6">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          void form.handleSubmit();
        }}
        className="space-y-4"
      >
        <div>
          <form.Field name="email">
            {(field) => (
              <div className="space-y-2">
                <Label htmlFor={field.name}>Email</Label>
                <Input
                  id={field.name}
                  name={field.name}
                  type="email"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                {field.state.meta.errors.map((error) => (
                  <p key={error?.message} className="text-red-500">
                    {error?.message}
                  </p>
                ))}
              </div>
            )}
          </form.Field>
        </div>

        <div>
          <form.Field name="password">
            {(field) => (
              <div className="space-y-2">
                <Label htmlFor={field.name}>Password</Label>
                <Input
                  id={field.name}
                  name={field.name}
                  type="password"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                {field.state.meta.errors.map((error) => (
                  <p key={error?.message} className="text-red-500">
                    {error?.message}
                  </p>
                ))}
              </div>
            )}
          </form.Field>
        </div>

        <form.Subscribe>
          {(state) => (
            <Button
              type="submit"
              className="w-full"
              disabled={!state.canSubmit || state.isSubmitting}
            >
              {state.isSubmitting ? "Submitting..." : "Sign In"}
            </Button>
          )}
        </form.Subscribe>

        <div
          className={clsx(
            "flex w-full items-center gap-2",
            "flex-wrap justify-between",
          )}
        >
          <GoogleButton />
          <AppleButton />
          <MicrosoftButton />
          <DiscordButton />
        </div>
      </form>

      <div className="mt-4 text-center">
        <Button
          variant="link"
          onClick={onSwitchToSignUp}
          className="text-purple-500 hover:text-purple-700"
        >
          Need an account? Sign Up
        </Button>
      </div>
    </div>
  );
}
