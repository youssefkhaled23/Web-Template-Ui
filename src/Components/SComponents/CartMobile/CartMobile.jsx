import { Minus, Plus } from "lucide-react";
import fal from "../../../assets/Svg/False.svg";
import { useState } from "react";

const CartMobile = () => {
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
    <div className="block md:hidden space-y-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="border  shadow-md rounded-lg overflow-hidden p-4"
        >
          <div className="flex items-center gap-4">
            <div className="relative w-20 h-20 bg-gray-100 rounded border flex items-center justify-center">
              <svg
                className="w-8 h-8 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                <circle cx="9" cy="9" r="2" />
                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-500">{item.title}</p>
              <p className="text-sm font-medium">${item.price}</p>
            </div>
            <img src={fal} alt="fal" className="w-10 h-10 cursor-pointer" />
          </div>

          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center justify-center border w-32 p-2 rounded-md">
              <button
                onClick={() => updateQuantity(item.id, -1)}
                className="flex items-center justify-center"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-8 text-center">
                {String(item.quantity).padStart(2, "0")}
              </span>
              <button
                onClick={() => updateQuantity(item.id, 1)}
                className="flex items-center  justify-center rounded hover:bg-gray-50"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>

            <div className="font-medium">
              ${(item.price * item.quantity).toFixed(2)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartMobile;
