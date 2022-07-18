import React from 'react';
import Project from './Project';
import Frame from './assets/Frame 10209.png';
import ComingSoon from './assets/pexels-alleksana-4271927 2.jpg';
import ComingSoon2 from './assets/pexels-vie-studio-4439444 2.jpg';

const projectList = [
  { image: Frame },
  { image: ComingSoon },
  { image: ComingSoon2 },
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
