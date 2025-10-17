import WelcomeIlustration from "../illustrations/undraw_joyride.svg";

const Welcome = () => {
  return (
    <div
      aria-label="onboarding welcome page"
      className="w-full flex flex-col items-center gap-4"
    >
      <img
        src={WelcomeIlustration}
        alt="Welcome illustration"
        className="w-48 h-56 my-4"
      />

      <h2 className="text-2xl font-semibold text-primary">
        Welcome onboard, Charmingdc 🎉
      </h2>

      <p className="text-muted-foreground max-w-sm">
        You’re all set to start receiving{" "}
        <span className="text-primary font-medium">smiles</span> — your fans can
        now show love and support you directly.
      </p>

      <p className="text-sm text-muted-foreground max-w-sm">
        Next, let’s personalize your creator page and make it shine ✨
      </p>
    </div>
  );
};

export default Welcome;
