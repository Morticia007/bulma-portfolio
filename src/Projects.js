import React from 'react';
import Project from './Project';
import Frame from './assets/Frame 10209.png';
import ComingSoon from './assets/pexels-alleksana-4271927 2.jpg';
import ComingSoon2 from './assets/pexels-vie-studio-4439444 2.jpg';

const projectList = [
  {
    projectName: 'WIF UX/UI Design',
    projectRole: ` Project Manager • Product Designer • Researcher`,
    projectImage: Frame,
    projectSummary: `This SharePoint project was to build a firm-wide communication portal for business support and administrative professionals.`,
    projectGoal: `Learn how the business can communicate and distribute information.`,
  },
  {
    projectName: 'ComingSoon',
    projectRole: ` Project Manager • Product Designer • Researcher`,
    projectImage: ComingSoon,
    projectSummary: `This SharePoint project was to build a firm-wide communication portal for business support and administrative professionals.`,
    projectGoal: `Learn how the business can communicate and distribute information.`,
  },
  {
    projectName: 'ComingSoon2',
    projectRole: ` Project Manager • Product Designer • Researcher`,
    projectImage: ComingSoon2,
    projectSummary: `This SharePoint project was to build a firm-wide communication portal for business support and administrative professionals.`,
    projectGoal: `Learn how the business can communicate and distribute information.`,
  },
];

function Projects() {
  return (
    <section style={{ marginTop: 80 }} className='container'>
      <h1 className='title has-text-centered'>Projects</h1>
      <div className='columns'>
        {projectList.map((item) => (
          <Project {...item} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
