import product1 from "@/assets/product_1.jpg";
import product2 from "@/assets/product_2.jpg";
import product3 from "@/assets/product_3.jpg";
import product4 from "@/assets/product_4.jpg";
import product5 from "@/assets/product_5.jpg";
import product6 from "@/assets/product_6.jpg";
import product7 from "@/assets/product_7.jpg";
import product8 from "@/assets/product_8.jpg";
import product9 from "@/assets/product_9.jpg";
import product10 from "@/assets/product_10.jpg";

export interface Product {
  id: string;
  handle: string;
  title: string;
  description: string;
  price: number;
  compareAtPrice?: number;
  currencyCode: string;
  images: string[];
  details?: string;
  sideEffects?: string;
  shipping?: string;
}

export const products: Product[] = [
  {
    id: "1",
    handle: "weight-loss-program",
    title: "Weight Loss Program",
    description: "Comprehensive weight loss solution with personalized support",
    price: 149,
    compareAtPrice: 199,
    currencyCode: "USD",
    images: [product1, product2],
    details: "Our comprehensive weight loss program combines science-backed methods with personalized support to help you achieve your goals.\n\nIncludes monthly consultations, custom meal plans, and ongoing support from our team of experts.",
    sideEffects: "May cause temporary changes in appetite. Consult with your healthcare provider for potential side effects.",
    shipping: "Free standard shipping. Delivery in 3-5 business days."
  },
  {
    id: "2",
    handle: "anti-aging-cleanser",
    title: "Anti-Aging Cleanser",
    description: "Gentle cleanser that helps reduce signs of aging",
    price: 49,
    compareAtPrice: 69,
    currencyCode: "USD",
    images: [product3, product4],
    details: "Advanced anti-aging formula that gently cleanses while delivering powerful age-defying ingredients.\n\nHelps reduce fine lines, improve skin texture, and promote a youthful glow.",
    sideEffects: "For external use only. Discontinue use if irritation occurs.",
    shipping: "Standard shipping available. Delivery times may vary."
  },
  {
    id: "3",
    handle: "hair-growth-serum",
    title: "Hair Growth Serum",
    description: "Promote healthy hair growth with our advanced formula",
    price: 89,
    compareAtPrice: 119,
    currencyCode: "USD",
    images: [product5, product6],
    details: "Clinically proven hair growth serum that strengthens and nourishes hair follicles.\n\nResults visible in 8-12 weeks with consistent use. Safe for all hair types.",
    sideEffects: "May cause scalp sensitivity in rare cases. Perform patch test before use.",
    shipping: "Free standard shipping. Delivery in 3-5 business days."
  },
  {
    id: "4",
    handle: "strength-supplement",
    title: "Strength Supplement",
    description: "Build muscle and increase strength naturally",
    price: 79,
    currencyCode: "USD",
    images: [product7, product8],
    details: "Premium strength supplement formulated to support muscle growth and recovery.\n\nContains essential amino acids and natural ingredients to enhance your fitness journey.",
    sideEffects: "Consult with your healthcare provider before use, especially if you have any medical conditions.",
    shipping: "Standard shipping available. Delivery in 3-5 business days."
  },
  {
    id: "5",
    handle: "mood-enhancer",
    title: "Mood Enhancer",
    description: "Natural mood support for daily wellness",
    price: 59,
    currencyCode: "USD",
    images: [product9, product10],
    details: "Natural mood support supplement with carefully selected ingredients to promote emotional wellness.\n\nHelps maintain positive mood and supports stress management.",
    sideEffects: "Not a substitute for professional mental health care. Consult your healthcare provider.",
    shipping: "Free standard shipping. Delivery in 3-5 business days."
  },
  {
    id: "6",
    handle: "nad-supplement",
    title: "NAD+ Supplement",
    description: "Boost cellular energy and healthy aging",
    price: 129,
    compareAtPrice: 159,
    currencyCode: "USD",
    images: [product5, product3],
    details: "Advanced NAD+ supplement to support cellular energy production and healthy aging.\n\nPromotes vitality, cognitive function, and overall wellness at the cellular level.",
    sideEffects: "May cause mild digestive changes initially. Consult with your healthcare provider.",
    shipping: "Free standard shipping. Delivery in 3-5 business days."
  }
];

export const getProductByHandle = (handle: string): Product | undefined => {
  return products.find(p => p.handle === handle);
};
