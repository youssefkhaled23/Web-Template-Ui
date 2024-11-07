import Discount from "../Discount/Discount";
import img from "../../../assets/imges/db377c4c79623392434e52dff35e335b.png";
import ReusableCard from "../../DComponents/ReusableCard/ReusableCard";
import data from "../../../data/products";

const FeaturedProducts = () => {
  const categories = [
    { categoryName: "All Product", to: "/" },
    { categoryName: "Smart Phone", to: "/" },
    { categoryName: "Laptop", to: "/" },
    { categoryName: "Headphone", to: "/" },
    { categoryName: "TV", to: "/" },
  ];
  return (
    <div className="w-[90%] mx-auto my-10">
      <div className="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-5 gap-4">
        <div className="col-span-1 hidden md:block">
          <Discount />
          <div>
            <img src={img} className="w-full" alt="" />
          </div>
        </div>
        <div className="col-span-4">
          <ReusableCard
            Data={data}
            categories={categories}
            headingTitle="Featured Products"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
