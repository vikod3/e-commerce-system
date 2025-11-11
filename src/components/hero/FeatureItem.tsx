import { LucideIcon } from "lucide-react";

interface FeatureItemProps {
  icon: LucideIcon;
  text: string;
}

const FeatureItem = ({ icon: Icon, text }: FeatureItemProps) => {
  return (
    <div className="flex items-center gap-3">
      <Icon className="w-5 h-5 text-zinc-900/[0.8] flex-shrink-0" />
      <span className="text-zinc-900/[0.8] font-medium">{text}</span>
    </div>
  );
};

export default FeatureItem;
