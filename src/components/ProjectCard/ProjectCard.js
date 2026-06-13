import { ExternalLink } from 'lucide-react';
import styles from './ProjectCard.module.css';

export default function ProjectCard({ title, category, tags = [], accentColor, imageUrl, href }) {
  const CardWrapper = href ? 'a' : 'div';
  const wrapperProps = href ? { href, target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <CardWrapper className={styles.card} style={{ '--card-accent': accentColor }} {...wrapperProps}>
      <div className={styles.imageWrapper}>
        <div 
          className={styles.image} 
          style={{ 
            background: imageUrl 
              ? `url(${imageUrl}) center/cover no-repeat` 
              : `linear-gradient(135deg, ${accentColor || 'var(--accent-primary)'}22, ${accentColor || 'var(--accent-primary)'}08)` 
          }}
        >
          {!imageUrl && (
            <div className={styles.placeholderPattern}>
              <div className={styles.patternGrid}>
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className={styles.patternBlock} />
                ))}
              </div>
            </div>
          )}
        </div>
        <div className={styles.imageOverlay} />
      </div>
      <div className={styles.content}>
        <span className={styles.category}>{category}</span>
        <div className={styles.titleRow}>
          <h3 className={styles.title}>{title}</h3>
          {href && <ExternalLink size={16} className={styles.linkIcon} />}
        </div>
        {tags.length > 0 && (
          <div className={styles.tags}>
            {tags.map((tag, i) => (
              <span key={i} className={styles.tag}>{tag}</span>
            ))}
          </div>
        )}
      </div>
    </CardWrapper>
  );
}
