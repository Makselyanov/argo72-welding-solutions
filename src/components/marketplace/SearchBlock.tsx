import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import { serviceCategories } from "@/data/serviceCategories";

interface SearchBlockProps {
  onSearch: (service: string, city: string) => void;
}

export const SearchBlock = ({ onSearch }: SearchBlockProps) => {
  const [selectedService, setSelectedService] = useState<string>("");
  const [city, setCity] = useState<string>("");

  const handleSearch = () => {
    onSearch(selectedService, city);
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-background/95 backdrop-blur-sm p-6 rounded-lg shadow-xl">
      <div className="grid grid-cols-1 md:grid-cols-[1fr,1fr,auto] gap-4">
        <Select value={selectedService} onValueChange={setSelectedService}>
          <SelectTrigger>
            <SelectValue placeholder="Услуга или специализация" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Все услуги</SelectItem>
            {serviceCategories.map((cat) => (
              <SelectItem key={cat.id} value={cat.name}>
                {cat.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Input
          type="text"
          placeholder="Город или адрес объекта"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />

        <Button onClick={handleSearch} className="md:w-auto w-full">
          <Search className="w-4 h-4 mr-2" />
          Найти
        </Button>
      </div>
    </div>
  );
};
