import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CarouselProductCard from "@/components/products/CarouselProductCard";
import productWeightLoss from "@/assets/product_5.jpg";
import productSkin1 from "@/assets/product_6.jpg";
import productSkin2 from "@/assets/product_8.jpg";

const ProductCarouselSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselProducts = [
    {
      title: "Rejuvenate your skin",
      price: "$84/mo",
      priceLabel: "Starting at",
      backgroundImage: productSkin1,
      backgroundColor: "bg-emerald-600",
      textPosition: "top" as const,
      showOverlay: false,
    },
    {
      title: "Another Product",
      price: "$99/mo",
      priceLabel: "Starting at",
      backgroundImage: productSkin2,
      backgroundColor: "bg-blue-600",
      textPosition: "top" as const,
      showOverlay: false,
    },
  ];

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? carouselProducts.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === carouselProducts.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-gray-100 py-8 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          {/* Left Card - Static */}
          <CarouselProductCard
            title="Age with confidence"
            price="$119 first month"
            priceLabel="Starting at"
            backgroundImage={productWeightLoss}
            backgroundColor="bg-[#d4b5a0]"
            showOverlay={false}
          />

          {/* Right Side - Carousel */}
          <div className="relative w-full">
            <div className="relative overflow-hidden rounded-3xl h-[32rem] sm:h-[40rem] md:h-[48rem]">
              <div
                className="flex transition-transform duration-500 ease-in-out h-full"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {carouselProducts.map((product, index) => (
                  <div key={index} className="min-w-full h-full">
                    <CarouselProductCard {...product} />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="absolute top-1/2 -translate-y-1/2 left-2 right-2 sm:left-4 sm:right-4 flex justify-between items-center z-10 pointer-events-none">
              <button
                onClick={handlePrevSlide}
                className="bg-neutral-100/80 hover:bg-neutral-100 rounded-full p-1.5 sm:p-2 transition-colors pointer-events-auto"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-5 sm:w-5 sm:h-6 text-zinc-900/[0.8]" strokeWidth={3} />
              </button>
              <button
                onClick={handleNextSlide}
                className="bg-neutral-100/80 hover:bg-neutral-100 rounded-full p-1.5 sm:p-2 transition-colors pointer-events-auto"
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-5 sm:w-5 sm:h-6 text-zinc-900/[0.8]" strokeWidth={3} />
              </button>
            </div>

            {/* Pagination Dots */}
            <div className="absolute bottom-3 sm:bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
              {carouselProducts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    currentSlide === index ? "bg-neutral-300/60" : "bg-zinc-800/60"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCarouselSection;
