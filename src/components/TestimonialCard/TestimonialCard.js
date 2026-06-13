import { Star } from 'lucide-react';
import styles from './TestimonialCard.module.css';

export default function TestimonialCard({ name, role, content, rating = 5 }) {
  return (
    <div className={styles.card}>
      <div className={styles.stars}>
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} size={14} fill="var(--design-accent)" color="var(--design-accent)" />
        ))}
      </div>
      <p className={styles.content}>&ldquo;{content}&rdquo;</p>
      <div className={styles.author}>
        <div className={styles.avatar}>
          {name.charAt(0)}
        </div>
        <div className={styles.authorInfo}>
          <span className={styles.name}>{name}</span>
          <span className={styles.role}>{role}</span>
        </div>
      </div>
    </div>
  );
}
