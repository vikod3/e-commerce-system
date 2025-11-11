import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Rabbit, TreePine, Leaf, FlaskConical, Atom, Wheat } from "lucide-react";
import { Button } from "@/components/ui/button";
import GradientButton from "@/components/ui/gradient-button";
import InfoCard from "@/components/hero/InfoCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import RatingBadge from "@/components/hero/RatingBadge";
import { Fragment } from "react";
import { getProductByHandle } from "@/data/products";

const ProductDetail = () => {
  const { handle } = useParams<{ handle: string }>();
  const navigate = useNavigate();

  const product = handle ? getProductByHandle(handle) : undefined;

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-semibold mb-4">Product not found</h1>
          <Button onClick={() => navigate("/")}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const images = product.images.slice(0, 2);
  const price = product.price;
  const currencyCode = product.currencyCode;
  const compareAtPrice = product.compareAtPrice;
  const hasDiscount = compareAtPrice && compareAtPrice > price;

  const detailsRaw = product.details || product.description || "";
  const sideEffects = product.sideEffects || "Consult with your healthcare provider for potential side effects.";
  const shipping = product.shipping || "Standard shipping available. Delivery times may vary.";

  const features = [
    {
      icon: Rabbit,
      label: "Cruelty Free",
    },
    {
      icon: TreePine,
      label: "Eco Friendly",
    },
    {
      icon: Leaf,
      label: "Paraben Free",
    },
    {
      icon: FlaskConical,
      label: "Silicone Free",
    },
    {
      icon: Atom,
      label: "Sulphate Free",
    },
    {
      icon: Wheat,
      label: "Gluten Free",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Images */}
          <div className="space-y-6">
            {images.length > 0 ? (
              images.map((image, index) => (
                <div key={index} className="rounded-2xl shadow-lg overflow-hidden">
                  <img
                    src={image}
                    alt={product.title}
                    className="w-full h-auto object-cover"
                  />
                </div>
              ))
            ) : (
              <div className="rounded-2xl shadow-lg bg-muted h-96 flex items-center justify-center">
                <span className="text-muted-foreground">No image available</span>
              </div>
            )}
          </div>

          {/* Right Column - Product Info */}
          <div className="space-y-6">
            <div>
              <div className="mb-4">
                <RatingBadge rating={4.8} reviews={2847} />
              </div>
              <h1 className="text-4xl font-semibold text-foreground mb-4">
                {product.title}
              </h1>
              
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                {hasDiscount && compareAtPrice && (
                  <span className="text-2xl font-medium text-muted-foreground line-through">
                    {currencyCode === 'USD' ? '$' : currencyCode}{compareAtPrice.toFixed(0)}
                  </span>
                )}
                <span className="text-3xl font-bold text-foreground">
                  {currencyCode === 'USD' ? '$' : currencyCode}{price.toFixed(0)}
                </span>
                <span className="text-lg text-muted-foreground">first month</span>
                {hasDiscount && (
                  <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    No matter the dose
                  </span>
                )}
              </div>
            </div>

            <div className="space-y-3">
              <GradientButton className="w-full py-4">
                Buy Now
              </GradientButton>
              
              <Button variant="outline" className="w-full py-4 h-auto">
                See If You Are Eligible
              </Button>
            </div>

            {/* Accordion Sections */}
            <Accordion type="single" collapsible defaultValue="details" className="w-full">
              <AccordionItem value="details">
                <AccordionTrigger className="text-foreground font-medium">
                  Details
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-3">
                  {detailsRaw ? (
                    detailsRaw.split(/\n+/).map((line, i) => (
                      line.trim() ? <p key={i} className="leading-relaxed">{line}</p> : null
                    ))
                  ) : (
                    <p className="leading-relaxed">No additional details available.</p>
                  )}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="side-effects">
                <AccordionTrigger className="text-foreground font-medium">
                  Potential side effects
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {sideEffects}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="shipping">
                <AccordionTrigger className="text-foreground font-medium">
                  Shipping
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {shipping}
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* Info Card */}
            <div className="pt-4">
              <InfoCard
                image="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=100&h=100&fit=crop"
                title="Is Eden® is Right for You?"
                linkText="Find Out"
              />
            </div>
          </div>
        </div>

        {/* Feature Badges Section */}
        <div className="mt-16">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            {features.map((feature, index) => (
              <Fragment key={feature.label}>
                <div className="flex items-center gap-3">
                  <feature.icon className="w-6 h-6 text-foreground" />
                  <span className="text-foreground font-medium">{feature.label}</span>
                </div>
                {index < features.length - 1 && (
                  <div className="hidden md:block w-px h-6 bg-border" />
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
