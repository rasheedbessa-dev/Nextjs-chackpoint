import { useState } from 'react';
import styles from '../styles/Contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulaire envoyé:', formData);
    alert('Message envoyé avec succès !');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className={styles.container}>
      <h1>Me <span className={styles.highlight}>Contacter</span></h1>
      
      <div className={styles.contactGrid}>
        <div className={styles.infoSection}>
          <h2>Informations de contact</h2>
          <div className={styles.infoItem}>
            <span>📧</span>
            <p>bessa.rachid@gmail.com</p>
          </div>
          <div className={styles.infoItem}>
            <span>📱</span>
            <p>+213 6 12 34 56 78</p>
          </div>
          <div className={styles.infoItem}>
            <span>📍</span>
            <p>Alger, Algérie</p>
          </div>
          
          <div className={styles.socialLinks}>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Nom</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="5"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              required
            />
          </div>
          
          <button type="submit" className={styles.submitBtn}>
            Envoyer le message
          </button>
        </form>
      </div>
    </div>
  );
}