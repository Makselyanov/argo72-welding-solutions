import { useState, useMemo } from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SearchBlock } from "@/components/marketplace/SearchBlock";
import { ServiceCategoryCard } from "@/components/marketplace/ServiceCategoryCard";
import { WelderCard } from "@/components/marketplace/WelderCard";
import { ClientRequestForm } from "@/components/marketplace/ClientRequestForm";
import { WelderRegistrationForm } from "@/components/marketplace/WelderRegistrationForm";
import { serviceCategories } from "@/data/serviceCategories";
import { welders } from "@/data/welders";
import { Welder } from "@/types/marketplace";

const Marketplace = () => {
  const [serviceFilter, setServiceFilter] = useState("");
  const [cityFilter, setCityFilter] = useState("");
  const [selectedWelder, setSelectedWelder] = useState<Welder | undefined>();
  const [isClientFormOpen, setIsClientFormOpen] = useState(false);
  const [isWelderFormOpen, setIsWelderFormOpen] = useState(false);

  const handleSearch = (service: string, city: string) => {
    setServiceFilter(service === "all" ? "" : service);
    setCityFilter(city);
  };

  const filteredWelders = useMemo(() => {
    return welders.filter((welder) => {
      const serviceMatch = !serviceFilter || welder.services.some(s => 
        s.toLowerCase().includes(serviceFilter.toLowerCase())
      );
      const cityMatch = !cityFilter || welder.city.toLowerCase().includes(cityFilter.toLowerCase());
      return serviceMatch && cityMatch;
    });
  }, [serviceFilter, cityFilter]);

  const handleWelderRequest = (welder: Welder) => {
    setSelectedWelder(welder);
    setIsClientFormOpen(true);
  };

  const handleGeneralRequest = () => {
    setSelectedWelder(undefined);
    setIsClientFormOpen(true);
  };

  return (
    <>
      <Helmet>
        <title>Биржа сварщиков Argo72 - Найдите проверенного специалиста</title>
        <meta
          name="description"
          content="Биржа профессиональных сварщиков Argo72. Сварка цветных металлов, металлоконструкции, ремонт оборудования. Проверенные специалисты с рейтингом и отзывами."
        />
        <meta
          name="keywords"
          content="биржа сварщиков, найти сварщика, сварочные работы, сварщик на час, аргонодуговая сварка, TIG сварка"
        />
        <link rel="canonical" href="https://argo72.ru/marketplace" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white py-20 lg:py-32">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1565007692399-e64e4ed275b3?q=80')] bg-cover bg-center opacity-20" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6 mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Найдите профессионального сварщика рядом с вами
              </h1>
              <p className="text-xl md:text-2xl text-white/90">
                Любые сварочные работы от проверенных специалистов под контролем Argo72
              </p>
            </div>
            <SearchBlock onSearch={handleSearch} />
          </div>
        </section>

        {/* Popular Services */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Популярные услуги
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {serviceCategories.map((category) => (
                <ServiceCategoryCard
                  key={category.id}
                  category={category}
                  onClick={() => setServiceFilter(category.name)}
                />
              ))}
            </div>
            <div className="text-center mt-8">
              <Button onClick={handleGeneralRequest} size="lg" variant="outline">
                Не нашли нужную услугу? Оставить общую заявку
              </Button>
            </div>
          </div>
        </section>

        {/* Best Welders */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Лучшие сварщики
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              {filteredWelders.length === welders.length
                ? "Все специалисты проверены и имеют подтвержденный опыт"
                : `Найдено специалистов: ${filteredWelders.length}`}
            </p>
            
            {filteredWelders.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredWelders.map((welder) => (
                  <WelderCard
                    key={welder.id}
                    welder={welder}
                    onRequestClick={handleWelderRequest}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-xl text-muted-foreground mb-6">
                  По вашему запросу специалисты не найдены
                </p>
                <Button onClick={() => { setServiceFilter(""); setCityFilter(""); }}>
                  Сбросить фильтры
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* CTA for Welders */}
        <section className="py-16 bg-gradient-to-r from-accent via-accent/90 to-primary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-white space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Вы профессиональный сварщик?
              </h2>
              <p className="text-xl text-white/90">
                Присоединяйтесь к бирже Argo72, получайте больше заказов и работайте под
                брендом с гарантией качества для клиента
              </p>
              <Button
                size="lg"
                variant="secondary"
                onClick={() => setIsWelderFormOpen(true)}
                className="text-lg px-8"
              >
                Зарегистрироваться как сварщик
              </Button>
            </div>
          </div>
        </section>

        {/* SEO Text */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <h2 className="text-2xl font-bold mb-4">
                Биржа сварочных услуг Argo72 — найдите проверенного специалиста
              </h2>
              <p>
                Argo72 представляет уникальную биржу профессиональных сварщиков, где вы можете
                быстро найти квалифицированного специалиста для выполнения сварочных работ любой
                сложности. Все мастера на нашей платформе проходят тщательную проверку документов,
                подтверждение квалификации и имеют реальные отзывы от клиентов.
              </p>
              <p>
                Мы специализируемся на сварке цветных металлов — алюминия, меди, латуни, бронзы, а
                также предоставляем услуги по сборке металлоконструкций, ремонту промышленного
                оборудования и выполнению срочных работ. Наши специалисты владеют всеми современными
                методами сварки: TIG (аргонодуговая), MIG/MAG, ручная дуговая сварка.
              </p>
              <p>
                Работаем в Тюмени и других регионах России. Гарантируем качество выполненных работ,
                безопасность процессов и профессиональный подход к каждому проекту. Выбирайте
                сварщика по рейтингу, отзывам, специализации и цене — все прозрачно и удобно на
                одной платформе.
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>

      {/* Forms */}
      <ClientRequestForm
        open={isClientFormOpen}
        onClose={() => {
          setIsClientFormOpen(false);
          setSelectedWelder(undefined);
        }}
        welder={selectedWelder}
      />

      <WelderRegistrationForm
        open={isWelderFormOpen}
        onClose={() => setIsWelderFormOpen(false)}
      />
    </>
  );
};

export default Marketplace;
