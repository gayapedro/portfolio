import './style.css';

function Project({
  title,
  date,
  image,
  skills,
  description,
  repositories,
  preview,
}) {
  return (
    <div className='project'>
      <h3>{title}</h3>
      <p>{date}</p>
      <div className='project-card'>
        <img src={image} alt='Preview' />
        <div className='skills-project'>
          {skills.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </div>
      <div className='project-text'>
        <p>{description}</p>
        <div className='project-repositories'>
          <p>{repositories.length > 1 ? 'Repositórios:' : 'Repositório:'}</p>
          {repositories.map((item) => (
            <a target='_blank' href={item.link} rel='noreferrer'>
              {item.type}
            </a>
          ))}
        </div>
        <a target='_blank' href={preview} rel='noreferrer'>
          Preview
        </a>
      </div>
    </div>
  );
}

export default Project;
