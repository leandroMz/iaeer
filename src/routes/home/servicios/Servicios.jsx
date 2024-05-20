import { IoIosArrowDown } from "react-icons/io";
import Styles from './Servicios.module.css';

export const Servicios = () => {
  return (

    <div className={Styles.boxServices}>
      <IoIosArrowDown className={Styles.arrowServices} id="servicios"/>
      <h3 className={Styles.boxServicesTitle}>
        Servicios <span className={Styles.titleServ}> en Adultos y Niños
        </span>
      </h3>
      <div>
        <ul className={Styles.boxServicesList}>
          <li>
            Diagnostico <br /> alergologico
          </li>
          <li>
            Diagnostico<br /> funcional
          </li>
          <li>
            Videorino<br /> fibroscopia
          </li>
          <li>
            Rino<br /> manometría
          </li>
        </ul>
      </div>

    </div>
  )
}