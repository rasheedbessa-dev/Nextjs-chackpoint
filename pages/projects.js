import ProjectCard from '../components/ProjectCard';
import styles from '../styles/Projects.module.css';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Plateforme e-commerce complète avec panier, paiement Stripe et dashboard admin.',
    image: 'https://kimi-web-img.moonshot.cn/img/mir-s3-cdn-cf.behance.net/1947fcea3b79b282e67ac3f37963d5027cb8fc8b.png',
    tags: ['Next.js', 'Stripe', 'Prisma', 'PostgreSQL'],
    link: 'https://github.com'
  },
  {
    id: 2,
    title: 'Task Manager App',
    description: 'Application de gestion de tâches collaborative avec temps réel via WebSocket.',
    image: 'https://kimi-web-img.moonshot.cn/img/cdn.dribbble.com/ec44682a71cea5a604687867114a1ddebfc20913.png',
    tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    link: 'https://github.com'
  },
  {
    id: 3,
    title: 'Portfolio Dashboard',
    description: 'Dashboard analytique pour suivre les performances d\'investissements.',
    image: 'https://kimi-web-img.moonshot.cn/img/cdn.dribbble.com/4600537b4bb2b3bd6daa6ed3237c0ad7087dc880.jpeg',
    tags: ['Next.js', 'D3.js', 'Python', 'FastAPI'],
    link: 'https://github.com'
  },
  {
    id: 4,
    title: 'Blog CMS',
    description: 'Système de gestion de contenu avec éditeur Markdown et SEO optimisé.',
    image: 'https://kimi-web-img.moonshot.cn/img/flatlogic.com/3c480d7e0d471fbc593b1a37f66d48b3b0cd6995.png',
    tags: ['Next.js', 'MDX', 'Tailwind', 'Vercel'],
    link: 'https://github.com'
  }
];

export default function Projects() {
  return (
    <div className={styles.container}>
      <h1>Mes <span className={styles.highlight}>Projets</span></h1>
      <p className={styles.subtitle}>Découvrez une sélection de mes réalisations récentes</p>
      
      <div className={styles.projectsGrid}>
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}