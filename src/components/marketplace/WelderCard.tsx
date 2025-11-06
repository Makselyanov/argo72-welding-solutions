import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Welder } from "@/types/marketplace";
import { Star, MapPin, CheckCircle, Briefcase } from "lucide-react";

interface WelderCardProps {
  welder: Welder;
  onRequestClick: (welder: Welder) => void;
}

export const WelderCard = ({ welder, onRequestClick }: WelderCardProps) => {
  return (
    <Card className="p-6 hover:shadow-lg transition-all">
      <div className="space-y-4">
        {/* Header with name and verification */}
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-bold text-lg flex items-center gap-2">
              {welder.name}
              {welder.isVerified && (
                <CheckCircle className="w-5 h-5 text-primary" />
              )}
            </h3>
            <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
              <MapPin className="w-4 h-4" />
              {welder.city}, {welder.region}
            </div>
          </div>
        </div>

        {/* Rating and stats */}
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="font-semibold">{welder.rating}</span>
            <span className="text-muted-foreground">({welder.reviewsCount})</span>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Briefcase className="w-4 h-4" />
            <span>{welder.completedJobs} работ</span>
          </div>
        </div>

        {/* Services */}
        <div className="flex flex-wrap gap-2">
          {welder.services.map((service, idx) => (
            <Badge key={idx} variant="secondary" className="text-xs">
              {service}
            </Badge>
          ))}
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between pt-4 border-t">
          <div>
            <div className="text-sm text-muted-foreground">От</div>
            <div className="text-xl font-bold text-primary">
              {welder.priceFrom.toLocaleString()} ₽<span className="text-sm font-normal">/час</span>
            </div>
          </div>
          <Button onClick={() => onRequestClick(welder)}>
            Оставить заявку
          </Button>
        </div>
      </div>
    </Card>
  );
};
