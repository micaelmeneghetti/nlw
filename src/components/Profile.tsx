import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChellengesContext';
import styles from '../styles/components/Profile.module.css';
import { ChallengeBox } from './ChallengeBox';

export function Profile() {
    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://instagram.fxap1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/144638744_538540753707129_5334403570212728308_n.jpg?_nc_ht=instagram.fxap1-1.fna.fbcdn.net&_nc_ohc=fa5lQNRbijIAX9V1Jgi&tp=1&oh=cd16ed2c9630d9cda821fdfb7b6c3a3b&oe=605EB39C" alt="Micael Meneghetti" />
            <div>
                <strong>Larissa Campagna</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>
            </div>
        </div>
    )
}