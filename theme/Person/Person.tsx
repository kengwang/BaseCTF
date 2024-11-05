import styles from './Person.module.scss';

interface PersonProps {
    name: string;
    avatar: string;
    link: string;
    description: string;
    job: string;
}

export const Person: React.FC<PersonProps> = ({ name, avatar, link, description, job }) => {
    return (
        <a target="_blank" href={link} className={styles.item} title={name}>
            <div className={styles.image} style={{ backgroundImage: `url(${avatar})` }}></div>
                <div className={styles.info}>
                <a target="_blank" href={link} className={styles.title} >{name}</a>
                <p className={styles.job}>{ job }</p>
                <p className={styles.desc}>{ description }</p>
            </div>
        </a>
    );
};