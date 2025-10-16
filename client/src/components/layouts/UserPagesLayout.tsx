import useIsMobile from "@/hooks/use-mobile";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = () => {
  const isMobile = useIsMobile();

  return (
    <div data-page="userPages" className="flex flex-col min-h-screen">
      <header className={isMobile ? "px-[5%]" : "px-[2%]"}>
        <Navbar />
      </header>

      {!isMobile ? (
        <main className="h-[calc(100vh-64px)] grid grid-cols-[16vw_1fr] justify-center gap-6">
          <Sidebar setIsMenuOpened={() => {}} />
          <div className="overflow-y-auto pr-4 pt-6">
            <Outlet />
          </div>
        </main>
      ) : (
        <main className="w-full px-[5%] py-4">
          <Outlet />
        </main>
      )}
    </div>
  );
};

export default Layout;
