import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Award,
  FileText,
  Users,
  Clock,
  Camera,
  Phone,
  Calculator,
  AlertCircle,
  CheckCircle2
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import founder from "@/assets/founder.jpg";

const About = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://argo72.ru/#organization",
        "name": "Argo72",
        "legalName": "ООО «АРГО»",
        "description": "Сварка цветных металлов: TIG/MIG алюминий, пайка меди/латуни, выезд 24/7, ВИК/ПК, разработка ТЗ/WPS",
        "url": "https://argo72.ru",
        "telephone": ["+79222675034", "+79058248564"],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "ул. Камчатская, 1",
          "addressLocality": "Тюмень",
          "addressRegion": "Тюменская область",
          "addressCountry": "RU"
        },
        "areaServed": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": "57.1522",
            "longitude": "65.5272"
          },
          "geoRadius": "100000"
        },
        "openingHours": "Mo-Su 00:00-23:59",
        "priceRange": "₽₽",
        "sameAs": []
      },
      {
        "@type": "Organization",
        "@id": "https://argo72.ru/#organization",
        "name": "Argo72",
        "legalName": "ООО «АРГО»",
        "taxID": "720321829472",
        "url": "https://argo72.ru",
        "logo": "https://argo72.ru/logo.png",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+79222675034",
          "contactType": "customer service",
          "availableLanguage": "Russian",
          "areaServed": "RU"
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Главная",
            "item": "https://argo72.ru/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "О нас",
            "item": "https://argo72.ru/o-nas"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Сколько занимает оценка по фото?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Обычно до 30–60 минут в рабочее время. Мы изучаем фото, уточняем технические требования и предоставляем расчёт стоимости и сроков."
            }
          },
          {
            "@type": "Question",
            "name": "Делаете выезд на объект?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Да, предоставляем услугу «сварщик на час» и аварийный выезд 24/7 по Тюмени и области. Срочные работы выполняются с коэффициентом."
            }
          },
          {
            "@type": "Question",
            "name": "Нужен ли чертёж для работы?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Достаточно фото и размеров для большинства работ. Для проектных работ составим ТЗ и WPS сами."
            }
          },
          {
            "@type": "Question",
            "name": "Делаете неразрушающий контроль?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "ВИК (визуально-измерительный контроль) делаем всегда. ПК (капиллярный контроль) — по запросу. УЗК выполняет проверенный партнёр."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>О нас Argo72 — сварка алюминия TIG/MIG, пайка меди/латуни, Тюмень</title>
        <meta
          name="description"
          content="Argo72 — 19 лет опыта. Сварка цветных металлов: TIG/MIG алюминий, пайка меди/латуни, выезд 24/7, ВИК/ПК, разработка ТЗ/WPS. Тюмень и область."
        />
        <meta
          name="keywords"
          content="сварка цветных металлов, TIG алюминий Тюмень, пайка меди, сварщик на час, ВИК контроль, капиллярный контроль, разработка ТЗ, WPS, выездной сварщик"
        />
        <link rel="canonical" href="https://argo72.ru/o-nas" />

        {/* Open Graph */}
        <meta property="og:title" content="О нас Argo72 — сварка алюминия TIG/MIG, пайка меди/латуни, Тюмень" />
        <meta property="og:description" content="19 лет опыта в сварке цветных металлов. TIG/MIG алюминий, пайка меди, выезд 24/7, контроль качества." />
        <meta property="og:url" content="https://argo72.ru/o-nas" />
        <meta property="og:type" content="website" />

        {/* JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Header />

        <main className="flex-1">
          <div className="container mx-auto px-4 py-8">
            <Breadcrumbs items={[{ label: "О нас" }]} />

            {/* Hero + основатель */}
            <section className="mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                О нас
              </h1>

              <div className="grid md:grid-cols-[auto,1fr] gap-6 items-center mb-8">
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden shadow-lg border border-border bg-muted flex items-center justify-center">
                  <img
                    src={founder}
                    alt="Калугин Максим Александрович"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    Основатель <strong className="text-foreground">Калугин Максим Александрович</strong> — инженер-сварщик
                    с высшим инженерным и профильным техническим сварочным образованием.
                  </p>
                  <p>
                    В сварочном производстве с 2006 года. Специализируется на выполнении ответственных сварочных работ,
                    соблюдении технологий и контроле качества швов.
                  </p>
                  <p>
                    В 2025 году прошёл обучение в учебном центре «Бизнес-клуб “ТЕРРА”» — некоммерческая организация,
                    объединяющая предпринимателей, желающих менять жизнь и мир вокруг. В Тюмени регулярно повышает
                    квалификацию и следит за современными требованиями к безопасности и качеству сварки.
                  </p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Argo72 — мастерская точной сварки цветных металлов в Тюмени.{" "}
                  <strong className="text-foreground">19 лет практики (с 2006 года)</strong>,
                  специализация: <strong className="text-primary">TIG/MIG по алюминию</strong>,{" "}
                  <strong className="text-primary">пайка меди/латуни</strong>,{" "}
                  <strong className="text-primary">контроль ВИК/ПК</strong>, разработка{" "}
                  <strong className="text-primary">ТЗ и WPS</strong>.
                  Работаем вдвоём: быстро, лично, без лишних посредников.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mt-6">
                <Button asChild size="lg">
                  <a href="#callbackwidget">
                    <Camera className="mr-2 h-5 w-5" />
                    Отправить фото детали
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="#callbackwidget">
                    <Calculator className="mr-2 h-5 w-5" />
                    Рассчитать стоимость
                  </a>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <a href="#callbackwidget">
                    <AlertCircle className="mr-2 h-5 w-5" />
                    Срочный вызов 24/7
                  </a>
                </Button>
              </div>
            </section>

            {/* Кто мы */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                Кто мы и почему нам доверяют
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      Основатели
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-muted-foreground">
                    <p>
                      <strong className="text-foreground">Калугин Максим Александрович</strong> и{" "}
                      <strong className="text-foreground">Кузнецов Максим Владимирович</strong> —
                      высшее сварочное образование + техническое сварочное образование.
                    </p>
                    <p>
                      Производственная практика с 2006 года, путь от сварщика до мастера и начальника
                      участка сварочных работ в Тюмени.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <ShieldCheck className="h-5 w-5 text-primary" />
                      Команда
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-muted-foreground">
                    <p>
                      2 специалиста и наёмные сварщики, прошедшие аттестацию — ведущий сварщик/технолог
                      и мастер-приёмщик.
                    </p>
                    <p>
                      Прямое участие в каждом заказе, персональная ответственность, без «потерянных задач».
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-muted/50">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <Award className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Фокус на цветных металлах</h3>
                      <p className="text-muted-foreground">
                        Специализируемся на алюминиевых сплавах (Al 5xxx/6xxx), меди и латуни.
                        Тонкостенные конструкции, узлы с требованиями к тепловложению и эстетике шва.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* 19 лет опыта */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                19 лет опыта — что это даёт заказчику
              </h2>

              <div className="bg-destructive/10 border-l-4 border-destructive p-6 rounded-lg mb-8">
                <h3 className="font-semibold text-foreground mb-3">Проблемы, с которыми к нам приходят:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    <span>Перегрев и коробление алюминия</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    <span>Поры из-за грязной подготовки</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    <span>Неправильные газы и режимы</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    <span>Отсутствие вентиляции и контроля качества</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    <span>«На глаз» посчитанная смета, срывы сроков</span>
                  </li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Подготовка</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Подготовка кромок, обезжиривание, при необходимости — подогрев для минимизации деформаций
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Выбор процесса</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    TIG AC/DC для тонкостенки и эстетики, MIG/MAG (пульс) для серий и силовых элементов
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Контроль</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    ВИК по умолчанию, капиллярный контроль (ПК) при необходимости, УЗК — через проверенного партнёра
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Документы</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Составляем ТЗ/дефектовку, рабочие инструкции и маршрутно-операционные карты (WPS)
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Безопасность</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Приточно-вытяжная вентиляция, локальные отсосы, СИЗ, соблюдение требований ОТ и ПБ
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Смета и сроки</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Считаем до старта, фиксируем условия и SLA, держим связь 24/7 для аварий
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Организация труда */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                Организация труда как на участке
              </h2>

              <Card>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-4">
                    Опыт руководства сварочными подразделениями (мастер, начальник участка) — это дисциплина процессов:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Сменные задания и контроль качества по этапам</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Учёт материалов, газов, присадок</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Разметка, сборка, прихватки, контроль тепловложений</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCir
