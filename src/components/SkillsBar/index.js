import './style.css';
import React from 'react';
import ReactTooltip from 'react-tooltip';
import html5 from '../../assets/html5-plain.svg';
import css3 from '../../assets/css3-plain.svg';
import react from '../../assets/react-original.svg';
import nodejs from '../../assets/nodejs-original.svg';
import postgresql from '../../assets/postgresql-plain.svg';

function SkillsBar({ skills }) {
  let key = 0;
  const skillsInfo = {
    html5: {
      name: 'HTML5',
      image: html5,
    },
    css3: {
      name: 'CSS3',
      image: css3,
    },
    react: {
      name: 'React',
      image: react,
    },
    nodejs: {
      name: 'NodeJS',
      image: nodejs,
    },
    postgresql: {
      name: 'PostgreSQL',
      image: postgresql,
    },
  };

  return (
    <div className='skills-container'>
      {skills.map((item) => {
        return (
          <React.Fragment key={key++}>
            <img
              data-tip
              data-for={item}
              src={skillsInfo[item].image}
              alt={item}
            />
            <ReactTooltip id={item} place='top' type='dark' effect='float'>
              {skillsInfo[item].name}
            </ReactTooltip>
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default SkillsBar;
