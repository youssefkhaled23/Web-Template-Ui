import arrow from "../../../assets/Svg/Arrow.svg";

const StaticBtn = () => {
  return (
    <div>
      <button className=" bg-[#2091F9] px-[24px] h-[48px] items-center flex gap-4 text-[white] rounded-[9px] ">
        Shop Now
        <img src={arrow} alt="arrow" />
      </button>
    </div>
  );
};

export default StaticBtn;
