import { Link } from "react-router-dom";
import SearchIcon from "../../../../assets/Svg/Search.svg";
import PropTypes from "prop-types"; // Add this import

import NavigationLinks from "../../../DComponents/Navigation/Navigation";
import Hamburger from "hamburger-react";
const CenterHeader = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  return (
    <div className="bg-[#0F298B] border-t border-[#dddddd8d] py-4 px-4 lg:px-8 xl:px-[200px]">
      <div className="container mx-auto">
        <div className="flex items-center justify-between gap-4">
          <div className="lg:hidden flex items-center">
            <div className="flex items-center">
              <Hamburger
                toggled={isMobileMenuOpen}
                toggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                size={24}
                color="white"
              />
              <NavigationLinks />
            </div>
          </div>

          <Link className="text-white font-bold text-2xl md:text-3xl">
            Company Logo
          </Link>

          <div className="hidden lg:block flex-1 max-w-2xl mx-4">
            <form className="relative">
              <input
                type="text"
                name="Search_Input"
                placeholder="Search for anything..."
                className="w-full h-12 px-4 pr-12 rounded-md focus:outline-none text-black"
              />
              <img
                src={SearchIcon}
                className="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer"
                alt="SearchIcon"
              />
            </form>
          </div>

          <div className="hidden lg:flex">
            <NavigationLinks />
          </div>
        </div>

        {/* Mobile Search */}
        <div className="lg:hidden mt-4">
          <form className="relative">
            <input
              type="text"
              name="Search_Input"
              placeholder="Search for anything..."
              className="w-full h-12 px-4 pr-12 rounded-md focus:outline-none text-black"
            />
            <img
              src={SearchIcon}
              className="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer"
              alt="SearchIcon"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default CenterHeader;
CenterHeader.propTypes = {
  isMobileMenuOpen: PropTypes.bool.isRequired, // Validate isMobileMenuOpen
  setIsMobileMenuOpen: PropTypes.func.isRequired, // Validate setIsMobileMenuOpen
};
