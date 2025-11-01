import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Search, BookOpen, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import articlesData from "@/data/articles.json";

const KnowledgeBase = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(articlesData.map(a => a.category)));
  
  const filteredArticles = articlesData.filter(article => {
    const matchesSearch = searchQuery === "" || 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = !selectedCategory || article.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Сколько занимает выезд по Тюмени?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Обычно 30–60 минут в рабочее время. Для срочных вызовов 24/7 гарантируем прибытие в течение 2 часов."
        }
      },
      {
        "@type": "Question",
        "name": "Можно ли TIG в подъезде/квартире?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, при наличии вентиляции и согласования с соседями. Используем локальные отсосы и защитные экраны."
        }
      },
      {
        "@type": "Question",
        "name": "Что нужно подготовить заказчику?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Доступ к электросети 220В, свободное пространство для работы (2×2 м), фото/чертежи деталей, если есть."
        }
      },
      {
        "@type": "Question",
        "name": "Как оформляем ВИК/УЗК?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ВИК выполняем сами с протоколом и фото. УЗК — через сертифицированного партнёра, координируем всё мы."
        }
      },
      {
        "@type": "Question",
        "name": "Даёте ли гарантию?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, письменная гарантия 12 месяцев на все сварочные работы. Для абонентских пакетов — приоритетное устранение дефектов."
        }
      },
      {
        "@type": "Question",
        "name": "Можно ли срочный выезд 'сегодня'?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, по тарифу '24/7' с коэффициентом ×1,5. Звоните: +7 922 267 5034 или +7 905 824 8564."
        }
      },
      {
        "@type": "Question",
        "name": "Как понять, что нужен именно аргон?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Аргон (TIG) нужен для цветных металлов (алюминий, медь, нержавейка), тонкостенки и ответственных швов с требованиями к эстетике."
        }
      },
      {
        "@type": "Question",
        "name": "Как рассчитать ориентировочную цену?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Пришлите фото детали в WhatsApp (+7 922 267 5034) или используйте калькулятор на сайте. Точный расчёт — после осмотра."
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>База знаний — сварка цветных металлов, TIG/MIG, ВИК, НК | Argo72 Тюмень</title>
        <meta name="description" content="Экспертные статьи по сварке: алюминий TIG/MIG, пайка меди, ВИК/УЗК, дефекты швов, ТЗ на сварку, ремонт теплообменников. 18 подробных руководств от практиков с 19-летним опытом." />
        <meta name="keywords" content="сварка тюмень, аргонная сварка, сварка цветных металлов, TIG, MIG, алюминий, нержавейка, медь, латунь, ВИК, УЗК, НК, дефекты сварных соединений, ТЗ на сварку, сварщик на час, ремонт труб, база знаний сварка" />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <Header />
      
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs items={[{ label: "База знаний" }]} />

          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">База знаний</h1>
            <p className="text-lg text-muted-foreground">
              Практические руководства по сварке цветных металлов, контролю качества и технологиям от специалистов с 19-летним опытом
            </p>
          </div>

          <div className="mb-8 space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                type="text"
                placeholder="Поиск по статьям, тегам..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedCategory === null ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(null)}
              >
                Все категории
              </Button>
              {categories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredArticles.map(article => (
              <Card key={article.id} className="p-6 hover:shadow-lg transition-shadow">
                <div className="mb-3">
                  <Badge variant="secondary" className="mb-2">{article.category}</Badge>
                  <h2 className="text-xl font-semibold mb-2">
                    <Link to={`/baza-znaniy/${article.slug}`} className="hover:text-primary">
                      {article.title}
                    </Link>
                  </h2>
                  <p className="text-sm text-muted-foreground mb-3">{article.summary}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {article.tags.slice(0, 3).map(tag => (
                      <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <Link to={`/baza-znaniy/${article.slug}`}>
                    <Button variant="ghost" size="sm">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Читать
                    </Button>
                  </Link>
                  {article.leadMagnet && (
                    <Button variant="ghost" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Статьи по запросу не найдены. Попробуйте изменить критерии поиска.</p>
            </div>
          )}

          <Card className="p-8 bg-muted/30">
            <h2 className="text-2xl font-bold mb-6">Частые вопросы</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {jsonLd.mainEntity.map((faq, index) => (
                <div key={index}>
                  <h3 className="font-semibold mb-2">{faq.name}</h3>
                  <p className="text-sm text-muted-foreground">{faq.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card className="mt-8 p-8 text-center bg-gradient-to-r from-primary/10 to-primary/5">
            <h2 className="text-2xl font-bold mb-4">Не нашли ответ?</h2>
            <p className="text-muted-foreground mb-6">
              Отправьте фото детали или опишите задачу — бесплатно подскажем, что и как.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <a href="#callbackwidget">Оставить заявку</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://t.me/KaluginMaxim" target="_blank" rel="noopener noreferrer">
                  Написать в Telegram
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="tel:+79222675034">Позвонить</a>
              </Button>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default KnowledgeBase;
