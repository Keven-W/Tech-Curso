import React from 'react';
import AnimatedBackground from './AnimatedBackground';
import { Code, Rocket, Zap } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[60vh] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center overflow-hidden">
      <AnimatedBackground />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="animate-fade-in-up">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="p-3 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl border border-purple-500/30 animate-glow">
              <Code className="h-8 w-8 text-purple-400" />
            </div>
            <div className="p-3 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl border border-blue-500/30 animate-glow delay-200">
              <Rocket className="h-8 w-8 text-blue-400" />
            </div>
            <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl border border-cyan-500/30 animate-glow delay-400">
              <Zap className="h-8 w-8 text-cyan-400" />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Transformando
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">
              Ideias em Código
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
            Somos uma equipe apaixonada por tecnologia, dedicada a criar soluções digitais inovadoras 
            que fazem a diferença no mundo da programação.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              <span>Desenvolvimento Front-end</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-300"></div>
              <span>Programação Python</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-600"></div>
              <span>Desenvolvimento Full-stack</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;