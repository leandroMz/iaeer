import Styles from './Enfermedades.module.css';

export const Enfermedades = () => {
  return (
    <div className={Styles.EnfermedadesContainer}>
      <div className={Styles.LeftQuadrant}>
        <div className={Styles.LeftQuadrantOne}>
          <h4>Condiciones Respiratorias y Alergias</h4>
          <h5>Las condiciones respiratorias y alergias pueden afectar la calidad de vida de las personas, causando síntomas como tos, dificultad para respirar y congestión nasal.</h5>
          <h6>Las alergias pueden ser desencadenadas por diversos factores, como el polen, los ácaros del polvo, los alimentos y los alérgenos ambientales. Las condiciones respiratorias incluyen asma, rinitis alérgica y enfermedad pulmonar obstructiva crónica (EPOC), entre otras.</h6>
          <p>Consejos: Mantener un ambiente limpio en el hogar, evitar el contacto con alérgenos conocidos, seguir el tratamiento médico recetado y llevar un estilo de vida saludable pueden ayudar a controlar los síntomas y reducir las exacerbaciones.</p>
        </div>
        <div className={Styles.LeftQuadrantTwo}>
          <h4>Descripción de alergias comunes (polen, ácaros, alimentos, etc.).</h4>
          <h5>Las alergias a sustancias como el polen, los ácaros del polvo, los alimentos y otros alérgenos son comunes y pueden desencadenar síntomas respiratorios y cutáneos.</h5>
          <h6>Identificar los alérgenos específicos mediante pruebas de alergia puede ayudar a evitar la exposición y controlar los síntomas. El tratamiento puede incluir medicamentos antihistamínicos, corticosteroides nasales y terapia de inmunoterapia.</h6>
          <p> Utilizar fundas de colchón y almohadas antialérgicas, mantener una buena higiene del hogar, evitar los alérgenos conocidos y llevar una dieta equilibrada pueden ayudar a reducir las reacciones alérgicas.</p>
        </div>
      </div>
      <div className={Styles.RightQuadrantContainer}>
        <div className={Styles.RightQuadrantOne}>
          <h4>Síntomas y tratamientos para asma.</h4>
          <h5>El asma es una enfermedad crónica que causa inflamación y estrechamiento de las vías respiratorias, lo que conduce a síntomas como sibilancias, tos y opresión en el pecho.</h5>
          <h6>El tratamiento del asma incluye medicamentos de rescate para aliviar los síntomas agudos y medicamentos de control para prevenir las exacerbaciones. También se enfoca en identificar y evitar los desencadenantes del asma.</h6>
          <p>Mantener un plan de acción para el asma, evitar el humo de tabaco y otros irritantes ambientales, mantenerse activo físicamente y seguir las recomendaciones del médico pueden ayudar a controlar el asma y mejorar la calidad de vida.</p>
        </div>
        <div className={Styles.RightQuadrantTwo}>
          <h4>Datos sobre enfermedades respiratorias crónicas.</h4>
          <h5>Las enfermedades respiratorias crónicas, como la EPOC y la fibrosis pulmonar, son afecciones graves que afectan la función pulmonar y la capacidad para respirar.</h5>
          <h6>Estas enfermedades pueden ser causadas por factores como el tabaquismo, la exposición a sustancias tóxicas y la predisposición genética. El tratamiento se centra en aliviar los síntomas, mejorar la función pulmonar y prevenir complicaciones.</h6>
          <p>Dejar de fumar y evitar la exposición al humo y a otros irritantes respiratorios, participar en programas de rehabilitación pulmonar, y seguir un plan de tratamiento supervisado por un médico son fundamentales para manejar las enfermedades respiratorias crónicas.</p>
        </div>
      </div>
    </div>
  );
};
