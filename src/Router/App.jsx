import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from "../Components/DComponents/Loading/Loading";

const MainLayout = lazy(() => import("../Layout/MainLayout"));
const Home = lazy(() => import("../Pages/Home/Home"));
const AuthLayout = lazy(() => import("../Layout/AuthLayout"));
const Login = lazy(() => import("../Pages/Login/Login"));
const Error = lazy(() => import("../Pages/Error/Error"));
const CartPage = lazy(() => import("../Pages/CartPage/CartPage"));
const CheckOut = lazy(() => import("../Pages/CheckOut/CheckOut"));
const Details = lazy(() => import("../Pages/Details/Details"));
const Register = lazy(() => import("../Pages/SignUp/SignUp"));
const OTP = lazy(() => import("../Pages/OTP/OTP"));
const Products = lazy(() => import("../Pages/Product/Product"));
const ForgetPassword = lazy(() =>
  import("../Pages/ForgetPassword/ForgetPassword")
);

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "cart",
          element: <CartPage />,
        },
        {
          path: "CheckOut",
          element: <CheckOut />,
        },
        {
          path: "Products",
          element: <Products />,
        },
        {
          path: "Details/:id",
          element: <Details />,
        },
      ],
    },
    {
      path: "/User",
      element: <AuthLayout />,
      children: [
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "forgetPassword",
          element: <ForgetPassword />,
        },
        {
          path: "OTP-verify",
          element: <OTP />,
        },
      ],
    },
  ]);

  return (
    <>
      <Suspense
        fallback={
          <>
            <Loading />
          </>
        }
      >
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
}
