import styles from './SectionHeading.module.css';

export default function SectionHeading({ label, title, subtitle, align = 'center', gradientClass = 'gradient-text' }) {
  return (
    <div className={`${styles.heading} ${styles[align]}`}>
      {label && <span className={styles.label}>{label}</span>}
      <h2 className={styles.title}>
        {typeof title === 'string' ? (
          <span className={gradientClass}>{title}</span>
        ) : (
          title
        )}
      </h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}
