import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contacts = () => {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
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
                  <p className="text-gray-600">г. Тюмень, ул. Республики, 143</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Телефон</h3>
                  <a href="tel:+79000000000" className="text-gray-600 hover:text-blue-600 transition-colors">
                    +7 (900) 000-00-00
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Email</h3>
                  <a href="mailto:info@argo-72.ru" className="text-gray-600 hover:text-blue-600 transition-colors">
                    info@argo-72.ru
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Режим работы</h3>
                  <p className="text-gray-600">Пн-Пт: 9:00 - 18:00</p>
                  <p className="text-gray-600">Сб-Вс: Выходной</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg h-[400px] md:h-auto relative overflow-hidden">
             <iframe 
               src="https://yandex.ru/map-widget/v1/?ll=65.541227%2C57.152985&z=16" 
               width="100%" 
               height="100%" 
               frameBorder="0" 
               allowFullScreen={true} 
               className="absolute inset-0 w-full h-full"
               title="Map"
             ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
