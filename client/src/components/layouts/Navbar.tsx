import { useState } from "react";
import { Menu } from "lucide-react";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  return (
    <div className="w-screen flex flex-col items-center">
      <nav className="w-full flex items-center justify-between py-4 px-[5%]">
        <div className="h-auto flex items-center justify-evenly gap-2">
          <div
            onClick={() => setIsMenuOpened(!isMenuOpened)}
            className="p-[.60rem] bg-card rounded-sm"
          >
            <Menu />
          </div>

          <h1 className="text-primary text-2xl"> Happr </h1>
        </div>

        <img
          src="https://i.pravatar.cc/300"
          alt="Random Avatar"
          loading="eager"
          className="w-10 h-10 object-cover border border-border rounded-full"
        />
      </nav>

      {isMenuOpened && <Sidebar setIsMenuOpened={setIsMenuOpened} />}
    </div>
  );
};
export default Navbar;
