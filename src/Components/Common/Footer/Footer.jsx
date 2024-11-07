import { Link } from "react-router-dom";
import RightArrow from "../../../assets/Svg/RightArrow.svg";

const Footer = () => {
  const footerLinks = [
    { title: "Computer & Laptop", to: "/" },
    { title: "SmartPhone", to: "/" },
    { title: "Headphone", to: "/" },
    { title: "Accessories", to: "/" },
    { title: "Camera & Photo", to: "/" },
    { title: "TV & Homes", to: "/" },
  ];

  const quickLinks = [
    { title: "Shop Product", to: "/" },
    { title: "Shoping Cart", to: "/" },
    { title: "Customer Help", to: "/" },
    { title: "About Us", to: "/" },
  ];

  const popularTags = [
    { title: "Game", to: "/" },
    { title: "Iphone", to: "/" },
    { title: "Tv", to: "/" },
    { title: "Asus laptop", to: "/" },
    { title: "Macbook", to: "/" },
    { title: "SSD", to: "/" },
    { title: "Graphics Card ", to: "/" },
    { title: "Power Bank", to: "/" },
    { title: "Smart TV", to: "/" },
    { title: "Speaker", to: "/" },
    { title: "Tablet", to: "/" },
    { title: "Microwave", to: "/" },
    { title: "Samsung", to: "/" },
  ];

  return (
    <div className="bg-[#191C1F] text-white px-6 sm:px-[200px] py-12">
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-8">
        <div className="col-span-1">
          <Link>
            <h1 className="text-2xl">LOGO</h1>
          </Link>
          <div className="flex flex-col gap-4 mt-6">
            <div>
              <p className="font-normal text-sm text-[#77878F]">
                Customer Supports:
              </p>
              <p className="font-medium text-base text-white">4545454502</p>
            </div>
            <p className="font-normal text-base text-[#ADB7BC]">
              Lorem ipsum dolor sit amet consectetur. In feugiat nulla lobortis
              facilisis amet.
            </p>
            <Link className="font-medium text-base text-white">
              ouhfsdhf@Gmai.com
            </Link>
          </div>
        </div>
        <div className="col-span-1 hidden sm:block">
          <h2 className="text-base font-medium text-white">TOP CATEGORY</h2>
          <div className="flex flex-col gap-2 mt-4">
            {footerLinks.map((item, index) => (
              <div key={index}>
                <Link
                  to={item.to}
                  className="text-base font-normal text-[#ADB7BC]"
                >
                  {item.title}
                </Link>
              </div>
            ))}
            <Link className="flex items-center gap-2 mt-2">
              <p className="text-sm font-medium text-[#2091F9]">
                Browse All Product
              </p>
              <img src={RightArrow} alt="" className="w-4 h-4" />
            </Link>
          </div>
        </div>
        <div className="col-span-1 sm:block">
          <h2 className="text-base font-medium text-white">QUICK LINKS</h2>
          <div className="flex flex-col gap-2 mt-4">
            {quickLinks.map((item, index) => (
              <div key={index}>
                <Link
                  to={item.to}
                  className="text-base font-normal text-[#ADB7BC]"
                >
                  {item.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-1 sm:block">
          <h2 className="text-base font-medium text-white">POPULAR TAG</h2>
          <div className="flex gap-3 flex-wrap mt-4">
            {popularTags.map((item, index) => (
              <Link
                to={item.to}
                key={index}
                className="border px-2 py-1.5 border-[#303639] rounded-sm flex justify-center items-center"
              >
                <p className="font-medium text-sm text-white">{item.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
