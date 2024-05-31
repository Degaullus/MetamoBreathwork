import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <h3 className={styles.metamo}>Metamo BreathWork</h3>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/UberMich">Über Mich</Link>
        </li>
        <li>
          <Link to="/Kurse">Kurse</Link>
        </li>
        <li>
          <Link to="/Coaching">Coaching</Link>
        </li>
        <li>
          <Link to="/Workshops">Workshops</Link>
        </li>
        <li>
          <Link to="/Corporate">Corporate</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
