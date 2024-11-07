import { Link } from "react-router-dom";
import DropDown from "../../../DComponents/DropDownMenu/DropDownMenu";
import useTopHeader from "../../../../Hooks/useTopHeader";
import useLangBtn from "../../../../Hooks/useLangBtn";

const TopHeader = () => {
  const { Icons, currencies, handleLanguageChange } = useTopHeader();
  const { currentLang, languages } = useLangBtn();

  return (
    <div className="bg-[#0F298B] text-white h-[52px] px-2 lg:px-8 xl:px-[170px]">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between h-full py-2 px-4 lg:px-8">
          {/* Left Side - Welcome Text */}
          <div className=" flex items-center justify-between w-full">
            <div className="flex items-center">
              <Link>
                <h1 className="text-sm  font-medium hover:text-opacity-80 transition-opacity">
                  Welcome to Company Name
                </h1>
              </Link>
            </div>

            {/* Right Side - Social & Language */}
            <div className="flex flex-col md:flex-row md:items-center gap-4 mt-2 md:mt-0">
              {/* Social Icons */}
              <div className="md:flex hidden items-center gap-4 pb-2 md:pb-0 md:border-r md:pr-4 border-white/20">
                <span className="text-sm font-medium">Follow us:</span>
                <div className="flex items-center gap-3 ">
                  {Icons.map((item, index) => (
                    <Link
                      to={item.to}
                      key={index}
                      className="hover:opacity-80 transition-opacity"
                    >
                      <img src={item.icon} alt={item.alt} className="w-5 h-5" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Language & Currency Dropdowns */}
              <div className="flex items-center gap-3 mb-2 md:mb-0 ">
                <div className="flex gap-2">
                  <DropDown
                    options={languages}
                    initialValue={languages.find(
                      (lang) => lang.code === currentLang
                    )}
                    onChange={handleLanguageChange}
                    className="min-w-[100px]"
                  />
                  <DropDown
                    options={currencies}
                    initialValue={currencies[0]}
                    className="min-w-[100px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
