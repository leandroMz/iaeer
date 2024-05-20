import Styles from './Footer.module.css';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className={Styles.footerBox} id="contacto">
      <div className={Styles.leftSection}>
        <div className={Styles.navbarFoot}>
          <div className={Styles.navLeft}>
            <a href="#">Inicio</a>
            <a href="#">Servicios</a>
            <a href="#">Profesionales</a>
          </div>
          <div className={Styles.navRight}>
            <a href="#">Nosotros</a>
            <a href="#">Solicitar turno</a>
            <a href="#">Centro de investigación</a>
          </div>
        </div>
        <div className={Styles.contact}>
          <h4>Contactate con nosotros</h4>
          <p>Teléfono: 123456789</p>
          <p>Email: info@example.com</p>
        </div>
        <div className={Styles.SocialFoot}>
          <h4>Redes Sociales</h4>
        <ul className={Styles.SocialFootList}>
        
          <li><FaFacebook /></li>
          <li><FaInstagram /></li>
          <li><FaTwitter /></li>
        </ul>
        </div>
      </div>
      <div className={Styles.rightSection}>
        <h4>Donde Estamos</h4>
        <div className={Styles.mapFoot}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3540.0178895114327!2d-58.82884982338707!3d-27.468702416665845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94456b5e52cff24b%3A0x5b037cb364347fe4!2sJunin%201922%2C%20W3400AWO%20Corrientes!5e0!3m2!1ses-419!2sar!4v1713706307892!5m2!1ses-419!2sar"
            width="400"
            height="200"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
          ></iframe> </div>
        <div className={Styles.location}>
          <h4>Junin 1922 - CP 3400</h4>
          <h4>Corrientes, Capital</h4>
        </div>
      </div>
    </div>
  );
};
