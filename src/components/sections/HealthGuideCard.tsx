import { ChevronRight } from "lucide-react";

interface HealthGuideCardProps {
  image: string;
  description: string;
  category: string;
  href: string;
}

const HealthGuideCard = ({ image, description, category, href }: HealthGuideCardProps) => {
  return (
    <div className="bg-white rounded-3xl shadow-[2px_4px_12px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col">
      <div className="overflow-hidden">
        <img 
          src={image} 
          alt={category}
          className="w-full h-48 object-cover rounded-3xl"
        />
      </div>
      <div className="flex flex-col gap-8 p-6 flex-1">
        <p className="text-zinc-900/80 font-medium">{description}</p>
        <a 
          href={href}
          className="flex items-center justify-between py-4 px-6 border-2 border-zinc-900/[0.13] rounded-full hover:border-zinc-900/30 transition-colors mt-auto"
        >
          <span className="font-medium text-zinc-900">{category}</span>
          <ChevronRight className="w-4 h-4 text-zinc-900/70" />
        </a>
      </div>
    </div>
  );
};

export default HealthGuideCard;
