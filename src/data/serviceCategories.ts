import { ServiceCategory } from "@/types/marketplace";

export const serviceCategories: ServiceCategory[] = [
  {
    id: "1",
    name: "Сварка цветных металлов",
    slug: "svarka-tsvetnyh-metallov",
    shortDescription: "Аргонодуговая сварка алюминия, меди, латуни, бронзы",
    iconName: "Flame",
  },
  {
    id: "2",
    name: "Сборка металлических каркасов",
    slug: "sborka-karkasov",
    shortDescription: "Лестницы, ограждения, металлоконструкции любой сложности",
    iconName: "Building2",
  },
  {
    id: "3",
    name: "Ремонт оборудования",
    slug: "remont-oborudovaniya",
    shortDescription: "Восстановление и модификация промышленного оборудования",
    iconName: "Wrench",
  },
  {
    id: "4",
    name: "Сварщик на час",
    slug: "svarshchik-na-chas",
    shortDescription: "Быстрое выполнение мелких сварочных работ",
    iconName: "Clock",
  },
];
