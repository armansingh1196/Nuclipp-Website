'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './StaggerText.module.css';

export default function StaggerText({ text, as: Component = 'span', className, wordClassName, delay = 0 }) {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const words = text.split(' ');

  return (
    <Component ref={containerRef} className={`${styles.container} ${className || ''}`}>
      {words.map((word, index) => (
        <span key={index} className={styles.wordWrapper}>
          <span 
            className={`${styles.word} ${isVisible ? styles.visible : ''} ${wordClassName || ''}`}
            style={{ transitionDelay: `${delay + index * 0.05}s` }}
          >
            {word}&nbsp;
          </span>
        </span>
      ))}
    </Component>
  );
}
