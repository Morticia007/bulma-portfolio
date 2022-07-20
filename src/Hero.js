import React from 'react';

function Hero() {
  return (
    <>
      <section style={{ background: '#609497' }} className='hero is-medium'>
        <div className='hero-body'>
          <div className='columns'>
            <p
              style={{ color: 'white' }}
              className='title column is-half is-offset-one-quarter has-text-left bloc is-large is-size-1'
            >
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
