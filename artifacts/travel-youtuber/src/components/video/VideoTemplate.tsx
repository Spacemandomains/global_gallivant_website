import { motion, AnimatePresence } from 'framer-motion';
import { useVideoPlayer } from '@/lib/video';
import { Scene1 } from './video_scenes/Scene1';
import { Scene2 } from './video_scenes/Scene2';
import { Scene3 } from './video_scenes/Scene3';
import { Scene4 } from './video_scenes/Scene4';
import { Scene5 } from './video_scenes/Scene5';

const SCENE_DURATIONS = { hero: 4500, stats: 4000, tokyo: 4500, mountain: 4000, cta: 5000 };

export default function VideoTemplate() {
  const { currentScene } = useVideoPlayer({ durations: SCENE_DURATIONS });

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-white">
      {/* Persistent video background that fades in and out based on scene */}
      <motion.div 
        className="absolute inset-0 z-0"
        animate={{ opacity: currentScene === 0 ? 0.6 : 0.2 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <video 
          src={`${import.meta.env.BASE_URL}videos/hero.mp4`} 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      {/* Persistent grain overlay */}
      <div className="absolute inset-0 z-50 pointer-events-none opacity-20 mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

      {/* Frame border */}
      <motion.div 
        className="absolute inset-4 border border-white/20 z-40 pointer-events-none"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />

      {/* Floating compass/circle accent */}
      <motion.div
        className="absolute w-32 h-32 rounded-full border-2 border-white/10 z-10 pointer-events-none"
        animate={{
          x: ['70vw', '20vw', '80vw', '10vw', '50vw'][currentScene],
          y: ['20vh', '60vh', '10vh', '70vh', '40vh'][currentScene],
          scale: [1, 1.5, 0.8, 2, 1][currentScene],
          rotate: [0, 90, 180, 270, 360][currentScene],
          opacity: [0.5, 0.3, 0.6, 0.2, 0.8][currentScene],
        }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div 
          className="w-full h-full border border-primary/50 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      {/* Scene Content */}
      <AnimatePresence mode="popLayout">
        {currentScene === 0 && <Scene1 key="hero" />}
        {currentScene === 1 && <Scene2 key="stats" />}
        {currentScene === 2 && <Scene3 key="tokyo" />}
        {currentScene === 3 && <Scene4 key="mountain" />}
        {currentScene === 4 && <Scene5 key="cta" />}
      </AnimatePresence>
    </div>
  );
}
