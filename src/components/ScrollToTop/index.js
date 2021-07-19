import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { animateScroll } from 'react-scroll';

function ScrollToTop() {
  return (
    <div className='scroll-top'>
      <FontAwesomeIcon
        onClick={() => animateScroll.scrollToTop({ smooth: true })}
        icon={faArrowUp}
        size='2x'
      />
    </div>
  );
}

export default ScrollToTop;
