import React from 'react';

function Content({ heading, firstP, secondP }) {
  return (
    <div
      style={{
        background:
          heading.toLowerCase() === 'executive summary' ? '#fafafa' : 'white',
        padding: 30,
      }}
      className='container-fluid content is-medium'>
      <div className='columns'>
        <h2 className='column'>{heading}</h2>
        <p style={{ fontWeight: 700 }} className='column is-size-6'>
          {firstP}
        </p>
      </div>
      <div className='columns'>
        <div className='column'></div>
        <p className='column is-size-6'>{secondP}</p>
      </div>
      <hr />
    </div>
  );
}

export default Content;
