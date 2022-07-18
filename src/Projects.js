import React from 'react';
import Project from './Project';
import Frame from './assets/Frame 10209.png';

const projectList = [
  { image: Frame },
  { image: Frame },
  { image: Frame },
];

function Projects() {
  return (
    <section style={{ marginTop: 80 }} className='container'>
      <h1 className='title has-text-centered'>Projects</h1>
      <div className='columns'>
        {projectList.map((item) => (
          <Project projectImage={item.image} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
