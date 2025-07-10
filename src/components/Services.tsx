import React from 'react';
import { Scissors, Rat as Razor, Sparkles, Crown } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Scissors className="h-8 w-8" />,
      title: 'Corte Tradicional',
      description: 'Corte clássico com acabamento impecável, respeitando o estilo pessoal de cada cliente.',
      price: 'R$ 35',
      duration: '30 min'
    },
    {
      icon: <Razor className="h-8 w-8" />,
      title: 'Barba Completa',
      description: 'Aparar, modelar e finalizar com produtos premium para um visual sofisticado.',
      price: 'R$ 25',
      duration: '20 min'
    },
    {
      icon: <Crown className="h-8 w-8" />,
      title: 'Corte + Barba',
      description: 'Combo completo para o homem moderno. Corte e barba com desconto especial.',
      price: 'R$ 50',
      duration: '45 min'
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: 'Tratamento Premium',
      description: 'Experiência completa com lavagem, massagem, corte, barba e produtos especiais.',
      price: 'R$ 80',
      duration: '60 min'
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nossos <span className="text-amber-500">Serviços</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços para o homem moderno, sempre com qualidade e atenção aos detalhes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 p-8 rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700"
            >
              <div className="text-amber-500 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">{service.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-amber-500 font-bold text-lg">{service.price}</span>
                <span className="text-gray-500 text-sm">{service.duration}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button
            onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-amber-500 hover:bg-amber-600 text-black font-semibold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105"
          >
            Agendar Agora
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;