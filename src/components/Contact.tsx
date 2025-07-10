import React from 'react';
import { Phone, MapPin, Clock, Mail, Instagram, Facebook } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Telefone',
      info: '(11) 9999-9999',
      subInfo: 'WhatsApp disponível'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Endereço',
      info: 'Rua Augusta, 123 - Centro',
      subInfo: 'São Paulo - SP, 01305-000'
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Horário',
      info: 'Seg-Sex: 9h às 19h',
      subInfo: 'Sáb: 8h às 16h | Dom: Fechado'
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      info: 'contato@elitebarber.com',
      subInfo: 'Respondemos em 24h'
    }
  ];

  return (
    <section id="contato" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Entre em <span className="text-amber-600">Contato</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Pronto para uma experiência única? Agende seu horário e venha nos visitar.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Informações de Contato</h3>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="text-amber-600 mt-1">{item.icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{item.title}</h4>
                    <p className="text-gray-600">{item.info}</p>
                    <p className="text-sm text-gray-500">{item.subInfo}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <h4 className="font-semibold text-gray-900 mb-4">Redes Sociais</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-amber-600 hover:text-amber-700 transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-amber-600 hover:text-amber-700 transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Localização</h3>
            <div className="bg-gray-300 rounded-lg h-64 flex items-center justify-center">
              <div className="text-center text-gray-600">
                <MapPin className="h-12 w-12 mx-auto mb-2" />
                <p>Mapa interativo aqui</p>
                <p className="text-sm">Rua Augusta, 123 - Centro, São Paulo</p>
              </div>
            </div>
            
            <div className="mt-6">
              <a
                href="https://wa.me/5511999999999"
                className="w-full bg-amber-500 hover:bg-amber-600 text-black font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 inline-block text-center"
              >
                Agendar pelo WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;