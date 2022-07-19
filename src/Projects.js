import React from 'react';
import Project from './Project';
import Desktop from './assets/desktop-2.png';
import ComingSoon from './assets/coming-soon-1.jpg';
import ComingSoon2 from './assets/coming-soon-2.jpg';
import { v4 as uuidv4 } from 'uuid';

const projectList = [
  {
    id: uuidv4(),
    projectName: 'WIF',
    projectRole: `UX/UI Designer • Product Designer • Researcher`,
    projectImage: Desktop,
    projectSummary: `This responsive mobile web app is a personal project that provides community forums for those struggling to lose weight.`,
    projectGoal: `Learn how to empower and improve health and fitness through community forums for long time strugglers. `,
    projectPage: 'work',
  },
  {
    id: uuidv4(),
    projectName: 'ComingSoon',
    projectRole: `UX/UI Designer • Product Designer • Researcher`,
    projectImage: ComingSoon,
    projectSummary: `This project is coming soon This project is coming soon This project is coming soon This project is coming soon`,
    projectGoal:
      'Learn how to empower and improve health and fitness through community forums for long time strugglers.',
    projectPage: '',
  },
  {
    id: uuidv4(),
    projectName: 'ComingSoon2',
    projectRole: `UX/UI Designer • Product Designer • Researcher`,
    projectImage: ComingSoon2,
    projectSummary: `This project is coming soon This project is coming soon This project is coming soon This project is coming soon`,
    projectGoal:
      'Learn how to empower and improve health and fitness through community forums for long time strugglers.',
    projectPage: '',
  },
];

function Projects() {
  return (
    <section style={{ marginTop: 80 }} className='container'>
      <h1 style={{ marginBottom: 80 }} className='title has-text-centered'>
        Projects
      </h1>
      <div className='columns'>
        {projectList.map((item) => (
          <Project key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
