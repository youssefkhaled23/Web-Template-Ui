import { Outlet, useLocation } from "react-router-dom";
import Header from "../Components/Common/Header/MainHeader/Header";
import Footer from "../Components/Common/Footer/Footer";
import Breadcrumb from "../Components/DComponents/Breadcrumb/Breadcrumb";

const MainLayout = () => {
  
  const location = useLocation();
  
  return (
    <div className="font-display">
      <Header />
      {/* <div className="border border-red-500 py-4">
        <h1>Current Path: {location}</h1>
      </div> */}
         {location.pathname !== "/" && <Breadcrumb />}
      <div className="mt-6">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
