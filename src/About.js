import React from 'react';
function About() {
  return (
    <div className='content is-large'>
      <div style={{ color: 'white', background: '#326669', padding: 60 }}>
        <h1
          className='has-text-left'
          style={{
            marginBottom: 80,
            marginTop: 80,
            color: 'white',
            background: '#326669',
          }}>
          Jacquelyn Hagman
        </h1>
        <p style={{ maxWidth: 750 }}>
          Guided by my sense of justice, I use my empathy and courage to stand
          up for the user to protect their interest when delivering useful
          products. Whether it be for clean living, creation, or learning, I am
          passionate and want to see users succeed with their quest in life.
        </p>
      </div>
      <div style={{ padding: 60 }}>
        <h1 style={{ marginBottom: 80, marginTop: 80 }}>About Me</h1>
        <p style={{ maxWidth: 750 }}>
          I’m based in Dallas Texas. I enjoy working with holistic, health and
          wellness, sports, music, and art companies to create user centric
          products. My background isn’t typical, its very deep and meaningful,
          in ways that are unknown to most until they have to meet their
          Mortician, in one of the hardest moments life can deal you. As a
          Mortician my focus was not only on the deceased, but also on the
          living and how I could provide them with the most memorable and
          positive send off for someone whom they cared deeply for.
        </p>
        <p style={{ maxWidth: 750 }}>
          I can positively say this is user centric in its most raw form. My
          passion for the people is a strength and honor built within the very
          bones of my body. I am hungry for knowledge. I am a driven and curious
          being ready to take on anything and learn. This is my superpower and
          also the core strength that drives my passion for Ux design. If you’d
          like to know more, I’d love to connect.
        </p>
      </div>
      <hr />
      <div style={{ padding: 60 }}>
        <h1 style={{ marginBottom: 80, marginTop: 80 }}>Education</h1>
        <div className='block'>
          <p className='title'>GENERAL ASSSEMBY UX BOOTCAMP</p>
          <p className='subtitle'>GENERAL ASSSEMBY UX BOOTCAMP</p>
        </div>
        <div className='block'>
          <p className='title'>NEWCAMP FULLSTACK DEVELOPER BOOTCAMP</p>
          <p className='subtitle'>November 2020 - May 2021</p>
        </div>
        <div className='block'>
          <p className='title'>DESIGN LAB UX/UI ACADEMY</p>
          <p className='subtitle'>May 2022 -Present</p>
        </div>
      </div>
    </div>
  );
}
export default About;
