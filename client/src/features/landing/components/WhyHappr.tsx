import { motion, MotionConfig } from "motion/react";

type Benefits = {
  emoji: string;
  title: string;
  desc: string;
};

const benefits: Benefits[] = [
  {
    emoji: "💸",
    title: "Instant Payouts",
    desc: "Funds go straight to your bank after every tip."
  },
  {
    emoji: "🇳🇬",
    title: "Built for Nigerians",
    desc: "Paystack-powered, works with all local banks."
  },
  {
    emoji: "😊",
    title: "Fun and Transparent",
    desc: "Smiles instead of boring donations. We take just 5% per transaction, clearly shown."
  },
  {
    emoji: "😌",
    title: "Zero Setup Stress",
    desc: "No Paystack key, no coding — just create your page and share."
  }
];

const WhyHappr = () => {
  return (
    <section className="w-full flex flex-col gap-4">
      <MotionConfig>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-primary text-3xl text-center"
        >
          Why Creators Love Happr
        </motion.h2>

        <div className="w-full flex flex-col items-center gap-3 bg-card text-card-foreground p-4 rounded-lg md:flex-row md:flex-wrap md:justify-center">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  delay: idx * 0.15,
                  duration: 0.6,
                  type: "spring",
                  stiffness: 120,
                  damping: 10
                }
              }}
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-col gap-2 p-4 rounded-lg md:w-[48%]"
            >
              <div
                className="w-16 h-16 bg-background flex items-center justify-center rounded-lg 
                hover:animate-bounce transition-transform duration-300"
              >
                <h3>{benefit.emoji}</h3>
              </div>

              <h3 className="text-xl">{benefit.title}</h3>

              <p>{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </MotionConfig>
    </section>
  );
};

export default WhyHappr;
