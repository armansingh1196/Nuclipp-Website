import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import styles from './ServiceCard.module.css';

export default function ServiceCard({ icon, title, description, href, accentColor, features = [] }) {
  return (
    <Link href={href} className={styles.card} style={{ '--card-accent': accentColor }}>
      <div className={styles.iconWrapper}>
        {icon}
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      {features.length > 0 && (
        <ul className={styles.features}>
          {features.map((feature, i) => (
            <li key={i} className={styles.feature}>
              <span className={styles.featureDot} />
              {feature}
            </li>
          ))}
        </ul>
      )}
      <div className={styles.linkRow}>
        <span className={styles.linkText}>Explore</span>
        <ArrowUpRight size={16} />
      </div>
      <div className={styles.glowOrb} />
    </Link>
  );
}
