import React from 'react';

function Contact() {
  return (
    <div style={{ marginTop: 80 }} className='container content is-medium'>
      <h1>I'd love to connect!</h1>
      <h1>Send me a message</h1>
      <form>
        <div className='columns'>
          <div class='control column'>
            <input
              class='input is-large'
              type='email'
              placeholder='Enter Your Name '
            />
          </div>
          <div class='control column'>
            <input
              class='input is-large'
              type='email'
              placeholder='Enter Your Email'
            />
          </div>
        </div>
        <div class='control'>
          <textarea
            rows='10'
            class='textarea is-large'
            placeholder='Enter Your Message'></textarea>
        </div>
      </form>
    </div>
  );
}

export default Contact;
