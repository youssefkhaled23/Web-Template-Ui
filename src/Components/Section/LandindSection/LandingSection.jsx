import test from "../../../assets/imges/db377c4c79623392434e52dff35e335b.png";
import StaticBtn from "../../DComponents/StaticBtn/StaticBtn";
const LandingSection = () => {
  return (
    <div className="grid  md:grid-cols-2 gap-4 bg-[#F2F4F5] w-[85%] mx-auto rounded-md p-8 text-center md:text-start ">
      <div className=" xl:col-span-1 md:col-span-1 flex flex-col justify-center ">
        <div className="flex flex-col gap-4">
          <h1 className=" text-[#191C1F]  font-semibold xl:text-[48px] text-[25px] md:leading-[56px] ">
            Lorem ipsum dolor sit
          </h1>
          <p className="md:w-[356px]  font-normal text-[18px] leading-[24px] text-[#475156]  ">
            Lorem ipsum dolor sit amet consectetur. Tortor integer mauris at
            morbi bibendum justo mauris semper et. Aliquet gravida.
          </p>
          <div className="flex w-full justify-center md:justify-start">
            <StaticBtn />
          </div>
        </div>
      </div>
      <div className=" md:col-span-1 p-4">
        <div className=" flex items-center justify-center">
          <img src={test} alt="test" className="xl:w-[386px] w-full" />
        </div>
      </div>
    </div>
  );
};

export default LandingSection