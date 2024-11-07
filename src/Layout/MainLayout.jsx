import { Outlet } from "react-router-dom";
import Header from "../Components/Common/Header/MainHeader/Header";
import Footer from "../Components/Common/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="font-display">
      <Header />
      <div className="mt-6">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
