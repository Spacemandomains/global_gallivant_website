import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export function Scene3() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 200),
      setTimeout(() => setPhase(2), 800),
      setTimeout(() => setPhase(3), 1200),
      setTimeout(() => setPhase(4), 4000),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div
      className="absolute inset-0 z-20 flex items-center justify-center"
      initial={{ opacity: 0, clipPath: 'circle(0% at 50% 50%)' }}
      animate={{ opacity: 1, clipPath: 'circle(150% at 50% 50%)' }}
      exit={{ opacity: 0, scale: 1.1, filter: 'blur(20px)', transition: { duration: 0.8 } }}
      transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="absolute inset-0 w-full h-full">
        <motion.img
          src={`${import.meta.env.BASE_URL}images/tokyo.jpg`}
          className="w-full h-full object-cover"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 6, ease: 'easeOut' }}
          alt="Bangkok"
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      <div className="relative z-10 w-full px-[10vw] flex justify-end">
        <div className="text-right">
          <motion.div
            className="text-primary font-bold tracking-[0.5em] text-[1.5vw] uppercase mb-4"
            initial={{ opacity: 0, x: 50 }}
            animate={phase >= 2 ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            From the streets of Southeast Asia
          </motion.div>

          <h2
            className="text-[14vw] font-black leading-none text-white tracking-tighter"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {'BANGKOK'.split('').map((char, i) => (
              <motion.span
                key={i}
                className="inline-block"
                initial={{ opacity: 0, scale: 0, rotate: -10 }}
                animate={phase >= 3 ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0, rotate: -10 }}
                transition={{ type: 'spring', stiffness: 300, damping: 15, delay: phase >= 3 ? i * 0.08 : 0 }}
              >
                {char}
              </motion.span>
            ))}
          </h2>

          <motion.div
            className="flex justify-end gap-4 mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={phase >= 3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            {['Pattaya', 'Phuket', 'Manila', 'Cebu', 'Palawan', 'Ho Chi Minh City', 'Siem Reap'].map((city, i) => (
              <span
                key={i}
                className="text-[1.1vw] text-white/50 font-medium tracking-wider border border-white/20 px-3 py-1 rounded-full"
              >
                {city}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
