import React from 'react';
import Project from './Project';
import Desktop from './assets/Device Mashups-0.png'; 
import Device from './assets/Device Mashups.png';
import ComingSoon2 from './assets/coming-soon-2.png';
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
    projectName: 'Elder Racing Equipment',
    projectRole: `UX/UI Designer • Product Designer • Researcher`,
    projectImage: Device,
    projectSummary: `This responsive mobile web app is a personal project that provides and amazing new company solutions for contact and purchase of their product.`,
    projectGoal:
      'Discover a solution for a small company who needs a way to solve their organizational painpoints so they can solve for motorized bicycle hobbyists painpoints.',
    projectPage: 'work2',
  },
  {
    id: uuidv4(),
    projectName: 'ComingSoon2',
    projectRole: `UX/UI Designer • Product Designer • Researcher`,
    projectImage: ComingSoon2,
    projectSummary: `This project is coming soon This project is coming soon This project is coming soon This project is coming soon`,
    projectGoal:
      'Learn how to empower people and improve life through digital products.',
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
