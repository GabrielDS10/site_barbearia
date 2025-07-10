import React from 'react';
import { Award, Users, Clock, Star } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Award className="h-8 w-8" />, number: '15+', label: 'Anos de Experiência' },
    { icon: <Users className="h-8 w-8" />, number: '5000+', label: 'Clientes Satisfeitos' },
    { icon: <Clock className="h-8 w-8" />, number: '24/7', label: 'Dedicação Total' },
    { icon: <Star className="h-8 w-8" />, number: '4.9', label: 'Avaliação Média' }
  ];

  return (
    <section id="sobre" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nossa <span className="text-amber-600">História</span>
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Fundada em 2008, a Elite Barber nasceu da paixão por criar experiências únicas para o homem moderno. 
              Combinamos técnicas tradicionais com tendências contemporâneas, sempre priorizando a qualidade e o atendimento personalizado.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Nossa equipe é formada por profissionais qualificados que compartilham da mesma visão: 
              proporcionar não apenas um corte de cabelo, mas uma experiência completa de cuidado masculino.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-amber-600 mb-2 flex justify-center">{stat.icon}</div>
                  <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
                alt="Barbeiro em ação"
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-amber-500 text-black p-6 rounded-lg shadow-xl">
              <div className="text-2xl font-bold">15+</div>
              <div className="text-sm">Anos de Tradição</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;