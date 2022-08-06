import React from 'react';

function EREWireFrameItem({ title, subtitle, wireFrameImage }) {
  return (
    <div className='column'>
      <h2 className='has-text-centered'>{title}</h2>
      <p className='has-text-centered is-hidden-desktop'>{subtitle}</p>
      <img alt='home screen' src={wireFrameImage} />
    </div>
  );
}

function EREWireFrameListItem({ title, subtitle }) {
  return (
    <>
      <li>
        <h6>{title}:</h6>
      </li>
      <p>{subtitle}</p>
    </>
  );
}

function EREWireframes({ wireFrameData }) {
  return (
    <div className='columns'>
      {wireFrameData.map((item) => (
        <EREWireFrameItem
          key={item.id}
          title={item.title}
          subtitle={item.subtitle}
          wireFrameImage={item.wireFrameImage}
        />
      ))}

      <div className='column is-one-third is-hidden-touch'>
        <div>
          <ol>
            {wireFrameData.map((item) => (
              <EREWireFrameListItem
                key={item.id}
                title={item.title}
                subtitle={item.subtitle}
              />
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default EREWireframes;
