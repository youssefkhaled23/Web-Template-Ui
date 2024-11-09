import { useState } from "react";
import PropTypes from "prop-types"; // Add this import

const SidebarFilter = ({ activeFilters, onFilterChange }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Sample data
  const categories = [
    {
      id: 1,
      name: "Electronics Devices",
      subcategories: [
        "Computer & Laptop",
        "Computer Accessories",
        "SmartPhone",
        "Headphone",
        "Mobile Accessories",
        "Gaming Console",
        "Camera & Photo",
        "TV & Home Appliances",
      ],
    },
  ];

  const brands = [
    "Apple",
    "Google",
    "Microsoft",
    "Samsung",
    "Dell",
    "HP",
    "Symphony",
    "Panasonic",
    "Sony",
    "Xiaomi",
    "OnePlus",
    "Intel",
  ];

  const tags = [
    "Game",
    "iPhone",
    "TV",
    "Asus Laptops",
    "Macbook",
    "SSD",
    "Power Bank",
    "Smart TV",
    "Tablet",
    "Microwave",
    "Samsung",
  ];

  const priceRanges = [
    { label: "All Price", value: [0, 10000] },
    { label: "Under $20", value: [0, 20] },
    { label: "$20 to $100", value: [20, 100] },
    { label: "$100 to $500", value: [100, 500] },
    { label: "$500 to $1000", value: [500, 1000] },
    { label: "$1000 to $10,000", value: [1000, 10000] },
  ];

  // Helper function to check if a filter is active
  const isFilterActive = (type, value) => {
    return activeFilters.some(
      (filter) => filter.type === type && filter.value === value
    );
  };

  const handleFilterClick = (type, value, priceValue = null) => {
    onFilterChange(type, value, priceValue);
  };

  return (
    <div className="relative">
      {/* Mobile Filter Button */}
      <button
        className="md:hidden fixed bottom-4 right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg z-50"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          />
        </svg>
      </button>

      {/* Sidebar Container */}
      <div
        className={`
        fixed md:relative top-0 left-0 h-full w-64 
        bg-white shadow-lg md:shadow-none
        transform ${isMobileOpen ? "translate-x-0" : "-translate-x-full"} 
        md:transform-none transition-transform duration-200 ease-in-out
        overflow-y-auto z-40 p-4
      `}
      >
        {/* Categories Section */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3">CATEGORY</h2>
          {categories[0].subcategories.map((category, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={`category-${index}`}
                checked={isFilterActive("category", category)}
                onChange={() => handleFilterClick("category", category)}
                className="w-4 h-4 text-blue-600 rounded"
              />
              <label
                htmlFor={`category-${index}`}
                className="ml-2 text-sm cursor-pointer"
              >
                {category}
              </label>
            </div>
          ))}
        </div>

        {/* Price Range Section */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3">PRICE RANGE</h2>
          {priceRanges.map((range, index) => (
            <div key={index} className="mb-2">
              <label className="flex items-center text-sm cursor-pointer">
                <input
                  type="radio"
                  name="priceRange"
                  checked={isFilterActive("price", range.label)}
                  onChange={() =>
                    handleFilterClick("price", range.label, range.value)
                  }
                  className="mr-2"
                />
                {range.label}
              </label>
            </div>
          ))}
        </div>

        {/* Popular Brands Section */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3">POPULAR BRANDS</h2>
          <div className="grid grid-cols-2 gap-2">
            {brands.map((brand, index) => (
              <div key={index} className="flex items-center">
                <input
                  type="checkbox"
                  id={`brand-${index}`}
                  checked={isFilterActive("brand", brand)}
                  onChange={() => handleFilterClick("brand", brand)}
                  className="w-4 h-4 text-blue-600 rounded"
                />
                <label
                  htmlFor={`brand-${index}`}
                  className="ml-2 text-sm cursor-pointer"
                >
                  {brand}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Tags Section */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3">POPULAR TAG</h2>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <button
                key={index}
                onClick={() => handleFilterClick("tag", tag)}
                className={`px-3 py-1 text-sm rounded-full border transition-colors
                  ${
                    isFilterActive("tag", tag)
                      ? "bg-blue-500 text-white border-blue-500"
                      : "border-gray-300 hover:border-blue-500"
                  }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
    </div>
  );
};

export default SidebarFilter;

SidebarFilter.propTypes = {
  activeFilters: PropTypes.array.isRequired, // Add this line for prop validation
  onFilterChange: PropTypes.func.isRequired,
  onRemoveFilter: PropTypes.func.isRequired,
};
