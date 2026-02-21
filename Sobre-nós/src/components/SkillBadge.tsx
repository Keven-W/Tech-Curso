import React from 'react';

interface SkillBadgeProps {
  skill: string;
  level?: 'básico' | 'intermediário' | 'avançado';
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ skill, level }) => {
  const getLevelColor = (level?: string) => {
    switch (level) {
      case 'básico':
        return 'bg-blue-500/20 text-blue-300 border-blue-500/40 hover:bg-blue-500/30 hover:border-blue-400/60';
      case 'intermediário':
        return 'bg-purple-500/20 text-purple-300 border-purple-500/40 hover:bg-purple-500/30 hover:border-purple-400/60';
      case 'avançado':
        return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 hover:bg-emerald-500/30 hover:border-emerald-400/60';
      default:
        return 'bg-gray-500/20 text-gray-300 border-gray-500/40 hover:bg-gray-500/30 hover:border-gray-400/60';
    }
  };

  return (
    <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm border transition-all duration-300 hover:scale-105 hover:shadow-lg whitespace-nowrap ${getLevelColor(level)}`}>
      {skill}
      {level && <span className="ml-1 text-xs opacity-75">({level})</span>}
    </span>
  );
};

export default SkillBadge;