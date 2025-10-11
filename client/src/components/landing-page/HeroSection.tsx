import { useNavigate } from "react-router-dom";
import CtaButton from "./CtaButton";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full flex flex-col items-center gap-4">
      <div className="w-full flex flex-col items-center gap-3 text-center">
        <h1 className="w-[95%] text-primary text-4xl">
          Made with love. Paid in Smiles.
        </h1>

        <p className="w-[85%]">
          Happr lets your fans send Smiles - fun, instant tips that go straight
          to your account. You create, they support, everyone’s Happr.
        </p>

        <CtaButton onClick={() => navigate("/signin")} className="px-8 mt-4">
          Get Started
        </CtaButton>

        <p className="w-[60%] text-xs text-muted-foreground">
          Built for Nigerian creators, powered by Paystack.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
