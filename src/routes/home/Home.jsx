import { useRef } from 'react';
import Styles from './Home.module.css';
import { Carrousel } from './carrousel/Carrousel';
import { Detalles } from './detalles/Detalles';
import { Team } from './equipo/Team';
import { Nosotros } from './nosotros/Nosotros';
import { Servicios } from './servicios/Servicios';

export const Home = () => {
  const teamRef = useRef(null);

  return (
    <div className={Styles.homeBox}>
      <Carrousel teamRef={teamRef} />
      <div id="servicios">
        <Servicios />
      </div>
      <Detalles />
      <div ref={teamRef} id="profesionales">
        <Team />
      </div>
      {/* <Enfermedades/> */}
      <Nosotros />
    </div>
  );
};
