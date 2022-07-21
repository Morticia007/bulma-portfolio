import React from 'react';

function Content({ heading, firstP, secondP }) {
  return (
    <div
      style={{
        background:
          heading.toLowerCase() === 'executive summary' ? '#fafafa' : 'white',
        padding: 30,
      }}
      className='container-fluid content is-medium'
    >
      <div className='columns'>
        <h2 className='column'>{heading}</h2>
        <p style={{ fontSize: 20 }} className='column'>
          {firstP}
        </p>
      </div>
      <div className='columns'>
        <div className='column'></div>
        <p style={{ fontSize: 20 }} className='column'>
          {secondP}
        </p>
      </div>
      <hr />
    </div>
  );
}

export default Content;
