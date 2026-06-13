import Link from 'next/link';
import styles from './Button.module.css';

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  icon,
  onClick,
  type = 'button',
  fullWidth = false,
  ...props
}) {
  const className = `${styles.button} ${styles[variant]} ${styles[size]} ${fullWidth ? styles.fullWidth : ''}`;

  if (href) {
    return (
      <Link href={href} className={className} {...props}>
        {children}
        {icon && <span className={styles.icon}>{icon}</span>}
      </Link>
    );
  }

  return (
    <button className={className} onClick={onClick} type={type} {...props}>
      {children}
      {icon && <span className={styles.icon}>{icon}</span>}
    </button>
  );
}
