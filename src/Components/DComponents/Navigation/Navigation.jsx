import { ShoppingCart, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import User from "../../../assets/Svg/User.svg";

const NavigationLinks = () => {
  return (
    <div className="flex items-center gap-6">
      <Link to="/" className="relative inline-flex items-center justify-center">
        <ShoppingCart className="w-6 h-6 text-white" />
        <span className="absolute -top-3 -right-2 h-[20px] text-[#1B6392] w-[20px] text-[13px] border-2 border-[#1B6392] bg-white  rounded-full flex items-center justify-center font-semibold">
          2
        </span>
      </Link>

      <Link to="/" className="inline-flex items-center justify-center">
        <Heart className="w-6 h-6 text-white" />
      </Link>

      <Link to="/" className="inline-flex items-center justify-center">
        <img src={User} className="w-6 h-6 " alt="" />
      </Link>
    </div>
  );
};

export default NavigationLinks;
