import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import CtaButton from "./CtaButton";

const HeroSection = () => {
  const navigate = useNavigate();

  // Reusable variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.25 }
    }
  };

  const bounceUp = {
    hidden: { y: -40, opacity: 0, rotate: -3 },
    visible: {
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
  };

  const springyEntrance = {
    hidden: { y: 20, opacity: 0, scale: 0.95 },
    visible: {
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
  };

  const scaleIn = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: { type: "spring", stiffness: 150, damping: 8 }
    }
  };

  const floatEffect = {
    y: [0, -3, 0],
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 2.5,
      ease: "easeInOut"
    }
  };

  return (
    <section className="w-full flex flex-col items-center gap-4 overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full flex flex-col items-center gap-3 text-center"
      >
        {/* Heading */}
        <motion.h1
          variants={bounceUp}
          className="w-[95%] text-primary text-4xl"
        >
          Made with love. Paid in Smiles.
        </motion.h1>

        {/* Subtext */}
        <motion.p variants={springyEntrance} className="w-[85%]">
          Happr lets your fans send Smiles — fun, instant tips that go straight
          to your account. You create, they support, everyone’s Happr.
        </motion.p>

        {/* Button */}
        <motion.div
          variants={scaleIn}
          whileHover={{
            scale: 1.08,
            rotate: [0, -2, 2, 0],
            transition: { duration: 0.4 }
          }}
        >
          <CtaButton onClick={() => navigate("/signin")} className="px-8 mt-4">
            Get Started
          </CtaButton>
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={springyEntrance}
          animate={floatEffect}
          className="w-[60%] text-xs text-muted-foreground"
        >
          Built for Nigerian creators, powered by Paystack.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default HeroSection;
