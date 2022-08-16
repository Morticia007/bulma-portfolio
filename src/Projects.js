import React from 'react';
import Project from './Project';
import Desktop from './assets/Device Mashups-0.png';
import Device from './assets/Device Mashups.png';
import Linkedin from './assets/laptop-4.png';
import { v4 as uuidv4 } from 'uuid';

const projectList = [
  {
    id: uuidv4(),
    projectName: 'WIF',
    projectRole: `UX/UI Designer • Product Designer • Researcher`,
    projectImage: Desktop,
    projectSummary: `This responsive mobile web app is a personal project that provides community forums for those struggling to lose weight.`,
    projectGoal: `Learn how to empower and improve health and fitness through community forums for long time strugglers. `,
    projectPage: 'wif',
  },
  {
    id: uuidv4(),
    projectName: 'Elder Racing Equipment',
    projectRole: `UX/UI Designer • Product Designer • Researcher`,
    projectImage: Device,
    projectSummary: `This responsive mobile web app is a personal project that provides and amazing new company solutions for contact and purchase of their product.`,
    projectGoal:
      'Discover a solution for a small company who needs a way to solve their organizational painpoints so they can solve for motorized bicycle hobbyists painpoints.',
    projectPage: 'ere',
  },
  {
    id: uuidv4(),
    projectName: 'Add a Feature',
    projectRole: `UX/UI Designer • Product Designer • Researcher`,
    projectImage: Linkedin,
    projectSummary: `This project is an 'Add a Feature' project that introduces 'chat reply' to the existing chat feature in Linkedin`,
    projectGoal:
      'Add a feature to improve an existing application.',
    projectPage: '',
  },
];

function Projects() {
  return (
    <section className='section' style={{ marginTop: 80 }}>
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
