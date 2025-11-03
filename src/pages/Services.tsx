import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceCard from "@/components/ServiceCard";
import servicesData from "@/data/services.json";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Услуги сварки цветных металлов — TIG/MIG алюминий, пайка меди | Argo72 Тюмень</title>
        <meta 
          name="description" 
          content="Полный спектр сварочных работ: TIG/MIG сварка алюминия, нержавейки, меди, латуни, титана. ВИК/УЗК контроль. Выездное обслуживание 24/7. Тюмень." 
        />
        <meta 
          name="keywords" 
          content="услуги сварки тюмень, TIG сварка алюминия, MIG сварка нержавейки, пайка меди тюмень, сварка латуни, сварка титана, аргонная сварка цветных металлов, ВИК контроль сварных швов, УЗК контроль, капиллярный контроль, выездная сварка, ремонт радиаторов, ремонт теплообменников" 
        />
        <link rel="canonical" href="https://argo72.ru/uslugi" />
      </Helmet>

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
    </>
  );
};

export default Services;
