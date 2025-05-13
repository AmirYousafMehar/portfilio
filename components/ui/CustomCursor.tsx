'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);
    
    const handleMouseDown = () => setIsActive(true);
    const handleMouseUp = () => setIsActive(false);
    
    // Detect clickable elements
    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button')
      ) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleElementHover);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleElementHover);
    };
  }, []);

  // Only render on client-side to avoid hydration mismatch
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  // Hide on mobile devices
  if (typeof window !== 'undefined' && window.innerWidth < 768) return null;

  return (
    <motion.div
      className={`custom-cursor ${isActive ? 'active' : ''}`}
      style={{
        left: position.x,
        top: position.y,
        opacity: isVisible ? 1 : 0,
      }}
      animate={{
        x: position.x,
        y: position.y,
        scale: isActive ? 1.5 : 1,
      }}
      transition={{
        type: 'spring',
        mass: 0.1,
        stiffness: 800,
        damping: 30,
      }}
    />
  );
}