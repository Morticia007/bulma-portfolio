import React from 'react';
import { Link } from 'react-router-dom';

function Project({
  projectName,
  projectRole,
  projectImage,
  projectSummary,
  projectGoal,
  projectPage,
}) {
  return (
    <div className='column'>
      <Link to={projectPage}>
        <img
          alt='Multiple iPhone sceens showing the WIF App'
          style={{
            marginTop: projectImage.includes('Frame') ? 100 : 50,
            marginLeft: projectImage.includes('Frame') ? -13 : null,
          }}
          src={projectImage}
        />
      </Link>
      <h3 className='subtitle'>
        <Link style={{ color: 'black', fontWeight: 700 }} to={projectPage}>
          {projectName}
        </Link>
      </h3>
      <h4 className='subtitle' style={{ fontStyle: 'italic' }}>
        {projectRole}
      </h4>
      <p style={{ marginBottom: 30 }}>
        <span style={{ fontWeight: 700 }}>Summary:</span> {projectSummary}
      </p>
      <p>
        <span style={{ fontWeight: 700 }}>Goal:</span> {projectGoal}
      </p>
    </div>
  );
}

export default Project;
