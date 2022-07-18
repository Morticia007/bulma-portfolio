import React from 'react';

function Project({ projectName, projectRole, projectImage, projectSummary, projectGoal }) {
  return (
    <div className='column'>
      <h3 className='subtitle'>{projectName}</h3>
      <h4 className='subtitle' style={{ fontStyle: 'italic' }}>
        {projectRole}
      </h4>
      <p style={{ marginBottom: 30 }}>
        <span style={{ fontWeight: 700 }}>Summary:</span> {projectSummary}
      </p>
      <p>
        <span style={{ fontWeight: 700 }}>Goal:</span> {projectGoal}
      </p>
      <img
        alt='Multiple iPhone sceens showing the WIF App'
        style={{
          marginTop: projectImage.includes('Frame') ? 100 : 50,
          marginLeft: -20,
        }}
        src={projectImage}
      />
    </div>
  );
}

export default Project;