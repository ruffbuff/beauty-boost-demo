
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    comment: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
    alert('Thank you! Your booking request has been submitted.');
  };

  return (
    <section id="contact" className="section-padding bg-gradient-rose">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-800">
            Contact Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Book an appointment or get a consultation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="animate-fade-in">
            <Card className="shadow-xl border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 gradient-text">Book an Appointment</h3>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input 
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-beauty-500 focus:border-transparent transition-all"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <input 
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-beauty-500 focus:border-transparent transition-all"
                      placeholder="+1 (555) 123-4567"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service
                    </label>
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-beauty-500 focus:border-transparent transition-all"
                      required
                    >
                      <option value="">Choose a service</option>
                      <option value="manicure-pedicure">Manicure & Pedicure</option>
                      <option value="cosmetology">Cosmetology</option>
                      <option value="massage">Massage</option>
                      <option value="hairstyling">Hairstyling</option>
                      <option value="hair-coloring">Hair Coloring</option>
                      <option value="makeup">Makeup</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Comment
                    </label>
                    <textarea 
                      name="comment"
                      value={formData.comment}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-beauty-500 focus:border-transparent transition-all resize-none"
                      placeholder="Additional preferences..."
                    ></textarea>
                  </div>
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-beauty-500 to-rose-500 hover:from-beauty-600 hover:to-rose-600 text-white py-3 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Submit Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8 animate-fade-in">
            <Card className="shadow-xl border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 gradient-text">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-gradient-to-r from-beauty-500 to-rose-500 rounded-full flex-shrink-0 mt-1"></div>
                    <div>
                      <h4 className="font-medium text-gray-800">Address</h4>
                      <p className="text-gray-600">123 Beauty Street, New York, NY 10001</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-gradient-to-r from-beauty-500 to-rose-500 rounded-full flex-shrink-0 mt-1"></div>
                    <div>
                      <h4 className="font-medium text-gray-800">Phone</h4>
                      <button 
                        onClick={() => window.open('tel:+15551234567')}
                        className="text-gray-600 hover:text-beauty-600 transition-colors"
                      >
                        +1 (555) 123-4567
                      </button>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-gradient-to-r from-beauty-500 to-rose-500 rounded-full flex-shrink-0 mt-1"></div>
                    <div>
                      <h4 className="font-medium text-gray-800">Email</h4>
                      <button 
                        onClick={() => window.open('mailto:info@bellabeauty.com')}
                        className="text-gray-600 hover:text-beauty-600 transition-colors"
                      >
                        info@bellabeauty.com
                      </button>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-gradient-to-r from-beauty-500 to-rose-500 rounded-full flex-shrink-0 mt-1"></div>
                    <div>
                      <h4 className="font-medium text-gray-800">Working Hours</h4>
                      <p className="text-gray-600">Mon-Sun: 9:00 AM - 9:00 PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 gradient-text">Follow Us</h3>
                <div className="flex space-x-4">
                  <Button variant="outline" size="lg" className="flex-1 border-beauty-300 text-beauty-600 hover:bg-beauty-50">
                    Instagram
                  </Button>
                  <Button variant="outline" size="lg" className="flex-1 border-beauty-300 text-beauty-600 hover:bg-beauty-50">
                    Facebook
                  </Button>
                  <Button variant="outline" size="lg" className="flex-1 border-beauty-300 text-beauty-600 hover:bg-beauty-50">
                    Twitter
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
