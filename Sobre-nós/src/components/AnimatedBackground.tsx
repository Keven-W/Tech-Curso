import React from 'react';
import { Star, Settings } from 'lucide-react';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animação de estrelas */}
      <div className="absolute top-20 left-10 text-purple-400/30 animate-pulse">
        <Star className="h-4 w-4" fill="currentColor" />
      </div>
      <div className="absolute top-40 right-20 text-blue-400/40 animate-pulse delay-1000">
        <Star className="h-3 w-3" fill="currentColor" />
      </div>
      <div className="absolute top-60 left-1/4 text-cyan-400/30 animate-pulse delay-2000">
        <Star className="h-5 w-5" fill="currentColor" />
      </div>
      <div className="absolute bottom-40 right-10 text-purple-400/40 animate-pulse delay-3000">
        <Star className="h-4 w-4" fill="currentColor" />
      </div>
      <div className="absolute bottom-20 left-20 text-blue-400/30 animate-pulse delay-500">
        <Star className="h-3 w-3" fill="currentColor" />
      </div>
      
      {/* Animação de engrenagens */}
      <div className="absolute top-32 right-1/4 text-purple-400/20 animate-spin-slow">
        <Settings className="h-8 w-8" />
      </div>
      <div className="absolute bottom-32 left-1/3 text-blue-400/20 animate-spin-reverse">
        <Settings className="h-6 w-6" />
      </div>
      <div className="absolute top-1/2 right-12 text-cyan-400/20 animate-spin-slow delay-1000">
        <Settings className="h-7 w-7" />
      </div>
      
      {/* particulas fluantes */}
      <div className="absolute top-1/4 left-1/2 w-2 h-2 bg-purple-400/30 rounded-full animate-float"></div>
      <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-blue-400/40 rounded-full animate-float delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-cyan-400/30 rounded-full animate-float delay-1500"></div>
    </div>
  );
};

export default AnimatedBackground;