import { motion } from "motion/react";
import { Sparkle, Share2, Smile } from "lucide-react";

type Steps = {
  icon: React.ElementType;
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

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" }
  })
};

const lineGrow = {
  hidden: { height: 0 },
  visible: {
    height: "100%",
    transition: { duration: 1.2, ease: "easeInOut" }
  }
};

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="w-full flex flex-col gap-8 py-12 scroll-mt-20"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-primary text-3xl font-semibold text-center"
      >
        How Happr Works
      </motion.h2>

      <div className="relative w-full">
        {/* Animated Vertical Line */}
        <motion.div
          variants={lineGrow}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="absolute top-0 left-4 w-[1px] bg-primary"
        ></motion.div>

        <div className="flex flex-col gap-12">
          {steps.map((step, idx) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={idx}
                custom={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="relative flex items-start gap-6"
              >
                {/* Dot */}
                <div className="relative z-10">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                    {idx + 1}
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 bg-card text-card-foreground p-5 rounded-lg border border-border">
                  <div
                    className="w-16 h-16 flex items-center justify-center border border-border rounded-lg mb-3
                    transition-all duration-300 hover:text-primary hover:scale-105"
                  >
                    <Icon />
                  </div>

                  <h3 className="text-lg md:text-xl font-semibold mb-1">
                    {step.title}
                  </h3>

                  <p className="text-sm md:text-base opacity-80">{step.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
