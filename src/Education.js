import React from 'react';

function Education() {
  return (
    <div style={{ padding: 40 }}>
      <h1 style={{ marginBottom: 80, marginTop: 80 }}>Education</h1>
      <div className='block'>
        <h5 style={{ marginBottom: 4 }} className='subtitle'>
          GENERAL ASSSEMBY UX BOOTCAMP
        </h5>
        <p className='subtitle'>April 2019 - July 2019P</p>
      </div>
      <div className='block'>
        <h5 style={{ marginBottom: 4 }} className='subtitle'>
          NEWCAMP FULLSTACK DEVELOPER BOOTCAMP
        </h5>
        <p className='subtitle'>November 2020 - May 2021</p>
      </div>
      <div className='block'>
        <h5 style={{ marginBottom: 4 }} className='subtitle'>
          DESIGN LAB UX/UI ACADEMY
        </h5>
        <p className='subtitle'>May 2022 - Present</p>
      </div>
    </div>
  );
}

export default Education;
