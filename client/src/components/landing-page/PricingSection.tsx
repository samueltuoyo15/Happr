import { motion } from "motion/react";
import { Smile, Zap, HandCoins, ArrowRight, ArrowDown } from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  hover: {
    scale: 1.05,
    rotate: -2,
    transition: { type: "spring", stiffness: 250 }
  }
};

const PricingSection = () => {
  return (
    <section
      id="pricing"
      className="w-full py-16 flex flex-col items-center
    scroll-mt-16"
    >
      <motion.h2
        className="text-tbh text-primary text-3xl font-semibold text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Transparent Pricing
      </motion.h2>

      <motion.div
        className="w-full max-w-4xl bg-card border border-border rounded-3xl p-8"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Step 1 */}
          <motion.div
            className="flex flex-col items-center text-center flex-1"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
          >
            <Smile className="text-tbh w-10 h-10 mb-3" />
            <h3 className="font-semibold text-lg mb-1">Fans send Smiles</h3>
            <p className="text-muted-foreground text-sm">
              Fun, quick tips that show love and support.
            </p>
          </motion.div>

          {/* Arrow connector */}
          <ArrowDown className="text-tbh w-6 h-6 block md:hidden" />
          <ArrowRight className="text-tbh w-6 h-6 hidden md:block" />

          {/* Step 2 */}
          <motion.div
            className="flex flex-col items-center text-center flex-1"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Zap className="text-tbh w-10 h-10 mb-3" />
            <h3 className="font-semibold text-lg mb-1">Happr handles it</h3>
            <p className="text-muted-foreground text-sm">
              Payments processed instantly and securely.
            </p>
          </motion.div>

          {/* Arrow connector */}
          <ArrowDown className="text-tbh w-6 h-6 block md:hidden" />
          <ArrowRight className="text-tbh w-6 h-6 hidden md:block" />

          {/* Step 3 */}
          <motion.div
            className="flex flex-col items-center text-center flex-1"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <HandCoins className="text-tbh w-10 h-10 mb-3" />
            <h3 className="font-semibold text-lg mb-1">You earn instantly</h3>
            <p className="text-muted-foreground text-sm">
              You keep <span className="font-semibold">95%</span>. No hidden
              fees.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default PricingSection;
