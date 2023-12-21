import './Info.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Info({ img, name, titan }) {
  return (
    <div className="info">
      <img src={img} alt="eren yeager from attack on titan" />
      <h1 className="info-name"> {name} </h1>
      <p className="info-titan">{titan}</p>
      <button className="info-btn">
        {' '}
        <FontAwesomeIcon className="icon" icon={faEnvelope} />
        Email
      </button>
    </div>
  );
}

export default Info;
