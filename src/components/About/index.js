import './style.css';
import profilePic from '../../assets/profilepic.JPG';

function About() {
  return (
    <div id='about' className='about-container'>
      <h1>Sobre mim</h1>
      <div className='about-info'>
        <img src={profilePic} alt='foto de perfil' />
        <div className='about-texts'>
          <p>
            Natural de São Paulo - SP, moro em Salvador - BA desde os 2 anos. Um
            amante da leitura, apaixonado pelo universo de Harry Potter desde
            criança. Tenho uma pet chamada Arya (o que entrega meu vício em
            séries).
          </p>
          <p>
            Sempre curioso, estou em constante busca de novos conhecimentos.
            Além de programação, me interesso muito em aprender mais sobre
            culinária e astrofísica.
          </p>
          <p>
            Possuo experiência no desenvolvimento de aplicações front-end
            utilizando HTML5, CSS3 e ReactJS e no desenvolvimento de aplicações
            back-end utilizando NodeJS, ExpressJS e PostgreSQL.
          </p>
        </div>
        <button onClick={() => window.open('https://checkout.cubos.academy/checkout?course=dfs', '_parent')}>link</button>
      </div>
    </div>
  );
}

export default About;
