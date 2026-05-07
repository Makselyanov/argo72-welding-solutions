import { FormEvent, MouseEvent, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Clock, Shield, Award, Wrench, Calculator, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import servicesData from "@/data/services.json";

const SVRQ_LEAD_URL = "https://svrq.ru/api/public/argon-master72/leads";

const Index = () => {
  const featuredServices = servicesData.categories.slice(0, 2).flatMap(cat => 
    cat.services.slice(0, 3)
  );
  const [calcForm, setCalcForm] = useState({
    clientName: "",
    clientPhone: "",
    clientComment: "",
    method: "tig",
    metal: "aluminum",
    thickness: "t4_6",
    seamLength: "",
    urgency: "normal",
    privacyAccepted: true,
  });
  const [calcStatus, setCalcStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [calcMessage, setCalcMessage] = useState("");

  const scrollToCalculator = (event?: MouseEvent<HTMLAnchorElement>) => {
    event?.preventDefault();
    window.history.replaceState(null, "", "/#svrq-calculator");
    document.getElementById("svrq-calculator")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    if (window.location.hash !== "#svrq-calculator") {
      return;
    }

    window.setTimeout(() => {
      document.getElementById("svrq-calculator")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 50);
  }, []);

  const submitCalc = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!calcForm.clientName.trim()) {
      setCalcStatus("error");
      setCalcMessage("Укажите имя, чтобы отправить расчёт.");
      return;
    }

    if (!calcForm.clientPhone.trim()) {
      setCalcStatus("error");
      setCalcMessage("Укажите телефон для связи.");
      return;
    }

    if (!calcForm.privacyAccepted) {
      setCalcStatus("error");
      setCalcMessage("Подтвердите согласие на обработку данных.");
      return;
    }

    const payload: Record<string, unknown> = {
      method: calcForm.method,
      metal: calcForm.metal,
      thickness_group: calcForm.thickness,
      urgency: calcForm.urgency,
      callout_mode: "on_site",
      client_name: calcForm.clientName.trim(),
      client_phone: calcForm.clientPhone.trim(),
      client_comment: [
        calcForm.clientComment.trim(),
        "Источник: форма расчёта на argo-72.ru",
      ].filter(Boolean).join("\n\n"),
      privacy_accepted: true,
    };

    if (calcForm.seamLength.trim()) {
      payload.seam_length_m = Number(calcForm.seamLength.replace(",", "."));
    }

    setCalcStatus("loading");
    setCalcMessage("");

    try {
      const response = await fetch(SVRQ_LEAD_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data?.message || "Не удалось отправить расчёт.");
      }

      const quote = data?.quote;
      const priceText = quote?.mode === "exact" && quote?.price_rub
        ? `Ориентир: ${Number(quote.price_rub).toLocaleString("ru-RU")} ₽.`
        : quote?.range_min_rub && quote?.range_max_rub
          ? `Ориентир: ${Number(quote.range_min_rub).toLocaleString("ru-RU")}–${Number(quote.range_max_rub).toLocaleString("ru-RU")} ₽.`
          : "Расчёт передан в CRM.";

      setCalcStatus("success");
      setCalcMessage(`${priceText} Заявка уже в CRM SVRQ.`);
    } catch (error) {
      setCalcStatus("error");
      setCalcMessage(error instanceof Error ? error.message : "Не удалось отправить расчёт.");
    }
  };

  return (
    <>
      <Helmet>
        <title>Аргон-Мастер72 — Сварочный цех в Тюмени | TIG MIG алюминий, пайка меди 24/7</title>
        <meta 
          name="description" 
          content="Профессиональный сварочный цех: алюминий TIG/MIG, пайка меди и латуни, срочный выезд 24/7 по Тюмени. Контроль качества, гарантия." 
        />
        <meta 
          name="keywords" 
          content="сварка тюмень, аргонная сварка тюмень, сварочный цех, TIG сварка алюминия, MIG сварка, сварка нержавейки, сварка меди, пайка латуни, сварка титана, ВИК контроль, УЗК, неразрушающий контроль, сварщик на час тюмень, аутсорс сварщика, ремонт труб, ремонт балконов, монтаж металлоконструкций, аварийная сварка 24/7" 
        />
        <link rel="canonical" href="https://argo-72.ru/" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Header />

      {/* Hero секция */}
      <section className="relative bg-gradient-hero text-primary-foreground py-16 lg:py-24">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
        <div className="container mx-auto px-4 relative">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_420px]">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Сварочный цех
              <span className="block text-secondary-light">любой сложности</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              TIG/MIG алюминий, пайка меди, аварийный выезд 24/7 по Тюмени
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary-light shadow-accent">
                <a href="#svrq-calculator" onClick={scrollToCalculator}>
                  Заказать сварщика
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                <a href="#svrq-calculator" onClick={scrollToCalculator}>
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
          <form
            id="svrq-calculator"
            onSubmit={submitCalc}
            className="rounded-lg border border-white/15 bg-white p-5 text-foreground shadow-2xl"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-secondary text-secondary-foreground">
                <Calculator className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold">Расчёт в CRM SVRQ</h2>
                <p className="text-sm text-muted-foreground">Заявка сразу попадёт сварщику в работу</p>
              </div>
            </div>

            <div className="grid gap-3">
              <input
                className="h-11 rounded-md border px-3 text-sm outline-none focus:border-primary"
                placeholder="Ваше имя"
                value={calcForm.clientName}
                onChange={(e) => setCalcForm({ ...calcForm, clientName: e.target.value })}
              />
              <input
                className="h-11 rounded-md border px-3 text-sm outline-none focus:border-primary"
                placeholder="Телефон"
                type="tel"
                value={calcForm.clientPhone}
                onChange={(e) => setCalcForm({ ...calcForm, clientPhone: e.target.value })}
              />
              <textarea
                className="min-h-[96px] rounded-md border px-3 py-2 text-sm outline-none focus:border-primary"
                placeholder="Опишите задачу: что нужно сварить, материал, размеры, срочность"
                value={calcForm.clientComment}
                onChange={(e) => setCalcForm({ ...calcForm, clientComment: e.target.value })}
              />

              <div className="grid grid-cols-2 gap-3">
                <select
                  className="h-11 rounded-md border px-3 text-sm outline-none focus:border-primary"
                  value={calcForm.method}
                  onChange={(e) => setCalcForm({ ...calcForm, method: e.target.value })}
                >
                  <option value="tig">TIG / аргон</option>
                  <option value="migmag">MIG/MAG</option>
                  <option value="mma">MMA</option>
                </select>
                <select
                  className="h-11 rounded-md border px-3 text-sm outline-none focus:border-primary"
                  value={calcForm.metal}
                  onChange={(e) => setCalcForm({ ...calcForm, metal: e.target.value })}
                >
                  <option value="aluminum">Алюминий</option>
                  <option value="stainless">Нержавейка</option>
                  <option value="steel">Чёрный металл</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <select
                  className="h-11 rounded-md border px-3 text-sm outline-none focus:border-primary"
                  value={calcForm.thickness}
                  onChange={(e) => setCalcForm({ ...calcForm, thickness: e.target.value })}
                >
                  <option value="t0_3">до 3 мм</option>
                  <option value="t4_6">4-6 мм</option>
                  <option value="t8_10">8-10 мм</option>
                  <option value="t12p">12+ мм</option>
                </select>
                <input
                  className="h-11 rounded-md border px-3 text-sm outline-none focus:border-primary"
                  placeholder="Длина шва, м"
                  type="number"
                  min="0.01"
                  step="0.1"
                  value={calcForm.seamLength}
                  onChange={(e) => setCalcForm({ ...calcForm, seamLength: e.target.value })}
                />
              </div>

              <label className="flex items-start gap-2 text-xs leading-5 text-muted-foreground">
                <input
                  type="checkbox"
                  className="mt-1"
                  checked={calcForm.privacyAccepted}
                  onChange={(e) => setCalcForm({ ...calcForm, privacyAccepted: e.target.checked })}
                />
                Согласен на обработку персональных данных для расчёта и связи по заявке
              </label>

              <Button type="submit" size="lg" className="w-full bg-secondary hover:bg-secondary-light" disabled={calcStatus === "loading"}>
                <Send className="mr-2 h-5 w-5" />
                {calcStatus === "loading" ? "Отправляем..." : "Отправить расчёт в CRM"}
              </Button>

              {calcMessage && (
                <div className={calcStatus === "success" ? "rounded-md bg-green-50 p-3 text-sm text-green-700" : "rounded-md bg-red-50 p-3 text-sm text-red-700"}>
                  {calcMessage}
                </div>
              )}
            </div>
          </form>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Почему выбирают Аргон-Мастер72</h2>
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
              { title: "ТСЖ и ЖСК", href: "/komu/tszh-zhsk" },
              { title: "Управляющие компании", href: "/komu/upravlyayushchie-kompanii" },
              { title: "HVAC и холодильщики", href: "/komu/hvac-holodilshchiki" },
              { title: "Автосервисы", href: "/komu/avtoservis-tyuning" },
              { title: "Лодки и катера", href: "/komu/lodki-motosalony" },
              { title: "Производство", href: "/komu/proizvodstvennye-msp" },
              { title: "Девелоперы", href: "/komu/developery-stroiteli" },
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
              <a href="tel:+79326205501">
                Позвонить сейчас
              </a>
            </Button>
            <Button asChild size="lg" className="bg-white/20 border border-white/30 hover:bg-white/30">
              <a href="/#svrq-calculator">
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
              { step: "01", title: "Заявка", desc: "Звонок, Telegram или форма на сайте" },
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
    </>
  );
};

export default Index;
