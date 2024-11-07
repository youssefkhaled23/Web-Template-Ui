import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import fal from "../../../assets/Svg/False.svg";

const CardTabel = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet consectetur.",
      description: "Metus maecenas mi nam faucibus.",
      price: 70,
      quantity: 1,
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet consectetur.",
      description: "Metus maecenas mi nam faucibus.",
      price: 250,
      quantity: 3,
    },
  ]);

  const updateQuantity = (id, change) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          const newQuantity = Math.max(0, item.quantity + change);
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };
  return (
    <div className=" md:block hidden ">
      <div className="mb-6 p-4">
        <h1 className="text-2xl font-semibold">Shopping Cart</h1>
      </div>
      <div className="grid grid-cols-4 p-2 my-2 gap-4  bg-[#E4E7E9] text-sm font-medium text-[#475156]">
        <div className="col-span-2 ">PRODUCTS</div>

        <div>QUANTITY</div>
        <div className=" text-[12px] whitespace-nowrap">SUB-TOTAL</div>
      </div>
      <div className=" border-b-[1px]">
        {/* Cart Items */}
        {items.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-4 gap-4 items-center py-4 px-4  "
          >
            <div className="col-span-2 flex items-center gap-4 ">
              <img src={fal} alt="fal" className=" cursor-pointer" />
              <div className="relative w-20 h-20 bg-gray-100 rounded border flex items-center justify-center"></div>
              <div>
                <p className="md:text-[14px] text-[12px]  text-gray-500">
                  {item.title}
                </p>
                <p className="text-sm font-medium">${item.price}</p>
              </div>
            </div>

            <div className="flex border md:w-[120px] w-[70px] py-4 rounded-md  md:pl-4 sm:px-1  items-center ">
              <button
                onClick={() => updateQuantity(item.id, -1)}
                className=" flex items-center justify-center "
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-12 text-center">
                {String(item.quantity).padStart(2, "0")}
              </span>
              <button
                onClick={() => updateQuantity(item.id, 1)}
                className="   flex items-center justify-center  rounded hover:bg-gray-50"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>

            <div className="font-medium">
              ${(item.price * item.quantity).toFixed(2)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardTabel;
