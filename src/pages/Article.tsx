import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, CheckCircle2, ArrowLeft } from "lucide-react";
import articlesData from "@/data/articles.json";

const Article = () => {
  const { slug } = useParams();
  const article = articlesData.find(a => a.slug === slug);

  if (!article) {
    return <Navigate to="/baza-znaniy" replace />;
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.summary,
    "author": {
      "@type": "Organization",
      "name": "Argo72"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Argo72",
      "logo": {
        "@type": "ImageObject",
        "url": "https://argo72.ru/logo.jpg"
      }
    },
    "datePublished": "2025-01-01",
    "articleSection": article.category
  };

  return (
    <>
      <Helmet>
        <title>{article.title} | База знаний Argo72</title>
        <meta name="description" content={article.summary} />
        <meta name="keywords" content={article.tags.join(", ")} />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <Header />
      
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs items={[
            { label: "База знаний", href: "/baza-znaniy" },
            { label: article.title }
          ]} />

          <Link to="/baza-znaniy">
            <Button variant="ghost" size="sm" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Назад к статьям
            </Button>
          </Link>

          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Badge className="mb-3">{article.category}</Badge>
              <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
              <p className="text-lg text-muted-foreground mb-4">{article.summary}</p>
              <div className="flex flex-wrap gap-2">
                {article.tags.map(tag => (
                  <Badge key={tag} variant="outline">{tag}</Badge>
                ))}
              </div>
            </div>

            <Card className="p-6 mb-8 bg-primary/5 border-primary/20">
              <p className="text-sm"><strong>Для кого:</strong> {article.audience}</p>
            </Card>

            <div className="prose prose-slate max-w-none mb-8">
              {article.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4 whitespace-pre-line">{paragraph}</p>
              ))}
            </div>

            {article.checklist && article.checklist.length > 0 && (
              <Card className="p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4">Чек-лист</h2>
                <ul className="space-y-2">
                  {article.checklist.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            )}

            {article.leadMagnet && (
              <Card className="p-6 mb-8 bg-gradient-to-r from-primary/10 to-primary/5">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold mb-2">Скачать материалы</h3>
                    <p className="text-sm text-muted-foreground">{article.leadMagnet.title}</p>
                  </div>
                  <Button>
                    <Download className="h-4 w-4 mr-2" />
                    Скачать {article.leadMagnet.type.toUpperCase()}
                  </Button>
                </div>
              </Card>
            )}

            <Card className="p-8 text-center bg-muted/30">
              <h2 className="text-2xl font-bold mb-4">Нужна консультация?</h2>
              <p className="text-muted-foreground mb-6">
                Не уверены в ТЗ? Скиньте фото — бесплатно подскажем, что и как.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <a href="#callbackwidget">Отправить фото детали</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="https://t.me/KaluginMaxim" target="_blank" rel="noopener noreferrer">
                    WhatsApp / Telegram
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="/ceny">Рассчитать стоимость</a>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Article;
