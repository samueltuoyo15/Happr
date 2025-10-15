import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import MenuBar from "./MenuBar";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  return (
    <div className="w-screen flex flex-col iteme-center">
      <nav className="fixed top-[1rem] left-1/2 -translate-x-1/2 w-[90vw] bg-white/30 backdrop-blur-md flex items-center justify-between p-3 border border-border rounded-full z-50">
        <div
          onClick={() => navigate("/")}
          className="h-auto flex items-center justify-evenly gap-2"
        >
          <img
            src="/icons/happr-icon.jpg"
            width="36"
            height="36"
            className="rounded-full"
            alt="Happr Logo"
          />
          <h1 className="text-2xl"> Happr </h1>
        </div>

        <div
          onClick={() => setIsMenuOpened(!isMenuOpened)}
          className="p-2 bg-accent text-accent-foreground rounded-lg"
        >
          {isMenuOpened ? <X /> : <Menu />}
        </div>
      </nav>

      {isMenuOpened && (
        <MenuBar
          isMenuOpened={isMenuOpened}
          setIsMenuOpened={setIsMenuOpened}
        />
      )}
    </div>
  );
};
export default Navbar;
