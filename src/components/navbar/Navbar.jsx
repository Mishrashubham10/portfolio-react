import { Link } from 'react-router-dom';
import './navbar.scss';
import { motion } from 'framer-motion';
import Sidebar from '../sidebar/Sidebar';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          shubham@dev.
        </motion.span>
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