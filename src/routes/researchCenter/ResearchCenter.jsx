import { useEffect, useState } from 'react';
import Styles from './ResearchCenter.module.css';
import videoPlaceholder from '/video.mp4';
import { Link } from "react-router-dom"
import { Preloader } from './Preloader';

export const ResearchCenter = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setVideoLoaded(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div className={Styles.researchCenter}>
        <div className={Styles.researchCenterTop}>
          <Link to="/">
            <button className={Styles.backToTop}>Volver al inicio</button>
          </Link>

          <h2>Centro de Investigación de IAAER</h2>
        </div>
        <div className={Styles.fullWidthVideoContainer}>
          {!videoLoaded && <Preloader />}
          <video
            className={Styles.fullWidthVideo}
            autoPlay
            loop
            onLoadedData={handleVideoLoad}
            style={{ display: videoLoaded ? 'block' : 'none' }}
          >
            <source src={videoPlaceholder} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* <img className={Styles.fullWidthImage} src={placeholderImage} alt="Research Center" /> */}

        <section className={Styles.sectionCenter}>
          <h2>En que estamos trabajando</h2>
          <h4>Actualmente en el centro nos encontramos trabajando en el area de......</h4>
          <div className={Styles.projectGrid}>
            <div className={Styles.projectCard}>
              <img src="./inves1.webp" alt="Latest Research Project" />
              <div className={Styles.cardContent}>
                <h3>Título de la investigación</h3>
                <p>Descripción corta de la investigación.</p>
                <p>Detalles adicionales o información relevante.</p>
              </div>
            </div>
            <div className={Styles.projectCard}>
              <img src="./inves2.webp" alt="Latest Research Project" />
              <div className={Styles.cardContent}>
                <h3>Título de la investigación</h3>
                <p>Descripción corta de la investigación.</p>
                <p>Detalles adicionales o información relevante.</p>
              </div>
            </div>
            <div className={Styles.projectCard}>
              <img src="./inves3.webp" alt="Latest Research Project" />
              <div className={Styles.cardContent}>
                <h3>Título de la investigación</h3>
                <p>Descripción corta de la investigación.</p>
                <p>Detalles adicionales o información relevante.</p>
              </div>
            </div>
          </div>
        </section>
        <div className={Styles.projectTextCenter}>
          <section id="researchSection" className={Styles.sectionCenter2}>
            <h2>Acerca del centro de Investigación</h2>
            <p>
              En el Instituto de Asma, Alergias y Enfermedades Respiratorias (IAAER), estamos comprometidos con la investigación y el tratamiento de las enfermedades respiratorias y alérgicas. Contamos con un sector de control de calidad que elabora y mantiene actualizados los procedimientos estandarizados del centro, implementa sistemas de control, verifica los datos (Monitoreo Interno), revisa y prepara los documentos regulatorios y es el encargado del entrenamiento interno. Asimismo, IAAER ha sido avalado por auditorías de diferentes patrocinantes e inspecciones de la agencia regulatoria. Nuestro objetivo es investigar nuevas formas de entender, prevenir y tratar estas condiciones, para mejorar la calidad de vida de nuestros pacientes.
            </p>
          </section>
          <section id="professionalSection" className={Styles.sectionCenter3}>
            <h2>Nuestro comité de excelencia</h2>
            <p>
              En el IAAER, nos enorgullece contar con un equipo de excelentes profesionales del sector médico y científico. Nuestros investigadores, médicos y especialistas están dedicados a avanzar en el campo de las enfermedades respiratorias y alérgicas. Buscamos constantemente nuevas formas de abordar estos desafíos de salud, colaborando estrechamente con instituciones académicas y organizaciones médicas para ofrecer tratamientos innovadores y mejorar la atención médica. El Área de Investigación trabaja bajo el estricto cumplimiento de las regulaciones locales e internacionales y normas internas, lo que asegura la obtención de los más altos estándares de calidad en nuestra labor.
            </p>
          </section>
        </div>
      </div>
      <div className={Styles.imgFootCenter}>
        <img className={Styles.fullHeightImage} src="./inves4.webp" alt="Video Placeholder" />
      </div>
    </div>
  );
};