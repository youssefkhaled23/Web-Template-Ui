import arrow from "../../../assets/Svg/Arrow.svg";

const Subscription = () => {
  return (
    <div className="bg-[#0F298B] px-4 py-16 sm:px-10 md:px-20 lg:px-40">
      <div className="flex flex-col gap-4 items-center">
        <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-white text-center">
          Subscribe to our newsletter
        </h1>
        <p className="font-normal text-base sm:text-lg text-center text-white opacity-75 md:w-[536px]">
          Praesent fringilla erat a lacinia egestas. Donec vehicula tempor
          libero et cursus. Donec non quam urna. Quisque vitae porta ipsum.
        </p>
        <form className="relative w-full max-w-2xl mt-6">
          <input
            type="text"
            name=""
            placeholder="Email address"
            className="w-full h-16 rounded-[3px] focus:outline-none p-3 bg-white shadow-md"
          />
          <button
            type="submit"
            className="flex absolute top-1/2 -translate-y-1/2 right-2 items-center gap-2 bg-[#FA8232] px-6 py-3 rounded"
          >
            <p className="font-bold text-base text-white">Subscribe</p>
            <img src={arrow} alt="" />
          </button>
        </form>
        <hr className="w-[424px] bg-[#FFFFFF] opacity-[12%] mx-auto opacity-12 mt-6 hidden sm:block" />
      </div>
    </div>
  );
};

export default Subscription;
