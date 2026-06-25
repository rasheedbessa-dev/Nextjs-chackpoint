import Image from 'next/image';
import styles from '../styles/About.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <h1>À propos de <span className={styles.highlight}>moi</span></h1>
      
      <div className={styles.aboutGrid}>
        <div className={styles.imageSection}>
          <Image
            src="/images/avatar.jpg"
            alt="Bessa Rachid"
            width={350}
            height={450}
            className={styles.aboutImage}
          />
        </div>
        
        <div className={styles.contentSection}>
          <h2>Qui suis-je ?</h2>
          <p>
            Je suis <strong>Bessa Rachid</strong>, développeur web passionné avec plusieurs années d'expérience 
            dans la création d'applications web modernes. Mon expertise couvre l'ensemble du cycle de développement, 
            du front-end au back-end.
          </p>
          <p>
            J'aime relever des défis techniques et transformer des idées en solutions digitales concrètes. 
            Mon approche combine rigueur technique et créativité pour livrer des produits de qualité.
          </p>
          
          <h3>Mon parcours</h3>
          <ul className={styles.timeline}>
            <li>
              <span className={styles.year}>2025 - Présent</span>
              <span className={styles.role}>Développeur Web Full-Stack</span>
            </li>
            <li>
              <span className={styles.year}>2021 - 2025</span>
              <span className={styles.role}>Développeur Front-End</span>
            </li>
            <li>
              <span className={styles.year}>2020 - 2021</span>
              <span className={styles.role}>Développeur Web Junior</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}