import React from 'react';
import Education from './Education';

function About() {
  return (
    <div className='content is-large'>
      <div style={{ color: 'white', background: '#609497', padding: 60 }}>
        <div className='columns'>
          <h3
            className='column is-half is-offset-one-quarter'
            style={{ color: 'white' }}>
            Guided by my sense of justice, I use my empathy and courage to stand
            up for the user to protect their interest when delivering useful
            products. Whether it be for clean living, creation, or learning, I
            am passionate and want to see users succeed with their quest in
            life.
          </h3>
        </div>
      </div>
      <div style={{ padding: 60 }}>
        <h1 style={{ marginBottom: 80, marginTop: 80 }}>About Me</h1>
        <p style={{ maxWidth: 750 }}>
          I’m based in Dallas Texas. I enjoy working with holistic,
          wellness, sports, music, and art companies to create user centric
          products.
        </p>
        <p style={{ maxWidth: 750 }}>
          My background isn’t typical, its very deep and meaningful, in ways
          that are unknown to most until they have to meet their Mortician, in
          one of the hardest moments life can deal you. As a Mortician my focus
          was not only on the deceased, but also on the living and how I could
          provide them with the most memorable and positive send off for someone
          they cared for.
        </p>
        <p style={{ maxWidth: 750 }}>
          This is user centric in its most raw form. My
          passion for people is a strength and honor built within the very
          bones of my body. I am hungry for knowledge. I am a driven and curious
          being ready to take on anything and learn. This is my superpower and
          also the core strength that drives my passion for Ux design. If you’d
          like to know more, I’d love to connect.
        </p>
      </div>
      <hr />
      <Education />
    </div>
  );
}
export default About;
