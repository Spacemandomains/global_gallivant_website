import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const DESTINATIONS = [
  'Oranjestad · Aruba',
  'Rio de Janeiro · Brazil',
  'Salvador de Bahia · Brazil',
  'São Paulo · Brazil',
  'Bogotá · Colombia',
  'Cali · Colombia',
  'Cartagena · Colombia',
  'Medellín · Colombia',
  'San Andrés · Colombia',
  'San José · Costa Rica',
  'Willemstad · Curaçao',
  'Punta Cana · Dom. Republic',
  'Santo Domingo · Dom. Republic',
  'Sosúa · Dom. Republic',
  'Mexico City · Mexico',
  'Playa del Carmen · Mexico',
  'Panama City · Panama',
  'Cusco · Peru',
  'Lima · Peru',
  'Phnom Penh · Cambodia',
  'Siem Reap · Cambodia',
  'Kuala Lumpur · Malaysia',
  'Angeles City · Philippines',
  'Cebu · Philippines',
  'Manila · Philippines',
  'Palawan · Philippines',
  'Bangkok · Thailand',
  'Pattaya · Thailand',
  'Phuket · Thailand',
  'Da Nang · Vietnam',
  'Ho Chi Minh City · Vietnam',
  'Nairobi · Kenya',
  'Cape Town · South Africa',
  'Johannesburg · South Africa',
  'Paris · France',
  'Barcelona · Spain',
  'Giza · Egypt',
];

export function Scene2() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 300),
      setTimeout(() => setPhase(2), 900),
      setTimeout(() => setPhase(3), 1500),
      setTimeout(() => setPhase(4), 2200),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  const doubled = [...DESTINATIONS, ...DESTINATIONS];

  return (
    <motion.div
      className="absolute inset-0 z-20 flex items-stretch"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Left — stats + ticker */}
      <div className="flex flex-col justify-center w-[52%] px-[6vw] py-[5vh]">
        {/* Stats row */}
        <div className="flex items-end gap-[4vw] mb-[4vh]">
          <div>
            <motion.div
              className="text-[9vw] font-black text-primary leading-none"
              style={{ fontFamily: 'var(--font-display)' }}
              initial={{ opacity: 0, scale: 0.5, originX: 0 }}
              animate={phase >= 1 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              20
            </motion.div>
            <motion.div
              className="text-[1.4vw] font-bold tracking-widest uppercase mt-1 text-white/70"
              initial={{ opacity: 0, x: -20 }}
              animate={phase >= 1 ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Countries
            </motion.div>
          </div>

          <motion.div
            className="w-[1px] h-[7vw] bg-white/20"
            initial={{ scaleY: 0 }}
            animate={phase >= 2 ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 0.5 }}
          />

          <div>
            <motion.div
              className="text-[9vw] font-black text-white leading-none"
              style={{ fontFamily: 'var(--font-display)' }}
              initial={{ opacity: 0, scale: 0.5, originX: 0 }}
              animate={phase >= 2 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              39
            </motion.div>
            <motion.div
              className="text-[1.4vw] font-bold tracking-widest uppercase mt-1 text-white/70"
              initial={{ opacity: 0, x: -20 }}
              animate={phase >= 2 ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Cities
            </motion.div>
          </div>

          <motion.div
            className="w-[1px] h-[7vw] bg-white/20"
            initial={{ scaleY: 0 }}
            animate={phase >= 3 ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 0.5 }}
          />

          <div>
            <motion.div
              className="text-[9vw] font-black text-white leading-none"
              style={{ fontFamily: 'var(--font-display)' }}
              initial={{ opacity: 0, scale: 0.5, originX: 0 }}
              animate={phase >= 3 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              4
            </motion.div>
            <motion.div
              className="text-[1.4vw] font-bold tracking-widest uppercase mt-1 text-white/70"
              initial={{ opacity: 0, x: -20 }}
              animate={phase >= 3 ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Continents
            </motion.div>
          </div>
        </div>

        {/* Separator */}
        <motion.div
          className="w-full h-[1px] bg-white/15 mb-[3vh]"
          initial={{ scaleX: 0, originX: 0 }}
          animate={phase >= 3 ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Scrolling destinations ticker */}
        <motion.div
          className="overflow-hidden w-full"
          initial={{ opacity: 0 }}
          animate={phase >= 4 ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Row 1 — scrolls left */}
          <div className="flex mb-3" style={{ maskImage: 'linear-gradient(to right, transparent, black 6%, black 94%, transparent)' }}>
            <motion.div
              className="flex gap-6 whitespace-nowrap"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
            >
              {doubled.map((dest, i) => (
                <span key={i} className="text-[1.3vw] font-semibold text-white/60 tracking-wide shrink-0">
                  {dest}
                  <span className="mx-4 text-primary opacity-60">✦</span>
                </span>
              ))}
            </motion.div>
          </div>

          {/* Row 2 — scrolls right */}
          <div className="flex" style={{ maskImage: 'linear-gradient(to right, transparent, black 6%, black 94%, transparent)' }}>
            <motion.div
              className="flex gap-6 whitespace-nowrap"
              animate={{ x: ['-50%', '0%'] }}
              transition={{ duration: 33, repeat: Infinity, ease: 'linear' }}
            >
              {[...doubled].reverse().map((dest, i) => (
                <span key={i} className="text-[1.3vw] font-semibold text-white/40 tracking-wide shrink-0">
                  {dest}
                  <span className="mx-4 text-primary opacity-40">·</span>
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Right — Cartagena helicopter aerial image */}
      <div className="w-[48%] relative overflow-hidden">
        {/* Subtle left-edge gradient blending into the dark background */}
        <div className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, var(--color-bg-dark, #07101e), transparent)' }} />

        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.15, x: 60 }}
          animate={phase >= 3 ? { opacity: 1, scale: 1, x: 0 } : { opacity: 0, scale: 1.15, x: 60 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src={`${import.meta.env.BASE_URL}images/cartagena.jpg`}
            className="w-full h-full object-cover"
            alt="Helicopter tour over Cartagena Colombia"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
        </motion.div>

        {/* Caption overlay */}
        <motion.div
          className="absolute bottom-8 right-8 z-20 text-right"
          initial={{ opacity: 0, y: 20 }}
          animate={phase >= 4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-[1vw] text-primary font-bold tracking-[0.3em] uppercase mb-1">
            Aerial View
          </div>
          <div className="text-[1.5vw] text-white font-bold tracking-wide">
            Cartagena, Colombia
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
