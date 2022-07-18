import React from 'react';
import Project from './Project';
import Frame from './assets/frame.png';
import ComingSoon from './assets/coming-soon-1.jpg';
import ComingSoon2 from './assets/coming-soon-2.jpg';

const projectList = [
  {
    projectName: 'WIF',
    projectRole: `UX/UI Designer • Product Designer • Researcher`,
    projectImage: Frame,
    projectSummary: `This responsive mobile web app is a personal project that provides community forums for those struggling to lose weight.`,
    projectGoal: `Learn how to empower and improve health and fitness through community forums for long time strugglers. `,
    projectPage: 'work',
  },
  {
    projectName: 'ComingSoon',
    projectRole: `UX/UI Designer • Product Designer • Researcher`,
    projectImage: ComingSoon,
    projectSummary: `This project is coming soon This project is coming soon This project is coming soon This project is coming soon`,
    projectGoal:
      'Learn how to empower and improve health and fitness through community forums for long time strugglers.',
    projectPage: '',
  },
  {
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
          <Project {...item} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
