import { useEffect } from "react";
import { useLocation } from "react-router-dom";
// import Hamburger from "hamburger-react";
import { Headphones, HelpCircle, Menu, X } from "lucide-react";
import NavLink from "../../../DComponents/NavLink/NavLink";
import PropTypes from "prop-types";

const BottomHeader = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const location = useLocation();
  const dir = window.localStorage.getItem("dir");

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location, setIsMobileMenuOpen]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest(".mobile-menu-container")) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen, setIsMobileMenuOpen]);

  return (
    <div className="relative border-b border-[#E4E7E9]">
      {/* Desktop Navigation */}
      <div className="container mx-auto px-4 lg:px-8 xl:px-[200px]">
        <nav className="hidden lg:flex items-center justify-center  py-4">
          <NavLink to="/" icon={Menu} text="All Category" />
          <NavLink
            to="/customer-support"
            icon={Headphones}
            text="Customer Support"
          />
          <NavLink to="/need-help" icon={HelpCircle} text="Need Help" />
        </nav>
      </div>

      {/* Mobile Slide-out Menu */}
      <div
        className={`fixed top-0 h-full bg-white shadow-lg transition-transform duration-300 transform w-[90%] z-50 mobile-menu-container ${
          dir === "rtl" ? "right-0" : "left-0"
        } ${
          isMobileMenuOpen
            ? "translate-x-0"
            : dir === "rtl"
            ? "translate-x-full"
            : "-translate-x-full"
        }`}
      >
        {/* Mobile Menu Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h5 className="text-xl font-semibold">Menu</h5>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Mobile Menu Content */}
        <div className="p-4">
          <div className="space-y-4">
            {/* Primary Navigation */}
            <div className="pb-4 border-b">
              <NavLink to="/" icon={Menu} text="All Category" />
              <NavLink
                to="/customer-support"
                icon={Headphones}
                text="Customer Support"
              />
              <NavLink to="/need-help" icon={HelpCircle} text="Need Help" />
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  );
};

export default BottomHeader;
BottomHeader.propTypes = {
  isMobileMenuOpen: PropTypes.bool.isRequired,
  setIsMobileMenuOpen: PropTypes.func.isRequired,
};
