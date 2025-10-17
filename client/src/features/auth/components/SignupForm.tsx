import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import ChooseUsernameForm from "./ChooseUsernameForm";
import GoogleAuthButton from "./GoogleAuthButton";

const SignupForm = () => {
  const navigate = useNavigate();
  const [isUsernameChosen, setIsUsernameChosen] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <div className="w-full flex flex-col gap-2">
      <h2 className="text-primary text-2xl">
        {isUsernameChosen ? `Welcome, ${username}` : "Get started,"}
      </h2>
      <p>
        {isUsernameChosen
          ? "Complete your signup with one of the methods below"
          : "Claim your Happr page."}
      </p>

      {isUsernameChosen ? (
        <form
          onSubmit={e => {
            e.preventDefault();
            navigate("/complete-setup", { replace: true });
          }}
          className="w-full flex flex-col gap-1 py-4"
        >
          <GoogleAuthButton />

          <p className="self-center font-fredoka font-bold text-primary mt-4 mb-6 ml-1">
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
            className="mb-3"
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

      <p className="sef-center text-center -mt-2">
        Already on Haprr?
        <Link to="/signin" className="text-primary">
          {""} Signin here
        </Link>
      </p>
    </div>
  );
};
export default SignupForm;
