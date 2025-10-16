import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@/components/ui/Button";
import { StepAnimator, Welcome, ProfileSetup } from "@/features/onboarding";

const Onboarding = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<number>(1);
  const totalSteps: number = 3;

  // form inputs
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const [userLink, setUserLink] = useState("");

  // Object mapping of steps to components
  const steps: Record<number, React.ReactNode> = {
    1: <Welcome />,
    2: (
      <ProfileSetup
        name={name}
        setName={setName}
        about={about}
        setAbout={setAbout}
        userLink={userLink}
        setUserLink={setUserLink}
      />
    ),
    3: <div></div>
  };

  return (
    <section
      aria-label="onboarding section"
      className="w-full flex flex-col gap-8"
    >
      <StepAnimator currentStep={currentStep} totalSteps={totalSteps} />

      {steps[currentStep] || null}

      <Button
        onClick={() => {
          if (currentStep === 2) {
            {
              /* handle form submission for basic info */
            }
            setCurrentStep(prev => prev + 1);
          } else if (currentStep === totalSteps) {
            navigate("/dashboard");
          } else {
            setCurrentStep(prev => prev + 1);
          }
        }}
      >
        {currentStep === totalSteps ? "Finish" : "Next Step"}
      </Button>
    </section>
  );
};

export default Onboarding;
