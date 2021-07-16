import './style.css';
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import BrazilFlag from '../../assets/flag-br.svg';
import USFlag from '../../assets/flag-us.svg';

function Header() {
  const typedElement = useRef(null);
  const typedInstance = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        'Eu sou um Desenvolvedor Front-end',
        'Eu sou um Desenvolvedor Back-end',
        'Eu sou um Desenvolvedor Full Stack',
      ],
      smartBackspace: true,
      typeSpeed: 50,
      backSpeed: 25,
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
      <span className='typed' ref={typedElement}></span>
      <div className='languages'></div>
    </div>
  );
}

export default Header;
