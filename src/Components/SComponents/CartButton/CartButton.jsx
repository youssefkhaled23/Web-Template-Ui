import { ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"

const CartButton = () => {
  return (
    <div className="flex justify-between font-bold p-4">
            <Link to={"/checkout"} className="flex items-center gap-2 px-4 py-2 border-2 text-[#2DA5F3] rounded border-[#2DA5F3] ">
              <ArrowLeft className="w-4 h-4" />
              Return to Shop
            </Link>
            <button className="px-4 py-2 border-2 rounded border-[#2DA5F3] text-[#2DA5F3]    ">
              Update Cart
            </button>
          </div>
  )
}

export default CartButton