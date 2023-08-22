import { useEffect, useState } from 'react';
import './Nav.css';

function Nav() {
  const [show, handlShow] = useState(false);

  const TransitionNavBar = () => {
    if (window.scrollY > 100) {
      handlShow(true);
    } else {
      handlShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', TransitionNavBar);
    return () => window.removeEventListener('scroll', TransitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <div className="nav__contents">
        <img
          className="nav__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="logo"
        />

        <img
          className="nav__avatar"
          src="https://cdn3.iconfinder.com/data/icons/essential-rounded/64/Rounded-31-512.png"
          alt="avatar"
        />
      </div>
    </div>
  );
}

export default Nav;
