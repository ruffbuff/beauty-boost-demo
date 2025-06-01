
import React from 'react';

const GallerySection = () => {
  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1485875437342-9b39470b3d95?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      alt: "Маникюр"
    },
    {
      url: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      alt: "Прическа"
    },
    {
      url: "https://images.unsplash.com/photo-1607748851616-9a00a44e2be9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      alt: "Макияж"
    },
    {
      url: "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      alt: "Окрашивание"
    },
    {
      url: "https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      alt: "Дизайн ногтей"
    },
    {
      url: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      alt: "Уход за кожей"
    }
  ];

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            Наши работы
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Посмотрите на результаты работы наших мастеров
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer animate-scale-in"
              style={{animationDelay: `${index * 100}ms`}}
            >
              <img 
                src={image.url}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="font-medium">{image.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
