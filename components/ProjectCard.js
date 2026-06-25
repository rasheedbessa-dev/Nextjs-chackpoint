import Image from 'next/image';
import styles from '../styles/ProjectCard.module.css';

export default function ProjectCard({ title, description, image, tags, link }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={image}
          alt={title}
          width={400}
          height={250}
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className={styles.tags}>
          {tags.map((tag, index) => (
            <span key={index} className={styles.tag}>{tag}</span>
          ))}
        </div>
        <a href={link} className={styles.link} target="_blank" rel="noopener noreferrer">
          Voir le projet →
        </a>
      </div>
    </div>
  );
}