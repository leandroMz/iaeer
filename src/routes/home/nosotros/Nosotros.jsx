import Styles from './Nosotros.module.css';

export const Nosotros = () => {
  const handleOpenLink = (url) => {
    window.open(url, '_blank');
  };
  return (
    <div className={Styles.footAbaoutUs}>
      <div className={Styles.footAbaoutUsInfo}>
        <h3>Nosotros</h3>
        <h4>
          Como equipo de IAAER Buscamos brindar una atención especializada y
          compasiva para mejorar la calidad de vida
          de nuestros pacientes con afecciones
          respiratorias y alergias, a través de un
          equipo de profesionales con
          especialidades afines para lograr un
          abordaje multidisciplinario.
        </h4>
        <p>
          Nuestro Área de Investigación opera bajo el estricto cumplimiento de las regulaciones locales e internacionales y normas internas, asegurando la obtención de datos con una calidad que cumple con estándares internacionales.
        </p>
        <div className={Styles.footAbaoutUsButton}>
          <button onClick={() => handleOpenLink("https://www.iaaerreservas.com.ar/")}>Solicitar Turno</button>
        </div>
      </div>
      <div className={Styles.footAbaoutUsImg}>
        <img src="./fondo1.jpg" alt="" />
      </div>
    </div>
  )
}