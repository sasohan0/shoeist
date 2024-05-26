import { Outlet } from "react-router-dom";
import Navbar from "../commons/Navbar";
import Footer from "../commons/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
