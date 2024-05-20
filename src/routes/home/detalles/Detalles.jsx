import Styles from './Detalles.module.css';

export const Detalles = () => {
  return (
    <div className={Styles.boxDetail}>

      <div className={Styles.containerDetail}>
        <div className={Styles.quadrant}>
          <img src="./first.webp" alt="Imagen referencia" className={Styles.image} />
        </div>
        <div className={`${Styles.quadrant} ${Styles.qdrantStyl1}`}>
          {/* <h2>¿Qué hacemos en el Instituto?</h2>
          <ul className={Styles.quadrantOneUl}>
            <li>- Cubrimos toda la gama de afecciones respiratorias, entre las que se encuentran el asma, afecciones alérgicas y enfermedad pulmonar obstructiva crónica (EPOC), así como los procesos inflamatorios de vías aéreas superiores: Rinitis, Rino-sinusitis, Poliposis Nasal, Sinusitis</li>
            <li>- Contamos con un area de investigacion y desarrollo...</li>
          </ul> */}
        </div>
        <div className={`${Styles.quadrant} ${Styles.qdrantStyl2}`}>
          {/* <h2>Algunas de las enfermedades que tratamos</h2>
          <div className={Styles.quadrantOneU2}>
            <ul>
              <h4>Enfermedades respiratorias</h4>
              <div className={Styles.quadrantList2}>
                <li>- Diagnostico y tratamiento de asma</li>
                <li>- Manejo de enfermedades obtructivas</li>
                <li>- Rinitis y rinosinusitis</li>
                <li>- Evaluacion de enfermedades pulmonares cronicas</li>
              </div>
            </ul>
            <ul>
              <h4>Enfermedades cutaneas</h4>
              <div className={Styles.quadrantList2}>
                <li>- Dermatitis atópica</li>
                <li>- Urticaria</li>
                <li>- Otras.</li>
              </div>
            </ul>
          </div> */}
        </div>
        <div className={Styles.quadrant}>
          <img src="secon.jpg" alt="Otra imagen referencia" className={Styles.image} />
        </div>
      </div>

    </div>
  )
}