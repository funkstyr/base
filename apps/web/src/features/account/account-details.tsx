"use client";

import { Bell, Shield, Trash2, User } from "lucide-react";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@base/ui/components/tabs";
import { DangerCard } from "./danger-card";
import { NotificationsCard } from "./notifications-card";
import { AccountProfileCard } from "./profile-card";
import { SecurityCard } from "./security-card";

export default function AccountDetails() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <div className="mb-8">
        <h1 className="font-bold text-3xl">Account</h1>
        <p className="mt-2 text-muted-foreground">
          Manage your account preferences
        </p>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="profile" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            Profile
          </TabsTrigger>

          <TabsTrigger value="security" className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            Security
          </TabsTrigger>

          <TabsTrigger
            value="notifications"
            className="flex items-center gap-2"
          >
            <Bell className="h-4 w-4" />
            Notifications
          </TabsTrigger>

          <TabsTrigger value="danger" className="flex items-center gap-2">
            <Trash2 className="h-4 w-4" />
            Danger Zone
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-6">
          <AccountProfileCard />
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <SecurityCard />
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <NotificationsCard />
        </TabsContent>

        <TabsContent value="danger" className="space-y-6">
          <DangerCard />
        </TabsContent>
      </Tabs>
    </div>
  );
}
