import twitter from "../assets/Svg/Twitter.svg";
import FaceBook from "../assets/Svg/FaceBook.svg";
import Pintrest from "../assets/Svg/Pintrest.svg";
import Reddit from "../assets/Svg/Reddit.svg";
import YouTube from "../assets/Svg/YouTube.svg";
import Instagram from "../assets/Svg/Instagram.svg";
import useLangBtn from "./useLangBtn";

const useTopHeader = () => {
  const { langHandler } = useLangBtn();

  const Icons = [
    { icon: twitter, to: "/", alt: "twitter" },
    { icon: FaceBook, to: "/", alt: "FaceBook" },
    { icon: Pintrest, to: "/", alt: "Pintrest" },
    { icon: Reddit, to: "/", alt: "Reddit" },
    { icon: YouTube, to: "/", alt: "YouTube" },
    { icon: Instagram, to: "/", alt: "Instagram" },
  ];

  const currencies = [
    { code: "EGP", label: "Egyptian Pound" },
    { code: "USD", label: "US Dollar" },
    { code: "EUR", label: "Euro" },
    { code: "GBP", label: "British Pound" },
  ];

  const handleLanguageChange = (option) => {
    langHandler(option.code === "Eng" ? "Eng" : "Ar");
  };

  return {
    Icons,
    currencies,
    handleLanguageChange,
  };
};

export default useTopHeader;
