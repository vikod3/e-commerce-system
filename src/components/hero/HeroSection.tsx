import { Syringe, DollarSign, Truck } from "lucide-react";
import RatingBadge from "./RatingBadge";
import FeatureItem from "./FeatureItem";
import PricingCard from "./PricingCard";
import InfoCard from "./InfoCard";
import ImageMarquee from "./ImageMarquee";

// Product images
import product1 from "@/assets/eden_1.jpg";
import product2 from "@/assets/eden_2.jpg";
import product3 from "@/assets/eden_3.jpg";
import product4 from "@/assets/eden_4.jpg";
import product5 from "@/assets/eden_5.jpg";
import product6 from "@/assets/eden_6.jpg";
import product7 from "@/assets/eden_7.jpg";
import product8 from "@/assets/eden_8.jpg";

const column1Images = [product1, product7, product5, product6];
const column2Images = [product4, product3, product8, product2];

const HeroSection = () => {
  return (
    <section className="bg-background pb-16 md:pb-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Rating Badge */}
            <div className="pt-8 md:pt-12 lg:pt-0">
              <RatingBadge rating={4.5} reviews={453} />
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight">
              Compounded Semaglutide for Weight Loss
            </h1>

            {/* Feature List */}
            <div className="space-y-4">
              <FeatureItem
                icon={Syringe}
                text="Ingredient as Wegovy® & Ozempic®"
              />
              <FeatureItem icon={DollarSign} text="No hidden fees" />
              <FeatureItem icon={Truck} text="Free shipping" />
            </div>

            {/* Divider */}
            <div className="border-t border-border my-6" />

            {/* Pricing */}
            <PricingCard
              price={296}
              period="mo"
              description="No matter the dose"
            />

            {/* Info Card */}
            <InfoCard
              image="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=100&h=100&fit=crop"
              title="Is This Right for You?"
              linkText="Find Out"
            />
          </div>

          {/* Right Column - Image Marquee */}
          <div className="relative h-[600px] lg:h-[700px] hidden md:block">
            {/* Top fade gradient */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent pointer-events-none z-10" />
            <div className="grid grid-cols-2 gap-4 h-full">
              <ImageMarquee images={column1Images} offset={0} />
              <ImageMarquee images={column2Images} offset={-2} />
            </div>
            {/* Bottom fade gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
