import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Clock, Shield, Award, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import servicesData from "@/data/services.json";

const Index = () => {
  const featuredServices = servicesData.categories.slice(0, 2).flatMap(cat => 
    cat.services.slice(0, 3)
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero секция */}
      <section className="relative bg-gradient-hero text-primary-foreground py-20 lg:py-32">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Сварка цветных металлов
              <span className="block text-secondary-light">любой сложности</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              TIG/MIG алюминий, пайка меди, аварийный выезд 24/7 по Тюмени
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary-light shadow-accent">
                <a href="#callbackwidget">
                  Заказать сварщика
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                <a href="#callbackwidget">
                  Рассчитать стоимость
                </a>
              </Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold mb-1">24/7</div>
                <div className="text-sm opacity-90">Аварийная служба</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold mb-1">30 мин</div>
                <div className="text-sm opacity-90">Выезд по городу</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold mb-1">15+ лет</div>
                <div className="text-sm opacity-90">Опыт работы</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold mb-1">100%</div>
                <div className="text-sm opacity-90">Контроль качества</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Почему выбирают Argo72</h2>
            <p className="text-xl text-muted-foreground">Профессионализм, надёжность, качество</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Wrench className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Цветные металлы</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Специализация на алюминии, меди, латуни. TIG AC/DC и MIG технологии
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-lg">Срочно 24/7</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Аварийный выезд круглосуточно. Гарантированное время реакции по SLA
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Полный контроль</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  ВИК, капиллярный и УЗК. Фото/видео отчёты по каждой работе
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-lg">Гарантии</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Гарантия на работы 6-12 месяцев. Все допуски и сертификаты
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Популярные услуги */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Популярные услуги</h2>
            <p className="text-xl text-muted-foreground">Выберите нужную услугу или закажите консультацию</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredServices.map((service) => (
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
          <div className="text-center">
            <Button asChild size="lg" variant="outline">
              <Link to="/uslugi">
                Все услуги
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Кому помогаем */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Кому помогаем</h2>
            <p className="text-xl text-muted-foreground">Решаем задачи разных отраслей</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "ТСЖ и ЖСК", href: "/dlya-kogo/tszh" },
              { title: "Управляющие компании", href: "/dlya-kogo/uk" },
              { title: "HVAC и холодильщики", href: "/dlya-kogo/hvac" },
              { title: "Автосервисы", href: "/dlya-kogo/auto" },
              { title: "Лодки и катера", href: "/dlya-kogo/boats" },
              { title: "Производство", href: "/dlya-kogo/manufacturing" },
              { title: "Девелоперы", href: "/dlya-kogo/dev" },
              { title: "Все отрасли →", href: "/dlya-kogo" },
            ].map((segment) => (
              <Link
                key={segment.title}
                to={segment.href}
                className="group p-6 rounded-lg border bg-card hover:shadow-md transition-all"
              >
                <h3 className="font-semibold group-hover:text-primary transition-colors">
                  {segment.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section className="py-16 bg-gradient-accent">
        <div className="container mx-auto px-4 text-center text-accent-foreground">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Нужна срочная помощь?</h2>
          <p className="text-xl mb-8 opacity-90">
            Круглосуточная аварийная служба. Выезд за 30-90 минут
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="outline" className="bg-white text-secondary border-white hover:bg-white/90">
              <a href="tel:+79222675034">
                Позвонить сейчас
              </a>
            </Button>
            <Button asChild size="lg" className="bg-white/20 border border-white/30 hover:bg-white/30">
              <a href="#callbackwidget">
                Срочный вызов 24/7
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Процесс работы */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Как мы работаем</h2>
            <p className="text-xl text-muted-foreground">Простой и прозрачный процесс</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Заявка", desc: "Звонок, WhatsApp или форма на сайте" },
              { step: "02", title: "Оценка", desc: "Выезд, осмотр, расчёт стоимости" },
              { step: "03", title: "Работа", desc: "Сварка с контролем качества" },
              { step: "04", title: "Сдача", desc: "Акт выполненных работ, гарантия" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary text-2xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
