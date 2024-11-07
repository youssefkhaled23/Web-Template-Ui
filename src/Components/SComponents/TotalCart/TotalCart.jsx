

const TotalCart = () => {
  return (
    <div className=" xl:col-span-1 md:col-span-1  ">
    <div className="bg-white rounded-lg border  shadow p-6 ">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Card Totals</h2>
      </div>

      <div className="space-y-4 text-gray-700 border-b-[1px] py-4">
        <div className="flex justify-between">
          <span className=" text-[#5F6C72] font-normal text-[14px]">
            Sub-total
          </span>
          <span className=" text-[#191C1F]">$320</span>
        </div>
        <div className="flex justify-between">
          <span className=" text-[#5F6C72] font-normal text-[14px]">
            Shipping
          </span>
          <span className=" text-[#191C1F]">Free</span>
        </div>
        <div className="flex justify-between">
          <span className=" text-[#5F6C72] font-normal text-[14px]">
            Discount
          </span>
          <span className=" text-[#191C1F]">$24</span>
        </div>
        <div className="flex justify-between">
          <span className=" text-[#5F6C72] font-normal text-[14px]">
            Tax
          </span>
          <span className=" text-[#191C1F]">$61.99</span>
        </div>
      </div>

      <div className="mt-6 flex justify-between">
        <div className="  font-normal text-[16px]">Total</div>
        <div className=" font-bold text-[16px]">$357.99 EGP</div>
      </div>

      <div className="mt-6 flex justify-between bg-[#2DA5F3] rounded-md">
        <button className="w-full  items-center  py-2 text-white rounded-md font-bold ">
          Proceed to Checkout
        </button>
        {/* <img src={arrow} alt="arrow" /> */}
      </div>
    </div>
    <div className=" my-4 p-6 bg-white shadow-lg rounded-md border">
      <h2 className="text-lg font-semibold mb-2">Coupon Code</h2>
      <hr className="border-t-1 border-gray-200 mb-4" />

      <input
        type="email"
        placeholder="Email address"
        className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <button className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-200">
        APPLY COUPON
      </button>
    </div>
  </div>
  )
}

export default TotalCart