import Heading from "../../Components/DComponents/Heading/Heading";
import Accessories from "../../Components/Section/Accessories/Accessories";
import FeaturedProducts from "../../Components/Section/FeaturedProducts/FeaturedProducts";
import LandingSection from "../../Components/Section/LandindSection/LandingSection";
import ProductGrid from "../../Components/Section/ProductGrid/ProductGrid";

import ShopSlider from "../../Components/Section/ShopSlider/ShopSlider";
import DevicePrice from "../../Components/Section/DevicePrice/DevicePrice";
import LatestNews from "../../Components/Section/LatestNews/LatestNews";
import Sales from "../../Components/Section/Sales/Sales";
import Subscription from "../../Components/Section/Subscription/Subscription";

const Home = () => {
  return (
    <div>
      <LandingSection />
      <div className="text-center my-6">
        <Heading Title="Shop with Categorys" />
      </div>
      <ShopSlider />
      <FeaturedProducts />
      <Sales />
      <Accessories />
      <DevicePrice />
      <ProductGrid />
      <LatestNews />
      <Subscription />
    </div>
  );
};

export default Home;
