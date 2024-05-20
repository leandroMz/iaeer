// Team.jsx
import Styles from './Team.module.css';
import { CardTeam } from './CardTeam';
import teamData from '../../../mockProf';

export const Team = () => {
  return (
    <div className={Styles.BoxTeamGral} id="profesionales">
      <h3 className={Styles.TeamTitle}>Conocé a Nuestro Equipo</h3>
      <h4 className={Styles.TeamsubTitle}>Equipo de profesionales que conforman IAAER</h4>
      <div className={Styles.TeamContainer}>
        {teamData.map((member) => (
          <CardTeam key={member.id} member={member} />
        ))}
      </div>
    </div>
  )
}
