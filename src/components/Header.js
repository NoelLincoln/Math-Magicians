import { NavLink } from 'react-router-dom';
import styles from '../styles/header.css';

const Header = () => (
  <>
    <nav className={styles.nav}>
      <h1>Math Magicians</h1>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/calculator">Calculator</NavLink>
        </li>
        <li>
          <NavLink to="/quotes">Quotes</NavLink>
        </li>
      </ul>
    </nav>
  </>
);

export default Header;
