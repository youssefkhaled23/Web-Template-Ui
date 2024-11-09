import { useState } from "react";
import Heading from "../../DComponents/Heading/Heading";
import RightArrow from "../../../assets/Svg/RightArrow.svg";
import ProductCard from "../../DComponents/ProductCard/ProductCard";
import { Link } from "react-router-dom";
import PropTypes from "prop-types"; // Add this import
import usePagination from "../../../Hooks/usePagination";
import Pagination from "../Pagination/Pagination";

const ReusableCard = ({ headingTitle, categories, Data, status }) => {
  const [activeTab, setActiveTab] = useState("All Product");

  // Filter products based on active tab
  const filteredProducts = Data.filter((product) =>
    activeTab === "All Product" ? true : product.category === activeTab
  );
  const {
    currentProducts,
    getPageNumbers,
    handlePageChange,
    currentPage,
    totalPages,
  } = usePagination({
    filteredProducts: filteredProducts,
  });

  return (
    <div className="flex flex-col">
      <div
        className={`flex flex-col md:flex-row items-center justify-between ${
          status ? "hidden" : ""
        }`}
      >
        <Heading Title={headingTitle} />
        <div className="flex flex-col md:flex-row items-center gap-2">
          <div className="flex items-center gap-2">
            {categories?.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(item.categoryName)}
                className={`font-normal text-[12px] md:text-[14px] leading-5 ${
                  activeTab === item.categoryName
                    ? "font-bold text-[#191C1F] border-b-2 py-2 border-[#2091F9]"
                    : "text-[#5F6C72]"
                }`}
              >
                {item.categoryName}
              </button>
            ))}
          </div>
          <Link className="flex items-center gap-2" to="/">
            <p className="text-sm font-medium text-[#2091F9]">
              Browse All Product
            </p>
            <img src={RightArrow} alt="" className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <div className="my-4">
        <ProductCard products={currentProducts} />
      </div>

      <Pagination
        currentPage={currentPage}
        getPageNumbers={getPageNumbers}
        handlePageChange={handlePageChange}
        totalPages={totalPages}
      />
    </div>
  );
};

export default ReusableCard;
ReusableCard.propTypes = {
  headingTitle: PropTypes.string, // Validate headingTitle
  categories: PropTypes.array,
  Data: PropTypes.array,
  status: PropTypes.bool,
};
