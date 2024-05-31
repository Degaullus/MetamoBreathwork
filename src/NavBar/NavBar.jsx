import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Coaching">Coaching</Link>
        </li>
        <li>
          <Link to="/Kurse">Kurse</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
        <li>
          <Link to="/Corporate">Corporate</Link>
        </li>
        <li>
          <Link to="/UberMich">Über Mich</Link>
        </li>
        <li>
          <Link to="/Workshops">Workshops</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
