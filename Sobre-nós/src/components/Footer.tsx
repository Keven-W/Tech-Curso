import React from 'react';
import { Heart, Code2, Coffee } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gray-900 border-t border-gray-800 mt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-blue-900/10"></div>
      
      <div className="relative max-w-6xl mx-auto px-6 py-12">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-gray-400">Feito com</span>
            <Heart className="h-5 w-5 text-red-400 fill-current animate-pulse" />
            <Code2 className="h-5 w-5 text-purple-400 animate-pulse delay-300" />
            <span className="text-gray-400">e muito</span>
            <Coffee className="h-5 w-5 text-amber-400 animate-pulse delay-600" />
          </div>
          
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 font-semibold text-lg mb-2">
            Nossa Equipe de Desenvolvimento
          </p>
          
          <p className="text-gray-500 text-sm">
            © 2025 Equipe de Desenvolvedores. Criando o futuro, um código por vez.
          </p>
          
          <div className="mt-6 flex justify-center space-x-6 text-gray-500">
            <span className="text-xs">React</span>
            <span className="text-xs">•</span>
            <span className="text-xs">TypeScript</span>
            <span className="text-xs">•</span>
            <span className="text-xs">Tailwind CSS</span>
            <span className="text-xs">•</span>
            <span className="text-xs">Vite</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;