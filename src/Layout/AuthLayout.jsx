import { Outlet } from "react-router-dom";
import AuthHeader from "../Components/Common/AuthHeader/AuthHeader";
import Footer from "../Components/Common/Footer/Footer";

const AuthLayout = () => {
  return (
    <>
      <AuthHeader />
      <Outlet />
      <Footer />
    </>
  );
};

export default AuthLayout;
