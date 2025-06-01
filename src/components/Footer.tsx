
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-beauty-500 to-rose-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <span className="font-playfair font-bold text-xl text-white">Bella Beauty</span>
            </div>
            <p className="text-gray-400 mb-4">
              Ваш путь к красоте начинается здесь. 
              Профессиональные услуги красоты в уютной атмосфере.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-beauty-500 transition-colors cursor-pointer">
                <span className="text-sm">IG</span>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-beauty-500 transition-colors cursor-pointer">
                <span className="text-sm">VK</span>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-beauty-500 transition-colors cursor-pointer">
                <span className="text-sm">TG</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Услуги</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white transition-colors cursor-pointer">Маникюр и педикюр</li>
              <li className="hover:text-white transition-colors cursor-pointer">Косметология</li>
              <li className="hover:text-white transition-colors cursor-pointer">Массаж</li>
              <li className="hover:text-white transition-colors cursor-pointer">Прически и укладки</li>
              <li className="hover:text-white transition-colors cursor-pointer">Окрашивание</li>
              <li className="hover:text-white transition-colors cursor-pointer">Макияж</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Контакты</h3>
            <div className="space-y-2 text-gray-400">
              <p>ул. Красоты, 123, Москва</p>
              <p>+7 (999) 123-45-67</p>
              <p>info@bellabeauty.ru</p>
              <p>Пн-Вс: 9:00 - 21:00</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Bella Beauty. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
