import React from 'react';

function Hero() {
  return (
    <>
      <section style={{ background: '#609497' }} className='hero is-medium'>
        <div className='hero-body'>
          <p
            style={{ color: 'white' }}
            className='title has-text-centered block'>
            Hi! Glad you made it!
          </p>
        </div>
      </section>
      <section className='hero is-medium'>
        <div className='hero-body'>
          <div className='columns'>
            <p className='title column is-half is-offset-one-quarter has-text-left bloc is-large'>
              I’m based in Dallas Texas. I enjoy working with holistic, health
              and wellness, sports, music, and art companies to create user
              centric products.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
