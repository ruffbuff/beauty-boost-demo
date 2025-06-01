
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-gradient-rose">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-800">
            Свяжитесь с нами
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Запишитесь на прием или получите консультацию
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="animate-fade-in">
            <Card className="shadow-xl border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 gradient-text">Записаться на прием</h3>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Имя
                    </label>
                    <input 
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-beauty-500 focus:border-transparent transition-all"
                      placeholder="Введите ваше имя"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Телефон
                    </label>
                    <input 
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-beauty-500 focus:border-transparent transition-all"
                      placeholder="+7 (999) 999-99-99"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Услуга
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-beauty-500 focus:border-transparent transition-all">
                      <option>Выберите услугу</option>
                      <option>Маникюр и педикюр</option>
                      <option>Косметология</option>
                      <option>Массаж</option>
                      <option>Прически и укладки</option>
                      <option>Окрашивание</option>
                      <option>Макияж</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Комментарий
                    </label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-beauty-500 focus:border-transparent transition-all resize-none"
                      placeholder="Дополнительные пожелания..."
                    ></textarea>
                  </div>
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-beauty-500 to-rose-500 hover:from-beauty-600 hover:to-rose-600 text-white py-3 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8 animate-fade-in">
            <Card className="shadow-xl border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 gradient-text">Контактная информация</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-gradient-to-r from-beauty-500 to-rose-500 rounded-full flex-shrink-0 mt-1"></div>
                    <div>
                      <h4 className="font-medium text-gray-800">Адрес</h4>
                      <p className="text-gray-600">ул. Красоты, 123, Москва</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-gradient-to-r from-beauty-500 to-rose-500 rounded-full flex-shrink-0 mt-1"></div>
                    <div>
                      <h4 className="font-medium text-gray-800">Телефон</h4>
                      <p className="text-gray-600">+7 (999) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-gradient-to-r from-beauty-500 to-rose-500 rounded-full flex-shrink-0 mt-1"></div>
                    <div>
                      <h4 className="font-medium text-gray-800">Email</h4>
                      <p className="text-gray-600">info@bellabeauty.ru</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-gradient-to-r from-beauty-500 to-rose-500 rounded-full flex-shrink-0 mt-1"></div>
                    <div>
                      <h4 className="font-medium text-gray-800">Режим работы</h4>
                      <p className="text-gray-600">Пн-Вс: 9:00 - 21:00</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 gradient-text">Мы в социальных сетях</h3>
                <div className="flex space-x-4">
                  <Button variant="outline" size="lg" className="flex-1 border-beauty-300 text-beauty-600 hover:bg-beauty-50">
                    Instagram
                  </Button>
                  <Button variant="outline" size="lg" className="flex-1 border-beauty-300 text-beauty-600 hover:bg-beauty-50">
                    VK
                  </Button>
                  <Button variant="outline" size="lg" className="flex-1 border-beauty-300 text-beauty-600 hover:bg-beauty-50">
                    Telegram
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
