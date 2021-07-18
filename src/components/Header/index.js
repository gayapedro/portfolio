import './style.css';
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { CircleFlag } from 'react-circle-flags';

function Header() {
  const typedElement = useRef(null);
  const typedInstance = useRef(null);

  const handleLanguage = (language) => {
    console.log(`Language changed to ${language}`);
  };

  useEffect(() => {
    const options = {
      strings: ['Front-end', 'Back-end', 'Full Stack'],
      typeSpeed: 100,
      backSpeed: 90,
      loop: true,
      loopCount: Infinity,
    };
    typedInstance.current = new Typed(typedElement.current, options);

    return () => typedInstance.current.destroy();
  }, []);

  return (
    <div className='header-container'>
      <h1>
        Oi,
        <br />
        eu sou o<br />
        Pedro.
      </h1>
      <div className='typed-container'>
        {'Eu sou um Desenvolvedor'}
        <span className='typed' ref={typedElement}></span>
      </div>
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