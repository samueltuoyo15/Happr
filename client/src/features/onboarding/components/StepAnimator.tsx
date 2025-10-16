type PageProps = {
  currentStep: number;
  totalSteps: number;
};

const StepAnimator = ({ currentStep, totalSteps }: PageProps) => {
  const percentage = (currentStep / totalSteps) * 100;

  return (
    <div
      aria-label="account setup progress bar"
      className="w-full flex flex-col items-center gap-2"
    >
      <div className="w-full h-6 flex items-center px-[1%] border rounded-full bg-muted overflow-hidden">
        <div
          className="h-4 bg-primary rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>

      <span className="text-sm text-muted-foreground font-medium">
        Step {currentStep} of {totalSteps} • {Math.round(percentage)}%
      </span>
    </div>
  );
};

export default StepAnimator;
