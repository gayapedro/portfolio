import './style.css';
import Project from '../Project';
import LoreIpsum from '../../assets/des1.png';

function Projects() {
  return (
    <div className='projects-container'>
      <h1>Projetos</h1>
      <div className='projects-list'>
        <Project
          title='Blog Ipsum'
          date='04/2021'
          image={LoreIpsum}
          skills={['html5', 'css3']}
          description='Desafio 1 de front-end proposto pelo curso de programação integral da
          Cubos Academy. O desafio consistia em replicar as páginas de Início,
          Contato e a visualização de uma postagem de um blog.'
          repositories={[
            {
              type: 'Front',
              link: 'https://github.com/gayapedro/cubos-desafio1',
            },
          ]}
          preview='https://gayapedro.github.io/cubos-desafio1/'
        />
      </div>
    </div>
  );
}

export default Projects;
