import { SwiperSlide } from "swiper/react";
import SwiperComponents from "../../DComponents/SwiperComponents/SwiperComponents";
import im from "../../../assets/imges/db377c4c79623392434e52dff35e335b.png";

const ShopSlider = () => {
  const dataArray = [
    {
      im: im,
      title: "Title 1",
      label: "Label 1",
    },
    {
      im: im,
      title: "Title 2",
      label: "Label 2",
    },
    {
      im: im,
      title: "Title 3",
      label: "Label 3",
    },
    {
      im: im,
      title: "Title 4",
      label: "Label 4",
    },
    {
      im: im,
      title: "Title 5",
      label: "Label 5",
    },
    {
      im: im,
      title: "Title 5",
      label: "Label 5",
    },
    {
      im: im,
      title: "Title 5",
      label: "Label 5",
    },
  ];

  return (
    <div>
      <div className="w-[90%] mx-auto">
        <SwiperComponents
          spaceBetween={6}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
            1280: {
              slidesPerView: 5,
            },
          }}
        >
          {dataArray?.map((e, index) => (
            <SwiperSlide key={index}>
              <div className="border-2 rounded-[15px] cursor-pointer xl:py-[24px] xl:px-[25px] w-[80%] md:w-full  mx-auto">
                <div className="gap-4">
                  <div className="xl:w-[148px] text-center mx-auto w-[100px] p-4">
                    <img src={e.im} alt="icon" className=" w-full" />
                  </div>
                  <div>
                    <h1 className=" mx-auto p-4 text-[16px] font-normal  text-center  leading-[24px] text-[#212746]">
                      {e.title}
                    </h1>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </SwiperComponents>
      </div>
    </div>
  );
};

export default ShopSlider;
