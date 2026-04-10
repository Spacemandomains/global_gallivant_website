import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const ALL_CITIES = [
  'Cartagena', 'Medellín', 'Rio de Janeiro', 'Cusco', 'Mexico City',
  'Panama City', 'Cape Town', 'Nairobi', 'Lagos', 'Addis Ababa',
  'Johannesburg', 'Giza', 'Bangkok', 'Phuket', 'Manila',
  'Cebu', 'Palawan', 'Ho Chi Minh City', 'Siem Reap', 'Paris', 'Barcelona',
];

export function Scene4() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 400),
      setTimeout(() => setPhase(2), 1000),
      setTimeout(() => setPhase(3), 1800),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div
      className="absolute inset-0 z-20 flex items-center justify-center"
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '-100%', transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Video background — people moving */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          className="w-full h-full object-cover"
          src={`${import.meta.env.BASE_URL}videos/people_moving.mp4`}
          autoPlay
          muted
          loop
          playsInline
        />
        {/* Dark overlay with gradient for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-[8vw] flex flex-col items-center text-center">

        {/* Label */}
        <motion.div
          className="text-primary font-bold tracking-[0.5em] text-[1.4vw] uppercase mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={phase >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          Destinations across the globe
        </motion.div>

        {/* City pills — staggered in */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 max-w-[80vw]"
          initial={{ opacity: 0 }}
          animate={phase >= 2 ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {ALL_CITIES.map((city, i) => (
            <motion.span
              key={city}
              className="text-[1.2vw] font-semibold tracking-wide border px-4 py-2 rounded-full"
              style={{
                borderColor: i % 3 === 0 ? 'rgba(255,107,0,0.5)' : 'rgba(255,255,255,0.2)',
                color: i % 3 === 0 ? '#FF6B00' : 'rgba(255,255,255,0.75)',
                backgroundColor: 'rgba(0,0,0,0.3)',
                backdropFilter: 'blur(8px)',
              }}
              initial={{ opacity: 0, scale: 0.7, y: 20 }}
              animate={phase >= 2 ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.7, y: 20 }}
              transition={{
                delay: phase >= 2 ? i * 0.04 : 0,
                type: 'spring',
                stiffness: 300,
                damping: 22,
              }}
            >
              {city}
            </motion.span>
          ))}
        </motion.div>

        {/* Bottom tagline */}
        <motion.div
          className="mt-10 text-[1.6vw] text-white/50 font-light tracking-[0.2em] uppercase"
          initial={{ opacity: 0, y: 20 }}
          animate={phase >= 3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          Every city. Every story.
        </motion.div>
      </div>
    </motion.div>
  );
}
