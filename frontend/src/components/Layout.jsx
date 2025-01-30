import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">

      <Header className="h-16 flex-none" />

      <main className="flex flex-grow justify-center p-0">
        <Outlet />
      </main>

      <Footer className="h-16 flex-none" />
    </div>
  );
};

export default Layout;
