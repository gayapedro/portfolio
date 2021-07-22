import { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contact',
        name,
      }),
    })
      .then(() => alert('Success!'))
      .catch((error) => alert(error));
  };

  return (
    <form name='contact' method='post'>
      <input type='hidden' name='form-name' value='contact' />
      <p>
        <label>
          Your Name:{' '}
          <input
            type='text'
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </p>
      <p>
        <label>
          Your Email:{' '}
          <input
            type='email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </p>
      <p>
        <label>
          Message:{' '}
          <textarea
            name='message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
      </p>
      <p>
        <button type='submit'>Send</button>
      </p>
    </form>
  );
}

export default Contact;
