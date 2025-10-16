import { motion, MotionConfig } from "motion/react";
import { useNavigate } from "react-router-dom";
import CtaButton from "./CtaButton";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full flex flex-col items-center gap-4 overflow-hidden">
      <MotionConfig transition={{ duration: 1, ease: "easeOut" }}>
        <motion.div
          className="w-full flex flex-col items-center gap-3 text-center"
          initial="hidden"
          whileInView="active"
          viewport={{ once: true }}
        >
          <motion.h1
            className="w-[95%] text-primary text-4xl"
            variants={{
              hidden: { y: -40, opacity: 0, rotate: -3 },
              active: {
                y: 0,
                opacity: 1,
                rotate: 0,
                transition: {
                  type: "spring",
                  stiffness: 120,
                  damping: 10,
                  bounce: 0.5
                }
              }
            }}
          >
            Made with love. Paid in Smiles.
          </motion.h1>

          <motion.p
            className="w-[85%]"
            variants={{
              hidden: { y: 20, opacity: 0, scale: 0.95 },
              active: {
                y: 0,
                opacity: 1,
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 100,
                  damping: 12,
                  bounce: 0.3
                }
              }
            }}
          >
            Happr lets your fans send Smiles — fun, instant tips that go
            straight to your account. You create, they support, everyone’s
            Happr.
          </motion.p>

          <motion.div
            variants={{
              hidden: { scale: 0 },
              active: {
                scale: 1,
                transition: { type: "spring", stiffness: 150, damping: 8 }
              }
            }}
            whileHover={{
              scale: 1.08,
              rotate: [0, -2, 2, 0],
              transition: { duration: 0.4 }
            }}
          >
            <CtaButton
              onClick={() => navigate("/signup")}
              className="px-8 mt-4"
            >
              Get Started
            </CtaButton>
          </motion.div>

          <motion.p
            className="w-[60%] text-xs text-muted-foreground"
            variants={{
              hidden: { y: 20, opacity: 0, scale: 0.95 },
              active: {
                y: 0,
                opacity: 1,
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 100,
                  damping: 12,
                  bounce: 0.3
                }
              }
            }}
            animate={{
              y: [0, -3, 0],
              transition: {
                repeat: Infinity,
                repeatType: "mirror" as const,
                duration: 2.5,
                ease: "easeInOut"
              }
            }}
          >
            Built for Nigerian creators, powered by Paystack.
          </motion.p>
        </motion.div>
      </MotionConfig>
    </section>
  );
};

export default HeroSection;
