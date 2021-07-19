import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInfoCircle,
  faUserGraduate,
  faLaptopCode,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';

function SideBar() {
  return (
    <div className='sidebar'>
      <Link to='about' smooth>
        <FontAwesomeIcon icon={faInfoCircle} size='2x' />
      </Link>
      <Link to='education' smooth>
        <FontAwesomeIcon icon={faUserGraduate} size='2x' />
      </Link>
      <Link to='education' smooth>
        <FontAwesomeIcon icon={faLaptopCode} size='2x' />
      </Link>
      <Link to='education' smooth>
        <FontAwesomeIcon icon={faPaperPlane} size='2x' />
      </Link>
    </div>
  );
}

export default SideBar;
