import { motion } from "framer-motion";
import { useState, useEffect, useRef, useCallback } from "react";

const NAV_LINKS = [
  { label: "Consultations", href: "#consultations" },
  { label: "Guides", href: "#guides" },
  { label: "Rentals", href: "/rentals" },
  { label: "About", href: "#about" },
  { label: "Destinations", href: "#destinations" },
  { label: "Ask Zoe", href: "#ask-zoe" },
];

const CROSSFADE_DURATION = 1.5;

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const videoARef = useRef<HTMLVideoElement>(null);
  const videoBRef = useRef<HTMLVideoElement>(null);
  const activeRef = useRef<"A" | "B">("A");
  const crossfadingRef = useRef(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 200);
    return () => clearTimeout(t);
  }, []);

  const crossfade = useCallback(() => {
    if (crossfadingRef.current) return;
    crossfadingRef.current = true;

    const a = videoARef.current;
    const b = videoBRef.current;
    if (!a || !b) return;

    const incoming = activeRef.current === "A" ? b : a;
    const outgoing = activeRef.current === "A" ? a : b;

    incoming.currentTime = 0;
    incoming.play().catch(() => {});

    const steps = 30;
    const stepDuration = (CROSSFADE_DURATION * 1000) / steps;
    let step = 0;

    const tick = setInterval(() => {
      step++;
      const progress = step / steps;
      incoming.style.opacity = String(progress);
      outgoing.style.opacity = String(1 - progress);
      if (step >= steps) {
        clearInterval(tick);
        outgoing.pause();
        outgoing.currentTime = 0;
        activeRef.current = activeRef.current === "A" ? "B" : "A";
        crossfadingRef.current = false;
      }
    }, stepDuration);
  }, []);

  useEffect(() => {
    const a = videoARef.current;
    const b = videoBRef.current;
    if (!a || !b) return;

    a.style.opacity = "1";
    b.style.opacity = "0";
    a.play().catch(() => {});

    const handleTimeUpdate = () => {
      const active = activeRef.current === "A" ? a : b;
      if (
        active.duration &&
        active.currentTime >= active.duration - CROSSFADE_DURATION - 0.1 &&
        !crossfadingRef.current
      ) {
        crossfade();
      }
    };

    a.addEventListener("timeupdate", handleTimeUpdate);
    b.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      a.removeEventListener("timeupdate", handleTimeUpdate);
      b.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [crossfade]);

  const videoSrc = `${import.meta.env.BASE_URL}videos/hero.mp4`;

  return (
    <section className="relative w-full h-screen min-h-[600px] flex flex-col overflow-hidden">
      {/* Crossfade video background — two videos swap opacity for seamless looping */}
      <video
        ref={videoARef}
        className="absolute inset-0 w-full h-full object-cover"
        src={videoSrc}
        muted
        playsInline
        preload="auto"
        style={{ opacity: 1, transition: "none" }}
      />
      <video
        ref={videoBRef}
        className="absolute inset-0 w-full h-full object-cover"
        src={videoSrc}
        muted
        playsInline
        preload="auto"
        style={{ opacity: 0, transition: "none" }}
      />
      {/* Deep obsidian overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#05070A]/80 via-[#05070A]/40 to-[#05070A]/90" />

      {/* Nav */}
      <motion.nav
        className="relative z-20 flex items-center justify-between px-8 md:px-16 py-6"
        initial={{ opacity: 0, y: -20 }}
        animate={loaded ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div>
          <div
            className="font-black tracking-tighter text-xl leading-none"
            style={{ fontFamily: "var(--font-display)", color: "var(--gg-text-primary)" }}
          >
            GLOBAL GALLIVANT
          </div>
          <div
            className="text-[10px] tracking-[0.25em] uppercase mt-0.5"
            style={{ color: "var(--gg-accent-gold)", opacity: 0.7 }}
          >
            by Intercontinental Zoe
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold tracking-widest uppercase transition-colors duration-300"
              style={{ color: "var(--gg-text-muted)", transition: "var(--gg-transition-fluid)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gg-accent-gold)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--gg-text-muted)")}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#consultations"
          className="hidden md:block text-sm font-bold tracking-wider px-6 py-3 transition-all duration-300"
          style={{
            background: "var(--gg-accent-gold)",
            color: "#05070A",
            borderRadius: "var(--gg-radius-agentic)",
            transition: "var(--gg-transition-fluid)",
            boxShadow: "var(--gg-shadow-haptic)",
          }}
        >
          Book Now
        </a>
      </motion.nav>

      {/* Hero content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6">
        <motion.div
          className="text-sm font-bold tracking-[0.4em] uppercase mb-6"
          style={{ color: "var(--gg-accent-gold)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          20 Countries · 39 Cities · 4 Continents
        </motion.div>

        <div className="overflow-hidden mb-2">
          <motion.h1
            className="text-[10vw] md:text-[8vw] font-black tracking-tighter leading-none"
            style={{ fontFamily: "var(--font-display)", color: "var(--gg-text-primary)" }}
            initial={{ y: "100%" }}
            animate={loaded ? { y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          >
            GLOBAL
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-8">
          <motion.h1
            className="text-[10vw] md:text-[8vw] font-black tracking-tighter leading-none text-transparent"
            style={{
              fontFamily: "var(--font-display)",
              WebkitTextStroke: "2px var(--gg-accent-gold)",
            }}
            initial={{ y: "100%" }}
            animate={loaded ? { y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.52 }}
          >
            GALLIVANT
          </motion.h1>
        </div>

        <motion.p
          className="text-lg max-w-xl leading-relaxed mb-10"
          style={{ color: "var(--gg-text-muted)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          Your passport to smarter, richer travel. Consultations, guides, local rentals,
          and gear — curated by Intercontinental Zoe from first-hand experience.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 1 }}
        >
          <a
            href="#consultations"
            className="font-bold tracking-wider px-10 py-4 text-sm"
            style={{
              background: "var(--gg-accent-gold)",
              color: "#05070A",
              borderRadius: "var(--gg-radius-agentic)",
              boxShadow: "var(--gg-shadow-haptic)",
              transition: "var(--gg-transition-fluid)",
            }}
          >
            Book a Consultation
          </a>
          <a
            href="#guides"
            className="font-bold tracking-wider px-10 py-4 text-sm"
            style={{
              border: "1px solid var(--gg-accent-slate)",
              color: "var(--gg-text-primary)",
              borderRadius: "var(--gg-radius-agentic)",
              background: "var(--gg-surface-glass)",
              backdropFilter: "var(--gg-surface-blur)",
              transition: "var(--gg-transition-fluid)",
            }}
          >
            Browse Guides
          </a>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="relative z-10 flex flex-col items-center pb-8 gap-2"
        initial={{ opacity: 0 }}
        animate={loaded ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 1.4 }}
      >
        <span
          className="text-[10px] tracking-[0.3em] uppercase"
          style={{ color: "var(--gg-text-muted)", opacity: 0.5 }}
        >
          Scroll
        </span>
        <motion.div
          className="w-[1px] h-8"
          style={{ background: "var(--gg-accent-slate)" }}
          animate={{ scaleY: [0, 1, 0], originY: 0 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
