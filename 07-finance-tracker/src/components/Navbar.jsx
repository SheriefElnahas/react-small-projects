import './Navbar.css';
function Navbar() {
  return (
    <nav className="nav">
      <div className="container">
        <h1 className="nav__logo">myMoney</h1>
        <ul className="nav__list">
          <li className="nav__item">
            <a className="nav__link" href="#">
              Login
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="#">
              Signup
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
