import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@/components/ui/Button";
import {
  StepAnimator,
  Welcome,
  ProfileSetup,
  AllDone
} from "@/features/onboarding";

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
    3: <AllDone />
  };

  const handleSubmit = async () => {
    console.log(name, about, userLink);
  };

  return (
    <section
      aria-label="onboarding section"
      className="w-full flex flex-col gap-8 mb-6"
    >
      <StepAnimator currentStep={currentStep} totalSteps={totalSteps} />

      {steps[currentStep] || null}

      <Button
        onClick={async () => {
          if (currentStep === 2) {
            await handleSubmit();
            setCurrentStep(prev => prev + 1);
          } else if (currentStep === totalSteps) {
            navigate("/dashboard");
          } else {
            setCurrentStep(prev => prev + 1);
          }
        }}
      >
        {currentStep === totalSteps ? "Goto Dashboard" : "Next Step"}
      </Button>
    </section>
  );
};

export default Onboarding;
