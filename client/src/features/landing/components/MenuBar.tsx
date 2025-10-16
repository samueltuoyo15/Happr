import { motion, AnimatePresence } from "motion/react";
import CtaButton from "./CtaButton";
import { useNavigate } from "react-router-dom";
import type { Dispatch, SetStateAction } from "react";

type PageProps = {
  isMenuOpened: boolean;
  setIsMenuOpened: Dispatch<SetStateAction<boolean>>;
};

type NavLinks = {
  text: string;
  url: string;
};

const navLinks: NavLinks[] = [
  { text: "How It Works", url: "#how-it-works" },
  { text: "Creator Stories", url: "#creator-stories" },
  { text: "Claim your page", url: "#join-us" },
  { text: "Pricing", url: "#pricing" }
];

const dropIn = {
  hidden: { opacity: 0, y: -10, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.97,
    transition: { duration: 0.2, ease: "easeInOut" }
  }
};

const MenuBar = ({ isMenuOpened, setIsMenuOpened }: PageProps) => {
  const navigate = useNavigate();

  return (
    <AnimatePresence>
      {isMenuOpened && (
        <motion.div
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed top-[6rem] left-0 right-0 mx-auto w-[90vw] bg-white/30 backdrop-blur-md flex flex-col justify-center gap-3 text-sm p-3 border border-sidebar-border rounded-[1rem] z-50 shadow-lg"
        >
          <div className="w-full flex flex-col gap-3 md:flex-row md:justify-evenly">
            {navLinks.map((navLink, idx) => (
              <a
                href={navLink.url}
                key={idx}
                onClick={() => setIsMenuOpened(false)}
                className="transition-all duration-300 hover:text-primary"
              >
                {navLink.text}
              </a>
            ))}
          </div>

          <hr className="border-sidebar-border" />

          <CtaButton
            onClick={() => {
              setIsMenuOpened(false);
              navigate("/signup");
            }}
            className="w-full"
          >
            Get Started
          </CtaButton>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MenuBar;
