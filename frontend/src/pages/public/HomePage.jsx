import HeroSection from "../../components/HeroSection";
import FeaturedProducts from "../../components/FeaturedProducts";
import Features from "../../components/Features";
import ReviewsSlider from "../../components/ReviewsSlider";
import BeautyFragranceSection from "../../components/BeautyFragranceSection";

const HomePage = () => {
  return (
    <div className="space-y-10 w-full">
      <HeroSection />
      <Features />
      <BeautyFragranceSection />

      <FeaturedProducts />
      <ReviewsSlider />
    </div>
  );
};

export default HomePage;
