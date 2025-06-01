
import React from 'react';

const AboutSection = () => {
  const stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "3", label: "Years of Experience" },
    { number: "10+", label: "Types of Services" },
    { number: "4.9", label: "Google Rating" }
  ];

  return (
    <section id="about" className="section-padding bg-gradient-beauty">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-800">
              About Our Salon
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Bella Beauty is a modern beauty salon where every detail is designed 
              for your comfort and pleasure. We use only quality materials 
              and modern equipment.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Our team consists of experienced professionals who constantly improve 
              their skills and follow the latest trends in the beauty world. 
              We create an individual approach for each client.
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
                alt="Salon Interior"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1559599101-f09722fb4948?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Specialist Workplace"
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
