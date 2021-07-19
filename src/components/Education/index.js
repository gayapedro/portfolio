import './style.css';
import unifacs from '../../assets/unifacs.jpeg';
import cubos from '../../assets/cubos.jpeg';

function Education() {
  return (
    <div id='education' className='education-container'>
      <h1>Formação</h1>
      <div className='education-items'>
        <div className='education-entry'>
          <img src={unifacs} alt='Unifacs' />
          <div className='entry-info'>
            <h3>Engenharia de Computação</h3>
            <p>Unifacs - Universidade Salvador</p>
            <p>07/2016 - 12/2021</p>
          </div>
        </div>
        <div className='education-entry'>
          <img src={cubos} alt='Cubos Academy' />
          <div className='entry-info'>
            <h3>Desenvolvimento Web Full Stack</h3>
            <p>Cubos Academy</p>
            <p>03/2021 - 08/2021</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
