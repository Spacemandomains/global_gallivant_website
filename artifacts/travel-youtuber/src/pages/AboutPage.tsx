import { motion } from "framer-motion";

const STATS = [
  { value: "50", label: "Countries" },
  { value: "5", label: "Continents" },
  { value: "150", label: "Cities" },
  { value: "1,800", label: "Videos" },
];

const PLATFORMS = [
  { label: "Instagram", href: "https://www.instagram.com/international.zoe" },
  { label: "YouTube", href: "https://www.youtube.com/@INTERNATIONALZOE" },
  { label: "TikTok", href: "https://www.tiktok.com/@international.zoe" },
  { label: "Patreon", href: "https://www.patreon.com/internationalzoe" },
];

export default function AboutPage() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "var(--gg-bg-primary)", color: "var(--gg-text-primary)" }}
    >
      {/* Sticky nav */}
      <div
        className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-16 py-5"
        style={{
          background: "rgba(5,7,10,0.85)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(74,101,114,0.15)",
        }}
      >
        <a href="/" style={{ textDecoration: "none" }}>
          <div
            className="font-black tracking-tighter text-lg leading-none"
            style={{ fontFamily: "var(--font-display)", color: "var(--gg-text-primary)" }}
          >
            GLOBAL GALLIVANT
          </div>
          <div
            className="text-[9px] tracking-[0.25em] uppercase"
            style={{ color: "var(--gg-accent-gold)", opacity: 0.7 }}
          >
            by Intercontinental Zoe
          </div>
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

      {/* Hero split */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 pt-16 pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch min-h-[80vh]">

          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center py-16 pr-0 lg:pr-16"
          >
            <div
              className="text-xs font-bold tracking-[0.45em] uppercase mb-6"
              style={{ color: "var(--gg-accent-gold)" }}
            >
              The Founder
            </div>

            <h1
              className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none mb-8"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Inter
              <br />
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "2px var(--gg-accent-gold)" }}
              >
                national
              </span>
              <br />
              Zoe.
            </h1>

            <div
              className="w-12 h-[2px] mb-8"
              style={{ background: "var(--gg-accent-gold)" }}
            />

            <div className="space-y-5 max-w-lg">
              <p className="text-base leading-relaxed" style={{ color: "var(--gg-text-muted)" }}>
                International Zoe is a global traveler, cultural observer, and founder whose movement across continents has shaped a distinct perspective on the world.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "var(--gg-text-muted)" }}>
                From Harlem, New York to cities throughout Latin America, Africa, Europe, and Southeast Asia, he doesn't follow destinations — he defines them. Moving between environments with intention, Zoe has developed a reputation for recognizing energy, setting tone, and navigating spaces ahead of the curve.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "var(--gg-text-muted)" }}>
                His approach to travel is not about escape, but awareness — understanding how cities move, how culture shifts, and where presence matters.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "var(--gg-text-muted)" }}>
                As the founder of Global Gallivant, he channels that perspective into a brand built for those who move with purpose, think independently, and understand that influence is not announced — it's established.
              </p>
            </div>

            <div
              className="mt-10 text-lg font-black tracking-[0.15em] uppercase"
              style={{ fontFamily: "var(--font-display)", color: "var(--gg-accent-gold)" }}
            >
              Move Through The World.
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {PLATFORMS.map((p) => (
                <a
                  key={p.href}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold tracking-widest uppercase px-5 py-2.5 transition-all duration-200"
                  style={{
                    border: "1px solid rgba(74,101,114,0.35)",
                    color: "var(--gg-text-muted)",
                    borderRadius: "var(--gg-radius-agentic)",
                    background: "transparent",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--gg-accent-gold)";
                    e.currentTarget.style.borderColor = "var(--gg-accent-gold)";
                    e.currentTarget.style.background = "rgba(255,215,0,0.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--gg-text-muted)";
                    e.currentTarget.style.borderColor = "rgba(74,101,114,0.35)";
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  {p.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="relative flex items-end"
            style={{ minHeight: "600px" }}
          >
            {/* Gold accent line */}
            <div
              className="absolute left-0 top-16 bottom-0 w-[2px]"
              style={{ background: "linear-gradient(to bottom, var(--gg-accent-gold), transparent)" }}
            />

            <div
              className="relative w-full h-full overflow-hidden"
              style={{
                borderRadius: "var(--gg-radius-card) var(--gg-radius-card) 0 0",
                minHeight: "600px",
              }}
            >
              <img
                src="https://raw.githubusercontent.com/Spacemandomains/client3zoephotos/main/PHOTO-2024-07-18-07-51-34.jpg"
                alt="International Zoe"
                className="w-full h-full object-cover object-top"
                style={{ minHeight: "600px" }}
              />
              {/* Subtle gradient at bottom */}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, var(--gg-bg-primary) 0%, transparent 30%)",
                }}
              />

              {/* Floating stat cards */}
              <div className="absolute bottom-8 left-6 right-6 grid grid-cols-4 gap-2">
                {STATS.map((s) => (
                  <div
                    key={s.label}
                    className="text-center py-3 px-2"
                    style={{
                      background: "rgba(5,7,10,0.75)",
                      backdropFilter: "blur(12px)",
                      borderRadius: "var(--gg-radius-agentic)",
                      border: "1px solid rgba(255,215,0,0.15)",
                    }}
                  >
                    <div
                      className="text-xl font-black leading-none"
                      style={{ fontFamily: "var(--font-display)", color: "var(--gg-accent-gold)" }}
                    >
                      {s.value}
                    </div>
                    <div
                      className="text-[9px] tracking-widest uppercase mt-1"
                      style={{ color: "var(--gg-text-muted)" }}
                    >
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Philosophy strip */}
      <div
        className="mt-0 py-16 px-6 md:px-16"
        style={{ borderTop: "1px solid rgba(74,101,114,0.15)" }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: "Awareness Over Escape",
              body: "Travel isn't a break from life — it's an extension of it. Every city teaches something about how the world actually works.",
            },
            {
              title: "Presence Over Performance",
              body: "Influence is not announced. It's built through showing up in the right rooms, at the right time, with the right energy.",
            },
            {
              title: "Movement With Purpose",
              body: "From Harlem to Hanoi, from Lagos to Lisbon — every move is intentional. The destination matters less than what you bring to it.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
            >
              <div
                className="text-xs font-bold tracking-[0.35em] uppercase mb-3"
                style={{ color: "var(--gg-accent-gold)" }}
              >
                0{i + 1}
              </div>
              <h3
                className="text-xl font-black tracking-tight mb-3"
                style={{ fontFamily: "var(--font-display)", color: "var(--gg-text-primary)" }}
              >
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--gg-text-muted)" }}>
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="pb-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-4 items-center justify-center">
          <a
            href="/consultation"
            className="font-bold tracking-wider px-10 py-4 text-sm text-center transition-all duration-300"
            style={{
              background: "var(--gg-accent-gold)",
              color: "#05070A",
              borderRadius: "var(--gg-radius-agentic)",
              boxShadow: "var(--gg-shadow-haptic)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 8px 32px rgba(255,215,0,0.35)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "var(--gg-shadow-haptic)";
            }}
          >
            Book a Session with Zoe · $150
          </a>
          <a
            href="https://www.youtube.com/@INTERNATIONALZOE"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold tracking-wider px-10 py-4 text-sm text-center transition-all duration-300"
            style={{
              border: "1px solid rgba(74,101,114,0.4)",
              color: "var(--gg-text-primary)",
              borderRadius: "var(--gg-radius-agentic)",
              background: "var(--gg-surface-glass)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--gg-accent-gold)";
              e.currentTarget.style.color = "var(--gg-accent-gold)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(74,101,114,0.4)";
              e.currentTarget.style.color = "var(--gg-text-primary)";
            }}
          >
            Watch on YouTube
          </a>
        </div>
      </div>
    </div>
  );
}
