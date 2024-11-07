import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { SwiperSlide } from "swiper/react";
import SwiperComponents from "../../Components/DComponents/SwiperComponents/SwiperComponents";
import img from "../../assets/imges/db377c4c79623392434e52dff35e335b.png";
import star from "../../assets/Svg/Star.svg";
import cart from "../../assets/Svg/Cart.svg";
import paymendMethod from "../../assets/Svg/paymentMethod.svg";
import product from "../../data/productDetails";
import ProductGrid from "../../Components/Section/ProductGrid/ProductGrid";
import ProductTable from "../../Components/SComponents/ProductTable/ProductTable";

const ProductDetails = () => {
  const [selectedImage, setSelectedImage] = useState(img);
  const [quantity, setQuantity] = useState(1);

  const updateQuantity = (value) => {
    setQuantity(Math.max(1, quantity + value));
  };

  return (
    <div>
      <div className="my-6 w-[90%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4">
          <div className="col-span-1">
            <div className="flex items-center justify-center">
              <div className="w-full border border-gray-200 rounded-md">
                <img
                  src={selectedImage}
                  className="w-full h-[450px]"
                  alt="Main Display"
                />
              </div>
            </div>
            <div className="mt-6">
              <SwiperComponents
                slidesPerView={1}
                spaceBetween={5}
                pagination={{ clickable: true }}
                breakpoints={{
                  640: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 4 },
                  1280: { slidesPerView: 5 },
                }}
                onSwiper={(swiper) => swiper}
              >
                {product.images.map((item, index) => (
                  <SwiperSlide key={index} className="w-24 h-24">
                    <div
                      className="border w-full h-full mx-auto border-gray-200 rounded-md cursor-pointer"
                      onClick={() => setSelectedImage(item.src)}
                    >
                      <img
                        src={item.src}
                        className="h-[100px] w-full"
                        alt={item.title}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </SwiperComponents>
            </div>
          </div>
          <div className="col-span-2">
            <div className="border p-4 rounded-md">
              <div className="flex items-center">
                {Array(5)
                  .fill()
                  .map((_, index) => (
                    <div key={index}>
                      <img src={star} className="w-5 h-5" alt="Star" />
                    </div>
                  ))}
                <div className="flex items-center gap-2 ml-2">
                  <h2 className="font-bold text-sm">
                    {product.rating} Star Rating
                  </h2>
                  <p className="font-normal text-sm text-gray-500">
                    ({product.ratingCount} User feedback)
                  </p>
                </div>
              </div>
              <p className="my-4 text-base">{product.description}</p>
              <p className="text-sm">
                Availability:
                <span className="text-green-500">{product.availability}</span>
              </p>
              <div className="flex items-center md:w-[50%] justify-between text-sm my-3">
                <p>
                  Brand: <span className="font-medium">{product.brand}</span>
                </p>
                <p>
                  Category:{" "}
                  <span className="font-medium">{product.category}</span>
                </p>
              </div>
              <div className="flex items-center gap-2 my-4">
                <p className="text-blue-500 font-bold text-xl">
                  ${(product.price * quantity).toFixed(2)}
                </p>
                <p className="font-normal text-lg text-gray-500">
                  <span className="line-through">
                    ${product.oldPrice.toFixed(2)}
                  </span>
                </p>
                <div className="px-2 py-1 bg-blue-500 rounded-md">
                  <p className="font-bold text-sm text-white">
                    {product.discount}% OFF
                  </p>
                </div>
              </div>
              <hr className="my-4 bg-gray-200" />
              <h3 className="font-bold text-sm my-2">Features</h3>
              <div className="space-y-2">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <img src={feature.icon} className="w-6 h-6" alt="" />
                    <p className="text-sm">{feature.title}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-4 mt-6">
                <div className="flex border px-5 md:w-[164px] py-2 rounded-md items-center justify-center gap-4">
                  <button
                    onClick={() => updateQuantity(-1)}
                    className="flex items-center justify-center"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="text-center">{quantity}</span>
                  <button
                    onClick={() => updateQuantity(1)}
                    className="flex items-center justify-center"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <button className="flex items-center gap-2 bg-blue-500 px-8 py-2 rounded-md text-white font-bold text-base">
                  Add to cart
                  <img src={cart} className="w-[20px]" alt="" />
                </button>
                <button className="flex items-center border border-blue-500 px-8 py-2 rounded-md text-blue-500 font-bold text-base">
                  Buy Now
                </button>
              </div>
            </div>
            <div className="border mt-4 flex flex-col gap-3 p-5">
              <p className="font-normal text-sm text-gray-800">
                100% Guarantee Safe Checkout
              </p>
              <img
                src={paymendMethod}
                className="w-[300px]"
                alt="Payment Methods"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="my-6">
        <ProductTable />
      </div>
      <div className="my-6 mx-auto w-[95%]">
        <ProductGrid />
      </div>
    </div>
  );
};

export default ProductDetails;
