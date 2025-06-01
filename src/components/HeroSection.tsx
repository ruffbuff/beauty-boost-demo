
import React from 'react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-beauty-50/50 to-rose-50/50"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto container-padding w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Красота</span><br />
              <span className="text-gray-800">без границ</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Профессиональные услуги красоты в уютной атмосфере. 
              Мы создаем неповторимый образ для каждой клиентки, 
              используя современные технологии и качественные материалы.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="bg-gradient-to-r from-beauty-500 to-rose-500 hover:from-beauty-600 hover:to-rose-600 text-white px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Записаться на прием
              </Button>
              <Button 
                variant="outline"
                size="lg"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-beauty-300 text-beauty-600 hover:bg-beauty-50 px-8 py-4 rounded-full text-lg transition-all duration-300"
              >
                Наши услуги
              </Button>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-gradient-to-r from-beauty-200 to-rose-200 rounded-full blur-xl opacity-70 animate-float"></div>
              <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-gradient-to-r from-rose-200 to-beauty-200 rounded-full blur-xl opacity-70 animate-float" style={{animationDelay: '1s'}}></div>
              
              <img 
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Салон красоты"
                className="relative z-10 w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl"
              />
              
              <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">Онлайн</span>
                </div>
                <p className="text-xs text-gray-600 mt-1">Мастера доступны</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
