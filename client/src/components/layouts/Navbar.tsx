import { useState } from "react";
import { Menu } from "lucide-react";
import Sidebar from "./Sidebar";
import useIsMobile from "@/hooks/use-mobile";

const Navbar = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const isMobile = useIsMobile();

  return (
    <div className="w-full flex flex-col items-center">
      <nav
        className={`w-full flex items-center justify-between py-4 ${
          !isMobile ? "border-b border-border" : ""
        }`}
      >
        <div className="flex items-center gap-2">
          {isMobile ? (
            <div
              onClick={() => setIsMenuOpened(!isMenuOpened)}
              className="p-2 bg-card rounded-sm cursor-pointer"
            >
              <Menu />
            </div>
          ) : (
            <img
              src="/icons/happr-icon.jpg"
              width="32"
              height="32"
              className="rounded-full"
              alt="Happr Logo"
            />
          )}
          <h1 className="text-primary text-2xl">Happr</h1>
        </div>

        <img
          src="https://i.pravatar.cc/300"
          alt="Avatar"
          loading="eager"
          className="w-10 h-10 object-cover border border-border rounded-full"
        />
      </nav>

      {isMobile && isMenuOpened && (
        <Sidebar setIsMenuOpened={setIsMenuOpened} />
      )}
    </div>
  );
};

export default Navbar;
