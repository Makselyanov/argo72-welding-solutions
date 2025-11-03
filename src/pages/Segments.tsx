import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import segmentsData from "@/data/segments.json";

const Segments = () => {
  return (
    <>
      <Helmet>
        <title>Кому помогаем — сварка для ТСЖ, УК, производства, автосервисов | Argo72 Тюмень</title>
        <meta 
          name="description" 
          content="Отраслевые решения по сварке: для ТСЖ и управляющих компаний, строителей, HVAC, автосервисов, производства, складов, агротехники. Тюмень." 
        />
        <meta 
          name="keywords" 
          content="сварка для ТСЖ тюмень, сварка для управляющих компаний, сварка на стройке, сварка для HVAC, ремонт холодильного оборудования, сварка алюминия автосервис, ремонт лодок тюмень, сварка для производства, аутсорс сварщика для бизнеса, ремонт агротехники, сварка спецтехники" 
        />
        <link rel="canonical" href="https://argo72.ru/dlya-kogo" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 bg-background py-12">
          <div className="container mx-auto px-4">
            <Breadcrumbs items={[{ label: "Кому помогаем" }]} />
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Кому помогаем</h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
            Решаем специфические задачи каждой отрасли. Выберите свою сферу деятельности, 
            чтобы узнать, как мы можем помочь вам
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {segmentsData.segments.map((segment) => (
              <Card key={segment.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{segment.title}</CardTitle>
                  <CardDescription>{segment.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Типичные задачи:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {segment.pains.slice(0, 3).map((pain, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            {pain}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button asChild variant="outline" className="w-full group">
                      <Link to={`/komu/${segment.slug}`}>
                        Подробнее
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
    </>
  );
};

export default Segments;
