import SuccessIllustration from "../illustrations/undraw_success.svg";

const AllDone = () => {
  return (
    <div
      aria-label="onboarding final page"
      className="w-full flex flex-col items-center gap-4"
    >
      <img
        src={SuccessIllustration}
        alt="Welcome illustration"
        className="w-56 h-72 my-4"
      />

      <h2 className="text-3xl font-semibold text-primary">
        All done, Charmingdc! 🥳
      </h2>

      <p className="text-muted-foreground max-w-sm">
        Your page is live! Grab your page link from the dashboard and let your
        fans start sending{" "}
        <span className="text-primary font-medium">smiles</span>!
      </p>
    </div>
  );
};

export default AllDone;
