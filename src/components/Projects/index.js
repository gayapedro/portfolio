import './style.css';
import LoreIpsum from '../../assets/des1.png';

function Projects() {
  return (
    <div className='projects-container'>
      <h1>Projetos</h1>
      <div className='projects-list'>
        <div className='project'>
          <h3>Blog Ipsum</h3>
          <p>04/2021</p>
          <div className='project-card'>
            <img src={LoreIpsum} alt='Desafio 1' />
            <div className='skills-project'>
              <p>html5</p>
              <p>css3</p>
            </div>
          </div>
          <div className='project-text'>
            <p>
              Desafio 1 de front-end proposto pelo curso de programação integral
              da Cubos Academy. O desafio consistia em replicar as páginas de
              Início, Contato e a visualização de uma postagem de um blog.
            </p>
            <div className='project-repositories'>
              <p>Repositório:</p>
              <a
                target='_blank'
                href='https://github.com/gayapedro/cubos-desafio1'
                rel='noreferrer'
              >
                Front
              </a>
            </div>
            <a
              target='_blank'
              href='https://gayapedro.github.io/cubos-desafio1/'
              rel='noreferrer'
            >
              Preview
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
