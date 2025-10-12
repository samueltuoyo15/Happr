import { useState } from "react";
import Button from "@/components/ui/Button";
import ChooseUsernameForm from "./ChooseUsernameForm";

const SignupForm = () => {
  const [username, setUsername] = useState<string>("");

  return (
    <div className="w-full flex flex-col gap-2">
      <ChooseUsernameForm username={username} setUsername={setUsername} />
    </div>
  );
};
export default SignupForm;
