import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Bonjour, je suis <span className={styles.highlight}>Bessa Rachid</span></h1>
          <h2>Développeur Web Full-Stack</h2>
          <p>Je conçois et développe des applications web modernes, performantes et élégantes avec React, Next.js et Node.js.</p>
          <div className={styles.cta}>
            <Link href="/projects" className={styles.primaryBtn}>Voir mes projets</Link>
            <Link href="/contact" className={styles.secondaryBtn}>Me contacter</Link>
          </div>
        </div>
        <div className={styles.heroImage}>
          <Image
            src="/images/avatar.jpg"
            alt="Bessa Rachid - Développeur Web"
            width={400}
            height={400}
            priority
            className={styles.profileImg}
          />
        </div>
      </section>

      <section className={styles.skills}>
        <h2>Mes Compétences</h2>
        <div className={styles.skillsGrid}>
          {['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS', 'MongoDB'].map((skill) => (
            <div key={skill} className={styles.skillCard}>{skill}</div>
          ))}
        </div>
      </section>
    </div>
  );
}