import Navbar from "@/components/Navbar";
import HeroSection from "@/components/hero/HeroSection";
import ProductsSection from "@/components/sections/ProductsSection";
import WeightLossSection from "@/components/sections/WeightLossSection";
import ProductCarouselSection from "@/components/sections/ProductCarouselSection";
import ScienceNatureSection from "@/components/sections/ScienceNatureSection";
import HealthGuideSection from "@/components/sections/HealthGuideSection";
import FAQSection from "@/components/sections/FAQSection";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProductsSection />
      <WeightLossSection />
      <ProductCarouselSection />
      <ScienceNatureSection />
      <FAQSection />
      <HealthGuideSection />
      <Footer />
    </div>
  );
};

export default Index;
