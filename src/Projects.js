import React from 'react';
import Project from './Project';
import Frame from './assets/Frame 10209.png';

function Projects() {
  return (
    <section style={{ marginTop: 80 }} className='container'>
      <h1 className='title has-text-centered'>Projects</h1>
      <div className='columns'>
        <Project projectImage={Frame} />
        <Project projectImage={Frame} />
        <Project projectImage={Frame} />
      </div>
    </section>
  );
}

export default Projects;
