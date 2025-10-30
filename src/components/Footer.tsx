import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* О компании */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-hero">
                <span className="text-xl font-bold text-primary-foreground">A72</span>
              </div>
              <div>
                <div className="text-lg font-bold">Argo72</div>
                <div className="text-xs text-muted-foreground">Сварочные работы</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Профессиональная сварка цветных металлов и круглосуточная аварийная служба в Тюмени
            </p>
            <div className="flex space-x-3">
              <a
                href="https://wa.me/79123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground hover:bg-primary-light transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href="https://t.me/argo72tyumen"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground hover:bg-primary-light transition-colors"
                aria-label="Telegram"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Быстрые ссылки */}
          <div>
            <h3 className="font-semibold mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/uslugi" className="text-muted-foreground hover:text-primary transition-colors">
                  Услуги
                </Link>
              </li>
              <li>
                <Link to="/tarify" className="text-muted-foreground hover:text-primary transition-colors">
                  Тарифы
                </Link>
              </li>
              <li>
                <Link to="/ceny" className="text-muted-foreground hover:text-primary transition-colors">
                  Цены
                </Link>
              </li>
              <li>
                <Link to="/kejsy" className="text-muted-foreground hover:text-primary transition-colors">
                  Кейсы
                </Link>
              </li>
              <li>
                <Link to="/kachestvo" className="text-muted-foreground hover:text-primary transition-colors">
                  Качество
                </Link>
              </li>
              <li>
                <Link to="/o-kompanii" className="text-muted-foreground hover:text-primary transition-colors">
                  О компании
                </Link>
              </li>
            </ul>
          </div>

          {/* Для кого */}
          <div>
            <h3 className="font-semibold mb-4">Кому помогаем</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/dlya-kogo/tszh" className="text-muted-foreground hover:text-primary transition-colors">
                  ТСЖ и ЖСК
                </Link>
              </li>
              <li>
                <Link to="/dlya-kogo/uk" className="text-muted-foreground hover:text-primary transition-colors">
                  Управляющие компании
                </Link>
              </li>
              <li>
                <Link to="/dlya-kogo/hvac" className="text-muted-foreground hover:text-primary transition-colors">
                  HVAC и холодильщики
                </Link>
              </li>
              <li>
                <Link to="/dlya-kogo/auto" className="text-muted-foreground hover:text-primary transition-colors">
                  Автосервисы
                </Link>
              </li>
              <li>
                <Link to="/dlya-kogo/manufacturing" className="text-muted-foreground hover:text-primary transition-colors">
                  Производство
                </Link>
              </li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="font-semibold mb-4">Контакты</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <Phone className="h-4 w-4 mr-2 mt-0.5 text-primary flex-shrink-0" />
                <div>
                  <a href="tel:+73452999888" className="text-muted-foreground hover:text-primary transition-colors">
                    +7 (3452) 99-98-88
                  </a>
                  <div className="text-xs text-muted-foreground">Круглосуточно</div>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="h-4 w-4 mr-2 mt-0.5 text-primary flex-shrink-0" />
                <a href="mailto:info@argo72.ru" className="text-muted-foreground hover:text-primary transition-colors">
                  info@argo72.ru
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-0.5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">г. Тюмень, ул. Производственная, 12</span>
              </li>
              <li className="flex items-start">
                <Clock className="h-4 w-4 mr-2 mt-0.5 text-primary flex-shrink-0" />
                <div className="text-muted-foreground">
                  <div>Пн-Пт: 8:00 — 20:00</div>
                  <div>Сб-Вс: 9:00 — 18:00</div>
                  <div className="text-secondary font-medium">Аварийка 24/7</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <div className="mb-4 md:mb-0">
              <p>© {currentYear} ООО «АРГО». Все права защищены</p>
              <p className="text-xs mt-1">ИНН: 7204000000 | ОГРН: 1147200000000</p>
            </div>
            <div className="flex space-x-6">
              <Link to="/privacy" className="hover:text-primary transition-colors">
                Политика конфиденциальности
              </Link>
              <Link to="/terms" className="hover:text-primary transition-colors">
                Договор оферты
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
