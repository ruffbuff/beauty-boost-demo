
import React from 'react';

const AboutSection = () => {
  const stats = [
    { number: "500+", label: "Довольных клиентов" },
    { number: "3", label: "Года опыта" },
    { number: "10+", label: "Видов услуг" },
    { number: "4.9", label: "Рейтинг на Яндексе" }
  ];

  return (
    <section id="about" className="section-padding bg-gradient-beauty">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-800">
              О нашем салоне
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Bella Beauty — это современный салон красоты, где каждая деталь продумана 
              для вашего комфорта и удовольствия. Мы используем только качественные материалы 
              и современное оборудование.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Наша команда состоит из опытных мастеров, которые постоянно совершенствуют 
              свои навыки и следят за последними тенденциями в мире красоты. 
              Мы создаем индивидуальный подход к каждому клиенту.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Интерьер салона"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1559599101-f09722fb4948?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Рабочее место мастера"
                className="w-full h-64 object-cover rounded-2xl shadow-lg mt-8"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-beauty-300 to-rose-300 rounded-full blur-xl opacity-50"></div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-rose-300 to-beauty-300 rounded-full blur-xl opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
