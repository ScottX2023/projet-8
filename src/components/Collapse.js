import arrow from '../assets/arrow.png';
import { useState } from 'react';
import '../sass/modules/collapse.scss';

function Collapse({ title, content }) {
  // activation du toggle en fonction de son état 
  const [toggle, setToggle] = useState(false);

  const toggleCollapse = () => {
    setToggle(!toggle);
  };

  return (
    <div className="collapse">
      <h3 className="collapse_title" onClick={toggleCollapse}>
        {title}
        <img
          className="arrow"
          src={arrow}
          alt="show content"
          style={{ transform: toggle ? 'rotate(180deg)' : 'rotate(0deg)' }}
        />
      </h3>
      <div className={`collapse_content ${toggle ? '' : 'collapse_content_hidden'}`}>
        {Array.isArray(content) ? (
          <ul className='collapse_content_ul'>
            {content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          content
        )}
      </div>
    </div>
  );
}

export default Collapse;
