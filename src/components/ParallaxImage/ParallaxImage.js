'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './ParallaxImage.module.css';

export default function ParallaxImage({ src, alt, width, height, className, intensity = 20 }) {
  const containerRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrameId;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      
      const { innerWidth, innerHeight } = window;
      // Calculate normalized mouse position (-1 to 1)
      const normalizedX = (e.clientX / innerWidth) * 2 - 1;
      const normalizedY = (e.clientY / innerHeight) * 2 - 1;

      targetX = normalizedX * intensity;
      targetY = normalizedY * intensity;
    };

    const updatePosition = () => {
      // Smooth lerp
      currentX += (targetX - currentX) * 0.1;
      currentY += (targetY - currentY) * 0.1;

      if (containerRef.current) {
        containerRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) rotateX(${-currentY * 0.5}deg) rotateY(${currentX * 0.5}deg)`;
      }

      animationFrameId = requestAnimationFrame(updatePosition);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animationFrameId = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [intensity]);

  return (
    <div className={`${styles.parallaxContainer} ${className || ''}`} ref={containerRef}>
      <Image src={src} alt={alt} width={width} height={height} className={styles.image} priority />
    </div>
  );
}
