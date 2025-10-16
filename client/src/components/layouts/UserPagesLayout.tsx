import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div data-page="userPages" className="flex flex-col min-h-screen">
      <header className="px-[5%] md:px-[2%]">
        <Navbar />
      </header>

      <main className="w-full md:h-[calc(100vh-64px)] md:grid md:grid-cols-[16vw_1fr] md:gap-6">
        {/* Sidebar: only visible on larger screens */}
        <aside className="hidden md:block">
          <Sidebar setIsMenuOpened={() => {}} />
        </aside>

        {/* Main content */}
        <div className="w-full overflow-y-auto px-[5%] py-4 md:px-[2%] md:pt-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
