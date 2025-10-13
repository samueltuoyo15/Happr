import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="w-screen flex flex-col items-center overflow-x-hidden">
      <header className="w-full py-4 px-[6%]">
        <Navbar />
      </header>

      <main className="w-full py-4 px-[6%] mt-4">
        <Outlet />
      </main>
    </div>
  );
};
export default Layout;
