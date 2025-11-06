import { Card } from "@/components/ui/card";
import { ServiceCategory } from "@/types/marketplace";
import { Flame, Building2, Wrench, Clock, LucideIcon } from "lucide-react";

interface ServiceCategoryCardProps {
  category: ServiceCategory;
  onClick?: () => void;
}

const iconMap: Record<string, LucideIcon> = {
  Flame,
  Building2,
  Wrench,
  Clock,
};

export const ServiceCategoryCard = ({ category, onClick }: ServiceCategoryCardProps) => {
  const Icon = iconMap[category.iconName] || Flame;
  
  return (
    <Card 
      className="p-6 hover:shadow-lg transition-all cursor-pointer hover:border-primary"
      onClick={onClick}
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        <h3 className="font-semibold text-lg">{category.name}</h3>
        <p className="text-sm text-muted-foreground">{category.shortDescription}</p>
      </div>
    </Card>
  );
};
