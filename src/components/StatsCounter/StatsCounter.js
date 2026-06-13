'use client';

import { useEffect, useState, useRef } from 'react';
import styles from './StatsCounter.module.css';

function CounterItem({ value, suffix = '', label }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div className={styles.stat} ref={ref}>
      <span className={styles.value}>
        {count}
        <span className={styles.suffix}>{suffix}</span>
      </span>
      <span className={styles.label}>{label}</span>
    </div>
  );
}

export default function StatsCounter({ stats }) {
  return (
    <div className={styles.wrapper}>
      <div className={`container ${styles.grid}`}>
        {stats.map((stat, i) => (
          <CounterItem key={i} {...stat} />
        ))}
      </div>
    </div>
  );
}
