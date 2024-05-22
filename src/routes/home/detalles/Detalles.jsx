import Styles from './Detalles.module.css';

export const Detalles = () => {
  return (
    <div className={Styles.boxDetail}>

      <div className={Styles.containerDetail}>
          <ul>
            <li>
              <img src="./first.webp" alt="Imagen referencia" className={Styles.image} />
            </li>
            <li className={Styles.imageMobile}>
              <img src="secon.jpg" alt="Otra imagen referencia" className={Styles.image} />
            </li>
          </ul>
      </div>
    </div>
  )
}