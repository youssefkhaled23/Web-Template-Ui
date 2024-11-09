import SidebarFilter from "../../Components/SComponents/Filter/SideBarFilter/SideBarFilter";
import SearchHeader from "../../Components/SComponents/Filter/HeaderSideBar/HeaderSideBar";
import ReusableCard from "../../Components/DComponents/ReusableCard/ReusableCard";
import product from "../../data/products";
import { useState } from "react";

const ProductPage = () => {
  const [activeFilters, setActiveFilters] = useState([]);

  const handleFilterChange = (type, value, priceValue = null) => {
    setActiveFilters((prev) => {
      const exists = prev.some(
        (filter) => filter.type === type && filter.value === value
      );

      if (type === "price") {
        const withoutPrice = prev.filter((filter) => filter.type !== "price");
        return [...withoutPrice, { type, value, priceValue }];
      }

      if (exists) {
        return prev.filter(
          (filter) => !(filter.type === type && filter.value === value)
        );
      } else {
        return [...prev, { type, value }];
      }
    });
  };

  const handleRemoveFilter = (type, value) => {
    setActiveFilters((prev) =>
      prev.filter((filter) => !(filter.type === type && filter.value === value))
    );
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="col-span-1">
          <SidebarFilter
            activeFilters={activeFilters}
            onFilterChange={handleFilterChange}
            onRemoveFilter={handleRemoveFilter}
          />
        </div>
        <div className="col-span-3">
          <SearchHeader
            activeFilters={activeFilters}
            onRemoveFilter={handleRemoveFilter}
          />
          <ReusableCard
            Data={product}
            status
          />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
