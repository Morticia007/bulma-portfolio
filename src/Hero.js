import React from 'react';

function Hero() {
  return (
    <>
      <section style={{ background: '#609497' }} class='hero is-medium'>
        <div class='hero-body'>
          <p
            style={{ color: 'white' }}
            className='title has-text-centered block'>
            Hi! Glad you made it!
          </p>
        </div>
      </section>
      <section class='hero is-medium'>
        <div class='hero-body'>
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
//  <section className='hero is-large container'>
//       <div className='hero-body '>
//         <div className='content is-large'>
//           <h1 className='title has-text-centered block'>
//             Hi! Glad you made it!
//           </h1>
//         </div>
//         <div className='columns'>
//           <div className='column is-half is-offset-one-quarter has-text-left bloc'>
//             <p className='subtitle'>
// I’m based in Dallas Texas. I enjoy working with holistic, health
// and wellness, sports, music, and art companies to create user
// centric products.
//             </p>
//             <p className='subtitle'>
//               My background isn’t typical, its very deep and meaningful, in ways
//               that are unknown to most until they have to meet their mortician,
//               in one of the hardest moments life can deal you.
//             </p>
//           </div>
//         </div>
//         {/* <p className='subtitle'>
//           My background isn’t typical, its very deep and meaningful, in ways
//           that are unknown to most until they have to meet their Mortician, in
//           one of the hardest moments life can deal you.
//         </p>
//         <p className='subtitle'>
//           As a Mortician my focus was not only on the deceased, but also on the
//           living and how I could provide them with the most memorable and
//           positive send off for someone whom they cared deeply for.
//         </p>
//         <p className='subtitle'>
//           I can positively say this is user centric in its most raw form. My
//           passion for the people is a strength and honor built within the very
//           bones of my body. I am hungry for knowledge. I am a driven and curious
//           being ready to take on anything and learn. This is my superpower and
//           also the core strength that drives my passion for Ux design. If you’d
//           like to know more, I’d love to connect.
//   </p> */}
//       </div>
//     </section>
