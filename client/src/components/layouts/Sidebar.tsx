import type { Dispatch, SetStateAction } from "react";
import { motion } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import {
  X,
  LayoutPanelLeft,
  Heart,
  Wallet,
  Settings,
  LogOut
} from "lucide-react";
import useIsMobile from "@/hooks/use-mobile";

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
  const isMobile = useIsMobile();

  return (
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed inset-0 w-full h-full z-50 sm:static sm:w-full sm:h-full sm:z-auto flex flex-col gap-5 bg-card text-card-foreground p-6 border border-border"
    >
      {isMobile && (
        <button
          className="my-2 self-end"
          onClick={() => setIsMenuOpened(false)}
        >
          <X size={34} />
        </button>
      )}

      <nav className="flex flex-col gap-5 flex-1">
        {navLinks.map(({ icon: Icon, text, url }, idx) => (
          <Link
            key={idx}
            to={url}
            onClick={() => setIsMenuOpened(false)}
            className={`flex items-center gap-3 transition-colors duration-300 ${
              location.pathname === url
                ? "text-primary"
                : "text-card-foreground"
            } hover:text-primary`}
          >
            <Icon />
            {text}
          </Link>
        ))}
      </nav>

      <hr className="border border-border opacity-80 my-2" />

      <button
        onClick={() => setIsMenuOpened(false)}
        className="self-start flex items-center gap-3 text-destructive text-md"
      >
        <LogOut /> Signout
      </button>
    </motion.div>
  );
};

export default Sidebar;
