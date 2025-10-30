import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  priceFrom?: number;
  slug: string;
  badge?: string;
}

const ServiceCard = ({ title, description, features, priceFrom, slug, badge }: ServiceCardProps) => {
  return (
    <Card className="h-full flex flex-col hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between mb-2">
          <CardTitle className="text-xl">{title}</CardTitle>
          {badge && <Badge variant="secondary">{badge}</Badge>}
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start text-sm">
              <span className="text-primary mr-2 flex-shrink-0">•</span>
              <span className="text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
        {priceFrom && (
          <div className="mt-4 pt-4 border-t">
            <div className="text-sm text-muted-foreground">От</div>
            <div className="text-2xl font-bold text-primary">{priceFrom} ₽</div>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" className="w-full group">
          <Link to={`/uslugi/${slug}`}>
            Подробнее
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
