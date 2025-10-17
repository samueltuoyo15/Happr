import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

const ResetPasswordForm = () => {
  const [email, setEmail] = useState<string>("");

  return (
    <div
      aria-labelledby="reset your password"
      className="w-full flex flex-col gap-2"
    >
      <h2 className="text-primary text-2xl"> Reset Your Password, </h2>
      <p className="text-sm mb-4">
        Forgot your password?{" "}
        {`Don't panic it happens, enter the
      email associated with your account in the input below.`}
      </p>

      <form
        aria-label="Reset Password Form"
        onSubmit={e => e.preventDefault()}
        className="w-full flex flex-col gap-1 py-4"
      >
        <Input
          id="email-input"
          name="email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Enter a valid email address"
          className="mb-3"
        />

        <Button disabled={!email} className="w-full h-14">
          Submit
        </Button>
      </form>

      <p className="sef-center text-center -mt-2">
        {"Remembered your password?"}
        <Link to="/signin" className="text-primary">
          {""} Signin here
        </Link>
      </p>
    </div>
  );
};
export default ResetPasswordForm;
