import React, { useState } from 'react';

function Contact() {
  const [submit, setSubmit] = useState(false);
  const [deleteNotification, setDeleteNotification] = useState(false);

  const handleClick = () => {
    setSubmit(true);
  };

  const handleDelete = () => {
    setDeleteNotification(true);
  };

  if (submit) {
    if (deleteNotification) {
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
            <div class='control block'>
              <textarea
                rows='10'
                class='textarea is-large'
                placeholder='Enter Your Message'></textarea>
            </div>
            <button onClick={handleClick} class='button is-large'>
              Send
            </button>
          </form>
        </div>
      );
    }
    return (
      <div class='notification is-success is-light'>
        <button onClick={handleDelete} class='delete'></button>
        Your email has been sent!
      </div>
    );
  }
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
        <div class='control block'>
          <textarea
            rows='10'
            class='textarea is-large'
            placeholder='Enter Your Message'></textarea>
        </div>
        <button onClick={handleClick} class='button is-large'>
          Send
        </button>
      </form>
    </div>
  );
}

export default Contact;
