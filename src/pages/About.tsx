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
            "name": "О компании",
            "item": "https://argo72.ru/o-kompanii"
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
        <title>О компании Argo72 — сварка алюминия TIG/MIG, пайка меди/латуни, Тюмень</title>
        <meta 
          name="description" 
          content="Argo72 — 19 лет опыта. Сварка цветных металлов: TIG/MIG алюминий, пайка меди/латуни, выезд 24/7, ВИК/ПК, разработка ТЗ/WPS. Тюмень и область." 
        />
        <meta 
          name="keywords" 
          content="сварка цветных металлов, TIG алюминий Тюмень, пайка меди, сварщик на час, ВИК контроль, капиллярный контроль, разработка ТЗ, WPS, выездной сварщик" 
        />
        <link rel="canonical" href="https://argo72.ru/o-kompanii" />
        
        {/* Open Graph */}
        <meta property="og:title" content="О компании Argo72 — сварка алюминия TIG/MIG, пайка меди/латуни, Тюмень" />
        <meta property="og:description" content="19 лет опыта в сварке цветных металлов. TIG/MIG алюминий, пайка меди, выезд 24/7, контроль качества." />
        <meta property="og:url" content="https://argo72.ru/o-kompanii" />
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
            <Breadcrumbs items={[{ label: "О компании" }]} />

            {/* Hero Section */}
            <section className="mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                О компании Argo72
              </h1>
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Argo72 — мастерская точной сварки цветных металлов в Тюмени. <strong className="text-foreground">19 лет практики (с 2006 года)</strong>, 
                  специализация: <strong className="text-primary">TIG/MIG по алюминию</strong>, <strong className="text-primary">пайка меди/латуни</strong>, 
                  <strong className="text-primary"> контроль ВИК/ПК</strong>, разработка <strong className="text-primary">ТЗ и WPS</strong>. 
                  Работаем вдвоём: быстро, лично, без лишних посредников.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mt-6">
                <Button asChild size="lg">
                  <Link to="/kontakty">
                    <Camera className="mr-2 h-5 w-5" />
                    Отправить фото детали
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/ceny/kalkulyator">
                    <Calculator className="mr-2 h-5 w-5" />
                    Рассчитать стоимость
                  </Link>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <Link to="/urgent">
                    <AlertCircle className="mr-2 h-5 w-5" />
                    Срочный вызов 24/7
                  </Link>
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
                      <strong className="text-foreground">Калугин Максим Александрович</strong> и <strong className="text-foreground">Кузнецов Максим Владимирович</strong> — 
                      высшее сварочное образование + техническое сварочное образование.
                    </p>
                    <p>
                      Производственная практика с 2006 года, путь от сварщика до мастера и начальника участка сварочных работ в Тюмени.
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
                      2 специалиста и наёмные сварщики, прошедшие аттестацию — ведущий сварщик/технолог и мастер-приёмщик.
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
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Финальный осмотр, фото-протокол</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Передача изделия/узла с актом и рекомендациями</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Компетенции */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                Наши компетенции
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <Badge className="w-fit mb-2">Сварка</Badge>
                    <CardTitle>Алюминий TIG AC/DC</CardTitle>
                    <CardDescription>
                      Тонкостенные конструкции, эстетичные швы
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Корпуса, радиаторы/интеркулеры, тонкостенка, лодки/корпуса
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Badge className="w-fit mb-2">Сварка</Badge>
                    <CardTitle>Алюминий MIG/MAG</CardTitle>
                    <CardDescription>
                      Импульсная сварка для серий
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Серийная и силовая сварка, производственная оснастка
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Badge className="w-fit mb-2">Пайка</Badge>
                    <CardTitle>Медь и латунь</CardTitle>
                    <CardDescription>
                      Высокотемпературная пайка
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    HVAC системы, электрошины, контакты
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Badge className="w-fit mb-2">Контроль</Badge>
                    <CardTitle>НК: ВИК/ПК/УЗК</CardTitle>
                    <CardDescription>
                      Неразрушающий контроль
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    ВИК всегда включён, ПК по запросу, УЗК через партнёра
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Badge className="w-fit mb-2">Инжиниринг</Badge>
                    <CardTitle>ТЗ и WPS</CardTitle>
                    <CardDescription>
                      Техническая документация
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    ТЗ, маршрутные карты, дефектовка
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Badge className="w-fit mb-2">Выезд</Badge>
                    <CardTitle>Мобильная бригада</CardTitle>
                    <CardDescription>
                      24/7 аварийный выезд
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    «Сварщик на час», объектные работы, аварийка 24/7
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Что избегаете */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                Что вы избегаете, работая с нами
              </h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Повторного передела</h3>
                    <p className="text-sm text-muted-foreground">Заранее просчитываем режимы и деформации</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Скрытых затрат</h3>
                    <p className="text-sm text-muted-foreground">Смета и перечень работ прозрачны</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Простоя</h3>
                    <p className="text-sm text-muted-foreground">Придерживаемся SLA на выезд и сроки</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Рисков по ОТ и ПБ</h3>
                    <p className="text-sm text-muted-foreground">Соблюдаем требования и держим порядок</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Команда */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                Команда Argo72
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="h-16 w-16 rounded-full bg-gradient-hero flex items-center justify-center">
                        <Users className="h-8 w-8 text-primary-foreground" />
                      </div>
                      <div>
                        <CardTitle>Максим Кузнецов</CardTitle>
                        <CardDescription>Ведущий сварщик / технолог</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm text-muted-foreground">
                    <p>19 лет практики, высшее и техническое сварочное образование</p>
                    <p>TIG/MIG по алюминию, пайка меди/латуни</p>
                    <p>Организация производства: WPS, маршруты, контроль качества, обучение</p>
                    <div className="pt-4">
                      <a 
                        href="https://t.me/makselyanov" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline flex items-center gap-2"
                      >
                        <Phone className="h-4 w-4" />
                        +7 905 824-85-64
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="h-16 w-16 rounded-full bg-gradient-hero flex items-center justify-center">
                        <Users className="h-8 w-8 text-primary-foreground" />
                      </div>
                      <div>
                        <CardTitle>Максим Калугин</CardTitle>
                        <CardDescription>Мастер-приёмщик</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm text-muted-foreground">
                    <p>Планирование работ и координация проектов</p>
                    <p>Коммуникации с заказчиками, логистика</p>
                    <p>Приём/выдача изделий, фото-отчёты, закрывающие документы</p>
                    <div className="pt-4">
                      <a 
                        href="https://t.me/KaluginMaxim" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline flex items-center gap-2"
                      >
                        <Phone className="h-4 w-4" />
                        +7 922 267-50-34
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Документы и реквизиты */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                Документы и реквизиты
              </h2>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <FileText className="h-5 w-5 text-primary" />
                        Юридическая информация
                      </h3>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <p><strong className="text-foreground">Наименование:</strong> ООО «АРГО»</p>
                        <p><strong className="text-foreground">Город:</strong> Тюмень</p>
                        <p><strong className="text-foreground">ИНН:</strong> 720321829472</p>
                        <p><strong className="text-foreground">Адрес:</strong> г. Тюмень, ул. Камчатская, 1</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <ShieldCheck className="h-5 w-5 text-primary" />
                        Документооборот
                      </h3>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <p>• Договор на выполнение работ</p>
                        <p>• Смета с детализацией</p>
                        <p>• Акты КС-2/КС-3 (при необходимости)</p>
                        <p>• ТЗ и WPS-карты</p>
                        <p>• Протоколы ВИК/ПК</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Как начать */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                Как начать работу
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card>
                  <CardHeader>
                    <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-3">
                      1
                    </div>
                    <CardTitle className="text-lg">Отправьте фото/чертёж</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Через форму на сайте или напрямую в Telegram
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-3">
                      2
                    </div>
                    <CardTitle className="text-lg">Получите расчёт</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Смета и сроки в течение 30-60 минут
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-3">
                      3
                    </div>
                    <CardTitle className="text-lg">Подтверждаем и стартуем</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Согласование ТЗ и начало работ
                  </CardContent>
                </Card>
              </div>

              <div className="flex flex-wrap gap-3 justify-center">
                <Button asChild size="lg">
                  <Link to="/kontakty">
                    <Camera className="mr-2 h-5 w-5" />
                    Отправить фото детали
                  </Link>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <Link to="/urgent">
                    <Clock className="mr-2 h-5 w-5" />
                    Срочный вызов 24/7
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/ceny/kalkulyator">
                    <Calculator className="mr-2 h-5 w-5" />
                    Рассчитать стоимость
                  </Link>
                </Button>
              </div>
            </section>

            {/* FAQ */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                Часто задаваемые вопросы
              </h2>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">
                    Сколько занимает оценка по фото?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Обычно до 30–60 минут в рабочее время. Мы изучаем фото, уточняем технические 
                    требования и предоставляем расчёт стоимости и сроков.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">
                    Делаете выезд на объект?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Да, предоставляем услугу «сварщик на час» (минимум 2 часа) и аварийный выезд 24/7 
                    по Тюмени и области. Срочные работы выполняются с коэффициентом.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">
                    Нужен ли чертёж для работы?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Для большинства работ достаточно фото и размеров. Для проектных работ 
                    составим ТЗ и WPS сами на основе ваших требований.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left">
                    Делаете неразрушающий контроль?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    ВИК (визуально-измерительный контроль) делаем всегда. ПК (капиллярный контроль) — 
                    по запросу. УЗК выполняет проверенный партнёр.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            {/* Плашка доверия */}
            <section className="mb-16">
              <Card className="bg-gradient-hero text-primary-foreground">
                <CardContent className="pt-6">
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
                    <div>
                      <Award className="h-8 w-8 mx-auto mb-2" />
                      <div className="font-semibold">19 лет</div>
                      <div className="text-sm opacity-90">опыта</div>
                    </div>
                    <div>
                      <FileText className="h-8 w-8 mx-auto mb-2" />
                      <div className="font-semibold">Документы</div>
                      <div className="text-sm opacity-90">и отчётность</div>
                    </div>
                    <div>
                      <Clock className="h-8 w-8 mx-auto mb-2" />
                      <div className="font-semibold">SLA</div>
                      <div className="text-sm opacity-90">на сроки</div>
                    </div>
                    <div>
                      <ShieldCheck className="h-8 w-8 mx-auto mb-2" />
                      <div className="font-semibold">ОТ/ПБ</div>
                      <div className="text-sm opacity-90">вентиляция, СИЗ</div>
                    </div>
                    <div>
                      <Camera className="h-8 w-8 mx-auto mb-2" />
                      <div className="font-semibold">Фото</div>
                      <div className="text-sm opacity-90">протокол</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default About;
