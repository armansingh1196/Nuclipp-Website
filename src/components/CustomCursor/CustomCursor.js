'use client';

import { useEffect, useState, useRef } from 'react';
import styles from './CustomCursor.module.css';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let animationFrameId;
    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;

    const onMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const updatePosition = () => {
      // Smooth interpolation (lerp)
      currentX += (targetX - currentX) * 0.15;
      currentY += (targetY - currentY) * 0.15;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      }
      animationFrameId = requestAnimationFrame(updatePosition);
    };

    const onMouseOver = (e) => {
      // Check if hovering over interactive elements
      if (
        e.target.tagName.toLowerCase() === 'a' ||
        e.target.tagName.toLowerCase() === 'button' ||
        e.target.closest('a') ||
        e.target.closest('button') ||
        e.target.classList.contains('interactive')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    animationFrameId = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Don't render on mobile devices
  if (typeof window !== 'undefined' && window.innerWidth <= 768) {
    return null;
  }

  return (
    <>
      <div 
        className={`${styles.cursorDot} ${isHovering ? styles.hovering : ''}`} 
        style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
      />
      <div 
        ref={cursorRef}
        className={`${styles.cursorRing} ${isHovering ? styles.hovering : ''}`} 
      />
    </>
  );
}
