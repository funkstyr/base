import { Button } from "@base/ui/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@base/ui/components/card";
import { Separator } from "@base/ui/components/separator";

export function NotificationsCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Email Notifications</CardTitle>
        <CardDescription>
          Choose what email notifications you want to receive
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium">Account Updates</p>
            <p className="text-muted-foreground text-sm">
              Important updates about your account
            </p>
          </div>
          <Button variant="outline" size="sm">
            Enabled
          </Button>
        </div>
        <Separator />
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium">Marketing Emails</p>
            <p className="text-muted-foreground text-sm">
              Product updates and promotional content
            </p>
          </div>
          <Button variant="outline" size="sm">
            Disabled
          </Button>
        </div>
        <Separator />
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium">Security Alerts</p>
            <p className="text-muted-foreground text-sm">
              Notifications about security events
            </p>
          </div>
          <Button variant="outline" size="sm">
            Enabled
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
