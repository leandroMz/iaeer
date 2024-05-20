import Styles from './CardTeam.module.css';

export const CardTeam = ({ member }) => {
    return (
        <div className={Styles.BoxTeam}>
            <img className={Styles.BoxTeamImg} src={member.image} alt={member.name} />

            <div className={Styles.BoxTeamInfo}>
                <div className={Styles.BoxTeamInfoTitles}>
                    <h4>{member.name}</h4>
                    <h5>{member.specialty}</h5>
                </div>
                <p>{member.details}</p>
            </div>
        </div>
    )
}