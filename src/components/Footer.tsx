import React from 'react';
import { Scissors, Instagram, Facebook, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Scissors className="h-8 w-8 text-amber-500" />
              <span className="text-2xl font-bold">Elite Barber</span>
            </div>
            <p className="text-gray-400 mb-4">
              Mais que um corte, uma experiência única. Tradição e qualidade desde 2008.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-amber-500 hover:text-amber-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-amber-500 hover:text-amber-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-amber-500" />
                <span className="text-gray-400">(11) 9999-9999</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-amber-500" />
                <span className="text-gray-400">Rua Augusta, 123 - Centro, SP</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Horário de Funcionamento</h4>
            <div className="space-y-2 text-gray-400">
              <div>Segunda a Sexta: 9h às 19h</div>
              <div>Sábado: 8h às 16h</div>
              <div>Domingo: Fechado</div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Elite Barber. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;