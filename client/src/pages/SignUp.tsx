import { SignupForm } from "@/features/auth";

const SignUp = () => {
  return (
    <section className="w-full flex flex-col gap-2">
      <h2 className="text-primary text-3xl"> Get started, </h2>
      <p>
        Claim your Happr page to start recieving <strong>smiles</strong>.
      </p>

      <SignupForm />
    </section>
  );
};
export default SignUp;
