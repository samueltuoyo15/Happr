import { useState } from "react";
import { motion } from "motion/react";
import { toast } from "sonner";
import CtaButton from "./CtaButton";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const scaleInVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const JoinUsSection = () => {
  const [username, setUsername] = useState<string>("");

  const handleSubmit = async () => {
    if (!username || username.trim().length < 1) {
      toast.error("Invalid username input");
      return;
    }

    setUsername("");
  };

  return (
    <section
      id="join-us"
      className="w-full flex flex-col items-center gap-4 py-8"
    >
      <motion.h2
        className="text-primary text-3xl font-semibold text-center"
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Join the Happr Community
      </motion.h2>

      <motion.div
        className="w-full flex flex-col items-center justify-center gap-6 bg-card p-4 rounded-lg"
        variants={scaleInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.p
          className="text-center text-card-foreground"
          variants={fadeUpVariants}
        >
          Musicians, artists, writers, gamers — anyone can receive Smiles from
          fans. Start your Happr page today and make your passion pay — one
          smile at a time.
        </motion.p>

        <motion.div
          className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-4 px-3 py-2 text-sm text-muted-foreground border border-border mt-4 rounded-lg md:rounded-full"
          variants={fadeUpVariants}
        >
          <form
            onSubmit={async e => {
              e.preventDefault();
              await handleSubmit();
            }}
            id="join-us-form"
            className="flex items-center w-full sm:w-auto flex-grow overflow-hidden"
          >
            <p className="whitespace-nowrap text-xs sm:text-sm text-muted-foreground">
              https://happr.me/
            </p>
            <input
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              placeholder="username"
              className="flex-grow bg-transparent rounded-full px-2 py-1 focus:outline-none text-xs sm:text-sm"
            />
          </form>

          <motion.div
            className="w-full sm:w-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <CtaButton
              type="submit"
              form="join-us-form"
              className="text-sm py-2 px-4 w-full whitespace-nowrap rounded-lg sm:w-auto md:rounded-full"
            >
              Claim Page
            </CtaButton>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default JoinUsSection;
