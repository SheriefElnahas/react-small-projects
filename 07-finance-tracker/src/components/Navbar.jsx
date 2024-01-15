import { NavLink } from 'react-router-dom';

import './Navbar.css';
function Navbar() {
  return (
    <nav className="nav">
      <div className="container">
        <NavLink to="/" >
        <h1 className="nav__logo">myMoney</h1>
        </NavLink>

        <ul className="nav__list">
          <li className="nav__item">
            <NavLink to="login" className="nav__link">Login</NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="signup" className="nav__link">Signup</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
