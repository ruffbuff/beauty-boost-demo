
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      title: "Маникюр и педикюр",
      description: "Профессиональный уход за ногтями с использованием качественных материалов и современных техник",
      image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      price: "от 1500 ₽"
    },
    {
      title: "Косметология",
      description: "Комплексный уход за кожей лица: чистки, пилинги, увлажняющие и омолаживающие процедуры",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      price: "от 2500 ₽"
    },
    {
      title: "Массаж",
      description: "Расслабляющий и лечебный массаж для снятия напряжения и улучшения самочувствия",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      price: "от 2000 ₽"
    },
    {
      title: "Прически и укладки",
      description: "Стильные прически для любого случая: повседневные, вечерние, свадебные",
      image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      price: "от 1800 ₽"
    },
    {
      title: "Окрашивание",
      description: "Профессиональное окрашивание волос премиальными красителями с индивидуальным подбором оттенка",
      image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      price: "от 3500 ₽"
    },
    {
      title: "Макияж",
      description: "Профессиональный макияж для фотосессий, мероприятий и особых случаев",
      image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      price: "от 2200 ₽"
    }
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            Наши услуги
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Предлагаем полный спектр услуг красоты для создания вашего неповторимого образа
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-0 shadow-lg overflow-hidden animate-scale-in"
              style={{animationDelay: `${index * 100}ms`}}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 bg-beauty-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {service.price}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-beauty-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
