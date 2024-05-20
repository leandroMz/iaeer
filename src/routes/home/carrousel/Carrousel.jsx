import Styles from './Carrousel.module.css';
import { smoothScrollTo } from '../../../utils/scrollUtils';

export const Carrousel = ({ teamRef }) => {
  const handleScroll = () => {
    smoothScrollTo(teamRef.current, 2000);
  };

  return (
    <div className={Styles.HCarrousel}>
      <div className={Styles.contentCarro}>
        <div className={Styles.contentCarroTitle}>
          <h3>
            Instituto
            <span className={Styles.titleCarro}> de Asma, Alergias y Enfermedades Respiratorias</span>
          </h3>
        </div>
        <p>
          En IAAER Realizamos estudios clínicos fase II, III, IV y estámos capacitados para realizar estudios intervencionales con farmacos y dispositivos innovadores y de farmacocinetica
        </p>
        <button onClick={handleScroll}>Conocer a nuestro Staff</button>
      </div>
    </div>
  )
};
