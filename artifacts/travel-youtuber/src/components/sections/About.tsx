import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-16 overflow-hidden" style={{ background: "var(--gg-bg-secondary)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Photo */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Gold glow behind photo */}
            <div
              className="absolute -inset-4 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse at 40% 60%, var(--gg-accent-gold-glow) 0%, transparent 65%)",
                borderRadius: "var(--gg-radius-card)",
              }}
            />

            <div
              className="relative overflow-hidden"
              style={{
                borderRadius: "var(--gg-radius-card)",
                boxShadow: "var(--gg-shadow-haptic)",
                aspectRatio: "3/4",
              }}
            >
              <img
                src={`${import.meta.env.BASE_URL}images/zoe.jpg`}
                alt="Intercontinental Zoe — Founder of Global Gallivant"
                className="w-full h-full object-cover object-top"
              />
              {/* Subtle gradient at bottom for text legibility */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1/3"
                style={{
                  background: "linear-gradient(to top, var(--gg-bg-secondary) 0%, transparent 100%)",
                }}
              />
            </div>

            {/* Floating stat badge */}
            <motion.div
              className="absolute -bottom-6 -right-4 md:-right-8 px-6 py-4"
              style={{
                background: "var(--gg-accent-gold)",
                borderRadius: "var(--gg-radius-card)",
                boxShadow: "var(--gg-shadow-haptic)",
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div
                className="text-3xl font-black leading-none"
                style={{ fontFamily: "var(--font-display)", color: "#05070A" }}
              >
                50
              </div>
              <div className="text-xs font-bold tracking-widest uppercase" style={{ color: "#05070A", opacity: 0.7 }}>
                Countries
              </div>
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            <div
              className="text-xs font-bold tracking-[0.4em] uppercase mb-4"
              style={{ color: "var(--gg-accent-gold)" }}
            >
              The Creator
            </div>

            <h2
              className="text-5xl md:text-6xl font-black tracking-tighter leading-none mb-6"
              style={{ fontFamily: "var(--font-display)", color: "var(--gg-text-primary)" }}
            >
              Meet
              <br />
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1.5px var(--gg-accent-gold)" }}
              >
                Intercontinental
              </span>
              <br />
              Zoe.
            </h2>

            {/* Gold divider */}
            <div
              className="mb-6 h-[2px] w-12"
              style={{ background: "var(--gg-accent-gold)" }}
            />

            <div className="space-y-4">
              <p className="text-base leading-relaxed" style={{ color: "var(--gg-text-muted)" }}>
                Zoe isn't your typical travel content creator — she's a full-time global citizen who has spent years living in, working from, and deeply exploring 50 countries across 5 continents.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "var(--gg-text-muted)" }}>
                From the street food stalls of Ho Chi Minh City to the colonial plazas of Cartagena, every recommendation, guide, and consultation comes from places she's actually walked, eaten, slept, and gotten lost in.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "var(--gg-text-muted)" }}>
                Global Gallivant is her way of turning real-world experience into actionable help for travelers who want more than a checklist — they want to actually feel somewhere.
              </p>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="/consultation"
                className="font-bold tracking-wider px-8 py-4 text-sm text-center"
                style={{
                  background: "var(--gg-accent-gold)",
                  color: "#05070A",
                  borderRadius: "var(--gg-radius-agentic)",
                  boxShadow: "var(--gg-shadow-haptic)",
                  transition: "var(--gg-transition-fluid)",
                }}
              >
                Book a Session with Zoe
              </a>
              <a
                href="#destinations"
                className="font-bold tracking-wider px-8 py-4 text-sm text-center"
                style={{
                  border: "1px solid var(--gg-accent-slate)",
                  color: "var(--gg-text-primary)",
                  borderRadius: "var(--gg-radius-agentic)",
                  background: "var(--gg-surface-glass)",
                  backdropFilter: "var(--gg-surface-blur)",
                  transition: "var(--gg-transition-fluid)",
                }}
              >
                See All Destinations
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
