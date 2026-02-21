import React from 'react';
import { Users } from 'lucide-react';
const Header: React.FC = () => {
  /*adicionarei futuras animações nesse componente*/
  return (
    <header className="relative bg-gray-900 border-b border-gray-800 overflow-hidden">
   
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/20 to-blue-900/20"></div>
      <div className="relative max-w-6xl mx-auto px-6 py-12">
        <div className="flex items-center justify-center space-x-4">
          <div className="p-3 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl border border-purple-500/30">
            <Users className="h-10 w-10 text-purple-400" />
          </div>
          <h1 className="text-5xl font-bold text-white">
            Sobre <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400">Nós</span>
          </h1>
        </div>
        <p className="text-gray-300 text-center mt-6 text-xl max-w-3xl mx-auto leading-relaxed">
          Conheça nossa equipe talentosa de desenvolvedores dedicados a criar soluções inovadoras e transformar ideias em realidade digital
        </p>
      </div>
    </header>
  );
};

export default Header;