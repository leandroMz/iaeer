import { Link } from "react-router-dom"
import Styles from './Faqs.module.css';

export const Faqs = () => {
  return (
    <div>
      <div className={Styles.FaqCenter}>

        <div className={Styles.FaqCenterTop}>
          
          <Link to="/">
            <button className={Styles.FaqToTop}>Volver al inicio</button>
          </Link>

          <h2>Preguntas frecuentes de nuestros pacientes</h2>
        </div>

        <div className={Styles.FaqRespSection}>
          <div className={Styles.FaqSection}>
            <h3>1. ¿Cuál es el horario de atención?</h3>
            <p>Nuestro horario de atención es de lunes a viernes de 8:00 am a 6:00 pm y sábados de 9:00 am a 2:00 pm.</p>
          </div>

          <div className={Styles.FaqSection}>
            <h3>2. ¿Cómo puedo agendar una cita?</h3>
            <p>Puedes agendar una cita llamando a nuestro número telefónico o visitando nuestra clínica en persona.</p>
          </div>

          <div className={Styles.FaqSection}>
            <h3>3. ¿Qué tipos de seguro aceptan?</h3>
            <p>Aceptamos una variedad de seguros médicos. Por favor, comunícate con nosotros para verificar si aceptamos tu seguro específico.</p>
          </div>

          <div className={Styles.FaqSection}>
            <h3>4. ¿Cuánto tiempo dura una consulta?</h3>
            <p>El tiempo de consulta puede variar dependiendo del tipo de atención que necesites. Por lo general, una consulta dura entre 30 minutos y 1 hora.</p>
          </div>

          <div className={Styles.FaqSection}>
            <h3>5. ¿Cómo puedo cancelar o reprogramar una cita?</h3>
            <p>Para cancelar o reprogramar una cita, por favor contáctanos con al menos 24 horas de anticipación.</p>
          </div>

          <div className={Styles.FaqSection}>
            <h3>6. ¿Cuáles son los servicios que ofrecen?</h3>
            <p>Ofrecemos una amplia gama de servicios médicos, incluyendo consultas generales, exámenes de laboratorio, vacunaciones y más.</p>
          </div>

          <div className={Styles.FaqSection}>
            <h3>7. ¿Qué debo llevar a mi cita?</h3>
            <p>Por favor, trae contigo tu tarjeta de seguro médico (si aplica), una identificación válida y cualquier documentación relevante de tu historial médico.</p>
          </div>

          <div className={Styles.FaqSection}>
            <h3>8. ¿Ofrecen servicios de emergencia?</h3>
            <p>Sí, ofrecemos servicios de atención médica de emergencia. Por favor, llama al 911 en caso de una emergencia médica grave.</p>
          </div>

          <div className={Styles.FaqSection}>
            <h3>9. ¿Cuál es la especialidad de sus médicos?</h3>
            <p>Nuestros médicos tienen diversas especialidades, incluyendo medicina general, pediatría, ginecología, y más.</p>
          </div>

          <div className={Styles.FaqSection}>
            <h3>10. ¿Puedo hacer preguntas adicionales durante mi consulta?</h3>
            <p>¡Por supuesto! Nuestros médicos están aquí para responder a todas tus preguntas y brindarte la mejor atención posible.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
