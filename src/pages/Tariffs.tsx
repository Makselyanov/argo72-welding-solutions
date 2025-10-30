import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import tariffsData from "@/data/tariffs.json";

const Tariffs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-background py-12">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[{ label: "Тарифы" }]} />
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Тарифы и пакеты</h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
            Выберите удобный формат сотрудничества: разовые работы, почасовая оплата 
            или абонементное обслуживание со скидками
          </p>

          <div className="space-y-16">
            {/* Базовые тарифы */}
            <section>
              <h2 className="text-3xl font-bold mb-8">Базовые тарифы</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {tariffsData.tariffs.slice(0, 3).map((tariff) => (
                  <Card key={tariff.id} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-2xl">{tariff.title}</CardTitle>
                      <CardDescription>{tariff.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <div className="text-sm text-muted-foreground">От</div>
                        <div className="text-3xl font-bold text-primary">
                          {tariff.priceFrom} ₽
                          {tariff.priceUnit && <span className="text-lg text-muted-foreground"> / {tariff.priceUnit}</span>}
                        </div>
                        {tariff.coefficient && (
                          <Badge variant="secondary" className="mt-2">{tariff.coefficient}</Badge>
                        )}
                        {tariff.minHours && (
                          <div className="text-sm text-muted-foreground mt-1">
                            Минимум {tariff.minHours} часа
                          </div>
                        )}
                      </div>
                      <ul className="space-y-2">
                        {tariff.features.map((feature, index) => (
                          <li key={index} className="flex items-start text-sm">
                            <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button asChild className="w-full">
                        <Link to={`/tarify/${tariff.slug}`}>
                          Подробнее
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Абонементы для ТСЖ */}
            <section>
              <h2 className="text-3xl font-bold mb-4">Абонементы для ТСЖ</h2>
              <p className="text-muted-foreground mb-8">
                Пакеты «Домовой» — фиксированные часы работ в месяц с гарантированным SLA
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {tariffsData.tariffs.find(t => t.id === "abon-tszh")?.packages?.map((pkg, index) => (
                  <Card key={index} className={index === 1 ? "border-primary shadow-md" : ""}>
                    {index === 1 && (
                      <div className="bg-primary text-primary-foreground text-center py-2 rounded-t-lg font-semibold">
                        Популярный
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                      <CardDescription>{pkg.hours} часов работ в месяц</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <div className="text-4xl font-bold text-primary">
                          {pkg.price.toLocaleString()} ₽
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {Math.round(pkg.price / pkg.hours)} ₽/час
                        </div>
                      </div>
                      <Badge variant="outline">{pkg.sla}</Badge>
                      <ul className="space-y-2">
                        {pkg.features.map((feature, fIndex) => (
                          <li key={fIndex} className="flex items-start text-sm">
                            <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button asChild className="w-full" variant={index === 1 ? "default" : "outline"}>
                        <Link to="/order">
                          Выбрать пакет
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Абонементы для УК */}
            <section>
              <h2 className="text-3xl font-bold mb-4">Абонементы для УК</h2>
              <p className="text-muted-foreground mb-8">
                Корпоративные пакеты Bronze/Silver/Gold для управляющих компаний
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {tariffsData.tariffs.find(t => t.id === "abon-uk")?.packages?.map((pkg, index) => (
                  <Card key={index} className={index === 1 ? "border-primary shadow-md" : ""}>
                    {index === 1 && (
                      <div className="bg-primary text-primary-foreground text-center py-2 rounded-t-lg font-semibold">
                        Оптимальный
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                      <Badge variant="secondary">{pkg.sla}</Badge>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <div className="text-4xl font-bold text-primary">
                          {pkg.price.toLocaleString()} ₽
                        </div>
                        <div className="text-sm text-muted-foreground">в месяц</div>
                      </div>
                      <ul className="space-y-2">
                        {pkg.features.map((feature, fIndex) => (
                          <li key={fIndex} className="flex items-start text-sm">
                            <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button asChild className="w-full" variant={index === 1 ? "default" : "outline"}>
                        <Link to="/order">
                          Выбрать пакет
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          {/* CTA секция */}
          <section className="mt-16 bg-gradient-hero rounded-2xl p-12 text-center text-primary-foreground">
            <h2 className="text-3xl font-bold mb-4">Не нашли подходящий тариф?</h2>
            <p className="text-xl mb-8 opacity-90">
              Мы составим индивидуальное предложение под ваши задачи
            </p>
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary-light">
              <Link to="/kontakty">
                Получить консультацию
              </Link>
            </Button>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Tariffs;
