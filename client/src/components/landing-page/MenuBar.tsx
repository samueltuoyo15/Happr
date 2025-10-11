import { Link, useNavigate } from "react-router-dom";
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
  { text: "Pricing", url: "#pricing" }
];

const MenuBar = ({ isMenuOpened, setIsMenuOpened }: PageProps) => {
  const navigate = useNavigate();

  return (
    <div className="fixed top-[6rem] left-1/2 -translate-x-1/2 w-[90vw] bg-white/30 backdrop-blur-md flex flex-col justify-center gap-3 text-sm p-3 border border-sidebar-border rounded-[1rem] z-50">
      {navLinks.map((navLink, idx) => (
        <Link
          to={navLink.url}
          key={idx}
          onClick={() => setIsMenuOpened(false)}
          className="transition-all duration-300 hover:text-primary"
        >
          {navLink.text}
        </Link>
      ))}

      <hr />

      <button
        onClick={() => navigate("/signup")}
        className="bg-primary text-primary-foreground p-4 rounded-full"
      >
        Get Started
      </button>
    </div>
  );
};

export default MenuBar;
