import { useState } from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

const AccountSettings = () => {
  const [email, setEmail] = useState<string>("adebayomuis32@gmail.com");
  const [password, setPassword] = useState<string>("");

  return (
    <div aria-labelledby="Account Settings" className="w-full">
      <h2 className="text-2xl"> Account Settings </h2>

      <form
        aria-label="account settings form"
        onSubmit={e => e.preventDefault()}
        className="w-full flex flex-col gap-8 mt-10"
      ></form>
    </div>
  );
};
export default AccountSettings;
