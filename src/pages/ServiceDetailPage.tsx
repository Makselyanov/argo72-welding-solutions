import { useParams, Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ArrowLeft, CheckCircle2, AlertCircle, Phone, MessageCircle, Calculator } from "lucide-react";
import * as LucideIcons from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { getServiceBySlug } from "@/data/servicesDetailed";
import { useState } from "react";

const WHATSAPP_NUMBER = "79829106673";

const ServiceDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const service = slug ? getServiceBySlug(slug) : undefined;

  const [calcType, setCalcType] = useState("");
  const [calcMetal, setCalcMetal] = useState("");
  const [calcThickness, setCalcThickness] = useState("");
  const [calcLength, setCalcLength] = useState("");
  const [calcPrice, setCalcPrice] = useState<string | null>(null);

  const [formName, setFormName] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formMessage, setFormMessage] = useState("");

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container py-12">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Услуга не найдена</h1>
            <p className="text-muted-foreground mb-6">К сожалению, страница услуги с таким адресом не существует.</p>
            <Button asChild>
              <Link to="/uslugi">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Назад к услугам
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const IconComponent = (LucideIcons as any)[service.heroIcon] || LucideIcons.Wrench;

  const handleCalculate = () => {
    if (!calcType || !calcMetal || !calcThickness || !calcLength) {
      setCalcPrice("Заполните все поля");
      return;
    }

    const basePrice = 800;
    const metalCoeff = calcMetal === "aluminum" ? 1.2 : calcMetal === "copper" ? 1.3 : calcMetal === "stainless" ? 1.1 : 1;
    const thicknessCoeff = calcThickness === "thin" ? 1.5 : calcThickness === "medium" ? 1 : 0.9;
    const lengthNum = parseFloat(calcLength);

    if (isNaN(lengthNum)) {
      setCalcPrice("Некорректная длина");
      return;
    }

    const total = Math.round(basePrice * metalCoeff * thicknessCoeff * lengthNum);
    setCalcPrice(`${total - 200} – ${total + 300} ₽`);
  };

  const handleWhatsAppCalc = () => {
    const message = `Здравствуйте! Запрашиваю смету по услуге "${service.title}". Тип работ: ${calcType}, металл: ${calcMetal}, толщина: ${calcThickness}, длина швов: ${calcLength} м. Расчётная стоимость: ${calcPrice}. Страница: ${window.location.href}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
  };

  const handleWhatsAppForm = () => {
    const message = `Здравствуйте! Заявка с сайта.\nУслуга: ${service.title}\nИмя: ${formName}\nТелефон: ${formPhone}\nКомментарий: ${formMessage}\nСтраница: ${window.location.href}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
  };

  const breadcrumbItems = [
    { label: "Главная", href: "/" },
    { label: "Услуги", href: "/uslugi" },
    { label: service.title },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    provider: {
      "@type": "LocalBusiness",
      name: "Argo72",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Тюмень",
        addressCountry: "RU",
      },
      telephone: "+7-982-910-66-73",
    },
    areaServed: "Тюмень",
    description: service.subtitle,
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{service.seo.title}</title>
        <meta name="description" content={service.seo.description} />
        <meta name="keywords" content={service.seo.keywords} />
        <link rel="canonical" href={service.seo.canonical} />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>

      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16">
          <div className="container">
            <div className="mb-6">
              <Breadcrumbs items={breadcrumbItems} />
            </div>
            <div className="flex items-start gap-6">
              <div className="hidden md:block">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
                  <IconComponent className="w-10 h-10 text-primary" />
                </div>
              </div>
              <div className="flex-1">
                <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
                <p className="text-xl text-slate-300 mb-6">{service.subtitle}</p>
                <div className="flex flex-wrap gap-3">
                  <Button size="lg" onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}>
                    Получить смету
                  </Button>
                  <Button size="lg" variant="outline" asChild className="bg-white/10 border-white/20 hover:bg-white/20">
                    <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Здравствуйте! Интересует услуга "${service.title}". Страница: ${window.location.href}`)}`} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 h-5 w-5" />
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Боли и решения */}
        <section className="container py-12">
          <div className="grid md:grid-cols-2 gap-6">
            <Alert className="border-destructive/50 bg-destructive/5">
              <AlertCircle className="h-5 w-5 text-destructive" />
              <AlertDescription>
                <h3 className="font-semibold text-lg mb-3 text-destructive">Типичные проблемы клиентов</h3>
                <ul className="space-y-2">
                  {service.pains.map((pain, i) => (
                    <li key={i} className="text-sm flex items-start gap-2">
                      <span className="text-destructive mt-0.5">•</span>
                      <span>{pain}</span>
                    </li>
                  ))}
                </ul>
              </AlertDescription>
            </Alert>

            <Alert className="border-primary/50 bg-primary/5">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <AlertDescription>
                <h3 className="font-semibold text-lg mb-3 text-primary">Как мы решаем</h3>
                <ul className="space-y-2">
                  {service.solutions.map((solution, i) => (
                    <li key={i} className="text-sm flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{solution}</span>
                    </li>
                  ))}
                </ul>
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* Применение */}
        <section className="bg-muted/30 py-12">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8">Где применяется</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {service.applications.map((app, i) => (
                <Card key={i}>
                  <CardContent className="pt-6">
                    <p className="text-sm">{app}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Технология */}
        <section className="container py-12">
          <h2 className="text-3xl font-bold mb-8">Технология выполнения</h2>
          <Card>
            <CardContent className="pt-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-1/3">Параметр</TableHead>
                    <TableHead>Значение</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-semibold">Метод</TableCell>
                    <TableCell>{service.technology.method}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-semibold">Защитный газ</TableCell>
                    <TableCell>{service.technology.gas}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-semibold">Присадка/проволока</TableCell>
                    <TableCell>{service.technology.wire}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-semibold">Толщина металла</TableCell>
                    <TableCell>{service.technology.thickness}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </section>

        {/* Преимущества */}
        <section className="bg-muted/30 py-12">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8">Наши преимущества</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {service.advantages.map((adv, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm">{adv}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ориентиры цен */}
        <section className="container py-12">
          <h2 className="text-3xl font-bold mb-4">Ориентиры стоимости</h2>
          <p className="text-muted-foreground mb-8">Точная цена рассчитывается после осмотра узла или фото</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.priceHints.map((hint, i) => (
              <Card key={i} className="relative">
                <CardHeader>
                  <Badge className="absolute top-4 right-4">от {hint.price.split(" ")[1]}</Badge>
                  <CardTitle className="text-lg pr-20">{hint.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-primary mb-2">{hint.price}</p>
                  <CardDescription>{hint.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Калькулятор */}
        <section className="bg-muted/30 py-12">
          <div className="container">
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Calculator className="h-6 w-6 text-primary" />
                  <CardTitle>Смета за 60 секунд</CardTitle>
                </div>
                <CardDescription>Приблизительный расчёт — точная цена после осмотра или фото</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label>Тип работ</Label>
                    <Select value={calcType} onValueChange={setCalcType}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="repair">Мелкий ремонт</SelectItem>
                        <SelectItem value="weld">Сварка швов</SelectItem>
                        <SelectItem value="fabrication">Изготовление</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Металл</Label>
                    <Select value={calcMetal} onValueChange={setCalcMetal}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="aluminum">Алюминий</SelectItem>
                        <SelectItem value="copper">Медь/латунь</SelectItem>
                        <SelectItem value="stainless">Нержавейка</SelectItem>
                        <SelectItem value="steel">Чёрная сталь</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Толщина</Label>
                    <Select value={calcThickness} onValueChange={setCalcThickness}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="thin">Тонкая (0.5–2 мм)</SelectItem>
                        <SelectItem value="medium">Средняя (3–8 мм)</SelectItem>
                        <SelectItem value="thick">Толстая (&gt;8 мм)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Длина швов (м)</Label>
                    <Input type="number" placeholder="например, 2.5" value={calcLength} onChange={(e) => setCalcLength(e.target.value)} />
                  </div>
                </div>

                <Button onClick={handleCalculate} className="w-full">
                  Рассчитать
                </Button>

                {calcPrice && (
                  <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
                    <p className="text-sm text-muted-foreground mb-1">Ориентировочная стоимость:</p>
                    <p className="text-2xl font-bold text-primary mb-3">{calcPrice}</p>
                    <div className="flex gap-2">
                      <Button size="sm" onClick={handleWhatsAppCalc} className="flex-1">
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Отправить в WhatsApp
                      </Button>
                      <Button size="sm" variant="outline" onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })} className="flex-1">
                        Оставить заявку
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Доверие */}
        <section className="container py-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Почему доверяют Argo72</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">2006</div>
                <p className="text-sm text-muted-foreground">Год основания, 18+ лет опыта</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">ВУЗ</div>
                <p className="text-sm text-muted-foreground">Высшее и техническое сварочное образование</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">ВИК</div>
                <p className="text-sm text-muted-foreground">Контроль качества швов в стоимость работ</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">12 мес</div>
                <p className="text-sm text-muted-foreground">Гарантия на герметичность и прочность</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-muted/30 py-12">
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-bold mb-8">Часто задаваемые вопросы</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {service.faq.map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="bg-background border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="font-semibold">{item.q}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Форма заявки */}
        <section id="contact-form" className="container py-12">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Оставить заявку</CardTitle>
              <CardDescription>Обычно отвечаем за 5–15 минут. Срочно? Звоните!</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="name">Имя</Label>
                <Input id="name" placeholder="Как к вам обращаться?" value={formName} onChange={(e) => setFormName(e.target.value)} />
              </div>
              <div>
                <Label htmlFor="phone">Телефон *</Label>
                <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" value={formPhone} onChange={(e) => setFormPhone(e.target.value)} required />
              </div>
              <div>
                <Label htmlFor="message">Комментарий</Label>
                <Textarea id="message" placeholder="Опишите задачу: что нужно сварить, какой металл, толщина, есть ли фото..." rows={4} value={formMessage} onChange={(e) => setFormMessage(e.target.value)} />
              </div>

              <div className="flex gap-3">
                <Button onClick={handleWhatsAppForm} className="flex-1">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Отправить в WhatsApp
                </Button>
                <Button variant="outline" asChild className="flex-1">
                  <a href={`tel:+${WHATSAPP_NUMBER}`}>
                    <Phone className="mr-2 h-4 w-4" />
                    Позвонить
                  </a>
                </Button>
              </div>

              <p className="text-xs text-center text-muted-foreground">Нажимая кнопку, вы соглашаетесь с обработкой персональных данных</p>
            </CardContent>
          </Card>
        </section>

        {/* Sticky CTA Mobile */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-background border-t p-3 shadow-lg z-50">
          <Button
            className="w-full"
            onClick={() => {
              const message = `Здравствуйте! Хочу отправить фото узла для консультации по услуге "${service.title}". Страница: ${window.location.href}`;
              window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
            }}
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            Скинуть фото узла в WhatsApp
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceDetailPage;
