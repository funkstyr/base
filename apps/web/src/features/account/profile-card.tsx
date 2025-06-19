import { useForm } from "@tanstack/react-form";
import { type } from "arktype";
import { Camera, Save } from "lucide-react";
import { useId } from "react";
import { toast } from "sonner";

import { getInitials } from "@base/auth/client/get-initials";
import { auth } from "@base/auth/client/web";
import { cn } from "@base/ui/cn";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@base/ui/components/avatar";
import { Badge } from "@base/ui/components/badge";
import { Button } from "@base/ui/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@base/ui/components/card";
import { Input } from "@base/ui/components/input";
import { Label } from "@base/ui/components/label";
import { Separator } from "@base/ui/components/separator";
import { AppleButton } from "../auth/buttons/apple";
import { DiscordButton } from "../auth/buttons/discord";
import { GoogleButton } from "../auth/buttons/google";
import { MicrosoftButton } from "../auth/buttons/microsoft";

export function AccountProfileCard() {
  const { data: session } = auth.useSession();
  const initials = getInitials(session);
  const emailId = useId();

  const form = useForm({
    defaultValues: {
      name: session?.user.name ?? "",
      username: session?.user.username ?? "",
    },
    onSubmit: async ({ value }) => {
      await auth.updateUser(
        {
          name: value.name,
          username:
            value.username !== session?.user.username
              ? value.username
              : undefined,
        },
        {
          onSuccess: () => {
            toast.success("Sign up successful");
          },
          onError: (error) => {
            toast.error(error.error.message);
          },
        },
      );
    },
    validators: {
      onSubmit: type({
        name: type.string.atLeastLength(2),
        username: type.string.atLeastLength(3),
      }),
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    void form.handleSubmit();
  };

  const isLoading = form.state.isSubmitting;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile Information</CardTitle>
        <CardDescription>
          Update your profile details and public information
        </CardDescription>

        <div className="mt-4 flex items-center gap-6">
          <Avatar className="h-24 w-24">
            <AvatarImage
              src="/placeholder.svg?height=96&width=96"
              alt="Profile picture"
            />

            <AvatarFallback className="text-lg uppercase">
              {initials}
            </AvatarFallback>
          </Avatar>

          <div className="space-y-2">
            <Button variant="outline" size="sm" className="gap-2">
              <Camera className="h-4 w-4" />
              Change Photo
            </Button>

            <p className="text-muted-foreground text-sm">
              JPG, GIF or PNG. 1MB max.
            </p>
          </div>
        </div>

        <Separator className="my-4" />

        <div
          className={cn(
            "flex w-full items-center gap-2",
            "flex-wrap justify-between",
          )}
        >
          <GoogleButton
            onClick={async () => {
              await auth.linkSocial({
                provider: "google",
              });
            }}
          />

          <AppleButton
            onClick={async () => {
              await auth.linkSocial({
                provider: "apple",
              });
            }}
          />

          <MicrosoftButton
            onClick={async () => {
              await auth.linkSocial({
                provider: "microsoft",
              });
            }}
          />

          <DiscordButton
            onClick={async () => {
              await auth.linkSocial({
                provider: "discord",
              });
            }}
          />
        </div>
      </CardHeader>

      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-6">
          <Separator />

          <div className="space-y-2">
            <Label htmlFor={emailId}>Email Address</Label>
            <div className="flex items-center gap-2">
              <Input
                id={emailId}
                type="email"
                value={session?.user.email ?? ""}
                disabled
              />
              <Badge variant="secondary">Verified</Badge>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <form.Field name="name">
                {(field) => (
                  <div className="space-y-2">
                    <Label htmlFor={field.name}>Full Name</Label>
                    <Input
                      id={field.name}
                      name={field.name}
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

            <div className="space-y-2">
              <form.Field name="username">
                {(field) => (
                  <div className="space-y-2">
                    <Label htmlFor={field.name}>Username</Label>
                    <Input
                      id={field.name}
                      name={field.name}
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
          </div>
        </CardContent>

        <CardFooter className="mt-4">
          <Button type="submit" disabled={isLoading} className="gap-2">
            <Save className="h-4 w-4" />
            {isLoading ? "Saving..." : "Save Changes"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
