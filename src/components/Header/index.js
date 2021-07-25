import './style.css';
import TypeIt from 'typeit-react';
import { CircleFlag } from 'react-circle-flags';

function Header() {
  const handleLanguage = (language) => {
    console.log(`Language changed to ${language}`);
  };

  return (
    <div className='header-container'>
      <h1>
        Oi,
        <br />
        eu sou o<br />
        Pedro.
      </h1>
      <TypeIt
        element={'p'}
        getBeforeInit={(instance) => {
          instance
            .type('Eu sou um Desenvolvedor Front-End')
            .pause(750)
            .delete(9)
            .pause(500)
            .type('Back-end')
            .pause(750)
            .delete(8)
            .pause(500)
            .type('Full Stack')
            .pause(1500);

          return instance;
        }}
        options={{
          speed: 100,
          loop: true,
        }}
      />
      <div className='languages'>
        <CircleFlag
          onClick={() => handleLanguage('br')}
          countryCode='br'
          height='35'
        />
        <CircleFlag
          onClick={() => handleLanguage('us')}
          countryCode='us'
          height='35'
        />
      </div>
    </div>
  );
}

export default Header;
