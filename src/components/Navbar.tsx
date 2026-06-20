import { NavLink } from 'react-router-dom';
import { IconCode } from './icons';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.inner}>
        <NavLink to="/" className={styles.brand}>
          <IconCode size={20} />
          <span>Omar Hernandez</span>
        </NavLink>
      </div>
    </nav>
  );
}
