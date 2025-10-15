import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div data-page="userPages">
      <header>
        <Navbar />
      </header>

      <main className="w-full py-4 px-[5%] mt-2">
        <Outlet />
      </main>
    </div>
  );
};
export default Layout;
