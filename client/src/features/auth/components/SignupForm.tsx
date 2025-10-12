import { useState } from "react";
import { toast } from "sonner";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import ChooseUsernameForm from "./ChooseUsernameForm";
import GoogleAuthButton from "./GoogleAuthButton";

const SignupForm = () => {
  const [isUsernameChosen, setIsUsernameChosen] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <div className="w-full flex flex-col gap-2">
      {isUsernameChosen ? (
        <form className="w-full flex flex-col gap-1 py-4">
          <GoogleAuthButton />

          <p className="self-center font-fredoka font-bold text-primary text-md mt-6 mb-8 ml-1">
            OR CONTINUE WITH
          </p>

          <label htmlFor="email-input" className="ml-1 font-bold text-primary">
            Email:
          </label>
          <Input
            id="email-input"
            name="email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Enter a valid email address"
            className="mb-4"
          />

          <label
            htmlFor="password-input"
            className="ml-1 font-bold text-primary"
          >
            Password:
          </label>
          <Input
            id="password-input"
            name="password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="mb-6"
          />

          <Button disabled={!email || !password} className="w-full h-14">
            Sign up
          </Button>
        </form>
      ) : (
        <ChooseUsernameForm
          username={username}
          setUsername={setUsername}
          setIsUsernameChosen={setIsUsernameChosen}
        />
      )}
    </div>
  );
};
export default SignupForm;
