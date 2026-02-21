import React from 'react';
import TeamMemberCard from './TeamMemberCard';

const TeamGrid: React.FC = () => {
  const teamMembers = [
    {
      name: 'Rafael Silva',
      role: 'Desenvolvedor Front-end',
      description: 'Especialista em desenvolvimento front-end com uma base sólida em design, gerenciamento de banco de dados e programação em C#. Combina criatividade com conhecimento técnico para criar interfaces excepcionais e experiências de usuário memoráveis.',
      skills: [
        { name: 'Front-end Development', level: 'intermediário' as const },
        { name: 'Design', level: 'básico' as const },
        { name: 'Banco de Dados', level: 'avançado' as const },
        { name: 'C#', level: 'intermediário' as const },
        { name: 'HTML/CSS', level: 'intermediário' as const },
      ]
    },
    {
      name: 'Erik Zabel',
      role: 'Desenvolvedor Python',
      description: 'Desenvolvedor Python com conhecimento intermediário/básico, focado em criar soluções eficientes e escaláveis. Sempre em busca de aprimorar suas habilidades e explorar novas tecnologias no ecossistema Python.',
      skills: [
        { name: 'Python', level: 'intermediário' as const },
        { name: 'Backend Development', level: 'básico' as const },
        { name: 'Data Analysis', level: 'básico' as const },
        { name: 'Automation', level: 'intermediário' as const },
      ]
    },
    {
      name: 'Keven Wendell',
      role: 'Desenvolvedor em Front-end',
      description: 'Desenvolvedor versátil com conhecimentos em Python e linguagem C, especializado em front-end com JavaScript, HTML e CSS. Atualmente expandindo habilidades em React e PHP para se tornar um desenvolvedor full-stack completo.',
      skills: [
        { name: 'Python', level: 'básico' as const },
        { name: 'C Language', level: 'básico' as const },
        { name: 'JavaScript', level: 'intermediário' as const },
       { name: 'Front-end Development', level: 'intermediário' as const },
        { name: 'React', level: 'básico/em aprendizado' as const },
        { name: 'PHP', level: 'básico/em aprendizado' as const },
        { name: 'Java', level: 'básico/em aprendizado' as const }
      ],
      isMe: true
    }
  ];

  return (
    <section className="relative max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">
          Nossa <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Equipe</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Cada membro traz suas habilidades únicas para criar soluções extraordinárias
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="animate-fade-in-up"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <TeamMemberCard
              name={member.name}
              role={member.role}
              skills={member.skills}
              description={member.description}
              isMe={member.isMe}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamGrid;