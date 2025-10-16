import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div
      data-page="authPage"
      className="w-screen flex flex-col items-center overflow-x-hidden min-h-screen"
    >
      <header className="w-full py-4 px-[6%]">
        <Navbar />
      </header>

      <main className="w-full mt-4 px-[6%] flex-1 md:mt-0 md:flex md:justify-center md:items-center">
        <div className="w-full md:max-w-lg md:p-8 md:border md:rounded-2xl flex justify-center">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
