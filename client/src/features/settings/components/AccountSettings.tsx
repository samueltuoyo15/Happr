import { useState } from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

const AccountSettings = () => {
  const [email, setEmail] = useState<string>("adebayomuis32@gmail.com");
  const [password, setPassword] = useState<string>("");

  return (
    <div
      aria-labelledby="Account Settings"
      className="w-full flex flex-col gap-4"
    >
      <h2 className="text-2xl"> Account Settings </h2>

      <form
        aria-label="account settings form"
        onSubmit={e => e.preventDefault()}
        className="w-full flex flex-col gap-4 mt-4"
      >
        <div className="w-full flex flex-col gap-1 p-4 border rounded-md">
          <label htmlFor="email-input" className="font-bold text-lg">
            Email
          </label>
          <p className="text-xs text-muted-foreground">
            To change your email, enter a valid email address in the input
            below.
          </p>

          <Input
            type="text"
            id="email-input"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="mt-3 mb-1"
          />
          <Button className="w-fit"> Update Email</Button>
        </div>

        <div className="w-full flex flex-col gap-1 p-4 border rounded-md">
          <label htmlFor="password-input" className="font-bold text-lg">
            Password
          </label>
          <p className="text-xs text-muted-foreground">
            To change your password, enter your preferred password in the input
            below.
          </p>

          <Input
            type="password"
            id="password-input"
            value={password}
            placeholder="Enter your preferred password"
            onChange={e => setPassword(e.target.value)}
            className="mt-3 mb-1"
          />
          <Button className="w-fit"> Update Password </Button>
        </div>
      </form>

      <div
        aria-label="delete account section"
        className="w-full flex flex-col gap-1 p-4 text-destructive-foreground border rounded-md"
      >
        <label htmlFor="email-input" className="font-bold text-lg">
          Delete your account
        </label>
        <p className="text-xs text-muted-foreground">
          Deleting your account will erase all data associated with it.
        </p>

        <Button variant="destructive" className="mt-4">
          Delete Account
        </Button>
      </div>
    </div>
  );
};
export default AccountSettings;
