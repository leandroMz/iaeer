// src/components/navBar/NavBar.jsx
import { Link, useNavigate } from "react-router-dom";
import Styles from './NavBar.module.css';
import { smoothScrollTo } from '../utils/scrollUtils';

export const NavBar = () => {
  const navigate = useNavigate();

  const handleNavigation = (path, refId) => {
    navigate(path);
    setTimeout(() => {
      const target = document.getElementById(refId);
      if (target) {
        smoothScrollTo(target, 2000);
      }
    }, 100);
  };

  return (
    <>
      <nav className={Styles.NavBaar}>
        <div className={Styles.NavBaarLogo}>
          <Link to="/">
            <img src="./logotype.png" alt="" />
          </Link>
        </div>
        <div>
          <ul className={Styles.itemNavBaar}>
            <li>
              <Link to="/" onClick={() => handleNavigation('/', 'servicios')}>Servicios</Link>
            </li>
            <li>
              <Link to="/" onClick={() => handleNavigation('/', 'profesionales')}>Profesionales</Link>
            </li>
            <li>
              <Link to="/centro_de_investigacion">Centro de investigación</Link>
            </li>
            <li>
              <Link to="/preguntas_frecuentes">Preguntas frecuentes</Link>
            </li>
            <li>
              <Link to="/" onClick={() => handleNavigation('/', 'contacto')}>Contacto</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
