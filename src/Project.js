import React from 'react';

function Project({ projectImage }) {
  return (
    <div className='column'>
      <h3 className='subtitle'>WIF UX/UI Design</h3>
      <h4 className='subtitle' style={{ fontStyle: 'italic' }}>
        Project Manager • Product Designer • Researcher
      </h4>
      <p style={{ marginBottom: 30 }}>
        <span style={{ fontWeight: 700 }}>Summary:</span> This SharePoint
        project was to build a firm-wide communication portal for business
        support and administrative professionals.
      </p>
      <p>
        <span style={{ fontWeight: 700 }}>Goal:</span> Learn how the business
        can communicate and distribute information.
      </p>
      <img
        alt='Multiple iPhone sceens showing the WIF App'
        style={{ marginTop: 50, marginLeft: -20 }}
        src={projectImage}
      />
    </div>
  );
}

export default Project;
