import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceCard from "@/components/ServiceCard";
import servicesData from "@/data/services.json";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-background py-12">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[{ label: "Услуги" }]} />
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Наши услуги</h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
            Полный спектр сварочных работ с цветными металлами, выездное обслуживание, 
            контроль качества и инжиниринг
          </p>

          <Tabs defaultValue="colored-metals" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
              {servicesData.categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {servicesData.categories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <h2 className="text-2xl font-bold mb-6">{category.title}</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service) => (
                    <ServiceCard
                      key={service.id}
                      title={service.title}
                      description={service.description}
                      features={service.features}
                      priceFrom={service.priceFrom}
                      slug={service.slug}
                    />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
