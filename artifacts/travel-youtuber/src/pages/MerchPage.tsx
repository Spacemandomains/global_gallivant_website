import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const DROP_DATE = new Date("2026-07-10T00:00:00");

function getTimeLeft() {
  const now = new Date();
  const diff = DROP_DATE.getTime() - now.getTime();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function Digit({ value, label }: { value: number; label: string }) {
  const display = String(value).padStart(2, "0");
  return (
    <div className="flex flex-col items-center">
      <div
        className="relative flex items-center justify-center w-24 h-24 md:w-32 md:h-32 rounded-2xl text-4xl md:text-5xl font-black tracking-tighter"
        style={{
          background: "rgba(255,215,0,0.06)",
          border: "1px solid rgba(255,215,0,0.25)",
          color: "var(--gg-accent-gold)",
          fontFamily: "var(--font-display)",
          boxShadow: "0 0 40px rgba(255,215,0,0.08)",
        }}
      >
        {display}
      </div>
      <span
        className="mt-3 text-[10px] font-bold tracking-[0.35em] uppercase"
        style={{ color: "var(--gg-text-muted)" }}
      >
        {label}
      </span>
    </div>
  );
}

export default function MerchPage() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: "var(--gg-bg-primary)", color: "var(--gg-text-primary)" }}
    >
      {/* Nav */}
      <div
        className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-16 py-4"
        style={{
          background: "rgba(5,7,10,0.85)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(74,101,114,0.15)",
        }}
      >
        <a href="/" aria-label="Home">
          <img src="/logo.png" alt="Global Gallivant" className="h-28 w-auto object-contain drop-shadow-lg" />
        </a>
        <a
          href="/"
          className="text-xs font-bold tracking-widest uppercase transition-colors duration-200 flex items-center gap-2"
          style={{ color: "var(--gg-text-muted)" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gg-accent-gold)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--gg-text-muted)")}
        >
          ← Back to Global Gallivant
        </a>
      </div>

      {/* Hero */}
      <div className="flex-1 flex flex-col lg:flex-row items-center justify-center gap-0 max-w-7xl mx-auto w-full px-6 md:px-16 py-16">

        {/* Left — tee photo */}
        <motion.div
          className="w-full lg:w-1/2 flex items-center justify-center"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            className="relative rounded-3xl overflow-hidden"
            style={{
              boxShadow: "0 32px 80px rgba(0,0,0,0.6), 0 0 60px rgba(255,215,0,0.06)",
              border: "1px solid rgba(255,215,0,0.12)",
              maxWidth: 480,
              width: "100%",
            }}
          >
            <img
              src="/merch-tee.png"
              alt="Global Gallivant Merch Drop"
              className="w-full h-auto object-cover"
              style={{ display: "block" }}
            />
            {/* Gold overlay glow */}
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to top, rgba(5,7,10,0.4) 0%, transparent 50%)",
                pointerEvents: "none",
              }}
            />
          </div>
        </motion.div>

        {/* Right — countdown & copy */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left lg:pl-16"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        >
          {/* Badge */}
          <div
            className="inline-block text-[10px] font-bold tracking-[0.35em] uppercase px-4 py-2 mb-8"
            style={{
              background: "rgba(255,215,0,0.08)",
              border: "1px solid rgba(255,215,0,0.3)",
              color: "var(--gg-accent-gold)",
              borderRadius: "var(--gg-radius-agentic)",
            }}
          >
            Merch Drop · Coming Soon
          </div>

          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-none mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            THE DROP
            <br />
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "2px var(--gg-accent-gold)" }}
            >
              IS COMING.
            </span>
          </h1>

          <p
            className="text-base max-w-md leading-relaxed mb-10"
            style={{ color: "var(--gg-text-muted)" }}
          >
            Global Gallivant's first official merch collection drops on{" "}
            <strong style={{ color: "var(--gg-accent-gold)" }}>July 10, 2026</strong>.
            Limited run. No restocks. Just the gear for travelers who move different.
          </p>

          {/* Countdown */}
          <div className="flex items-start gap-4 mb-10">
            <Digit value={timeLeft.days} label="Days" />
            <div
              className="text-3xl font-black mt-8 pb-8"
              style={{ color: "var(--gg-accent-gold)", opacity: 0.5 }}
            >
              :
            </div>
            <Digit value={timeLeft.hours} label="Hours" />
            <div
              className="text-3xl font-black mt-8 pb-8"
              style={{ color: "var(--gg-accent-gold)", opacity: 0.5 }}
            >
              :
            </div>
            <Digit value={timeLeft.minutes} label="Minutes" />
            <div
              className="text-3xl font-black mt-8 pb-8"
              style={{ color: "var(--gg-accent-gold)", opacity: 0.5 }}
            >
              :
            </div>
            <Digit value={timeLeft.seconds} label="Seconds" />
          </div>

          {/* Drop date pill */}
          <div
            className="flex items-center gap-3 px-5 py-3 mb-10"
            style={{
              background: "var(--gg-bg-secondary)",
              border: "1px solid rgba(74,101,114,0.3)",
              borderRadius: "var(--gg-radius-card)",
            }}
          >
            <svg className="w-4 h-4 shrink-0" style={{ color: "var(--gg-accent-gold)" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
            </svg>
            <span className="text-sm" style={{ color: "var(--gg-text-muted)" }}>
              Drop Date: <strong style={{ color: "var(--gg-text-primary)" }}>July 10, 2026</strong>
            </span>
          </div>

          {/* Notify CTA */}
          <a
            href="https://www.patreon.com/internationalzoe"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-bold tracking-wider text-sm px-10 py-4 transition-all duration-300"
            style={{
              background: "var(--gg-accent-gold)",
              color: "#05070A",
              borderRadius: "var(--gg-radius-agentic)",
              boxShadow: "var(--gg-shadow-haptic)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 12px 40px rgba(255,215,0,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "var(--gg-shadow-haptic)";
            }}
          >
            Follow on Patreon for Updates
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Bottom strip */}
      <div
        className="text-center py-8 text-xs"
        style={{
          color: "var(--gg-text-muted)",
          opacity: 0.4,
          borderTop: "1px solid rgba(74,101,114,0.15)",
        }}
      >
        © 2026 Global Gallivant · Intercontinental Zoe — Limited Edition Drop
      </div>
    </div>
  );
}
