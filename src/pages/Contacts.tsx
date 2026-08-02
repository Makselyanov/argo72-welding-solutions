import React from 'react';
import { MapPin, Phone, Mail, Clock, Star, ExternalLink } from 'lucide-react';
import { Helmet } from 'react-helmet';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contacts = () => {
  const twoGisUrl = "https://2gis.ru/tyumen/firm/70000001110629809?m=65.643412%2C57.107802%2F16";

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow pt-20 bg-gray-50">
        <Helmet>
          <title>Контакты Аргон-Мастер72 — сварочный цех в Тюмени</title>
          <meta name="description" content="Контакты Аргон-Мастер72: телефоны, адрес, режим работы. Срочный выезд 24/7, выездные услуги и инженерная поддержка по сварке." />
          <link rel="canonical" href="https://argon-master72.ru/kontakty" />
        </Helmet>
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Контакты</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-semibold mb-6">Свяжитесь с нами</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Адрес</h3>
                    <p className="text-gray-600">г. Тюмень, ул. Республики, 256 к2 ст3, 114 бокс</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                    <Star size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Отзывы</h3>
                    <a
                      href={twoGisUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      Оставить отзыв в 2GIS
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Телефоны</h3>
                    <a href="tel:+79326205501" className="block text-gray-600 hover:text-blue-600 transition-colors">+7 932 620-55-01</a>
                    <a href="tel:+79326205502" className="block text-gray-600 hover:text-blue-600 transition-colors">+7 932 620-55-02</a>
                    <div className="text-xs text-gray-500">Круглосуточно — аварийная служба</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Email</h3>
                    <a href="mailto:info@argon-master72.ru" className="text-gray-600 hover:text-blue-600 transition-colors">info@argon-master72.ru</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Режим работы</h3>
                    <p className="text-gray-600">Пн-Пт: 8:00 - 20:00</p>
                    <p className="text-gray-600">Сб-Вс: 9:00 - 18:00</p>
                    <p className="text-sm text-secondary font-medium mt-1">Аварийная служба 24/7</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-2 rounded-2xl shadow-lg h-[400px] md:h-auto relative overflow-hidden">
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=65.643412%2C57.107802&mode=search&text=%D0%A2%D1%8E%D0%BC%D0%B5%D0%BD%D1%8C%2C%20%D1%83%D0%BB.%20%D0%A0%D0%B5%D1%81%D0%BF%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B8%2C%20256%20%D0%BA2%20%D1%81%D1%823&z=16"
                width="100%"
                height="100%"
                frameBorder="0"
                title="Карта: ул. Республики, 256 к2 ст3"
                className="w-full h-full rounded-xl"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contacts;
