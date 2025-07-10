import React from 'react';
import { Phone, MapPin, Clock } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
        }}
      />
      <div className="absolute inset-0 bg-black/70" />
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Estilo & <span className="text-amber-500">Tradição</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 leading-relaxed text-gray-200">
          Mais que um corte, uma experiência única. Tradição e modernidade se encontram no coração da cidade.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={scrollToContact}
            className="bg-amber-500 hover:bg-amber-600 text-black font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105"
          >
            Agendar Horário
          </button>
          <button
            onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-white text-white hover:bg-white hover:text-black font-semibold py-4 px-8 rounded-lg transition-all duration-200"
          >
            Nossos Serviços
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="flex items-center justify-center space-x-2">
            <Clock className="h-5 w-5 text-amber-500" />
            <span className="text-sm">Seg-Sex: 9h-19h | Sáb: 8h-16h</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <Phone className="h-5 w-5 text-amber-500" />
            <span className="text-sm">(11) 9999-9999</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <MapPin className="h-5 w-5 text-amber-500" />
            <span className="text-sm">Centro, São Paulo - SP</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;