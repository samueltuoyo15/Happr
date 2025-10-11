import { Sparkle, Share2, Smile } from "lucide-react";

type Steps = {
  icon: React.ReactNode;
  title: string;
  desc: string;
};

const steps: Steps[] = [
  {
    icon: Sparkle,
    title: "Create your Happr page",
    desc: "Sign up, add your bio and bank info. Get your happr.me/username."
  },
  {
    icon: Share2,
    title: "Share your link",
    desc: "Post your Happr page link on social media or in your bio to start receiving support."
  },
  {
    icon: Smile,
    title: "Get support instantly",
    desc: "Your fans can send smiles. Funds go straight to your account."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="w-full flex flex-col gap-6 py-10">
      <h2 className="text-primary text-3xl font-semibold text-center">
        How Happr Works
      </h2>

      <div className="relative w-full">
        {/* Vertical line */}
        <div className="absolute top-0 left-4 w-[1px] h-full bg-primary"></div>

        <div className="flex flex-col gap-12">
          {steps.map((step, idx) => {
            const Icon = step.icon;

            return (
              <div key={idx} className="relative flex items-start gap-6">
                {/* Dot */}
                <div className="relative z-10">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                    {idx + 1}
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 bg-card text-card-foreground p-5 rounded-lg border border-border">
                  <div className="w-16 h-16 flex items-center justify-center border border-border rounded-lg mb-2 transition-all duration-300 hover:border-[.2rem] hover:text-primary">
                    <Icon />
                  </div>

                  <h3 className="text-lg md:text-xl font-semibold mb-1">
                    {step.title}
                  </h3>

                  <p className="text-sm md:text-base opacity-80">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
