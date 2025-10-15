import type { Dispatch, SetStateAction } from "react";
import { motion } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { X, LayoutPanelLeft, Heart, Wallet, Settings } from "lucide-react";

type NavLinks = { icon: React.ElementType; text: string; url: string };

const navLinks: NavLinks[] = [
  { icon: LayoutPanelLeft, text: "Dashboard", url: "/dashboard" },
  { icon: Heart, text: "Supporters", url: "/supporters" },
  { icon: Wallet, text: "Payouts", url: "/payouts" },
  { icon: Settings, text: "Settings", url: "/settings" }
];

const Sidebar = ({
  setIsMenuOpened
}: {
  setIsMenuOpened: Dispatch<SetStateAction<boolean>>;
}) => {
  const location = useLocation();

  return (
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed w-full h-screen flex flex-col gap-5 bg-card text-card-foreground p-[6%] border border-border z-40"
    >
      <button className="my-2" onClick={() => setIsMenuOpened(false)}>
        <X size={34} />
      </button>

      <div className="w-full flex flex-col gap-5">
        {navLinks.map((navLink, idx) => {
          const Icon = navLink.icon;

          return (
            <Link
              to={navLink.url}
              key={idx}
              className={`w-full flex items-center gap-3 ${
                location.pathname === navLink.url
                  ? "text-primary"
                  : "text-card-foreground"
              } transition-colors duration-300 hover:text-primary`}
            >
              <Icon />
              {navLink.text}
            </Link>
          );
        })}
      </div>

      <hr className="border border-border opacity-[80%] my-2" />

      <button className="self-start flex items-center gap-3 text-destructive text-md">
        <Settings /> Signout
      </button>
    </motion.div>
  );
};
export default Sidebar;
