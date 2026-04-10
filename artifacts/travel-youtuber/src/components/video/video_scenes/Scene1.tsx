import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export function Scene1() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setPhase(2), 1200),
      setTimeout(() => setPhase(3), 2000),
      setTimeout(() => setPhase(4), 3800),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-center z-20"
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="overflow-hidden mb-4">
        <motion.div
          initial={{ y: "100%" }}
          animate={phase >= 1 ? { y: 0 } : { y: "100%" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-primary font-bold tracking-[0.2em] text-[1.5vw] uppercase"
        >
          A cinematic journey
        </motion.div>
      </div>

      <h1 className="text-[10vw] font-black tracking-tighter leading-none" style={{ fontFamily: 'var(--font-display)' }}>
        {'GLOBAL'.split('').map((char, i) => (
          <motion.span 
            key={i} 
            className="inline-block"
            initial={{ opacity: 0, y: 100, rotateX: 90 }}
            animate={phase >= 2 ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 100, rotateX: 90 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20, delay: phase >= 2 ? i * 0.05 : 0 }}
          >
            {char}
          </motion.span>
        ))}
      </h1>

      <h1 className="text-[10vw] font-black tracking-tighter leading-none -mt-[3vw]" style={{ fontFamily: 'var(--font-display)' }}>
        {'GALLIVANT'.split('').map((char, i) => (
          <motion.span 
            key={i} 
            className="inline-block text-transparent"
            style={{ WebkitTextStroke: '2px white' }}
            initial={{ opacity: 0, y: 100, rotateX: 90 }}
            animate={phase >= 3 ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 100, rotateX: 90 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20, delay: phase >= 3 ? i * 0.05 : 0 }}
          >
            {char}
          </motion.span>
        ))}
      </h1>

      <motion.div
        className="overflow-hidden mt-6"
        initial={{ opacity: 0 }}
        animate={phase >= 3 ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <motion.p
          className="text-[1.4vw] tracking-[0.3em] text-white/70 uppercase font-light"
          initial={{ y: 20 }}
          animate={phase >= 3 ? { y: 0 } : { y: 20 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
        >
          presented by Intercontinental Zoe
        </motion.p>
      </motion.div>

      {phase >= 1 && (
        <motion.div 
          className="absolute bottom-12 left-12 w-64 h-[1px] bg-white/30"
          initial={{ width: 0 }}
          animate={{ width: 256 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          <motion.div 
            className="h-full bg-primary"
            initial={{ width: 0 }}
            animate={{ width: '40%' }}
            transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
          />
        </motion.div>
      )}
    </motion.div>
  );
}
