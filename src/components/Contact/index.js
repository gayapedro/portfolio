import './style.css';
import { useState } from 'react';
import ReactTooltip from 'react-tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import github from '../../assets/github-original.svg';
import linkedin from '../../assets/linkedin.svg';

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
        email,
        message,
      }),
    })
      .then(() => alert('Success!'))
      .catch((error) => alert(error));
  };

  return (
    <div id='contact' className='contact-container'>
      <h1>Contato</h1>
      <form name='contact' onSubmit={(e) => handleSubmit(e)}>
        <input type='hidden' name='form-name' value='contact' />
        <div className='line-form'>
          <div className='input-field'>
            <label htmlFor='name'>Nome</label>
            <input
              required
              onChange={(e) => setName(e.target.value)}
              type='text'
              name='name'
              id='name'
            />
          </div>
          <div className='input-field'>
            <label htmlFor='email'>E-mail</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              required
              type='email'
              name='email'
              id='email'
            />
          </div>
        </div>
        <div className='line-form'>
          <div className='input-field'>
            <label htmlFor='message'>Mensagem</label>
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              required
              name='message'
              id='message'
              cols='30'
              rows='10'
            />
          </div>
        </div>
        <button type='submit'>Enviar</button>
      </form>
      <div className='contact-buttons'>
        <a href='http://gayapedro.dev.br/gh' target='_blank' rel='noreferrer'>
          <img data-tip data-for='gh' src={github} alt='github' />
        </a>
        <a
          href='http://gayapedro.dev.br/linkedin'
          target='_blank'
          rel='noreferrer'
        >
          <img data-tip data-for='linkedin' src={linkedin} alt='linkedin' />
        </a>

        <a href='mailto:pedrogaya@gmail.com?subject=Contato%20Portfólio'>
          <FontAwesomeIcon
            data-tip
            data-for='email'
            color='white'
            icon={faEnvelope}
            size='3x'
          />
        </a>
      </div>
      <ReactTooltip id='gh' place='top' type='dark' effect='float'>
        gayapedro
      </ReactTooltip>
      <ReactTooltip id='linkedin' place='top' type='dark' effect='float'>
        pedrogaya
      </ReactTooltip>
      <ReactTooltip id='email' place='top' type='dark' effect='float'>
        pedrogaya@gmail.com
      </ReactTooltip>
    </div>
  );
}

export default Contact;
