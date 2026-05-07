import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import argoLogo from "@/assets/argo-logo.jpg";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navigation = [
    { name: "Услуги", href: "/uslugi" },
    { name: "Кому помогаем", href: "/dlya-kogo" },
    { name: "Биржа сварщиков", href: "/marketplace" },
    { name: "Тарифы", href: "/tarify" },
    { name: "Цены", href: "/ceny" },
    { name: "Кейсы", href: "/kejsy" },
    { name: "Качество", href: "/kachestvo" },
    { name: "База знаний", href: "/baza-znaniy" },
    { name: "О нас", href: "/o-nas" },
    { name: "Контакты", href: "/kontakty" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card shadow-sm">
      <div className="w-full px-4 lg:px-9">
        <div className="flex h-16 items-center gap-5">
          {/* Логотип */}
          <Link to="/" className="flex shrink-0 items-center space-x-3">
            <img
              src={argoLogo}
              alt="Аргон-Мастер72 логотип"
              className="h-12 w-12 object-contain rounded-lg"
            />
            <div className="hidden sm:block">
              <div className="text-lg font-bold leading-tight text-foreground">Аргон-Мастер72</div>
              <div className="text-xs text-muted-foreground">Сварочный цех</div>
            </div>
          </Link>

          {/* Десктопное меню */}
          <nav className="hidden min-w-0 flex-1 items-center justify-center gap-1 xl:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "whitespace-nowrap rounded-md px-2.5 py-2 text-sm font-medium transition-colors",
                  isActive(item.href)
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-muted"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA кнопки */}
          <div className="ml-auto hidden shrink-0 items-center space-x-2 md:flex">
            <Button asChild variant="outline" size="sm">
              <a href="/#svrq-calculator">
                <Phone className="mr-2 h-4 w-4" />
                Заказать сварщика
              </a>
            </Button>
            <Button asChild size="sm" className="bg-secondary hover:bg-secondary-light">
              <a href="/#svrq-calculator">
                <Clock className="mr-2 h-4 w-4" />
                Срочно 24/7
              </a>
            </Button>
          </div>

          {/* Мобильное меню кнопка */}
          <button
            type="button"
            className="ml-auto rounded-md p-2 text-foreground hover:bg-muted xl:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Открыть меню"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Мобильное меню */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t bg-card">
          <nav className="container mx-auto px-4 py-4 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "block px-3 py-2 text-base font-medium rounded-md transition-colors",
                  isActive(item.href)
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-muted"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 space-y-2">
              <Button asChild variant="outline" className="w-full" onClick={() => setMobileMenuOpen(false)}>
                <a href="/#svrq-calculator">
                  <Phone className="mr-2 h-4 w-4" />
                  Заказать сварщика
                </a>
              </Button>
              <Button asChild className="w-full bg-secondary hover:bg-secondary-light" onClick={() => setMobileMenuOpen(false)}>
                <a href="/#svrq-calculator">
                  <Clock className="mr-2 h-4 w-4" />
                  Срочно 24/7
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
