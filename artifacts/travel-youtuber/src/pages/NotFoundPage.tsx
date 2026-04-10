import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const COORDINATES = [
  "4°35'N 74°04'W", "22°54'S 43°10'W", "10°25'N 75°32'W",
  "9°56'N 84°05'W", "12°06'N 15°03'W", "1°17'N 103°51'E",
  "13°45'N 100°30'E", "10°49'N 106°37'E", "30°03'N 31°14'E",
  "48°51'N 2°21'E", "41°23'N 2°10'E", "1°33'S 36°49'E",
];

export default function NotFoundPage() {
  const [coord, setCoord] = useState(COORDINATES[0]);
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i = (i + 1) % COORDINATES.length;
      setCoord(COORDINATES[i]);
      setGlitch(true);
      setTimeout(() => setGlitch(false), 150);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden"
      style={{ background: "var(--gg-bg-primary)" }}
    >
      {/* Animated grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(74,101,114,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(74,101,114,0.08) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gold radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(255,215,0,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* Coordinates ticker */}
        <motion.div
          key={coord}
          className="text-xs font-bold tracking-[0.4em] uppercase mb-8"
          style={{ color: "var(--gg-accent-gold)", opacity: 0.6 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 0.3 }}
        >
          GPS: {coord}
        </motion.div>

        {/* 404 */}
        <div className="relative mb-6">
          <motion.div
            className="text-[22vw] md:text-[18vw] font-black leading-none select-none"
            style={{
              fontFamily: "var(--font-display)",
              color: "transparent",
              WebkitTextStroke: "2px rgba(255,215,0,0.25)",
              filter: glitch ? "blur(2px)" : "none",
              transition: "filter 0.1s",
            }}
            animate={glitch ? { x: [-3, 3, -2, 0], skewX: [-2, 2, 0] } : { x: 0, skewX: 0 }}
            transition={{ duration: 0.15 }}
          >
            404
          </motion.div>
          <motion.div
            className="absolute inset-0 text-[22vw] md:text-[18vw] font-black leading-none select-none"
            style={{
              fontFamily: "var(--font-display)",
              color: "transparent",
              WebkitTextStroke: glitch ? "1px rgba(255,80,80,0.5)" : "1px rgba(255,215,0,0.06)",
              transition: "all 0.1s",
              transform: glitch ? "translate(4px, -2px)" : "none",
            }}
          >
            404
          </motion.div>
        </div>

        {/* Message */}
        <motion.h1
          className="text-2xl md:text-3xl font-black tracking-tight mb-4"
          style={{ fontFamily: "var(--font-display)", color: "var(--gg-text-primary)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Looks like Zoe hasn't been here yet.
        </motion.h1>

        <motion.p
          className="text-base mb-12 max-w-md mx-auto"
          style={{ color: "var(--gg-text-muted)" }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          This page doesn't exist — but 20 countries worth of content does.
          Start with the channel, or head back home.
        </motion.p>

        {/* YouTube CTA */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 items-center justify-center"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <a
            href="https://www.youtube.com/@INTERNATIONALZOE"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 font-bold tracking-wide px-8 py-4 text-sm transition-all duration-300 group"
            style={{
              background: "#FF0000",
              color: "#fff",
              borderRadius: "var(--gg-radius-agentic)",
              boxShadow: "0 0 32px rgba(255,0,0,0.3)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 0 48px rgba(255,0,0,0.5)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 0 32px rgba(255,0,0,0.3)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            {/* YouTube icon */}
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            Watch on YouTube
          </a>

          <a
            href="/"
            className="font-bold tracking-wide px-8 py-4 text-sm transition-all duration-300"
            style={{
              border: "1px solid rgba(74,101,114,0.5)",
              color: "var(--gg-text-primary)",
              borderRadius: "var(--gg-radius-agentic)",
              background: "var(--gg-surface-glass)",
              backdropFilter: "var(--gg-surface-blur)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--gg-accent-gold)";
              e.currentTarget.style.color = "var(--gg-accent-gold)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(74,101,114,0.5)";
              e.currentTarget.style.color = "var(--gg-text-primary)";
            }}
          >
            ← Back to Home
          </a>
        </motion.div>

        {/* Channel handle */}
        <motion.div
          className="mt-10 text-xs tracking-[0.3em] uppercase"
          style={{ color: "var(--gg-text-muted)", opacity: 0.4 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          @INTERNATIONALZOE
        </motion.div>
      </div>
    </div>
  );
}
