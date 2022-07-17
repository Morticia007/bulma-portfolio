import React from 'react';
import Project from './Project';

function Projects() {
  return (
    <section style={{ marginTop: 80 }} className='container'>
      <h1 className='title has-text-centered'>Projects</h1>
      <div className='columns'>
        <Project />
        <Project />
        <Project />
      </div>
    </section>
  );
}

export default Projects;
