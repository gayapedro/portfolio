import './style.css';
import Project from '../Project';
import LoreIpsum from '../../assets/des1.png';
import CubosFlix from '../../assets/des2.png';
import MarketPlace from '../../assets/des3.png';

function Projects() {
  return (
    <div id='projects' className='projects-container'>
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
        <Project
          title='Cubos Flix'
          date='05/2021'
          image={CubosFlix}
          skills={['html5', 'css3', 'react']}
          description='Desafio 2 de front-end proposto pelo curso de programação integral da
          Cubos Academy. O desafio consistia em replicar a página de uma plataforma de streaming, permitindo buscar, filtrar filmes por categorias e adicionar ao carrinho.'
          repositories={[
            {
              type: 'Front',
              link: 'https://github.com/gayapedro/cubos-flix',
            },
          ]}
          preview='https://gayapedro.github.io/cubos-flix/'
        />
        <Project
          title='Market Place'
          date='06/2021'
          image={MarketPlace}
          skills={['html5', 'css3', 'react', 'nodejs', 'postgresql']}
          description='Desafio 3 de front-end proposto pelo curso de programação integral da
          Cubos Academy. O desafio consistia em replicar uma plataforma de market place que permitisse visualizar produtos cadastrados, editá-los e excluí-los, além de poder alterar as informações do perfil.'
          repositories={[
            {
              type: 'Back',
              link: 'https://github.com/gayapedro/cubos-backdesafio3',
            },
            {
              type: 'Front',
              link: 'https://github.com/gayapedro/cubos-frontdesafio3',
            },
          ]}
          preview='https://cubosdesafio3.netlify.app/'
        />
      </div>
    </div>
  );
}

export default Projects;
