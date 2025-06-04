import { type } from "arktype";
import { toast } from "sonner";

import { auth } from "@base/auth/client/web";
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
import { useForm } from "@tanstack/react-form";
import { Camera, Save } from "lucide-react";

export function AccountProfileCard() {
  const { data, isPending } = auth.useSession();
  const initials = data?.user?.name?.split(" ").map((word) => word.charAt(0));

  const form = useForm({
    defaultValues: {
      name: data?.user.name ?? "",
      username: data?.user.username ?? "",
    },
    onSubmit: async ({ value }) => {
      await auth.updateUser(
        {
          name: value.name,
          username:
            value.username !== data?.user.username ? value.username : undefined,
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

  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile Information</CardTitle>
        <CardDescription>
          Update your profile details and public information
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-6">
          {/* Profile Picture */}
          <div className="flex items-center gap-6">
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

          <Separator />

          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <div className="flex items-center gap-2">
              <Input
                id="email"
                type="email"
                value={data?.user.email ?? ""}
                disabled
              />
              <Badge variant="secondary">Verified</Badge>
            </div>
          </div>

          {/* Form Fields */}
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
          <Button type="submit" disabled={isPending} className="gap-2">
            <Save className="h-4 w-4" />
            {isPending ? "Saving..." : "Save Changes"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
