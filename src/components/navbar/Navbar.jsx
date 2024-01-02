import { Link } from 'react-router-dom';
import './navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Sidebar */}
      <div className="wrapper">
        <span>shubham@dev.</span>
        <div className="social">
          <Link to="/">
            <img src="facebook.png" alt="" />
          </Link>
          <Link to="/">
            <img src="instagram.png" alt="" />
          </Link>
          <Link to="/">
            <img src="youtube.png" alt="" />
          </Link>
          <Link to="/">
            <img src="dribbble.png" alt="" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
