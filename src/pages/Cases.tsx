import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { cases } from "@/data/cases";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Clock, Users, Wrench } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";

const Cases = () => {
  return (
    <>
      <Helmet>
        <title>Кейсы и примеры работ — Аргонодуговая сварка в Тюмени | АРГО72</title>
        <meta
          name="description"
          content="Реальные проекты по сварке алюминия, нержавейки, меди. Металлоконструкции, ремонт оборудования, изготовление деталей. Примеры работ сварщиков в Тюмени с фото."
        />
        <meta
          name="keywords"
          content="кейсы сварка тюмень, примеры сварочных работ, портфолио сварщика, проекты аргонодуговой сварки, металлоконструкции кейсы, ремонт оборудования примеры"
        />
        <link rel="canonical" href="https://argo-72.ru/kejsy" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="container mx-auto px-4 py-8">
          <Breadcrumbs
            items={[
              { label: "Кейсы", href: "/kejsy" }
            ]}
          />

          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Наши <span className="text-primary">кейсы</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Реальные проекты с детальным описанием технологии, материалов и сроков выполнения
            </p>
          </div>

          <div className="space-y-12">
            {cases.map((caseStudy) => (
              <Card key={caseStudy.id} className="overflow-hidden">
                <CardHeader className="bg-muted/50">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <Badge variant="default">{caseStudy.category}</Badge>
                    <span className="text-sm text-muted-foreground">{caseStudy.date}</span>
                  </div>
                  <CardTitle className="text-2xl md:text-3xl">{caseStudy.title}</CardTitle>
                  <CardDescription className="text-lg">{caseStudy.subtitle}</CardDescription>
                </CardHeader>

                <CardContent className="p-6 space-y-8">
                  {/* Images Gallery */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {caseStudy.images.map((image, idx) => (
                      <div key={idx} className="overflow-hidden rounded-lg border">
                        <img
                          src={image}
                          alt={`${caseStudy.title} - фото ${idx + 1}`}
                          className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Task */}
                  <div>
                    <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                      <Wrench className="h-5 w-5 text-primary" />
                      Задача
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{caseStudy.task}</p>
                  </div>

                  {/* Solution */}
                  <div>
                    <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      Что сделали
                    </h3>
                    <ul className="space-y-2">
                      {caseStudy.solution.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Materials */}
                  <div>
                    <h3 className="text-xl font-semibold mb-3">
                      Материалы и крепёж
                    </h3>
                    <ul className="space-y-2">
                      {caseStudy.materials.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span className="text-muted-foreground text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Timeline */}
                  <div className="bg-muted/30 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      Сроки и бригада
                    </h3>
                    <div className="space-y-2">
                      <p className="text-muted-foreground">{caseStudy.timeline.description}</p>
                      <div className="flex flex-wrap gap-4 mt-4">
                        <Badge variant="secondary" className="px-4 py-2">
                          <Clock className="h-4 w-4 mr-2" />
                          {caseStudy.timeline.duration}
                        </Badge>
                        <Badge variant="secondary" className="px-4 py-2">
                          <Users className="h-4 w-4 mr-2" />
                          {caseStudy.timeline.team}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Особенности</h3>
                    <ul className="space-y-2">
                      {caseStudy.features.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Result */}
                  <div className="border-t pt-6">
                    <h3 className="text-xl font-semibold mb-3">Результат</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {caseStudy.result}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center bg-muted/50 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Хотите такой же результат?</h2>
            <p className="text-muted-foreground mb-6">
              Свяжитесь с нами для обсуждения вашего проекта
            </p>
            <a
              href="https://wa.me/79222675034"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 font-medium transition-colors"
            >
              Написать в WhatsApp
            </a>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Cases;
