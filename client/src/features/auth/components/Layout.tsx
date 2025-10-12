import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="w-screen flex flex-col items-center overflow-x-hidden">
      <header className="w-full py-4 px-[5%]">
        <Navbar />
      </header>

      <main className="w-full py-4 px-[5%] mt-6">
        <Outlet />
      </main>
    </div>
  );
};
export default Layout;
