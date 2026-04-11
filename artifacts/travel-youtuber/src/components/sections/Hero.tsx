import { motion } from "framer-motion";
import { useState, useEffect, useRef, useCallback } from "react";

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/international.zoe",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
      </svg>
    ),
  },
  {
    label: "Facebook (IntZoe)",
    href: "https://www.facebook.com/intzoe",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
      </svg>
    ),
  },
  {
    label: "Patreon",
    href: "https://www.patreon.com/internationalzoe",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14.82 2.41C18.78 2.41 22 5.65 22 9.62c0 3.96-3.22 7.18-7.18 7.18-3.95 0-7.17-3.22-7.17-7.18 0-3.97 3.22-7.21 7.17-7.21zM2 21.6h3.5V2.41H2V21.6z"/>
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@international.zoe",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.74a4.85 4.85 0 0 1-1.01-.05z"/>
      </svg>
    ),
  },
  {
    label: "Kick",
    href: "https://kick.com/internationalzoe",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M2 2h4v6.5L10.5 2H16l-6 8 6 8h-5.5L6 11.5V18H2V2z M17 2h5v20h-5V2z"/>
      </svg>
    ),
  },
  {
    label: "Rumble",
    href: "https://www.rumble.com/internationalzoe",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.64 13.44l-3.36 1.92v2.4L12 19.2l-2.28-1.44v-2.4l-3.36-1.92V9.6L9.72 7.68 12 9.12l2.28-1.44 3.36 1.92v3.84z"/>
      </svg>
    ),
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/intlzoe",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@INTERNATIONALZOE",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
];

const NAV_LINKS = [
  { label: "Consultations", href: "/consultation" },
  { label: "Guides", href: "https://www.patreon.com/internationalzoe/shop", external: true },
  { label: "Rentals", href: "/rentals" },
  { label: "About", href: "/about" },
  { label: "Destinations", href: "https://www.youtube.com/@INTERNATIONALZOE/playlists", external: true },
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
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
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
          href="/consultation"
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
          50 Countries · 100 Cities · 5 Continents · 1,800 Videos
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
        <div className="overflow-hidden mb-4">
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
            href="/consultation"
            className="font-bold tracking-wider px-10 py-4 text-sm"
            style={{
              background: "var(--gg-accent-gold)",
              color: "#05070A",
              borderRadius: "var(--gg-radius-agentic)",
              boxShadow: "var(--gg-shadow-haptic)",
              transition: "var(--gg-transition-fluid)",
            }}
          >
            Book a Consultation · $150
          </a>
          <a
            href="https://www.patreon.com/internationalzoe/shop"
            target="_blank"
            rel="noopener noreferrer"
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
