import React from 'react';

function Cards() {
  return (
    <>
      <div className='column'>
        <div class='card'>
          <div class='card-content'>
            <div class='content'>
              <div>
                <ul className='block'>
                  <h1>Noom</h1>
                  <h2 className='block'>Advantages</h2>

                  <li>15 Years</li>
                  <li>Coaches</li>
                  <li>Behavioral Science</li>
                </ul>
              </div>
              <div className='block'>
                <ul className='block'>
                  <h2>Disadvantages</h2>
                  <li>Expensive</li>
                  <li>Difficult to Cancel</li>
                  <li>Promotes Diet Culture</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='column'>
        <div class='card'>
          <div class='card-content'>
            <div class='content'>
              <div>
                <ul className='block'>
                  <h1>Spark People</h1>
                  <h2 className='block'>Advantages</h2>

                  <li>Free</li>
                  <li>Ability to catalog recipes</li>
                  <li>Recipe share</li>
                </ul>
              </div>
              <div className='block'>
                <ul className='block'>
                  <h2>Disadvantages</h2>
                  <li>Couldn't compete with big tech companies</li>
                  <li>Couldn't identify a sustainable businesss model</li>
                  <li>Forced out of business</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='column'>
        <div class='card'>
          <div class='card-content'>
            <div class='content'>
              <div>
                <ul className='block'>
                  <h1>My Fitness Pal</h1>
                  <h2 className='block'>Advantages</h2>

                  <li>Food Tracker</li>
                  <li>Abiliity to catalog food</li>
                  <li>Integration with other applications</li>
                </ul>
              </div>
              <div className='block'>
                <ul className='block'>
                  <h2>Disadvantages</h2>
                  <li>Premium subscription required to access helpful features</li>
                  <li>High monthly subscription fees</li>
                  <li>Partnership with under Armor bogged app down</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Cards;
