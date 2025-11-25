import { Link } from "react-router-dom";
import { Phone, MapPin, Clock } from "lucide-react";
import { Send } from "lucide-react";
import argoLogo from "@/assets/argo-logo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* О компании */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src={argoLogo}
                alt="Argo72 логотип"
                className="h-12 w-12 object-contain rounded-lg"
              />
              <div>
                <div className="text-lg font-bold">Argo72</div>
                <div className="text-xs text-muted-foreground">Сварка цветных металлов</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Профессиональная сварка цветных металлов и круглосуточная аварийная служба в Тюмени
            </p>
            <div className="flex space-x-3">
              <a
                href="https://t.me/KaluginMaxim"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0088cc] text-white hover:bg-[#0077b3] transition-colors"
                aria-label="Telegram Максим Калугин"
              >
                <Send className="h-5 w-5" />
              </a>
              <a
                href="https://t.me/makselyanov"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0088cc] text-white hover:bg-[#0077b3] transition-colors"
                aria-label="Telegram Максим Кузнецов"
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
                  <a href="tel:+79222675034" className="text-muted-foreground hover:text-primary transition-colors block">
                    +7 922 267-50-34
                  </a>
                  <a href="tel:+79058248564" className="text-muted-foreground hover:text-primary transition-colors block">
                    +7 905 824-85-64
                  </a>
                  <div className="text-xs text-muted-foreground">Круглосуточно</div>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-0.5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">г. Тюмень, ул. Камчатская, 1</span>
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
              <p className="text-xs mt-1">ИНН: 720321829472</p>
            </div>
            <div>
              <Link to="/privacy" className="hover:text-primary transition-colors">
                Политика конфиденциальности
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
