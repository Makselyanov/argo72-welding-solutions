import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, XCircle, Calculator, Download } from "lucide-react";
import pricingData from "@/data/pricing.json";

const Prices = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Цены на сварку цветных металлов Тюмень | Прайс-лист Argo72</title>
        <meta 
          name="description" 
          content="Прайс на сварку алюминия TIG/MIG, пайку меди и латуни в Тюмени. Онлайн калькулятор стоимости, почасовая оплата, выезд. Цены от 300₽. Argo72" 
        />
        <meta 
          name="keywords" 
          content="цены на сварку, прайс TIG алюминий, стоимость пайки меди, сварщик на час цена Тюмень, калькулятор сварки" 
        />
        <link rel="canonical" href="https://argo72.ru/ceny" />
      </Helmet>

      <Header />
      
      <main className="flex-1 bg-background py-12">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[{ label: "Цены" }]} />
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Цены на сварочные работы</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
            Прозрачный прайс-лист на сварку алюминия, меди, латуни, НК контроль и инжиниринг. 
            Почасовая оплата и пакеты обслуживания
          </p>

          {/* Быстрые действия */}
          <div className="flex flex-wrap gap-4 mb-12">
            <Button asChild size="lg">
              <a href="#callbackwidget">
                <Calculator className="mr-2 h-5 w-5" />
                Рассчитать стоимость
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="/download/prajs.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                Скачать прайс PDF
              </a>
            </Button>
          </div>

          {/* Основные прайсы */}
          <div className="space-y-12">
            {pricingData.categories.map((category) => (
              <section key={category.id}>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">{category.name}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="min-w-[200px]">Наименование работ</TableHead>
                            <TableHead className="min-w-[120px]">Единица измерения</TableHead>
                            <TableHead className="text-right min-w-[150px]">Цена от</TableHead>
                            <TableHead className="min-w-[200px]">Примечание</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {category.items.map((item, index) => (
                            <TableRow key={index}>
                              <TableCell className="font-medium">{item.name}</TableCell>
                              <TableCell className="text-muted-foreground">{item.unit}</TableCell>
                              <TableCell className="text-right">
                                <div className="font-semibold text-primary">
                                  {item.priceFrom.toLocaleString()} ₽
                                </div>
                                {item.priceTo && (
                                  <div className="text-xs text-muted-foreground">
                                    до {item.priceTo.toLocaleString()} ₽
                                  </div>
                                )}
                              </TableCell>
                              <TableCell className="text-sm text-muted-foreground">
                                {item.notes}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </CardContent>
                </Card>
              </section>
            ))}
          </div>

          {/* Почасовые тарифы */}
          <section className="mt-12">
            <h2 className="text-3xl font-bold mb-6">Почасовые тарифы</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {pricingData.hourlyRates.map((rate, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{rate.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-primary mb-2">
                      {rate.rate.toLocaleString()} ₽
                      <span className="text-lg text-muted-foreground"> / час</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{rate.notes}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Коэффициенты */}
          <section className="mt-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Коэффициенты сложности</CardTitle>
                <CardDescription>
                  Дополнительные надбавки к базовой стоимости работ
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {pricingData.coefficients.map((coef, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg border">
                      <span className="font-medium">{coef.condition}</span>
                      <Badge variant="secondary" className="text-lg">
                        {coef.multiplier}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Что входит и не входит */}
          <section className="mt-12">
            <h2 className="text-3xl font-bold mb-6">Что входит в стоимость</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <CheckCircle className="h-5 w-5 text-primary mr-2" />
                    Включено в цену
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {pricingData.included.map((item, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <XCircle className="h-5 w-5 text-muted-foreground mr-2" />
                    Оплачивается отдельно
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {pricingData.notIncluded.map((item, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <XCircle className="h-4 w-4 text-muted-foreground mr-2 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* FAQ */}
          <section className="mt-12">
            <h2 className="text-3xl font-bold mb-6">Часто задаваемые вопросы</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Как формируется итоговая цена работ?</AccordionTrigger>
                <AccordionContent>
                  Итоговая стоимость зависит от: типа работ (TIG/MIG/пайка), толщины металла, 
                  объёма работ, срочности, необходимости выезда и дополнительных услуг (НК, документация). 
                  Мы предоставляем прозрачную смету до начала работ.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>Минимальная стоимость заказа?</AccordionTrigger>
                <AccordionContent>
                  Для почасовой работы минимум 2 часа (3000 ₽). Для разовых работ — от 1500 ₽ 
                  в зависимости от сложности. Срочный выезд 24/7 — от 5000 ₽ с учётом коэффициента.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>Есть ли скидки для постоянных клиентов?</AccordionTrigger>
                <AccordionContent>
                  Да, мы предлагаем абонементы для ТСЖ и УК (от 10 до 40 часов в месяц) со скидкой 
                  до 20%. Для производственных клиентов действует аутсорсинг и мелкосерийные пакеты. 
                  При больших объёмах — индивидуальные условия.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>Как быстро получить точный расчёт?</AccordionTrigger>
                <AccordionContent>
                  Пришлите фото/чертёж в WhatsApp или Telegram, укажите размеры и тип работ. 
                  В рабочее время мы ответим в течение 30-60 минут. Для сложных проектов можем 
                  выехать на объект для бесплатной оценки.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>Включён ли выезд в стоимость?</AccordionTrigger>
                <AccordionContent>
                  По Тюмени (в пределах города) выезд включён в почасовой тариф. 
                  За городом — от 30 ₽/км в обе стороны. Для срочных выездов 24/7 действует коэффициент 1.5-2.0.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* CTA */}
          <section className="mt-16 bg-gradient-hero rounded-2xl p-12 text-center text-primary-foreground">
            <h2 className="text-3xl font-bold mb-4">Нужна консультация по стоимости?</h2>
            <p className="text-xl mb-8 opacity-90">
              Отправьте фото детали или чертёж — составим смету за 30 минут
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary-light">
                <a href="#callbackwidget">
                  Получить расчёт
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 border-white/30 hover:bg-white/20">
                <a href="tel:+79222675034">
                  Позвонить сейчас
                </a>
              </Button>
            </div>
          </section>
        </div>
      </main>

      <Footer />

      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Прайс-лист Argo72",
          "description": "Цены на сварку цветных металлов в Тюмени",
          "itemListElement": pricingData.categories.map((category, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
              "@type": "Service",
              "name": category.name,
              "description": category.description,
              "provider": {
                "@type": "LocalBusiness",
                "name": "Argo72"
              }
            }
          }))
        })}
      </script>

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Как формируется итоговая цена работ?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Итоговая стоимость зависит от: типа работ (TIG/MIG/пайка), толщины металла, объёма работ, срочности, необходимости выезда и дополнительных услуг (НК, документация)."
              }
            },
            {
              "@type": "Question",
              "name": "Минимальная стоимость заказа?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Для почасовой работы минимум 2 часа (3000 ₽). Для разовых работ — от 1500 ₽ в зависимости от сложности."
              }
            },
            {
              "@type": "Question",
              "name": "Есть ли скидки для постоянных клиентов?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Да, мы предлагаем абонементы для ТСЖ и УК со скидкой до 20%. Для производственных клиентов действует аутсорсинг и мелкосерийные пакеты."
              }
            }
          ]
        })}
      </script>

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Главная",
              "item": "https://argo72.ru"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Цены",
              "item": "https://argo72.ru/ceny"
            }
          ]
        })}
      </script>
    </div>
  );
};

export default Prices;
