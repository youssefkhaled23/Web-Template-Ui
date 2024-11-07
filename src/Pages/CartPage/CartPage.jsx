import CardTabel from "../../Components/SComponents/CardTabel/CardTabel";
import CartMobile from "../../Components/SComponents/CartMobile/CartMobile";
import TotalCart from "../../Components/SComponents/TotalCart/TotalCart";
import CartButton from "../../Components/SComponents/CartButton/CartButton";

const CartPage = () => {
  return (
    <div className=" grid xl:grid-cols-4 md:grid-col-3 grid-cols-1 gap-3  w-[90%] mx-auto ">
      <div className=" xl:col-span-3 md:col-span-2 col-span-1   ">
        <div className="  md:bg-white rounded-lg md:shadow  md:border">
          <CardTabel />
          <CartMobile />
          <CartButton />
        </div>
      </div>
      <TotalCart />
    </div>
  );
};

export default CartPage;
