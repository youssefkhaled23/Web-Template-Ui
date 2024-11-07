import { Link } from "react-router-dom";
import { ShoppingCart, Heart, Eye } from "lucide-react";
import Star from "../../../assets/Svg/Star.svg";
import PropTypes from "prop-types"; // Add this import

const ProductCard = ({ products }) => {
  const renderBadge = (product) => {
    if (product.isFeatured === "hot") {
      return (
        <div className="bg-[#EE5858] absolute top-0 left-0 m-2 px-4 py-2 font-bold text-[12px] text-white">
          HOT
        </div>
      );
    } else if (product.isFeatured === "best-deals") {
      return (
        <div className="bg-[#2DA5F3] absolute top-0 left-0 m-2 px-4 py-2 font-bold text-[12px] text-white">
          BEST DEALS
        </div>
      );
    } else if (product.isFeatured === "sale") {
      return (
        <div className="bg-[#FF6B6B] absolute top-0 left-0 m-2 px-4 py-2 font-bold text-[12px] text-white">
          SALE
        </div>
      );
    } else if (product.isFeatured === "25% off") {
      return (
        <div className="bg-[#4CAF50] absolute top-0 left-0 m-2 px-4 py-2 font-bold text-[12px] text-white">
          25% OFF
        </div>
      );
    }
    return null;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="border rounded-[3px] relative group cursor-pointer"
        >
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
            <div className="flex gap-2">
              <Link to="#">
                <div className="bg-[#FFFFFF] p-2 rounded-full transition-opacity duration-300 delay-150">
                  <ShoppingCart className="w-6 h-6 text-black" />
                </div>
              </Link>
              <Link to="#">
                <div className="bg-[#FFFFFF] p-2 rounded-full transition-opacity duration-300 delay-300">
                  <Heart className="w-6 h-6 text-black" />
                </div>
              </Link>
              <Link to="#">
                <div className="bg-[#2091F9] p-2 rounded-full transition-opacity duration-300 delay-450">
                  <Eye className="w-6 h-6 text-white" />
                </div>
              </Link>
            </div>
          </div>
          {renderBadge(product)}
          <div className="w-[220px] mx-auto mt-4">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="m-6">
            <div className="flex items-center">
              {Array(Math.round(product.rating))
                .fill(null)
                .map((_, index) => (
                  <img
                    key={index}
                    src={Star}
                    className="w-[20px] h-[20px]"
                    alt="star"
                  />
                ))}
              <p className="font-normal text-[14px] text-[#77878F] ml-2">
                ({product.numReviews})
              </p>
            </div>
            <p className="font-normal text-[14px] text-[#191C1F] my-2">
              {product.name}
            </p>
            <p className="text-[14px] font-bold text-[#2DA5F3]">
              ${product.price.toFixed(2)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
ProductCard.propTypes = {
  products: PropTypes.array.isRequired,
};
