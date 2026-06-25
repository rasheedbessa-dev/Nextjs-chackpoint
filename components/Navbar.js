import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Bessa<span className={styles.highlight}>Rachid</span>
        </Link>
        
        <button 
          className={styles.menuButton}
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        <ul className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
          <li><Link href="/">Accueil</Link></li>
          <li><Link href="/about">À propos</Link></li>
          <li><Link href="/projects">Projets</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}