import React from 'react';
import { ExternalLink, Github, Linkedin, Palette, User, Code2 } from 'lucide-react';
import SkillBadge from './SkillBadge';

interface TeamMemberCardProps {
  name: string;
  role: string;
  skills: Array<{ name: string; level?: 'básico' | 'intermediário' | 'avançado' }>;
  description: string;
  isMe?: boolean;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  name,
  role,
  skills,
  description,
  isMe = false
}) => {
  const getIcon = () => {
    if (role.includes('Front-end')) return <Code2 className="h-6 w-6" />;
    if (role.includes('Python')) return <Code2 className="h-6 w-6" />;
    if (role.includes('formação')) return <User className="h-6 w-6" />;
    return <Palette className="h-6 w-6" />;
  };

  const getGradient = () => {
    if (role.includes('Front-end')) return 'from-purple-500/20 to-blue-500/20';
    if (role.includes('Python')) return 'from-blue-500/20 to-cyan-500/20';
    return 'from-cyan-500/20 to-purple-500/20';
  };

  return (
    <div className="group bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-purple-500/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 animate-fade-in-up h-full flex flex-col">
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center space-x-4 min-w-0 flex-1">
          <div className={`p-3 bg-gradient-to-br ${getGradient()} rounded-xl border border-purple-500/30 group-hover:border-purple-400/50 transition-all duration-300`}>
            {getIcon()}
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
              {name}
            </h3>
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 font-semibold text-lg break-words">
              {role}
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1 mb-6">
        <p className="text-gray-300 leading-relaxed text-base break-words overflow-wrap-anywhere hyphens-auto">
          {description}
        </p>
      </div>

      <div className="mb-6">
        <h4 className="text-sm font-bold text-gray-400 mb-4 uppercase tracking-wider flex items-center">
          <span className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></span>
          Habilidades Técnicas
        </h4>
        <div className="flex flex-wrap gap-2.5 justify-start">
          {skills.map((skill, index) => (
            <SkillBadge key={index} skill={skill.name} level={skill.level} />
          ))}
        </div>
      </div>

     <div className="flex flex-col sm:flex-row gap-3 mt-auto pt-2">
  <a href="https://github.com/seu-usuario" target="_blank" rel="noopener noreferrer" className="flex-1 min-w-0">
    <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold py-3 px-3 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 group w-full">
      <Github className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
      <span className="truncate">GitHub</span>
    </button>
  </a>

  <a href="https://linkedin.com/in/seu-usuario" target="_blank" rel="noopener noreferrer" className="flex-1 min-w-0">
    <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold py-3 px-3 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 group w-full">
      <Linkedin className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
      <span className="truncate">LinkedIn</span>
    </button>
  </a>

  <a href="https://seuportfolio.com" target="_blank" rel="noopener noreferrer" className="flex-1 min-w-0 sm:min-w-[120px]">
    <button className="bg-gray-700/80 hover:bg-gray-600/80 text-gray-300 hover:text-white font-semibold py-3 px-3 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105 hover:shadow-lg hover:shadow-gray-500/20 group border border-gray-600/50 hover:border-gray-500/70 w-full">
      <ExternalLink className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
      <span className="truncate">Portfólio</span>
    </button>
  </a>
</div>

    </div>
  );
};

export default TeamMemberCard;