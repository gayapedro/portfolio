import './style.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import ReactTooltip from 'react-tooltip';

function Project({
  title,
  date,
  image,
  skills,
  description,
  repositories,
  preview,
}) {
  const [hover, setHover] = useState(false);
  return (
    <div className='project'>
      <h3>{title}</h3>

      <p>{date}</p>
      <div className='project-card'>
        <div className='image'>
          <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className='overlay'
          >
            <a target='_blank' rel='noreferrer' href={preview}>
              {hover && (
                <>
                  <FontAwesomeIcon
                    data-tip
                    data-for='preview'
                    size='3x'
                    color='white'
                    icon={faEye}
                  />
                  <ReactTooltip
                    id='preview'
                    place='top'
                    type='dark'
                    effect='float'
                  >
                    Abrir preview
                  </ReactTooltip>
                </>
              )}
            </a>
          </div>
          <img src={image} alt='Preview' />
        </div>
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
          <div className='repositories'>
            {repositories.map((item) => (
              <a
                key={item.link}
                href={item.link}
                target='_blank'
                rel='noreferrer'
              >
                {item.type}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
