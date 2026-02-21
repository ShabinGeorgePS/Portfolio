import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function EnhancedCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [cursorVariant, setCursorVariant] = useState('default');
  const [particles, setParticles] = useState([]);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 50, stiffness: 1000, mass: 0.1 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      // Add particle trail
      if (Math.random() > 0.8) {
        const newParticle = {
          id: Date.now() + Math.random(),
          x: e.clientX,
          y: e.clientY,
        };
        setParticles(prev => [...prev.slice(-15), newParticle]);
      }
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        setIsHovering(true);
        setCursorVariant('hover');
      }
    };

    const handleMouseOut = () => {
      setIsHovering(false);
      setCursorVariant('default');
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [cursorX, cursorY]);

  // Remove old particles
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev => prev.slice(-10));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const variants = {
    default: {
      width: 32,
      height: 32,
      backgroundColor: 'rgba(239, 68, 68, 0.5)',
      border: '2px solid rgba(239, 68, 68, 0.8)',
    },
    hover: {
      width: 60,
      height: 60,
      backgroundColor: 'rgba(239, 68, 68, 0.2)',
      border: '2px solid rgba(239, 68, 68, 1)',
    },
  };

  return (
    <>
      {/* Main Cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full mix-blend-screen"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
        variants={variants}
        animate={cursorVariant}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      />

      {/* Cursor Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-red-500 rounded-full pointer-events-none z-[9999]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />

      {/* Particle Trail */}
      {particles.map((particle, index) => (
        <motion.div
          key={particle.id}
          className="fixed w-1 h-1 bg-red-400 rounded-full pointer-events-none z-[9998]"
          initial={{ opacity: 0.8, scale: 1, x: particle.x, y: particle.y }}
          animate={{ opacity: 0, scale: 0, x: particle.x, y: particle.y }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          style={{ translateX: '-50%', translateY: '-50%' }}
        />
      ))}

      {/* Glow Effect */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9997] w-64 h-64 rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(239, 68, 68, 0.15) 0%, transparent 70%)',
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </>
  );
}