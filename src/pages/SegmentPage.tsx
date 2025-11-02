import { useParams, Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useState } from "react";
import * as icons from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getSegmentBySlug } from "@/data/segments";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle2, AlertTriangle, Send, Phone, Calculator, Award } from "lucide-react";

const CONTACTS = {
  WHATSAPP: "79222675034",
  PHONE: "+7 922 267 5034"
};

const SegmentPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const segment = slug ? getSegmentBySlug(slug) : undefined;

  const [calcForm, setCalcForm] = useState({
    workType: "",
    metal: "",
    thickness: "",
    accessibility: "",
    length: ""
  });

  const [contactForm, setContactForm] = useState({
    name: "",
    phone: "",
    messenger: "",
    comment: "",
    hasPhotos: false
  });

  if (!segment) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center bg-background">
          <div className="text-center px-4">
            <h1 className="text-4xl font-bold mb-4">404</h1>
            <p className="text-xl text-muted-foreground mb-6">
              Сегмент не найден
            </p>
            <Button asChild>
              <Link to="/dlya-kogo">Назад к «Кому помогаем»</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const IconComponent = icons[segment.heroIcon as keyof typeof icons] as icons.LucideIcon;

  const calculatePrice = () => {
    let base = 5000;
    const metalCoef = { "Сталь": 1, "Нержавейка": 1.4, "Алюминий": 1.6, "Медь": 1.8, "Латунь": 1.5 }[calcForm.metal] || 1;
    const thicknessCoef = { "1-3 мм": 1, "3-6 мм": 1.2, "6-12 мм": 1.5, "более 12 мм": 2 }[calcForm.thickness] || 1;
    const accessCoef = { "Легкий доступ": 1, "Стеснённые условия": 1.3, "Высотные работы": 1.5 }[calcForm.accessibility] || 1;
    const length = parseFloat(calcForm.length) || 1;

    const min = Math.round(base * metalCoef * thicknessCoef * accessCoef * length * 0.8);
    const max = Math.round(base * metalCoef * thicknessCoef * accessCoef * length * 1.2);

    return { min, max };
  };

  const handleWhatsAppCalculator = () => {
    const { min, max } = calculatePrice();
    const message = `Здравствуйте! Запрос со страницы ${segment.title}.\n\nРасчёт:\n- Тип работ: ${calcForm.workType}\n- Металл: ${calcForm.metal}\n- Толщина: ${calcForm.thickness}\n- Доступность: ${calcForm.accessibility}\n- Длина/швы: ${calcForm.length} м/п.м\n\nОриентир: ${min.toLocaleString()} – ${max.toLocaleString()} ₽\n\nПрошу уточнить стоимость и сроки.`;
    window.open(`https://wa.me/${CONTACTS.WHATSAPP}?text=${encodeURIComponent(message)}`, "_blank");
  };

  const handleWhatsAppContact = () => {
    const message = `Здравствуйте! Заявка со страницы ${segment.title}.\n\nИмя: ${contactForm.name}\nТелефон: ${contactForm.phone}\nМессенджер: ${contactForm.messenger}\nКомментарий: ${contactForm.comment}\n${contactForm.hasPhotos ? "Пришлю фото/видео в мессенджер." : ""}`;
    window.open(`https://wa.me/${CONTACTS.WHATSAPP}?text=${encodeURIComponent(message)}`, "_blank");
  };

  const price = calculatePrice();

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": segment.faq.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };

  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": segment.title,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Argo72",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Тюмень",
        "addressRegion": "Тюменская область",
        "addressCountry": "RU"
      },
      "telephone": CONTACTS.PHONE
    },
    "areaServed": "Тюменская область",
    "description": segment.subtitle
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{segment.seo.title}</title>
        <meta name="description" content={segment.seo.description} />
        <link rel="canonical" href={segment.seo.canonical} />
        <script type="application/ld+json">{JSON.stringify(jsonLdFaq)}</script>
        <script type="application/ld+json">{JSON.stringify(jsonLdService)}</script>
      </Helmet>

      <Header />

      <main className="flex-1 bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-hero text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <Breadcrumbs
                items={[
                  { label: "Кому помогаем", href: "/dlya-kogo" },
                  { label: segment.title }
                ]}
              />
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                {IconComponent && <IconComponent className="w-16 h-16 mb-6 text-secondary" />}
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{segment.title}</h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8">{segment.subtitle}</p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    variant="secondary"
                    onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Получить смету
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white/10 text-white border-white/20 hover:bg-white/20"
                    asChild
                  >
                    <a
                      href={`https://wa.me/${CONTACTS.WHATSAPP}?text=${encodeURIComponent(`Здравствуйте! Вопрос по услугам для ${segment.title}. Ссылка: ${window.location.href}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          {/* Pains & Solutions */}
          <section className="grid md:grid-cols-2 gap-6 mb-12">
            <Alert variant="destructive" className="border-destructive/50">
              <AlertTriangle className="h-5 w-5" />
              <AlertTitle className="text-lg font-semibold mb-3">Боли клиента</AlertTitle>
              <AlertDescription>
                <ul className="space-y-2">
                  {segment.pains.map((pain, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <span className="mr-2 mt-0.5">•</span>
                      <span>{pain}</span>
                    </li>
                  ))}
                </ul>
              </AlertDescription>
            </Alert>

            <Alert className="border-primary/50 bg-primary/5">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <AlertTitle className="text-lg font-semibold mb-3">Как решаем</AlertTitle>
              <AlertDescription>
                <ul className="space-y-2">
                  {segment.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <CheckCircle2 className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </AlertDescription>
            </Alert>
          </section>

          {/* Typical Tasks */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Типичные задачи</h2>
            <Card>
              <CardContent className="pt-6">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Задача</TableHead>
                      <TableHead className="hidden md:table-cell">Материал</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {segment.tasks.map((task, idx) => (
                      <TableRow key={idx}>
                        <TableCell>{task}</TableCell>
                        <TableCell className="hidden md:table-cell">
                          <div className="flex gap-2 flex-wrap">
                            {task.toLowerCase().includes("алюминий") && <Badge variant="secondary">Al</Badge>}
                            {task.toLowerCase().includes("нерж") && <Badge variant="secondary">Нерж</Badge>}
                            {task.toLowerCase().includes("медь") && <Badge variant="secondary">Cu</Badge>}
                            {task.toLowerCase().includes("латунь") && <Badge variant="secondary">Латунь</Badge>}
                            {task.toLowerCase().includes("титан") && <Badge variant="secondary">Ti</Badge>}
                            {!task.toLowerCase().match(/(алюминий|нерж|медь|латунь|титан)/) && <Badge variant="outline">Сталь</Badge>}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </section>

          {/* Services */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Что именно делаем</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {segment.services.map((service, idx) => (
                <Card key={idx} className="hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start">
                      <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                      <p className="text-sm">{service}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Price Hints */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Ориентиры цены</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {segment.priceHints.map((hint, idx) => (
                <Card key={idx} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{hint.title}</CardTitle>
                    <div className="text-2xl font-bold text-primary">{hint.price}</div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{hint.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-4 text-center">
              * Точная стоимость — после осмотра или фото узла. Все цены включают материалы и работу.
            </p>
          </section>

          {/* Calculator */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <Calculator className="mr-3 h-8 w-8 text-primary" />
              Смета за 60 секунд
            </h2>
            <Card>
              <CardHeader>
                <CardDescription>
                  Получите ориентировочную стоимость — выберите параметры и рассчитайте вилку цены
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Тип работ</label>
                    <Select value={calcForm.workType} onValueChange={(v) => setCalcForm({ ...calcForm, workType: v })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите тип" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Сварка TIG">Сварка TIG</SelectItem>
                        <SelectItem value="Сварка MIG/MAG">Сварка MIG/MAG</SelectItem>
                        <SelectItem value="Пайка">Пайка</SelectItem>
                        <SelectItem value="Наплавка">Наплавка</SelectItem>
                        <SelectItem value="Ремонт">Ремонт</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Металл</label>
                    <Select value={calcForm.metal} onValueChange={(v) => setCalcForm({ ...calcForm, metal: v })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите металл" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Сталь">Сталь</SelectItem>
                        <SelectItem value="Нержавейка">Нержавейка</SelectItem>
                        <SelectItem value="Алюминий">Алюминий</SelectItem>
                        <SelectItem value="Медь">Медь</SelectItem>
                        <SelectItem value="Латунь">Латунь</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Толщина</label>
                    <Select value={calcForm.thickness} onValueChange={(v) => setCalcForm({ ...calcForm, thickness: v })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите толщину" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-3 мм">1-3 мм</SelectItem>
                        <SelectItem value="3-6 мм">3-6 мм</SelectItem>
                        <SelectItem value="6-12 мм">6-12 мм</SelectItem>
                        <SelectItem value="более 12 мм">более 12 мм</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Доступность</label>
                    <Select value={calcForm.accessibility} onValueChange={(v) => setCalcForm({ ...calcForm, accessibility: v })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Условия работы" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Легкий доступ">Легкий доступ</SelectItem>
                        <SelectItem value="Стеснённые условия">Стеснённые условия</SelectItem>
                        <SelectItem value="Высотные работы">Высотные работы</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="md:col-span-2">
                    <label className="text-sm font-medium mb-2 block">Длина швов / метры (п.м)</label>
                    <Input
                      type="number"
                      placeholder="Например: 5"
                      value={calcForm.length}
                      onChange={(e) => setCalcForm({ ...calcForm, length: e.target.value })}
                    />
                  </div>
                </div>

                {calcForm.workType && calcForm.metal && calcForm.thickness && calcForm.accessibility && calcForm.length && (
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-4">
                    <h3 className="text-lg font-semibold mb-2">Ориентировочная стоимость:</h3>
                    <div className="text-3xl font-bold text-primary">
                      {price.min.toLocaleString()} – {price.max.toLocaleString()} ₽
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      Точная цена после осмотра или фото. Все материалы и работа включены.
                    </p>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button onClick={handleWhatsAppCalculator} className="flex-1">
                    <Send className="mr-2 h-4 w-4" />
                    Отправить в WhatsApp
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
                    className="flex-1"
                  >
                    Оставить заявку
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Checklist */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Чек-лист заказчика</h2>
            <Card>
              <CardHeader>
                <CardDescription>Что подготовить, чтобы ускорить работы и получить точную смету</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-3">
                  {segment.checklist.map((item, idx) => (
                    <div key={idx} className="flex items-start">
                      <Badge variant="secondary" className="mr-3 mt-0.5 flex-shrink-0">
                        {idx + 1}
                      </Badge>
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Trust Section */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Почему доверяют Argo72</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <Award className="w-12 h-12 mx-auto mb-3 text-primary" />
                  <h3 className="font-semibold mb-2">С 2006 года</h3>
                  <p className="text-sm text-muted-foreground">19 лет практического опыта</p>
                </div>
                <div className="text-center">
                  <Award className="w-12 h-12 mx-auto mb-3 text-primary" />
                  <h3 className="font-semibold mb-2">Образование</h3>
                  <p className="text-sm text-muted-foreground">Высшее и техническое сварочное</p>
                </div>
                <div className="text-center">
                  <Award className="w-12 h-12 mx-auto mb-3 text-primary" />
                  <h3 className="font-semibold mb-2">Опыт руководства</h3>
                  <p className="text-sm text-muted-foreground">Мастер и начальник участков в Тюмени</p>
                </div>
                <div className="text-center">
                  <Award className="w-12 h-12 mx-auto mb-3 text-primary" />
                  <h3 className="font-semibold mb-2">ВИК и УЗК</h3>
                  <p className="text-sm text-muted-foreground">Контроль качества по запросу</p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Частые вопросы</h2>
            <Accordion type="single" collapsible className="w-full">
              {segment.faq.map((item, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`}>
                  <AccordionTrigger className="text-left">{item.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {/* Contact Form */}
          <section id="contact-form" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Оставить заявку</h2>
            <Card>
              <CardHeader>
                <CardDescription>
                  Заполните форму — свяжемся в течение 5–15 минут в рабочее время
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                    <Input
                      placeholder="Иван"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Телефон</label>
                    <Input
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="text-sm font-medium mb-2 block">WhatsApp / Telegram</label>
                    <Input
                      placeholder="Номер или ник"
                      value={contactForm.messenger}
                      onChange={(e) => setContactForm({ ...contactForm, messenger: e.target.value })}
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="text-sm font-medium mb-2 block">Комментарий</label>
                    <Textarea
                      placeholder="Опишите задачу, укажите адрес/местоположение"
                      rows={4}
                      value={contactForm.comment}
                      onChange={(e) => setContactForm({ ...contactForm, comment: e.target.value })}
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={contactForm.hasPhotos}
                        onChange={(e) => setContactForm({ ...contactForm, hasPhotos: e.target.checked })}
                        className="w-4 h-4"
                      />
                      <span className="text-sm">Есть фото/видео — пришлю в мессенджер</span>
                    </label>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button onClick={handleWhatsAppContact} className="flex-1">
                    <Send className="mr-2 h-4 w-4" />
                    Отправить в WhatsApp
                  </Button>
                  <Button variant="outline" className="flex-1" asChild>
                    <a href={`tel:${CONTACTS.PHONE}`}>
                      <Phone className="mr-2 h-4 w-4" />
                      Позвонить
                    </a>
                  </Button>
                </div>

                <p className="text-sm text-muted-foreground text-center mt-4">
                  Обычно отвечаем за 5–15 минут. Срочно? <a href={`tel:${CONTACTS.PHONE}`} className="text-primary hover:underline">Звоните!</a>
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Related Links */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Это может пригодиться</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Button variant="outline" asChild className="h-auto py-4">
                <Link to="/uslugi">
                  <div className="text-left w-full">
                    <div className="font-semibold">Все услуги</div>
                    <div className="text-xs text-muted-foreground">Полный каталог работ</div>
                  </div>
                </Link>
              </Button>
              <Button variant="outline" asChild className="h-auto py-4">
                <Link to="/ceny">
                  <div className="text-left w-full">
                    <div className="font-semibold">Прайс-лист</div>
                    <div className="text-xs text-muted-foreground">Цены на основные работы</div>
                  </div>
                </Link>
              </Button>
              <Button variant="outline" asChild className="h-auto py-4">
                <Link to="/baza-znaniy">
                  <div className="text-left w-full">
                    <div className="font-semibold">База знаний</div>
                    <div className="text-xs text-muted-foreground">Статьи и чек-листы</div>
                  </div>
                </Link>
              </Button>
            </div>
          </section>
        </div>

        {/* Sticky CTA Mobile */}
        <div className="fixed bottom-0 left-0 right-0 bg-background border-t p-4 md:hidden z-50 shadow-lg">
          <Button
            className="w-full"
            size="lg"
            asChild
          >
            <a
              href={`https://wa.me/${CONTACTS.WHATSAPP}?text=${encodeURIComponent(`Скинуть фото узла — подскажете бесплатно? Страница: ${segment.title}`)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Send className="mr-2 h-5 w-5" />
              Скинуть фото узла → подскажем бесплатно
            </a>
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SegmentPage;
