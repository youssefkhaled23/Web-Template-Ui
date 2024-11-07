import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import PropTypes from "prop-types"; // Add this import

const DropDown = ({ options, initialValue, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(initialValue);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
    onChange?.(option);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 px-3 py-1 text-white  rounded transition-colors duration-200"
      >
        <span className="text-sm font-medium">{selected.code}</span>
        <ChevronDown
          size={16}
          className={`transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 md:left-0 z-50 mt-1 w-32 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {options.map((option) => (
              <button
                key={option.code}
                onClick={() => handleSelect(option)}
                className={`
                  w-full text-left px-4 py-2 text-sm
                  ${
                    selected.code === option.code
                      ? "bg-blue-50 text-blue-700"
                      : "text-gray-700 hover:bg-gray-100"
                  }
                `}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDown;

DropDown.propTypes = {
  options: PropTypes.array.isRequired,
  initialValue: PropTypes.object.isRequired, // Validate initialValue
  onChange: PropTypes.func,
};
