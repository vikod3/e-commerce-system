import GradientButton from "@/components/ui/gradient-button";
import { useNavigate } from "react-router-dom";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const navigate = useNavigate();

  return (
    <div className="group">
      {/* Product Image with Shadow */}
      <div className="aspect-square overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 mb-6">
        {product.images[0] ? (
          <img
            src={product.images[0]}
            alt={product.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-muted flex items-center justify-center">
            <span className="text-muted-foreground">No image</span>
          </div>
        )}
      </div>

      {/* Product Details - Centered */}
      <div className="text-center space-y-4">
        <div>
          <h3 className="text-2xl font-semibold text-foreground mb-2">
            {product.title}
          </h3>
          <p className="text-lg font-medium text-foreground">
            {product.currencyCode === 'USD' ? '$' : product.currencyCode}{product.price.toFixed(2)}{' '}
            <span className="text-muted-foreground font-normal">per month</span>
          </p>
        </div>

        <GradientButton 
          onClick={() => navigate(`/product/${product.handle}`)}
          className="w-full"
        >
          Get Started
        </GradientButton>
      </div>
    </div>
  );
};

export default ProductCard;
