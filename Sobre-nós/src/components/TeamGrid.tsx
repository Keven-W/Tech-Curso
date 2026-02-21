import React from 'react';
import TeamMemberCard from './TeamMemberCard';

// Dados dos membros (substitua pelos reais)
const teamMembers = [
  {
    name: 'Keven Wendell',
    role: 'Front-end Developer',
    skills: [
      { name: 'React', level: 'básico/intermediário' },
      { name: 'TypeScript', level: 'Básico/Intermediário' },
      { name: 'JavaScript', level: 'intermediário' },
      { name: 'React', level: 'Básico/Intermediário' },
      { name: 'PHP', level: 'Básico' },
      { name: 'Java', level: 'Básico/em aprendizado' },
      { name: 'Python', level: 'Básico' },
      { name: 'C language', level: 'Básico' },
      { name: 'Node', level: 'Básico/em aprendizado'}

    ],
    description: 'Desenvolvedor versátil com conhecimentos em Python e linguagem C, especializado em front-end com JavaScript, HTML e CSS. Atualmente expandindo habilidades em React e PHP para se tornar um desenvolvedor full-stack completo.',
    github: 'https://github.com/Keven-W',
    linkedin: 'https://www.linkedin.com/in/kevenw/',
    portfolio: 'https://keven-w.github.io/Keven-portf-lio/',
    isMe: true
  },
  {
    name: 'Erik Zabel',
    role: 'Python Developer',
    skills: [
      { name: 'Python', level: 'Básico/Intermediário' },
      { name: 'Backend Development', level: 'Básico' },
      { name: 'Front-End Development', level: 'Básico/Intermediário' },
      { name: 'Automation', level: 'Básico/Intermediário' }
    ],
    description: 'Desenvolvedor Python com conhecimento intermediário/básico, focado em criar soluções eficientes e escaláveis. Sempre em busca de aprimorar suas habilidades e explorar novas tecnologias no ecossistema Python.',
    github: 'https://github.com/ErillZabell',
    linkedin: 'https://www.linkedin.com/in/erik-zabel-ribeiro-66a279358/',
    // portfolio não tem, então não será exibido
    isMe: false
  },
  {
    name: 'Rafael Silva N.',
    role: 'Front-end developer',
    skills: [
      { name: 'Banco de Dados', level: 'avançado' },
      { name: 'Front-end Development', level: 'intermediário' },
      { name: 'Backend Development', level: 'Básico/Intermediário' },
      { name: 'C#', level: 'intermediário' },
      { name: 'Design', level: 'Básico' }
    ],
    description: 'Especialista em desenvolvimento front-end com uma base sólida em design, gerenciamento de banco de dados e programação em C#. Combina criatividade com conhecimento técnico para criar interfaces excepcionais e experiências de usuário memoráveis.',
     //github ainda será criado
    linkedin: 'https://www.linkedin.com/in/rafael-silva-neves-1785692b4/',
      //portfólio em falta
    isMe: false
  }
];

const TeamGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {teamMembers.map((member, index) => (
        <TeamMemberCard
          key={index}
          name={member.name}
          role={member.role}
          skills={member.skills}
          description={member.description}
          github={member.github}
          linkedin={member.linkedin}
          portfolio={member.portfolio}
          isMe={member.isMe}
        />
      ))}
    </div>
  );
};

export default TeamGrid;