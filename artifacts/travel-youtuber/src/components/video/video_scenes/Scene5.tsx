import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export function Scene5() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setPhase(2), 1200),
      setTimeout(() => setPhase(3), 2000),
      setTimeout(() => setPhase(4), 4500),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 z-20 flex flex-col items-center justify-center"
      initial={{ opacity: 0, scale: 1.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, filter: 'blur(20px)', transition: { duration: 1 } }}
      transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="w-32 h-32 rounded-full bg-primary mb-8 flex items-center justify-center shadow-[0_0_50px_rgba(255,107,0,0.5)]"
        initial={{ scale: 0, rotate: -180 }}
        animate={phase >= 1 ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      >
        <svg className="w-16 h-16 text-white ml-2" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z"/>
        </svg>
      </motion.div>

      <motion.h2 
        className="text-[6vw] font-black text-white text-center leading-tight tracking-tight mb-4"
        style={{ fontFamily: 'var(--font-display)' }}
        initial={{ opacity: 0, y: 50 }}
        animate={phase >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        NEW VIDEOS<br/>EVERY WEEK
      </motion.h2>

      <motion.div
        className="bg-white text-black px-12 py-4 rounded-full font-bold text-[2vw] tracking-wider mt-8"
        initial={{ opacity: 0, y: 30, scale: 0.8 }}
        animate={phase >= 3 ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.8 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        SUBSCRIBE
      </motion.div>
    </motion.div>
  );
}
