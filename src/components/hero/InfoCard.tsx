import { ArrowRight } from "lucide-react";

interface InfoCardProps {
  image: string;
  title: string;
  linkText: string;
}

const InfoCard = ({ image, title, linkText }: InfoCardProps) => {
  return (
    <div className="bg-card rounded-2xl p-4 flex items-center gap-4 shadow-[2px_4px_12px_rgba(0,0,0,0.08)] hover:shadow-[2px_4px_16px_rgba(0,0,0,0.12)] transition-shadow cursor-pointer">
      <div className="w-16 h-16 bg-muted rounded-xl flex-shrink-0">
        <img src={image} alt="" className="w-full h-full object-cover rounded-xl" />
      </div>
      <div className="flex-1">
        <h3 className="text-foreground font-medium mb-1">{title}</h3>
        <div className="flex items-center gap-1 text-sm font-medium">
          <div className="w-5 h-5 rounded-full bg-foreground flex items-center justify-center">
            <ArrowRight className="w-3 h-3 text-background" />
          </div>
          <span>{linkText}</span>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
