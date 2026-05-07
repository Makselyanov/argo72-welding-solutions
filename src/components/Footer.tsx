import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, ExternalLink } from "lucide-react";
import { Send } from "lucide-react";
import argoLogo from "@/assets/argo-logo.jpg";

const Footer = () => {
  const twoGisUrl = "https://2gis.ru/tyumen/firm/70000001110629809?m=65.643412%2C57.107802%2F16";

  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* О компании */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src={argoLogo}
                alt="Аргон-Мастер72 логотип"
                className="h-12 w-12 object-contain rounded-lg"
              />
              <div>
                <div className="text-lg font-bold">Аргон-Мастер72</div>
                <div className="text-xs text-muted-foreground">Сварочный цех</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Профессиональный сварочный цех и круглосуточная аварийная служба в Тюмени
            </p>
            <div className="flex space-x-3">
              <a
                href="https://t.me/+79326205501"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0088cc] text-white hover:bg-[#0077b3] transition-colors"
                aria-label="Telegram Максим"
              >
                <Send className="h-5 w-5" />
              </a>
              <a
                href="https://t.me/+79326205502"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0088cc] text-white hover:bg-[#0077b3] transition-colors"
                aria-label="Telegram Антон"
              >
                <Send className="h-5 w-5" />
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
                <Link to="/o-nas" className="text-muted-foreground hover:text-primary transition-colors">
                  О нас
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
                  <a href="tel:+79326205501" className="text-muted-foreground hover:text-primary transition-colors block">
                    +7 932 620-55-01
                  </a>
                  <a href="tel:+79326205502" className="text-muted-foreground hover:text-primary transition-colors block">
                    +7 932 620-55-02
                  </a>
                  <div className="text-xs text-muted-foreground">Круглосуточно</div>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-0.5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">г. Тюмень, ул. Республики, 256 к2 ст3, 114 бокс</span>
              </li>
              <li className="flex items-start">
                <Clock className="h-4 w-4 mr-2 mt-0.5 text-primary flex-shrink-0" />
                <div className="text-muted-foreground">
                  <div>Пн-Пт: 8:00 — 20:00</div>
                  <div>Сб-Вс: 9:00 — 18:00</div>
                  <div className="text-secondary font-medium">Аварийка 24/7</div>
                </div>
              </li>
              <li className="flex items-start">
                <ExternalLink className="h-4 w-4 mr-2 mt-0.5 text-primary flex-shrink-0" />
                <a
                  href={twoGisUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Отзывы в 2GIS
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t bg-white px-0 pt-8 text-sm text-foreground">
          <p className="mb-4 font-medium">© 2026 Аргон-Мастер72. Все права защищены.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-3 font-medium">
            <Link to="/privacy" className="text-foreground hover:text-primary transition-colors">
              Политика конфиденциальности
            </Link>
            <Link to="/privacy" className="text-foreground hover:text-primary transition-colors">
              Cookies
            </Link>
            <a href={twoGisUrl} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
              Скачать карту компании
            </a>
            <a href="https://centrlp.ru" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
              разработка сайта — centrlp.ru
            </a>
            <a href="https://svrq.ru" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
              CRM для сварщика — svrq.ru
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
