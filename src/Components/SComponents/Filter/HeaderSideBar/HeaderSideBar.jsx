import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types"; // Add this import

const SearchHeader = ({
  activeFilters,
  onRemoveFilter,
  resultsCount = 65867,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("Most Popular");
  const [isSortOpen, setIsSortOpen] = useState(false);
  const sortRef = useRef(null);

  const sortOptions = [
    "Most Popular",
    "Newest",
    "Price: Low to High",
    "Price: High to Low",
    "Rating",
  ];

  // Close sort dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sortRef.current && !sortRef.current.contains(event.target)) {
        setIsSortOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search logic here
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="space-y-4 mb-6">
      {/* Search and Sort Section */}
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Search Bar */}
        <form onSubmit={handleSearch} className="flex-1 relative">
          <input
            type="text"
            placeholder="Search for anything..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2"
          >
            <svg
              className="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </form>

        {/* Sort Dropdown */}
        <div className="relative" ref={sortRef}>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600 whitespace-nowrap">
              Sort by:
            </span>
            <button
              onClick={() => setIsSortOpen(!isSortOpen)}
              className="px-4 py-2 border border-gray-300 rounded-md flex items-center gap-2 bg-white hover:border-gray-400"
            >
              <span>{sortBy}</span>
              <svg
                className={`w-4 h-4 transition-transform ${
                  isSortOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>

          {/* Dropdown Menu */}
          {isSortOpen && (
            <div className="absolute z-50 right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-10">
              {sortOptions.map((option, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSortBy(option);
                    setIsSortOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 first:rounded-t-md last:rounded-b-md"
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Active Filters Section */}
      <div className="flex items-center justify-between">
        {activeFilters.length > 0 && (
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm text-gray-600">Active Filters:</span>
            {activeFilters.map((filter, index) => (
              <button
                key={index}
                onClick={() => onRemoveFilter(filter.type, filter.value)}
                className="group flex items-center gap-1 px-3 py-1 bg-gray-100 rounded-full text-sm hover:bg-gray-200 transition-colors"
              >
                <span>{filter.value}</span>
                <svg
                  className="w-4 h-4 text-gray-500 group-hover:text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            ))}
          </div>
        )}

        {/* Results Count */}
        <div className="text-sm text-gray-600">
          <span className="font-semibold">{resultsCount.toLocaleString()}</span>{" "}
          Results found.
        </div>
      </div>
    </div>
  );
};

export default SearchHeader;

SearchHeader.propTypes = {
  activeFilters: PropTypes.array.isRequired,
  onRemoveFilter: PropTypes.func.isRequired,
  resultsCount: PropTypes.number,
};
