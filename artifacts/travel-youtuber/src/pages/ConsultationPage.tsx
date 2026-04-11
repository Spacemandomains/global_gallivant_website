import { motion } from "framer-motion";

const WHAT_YOU_GET = [
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    title: "15-Minute 1-on-1 Session",
    desc: "Focused, efficient, and packed with value. No fluff — just answers tailored to your trip.",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
      </svg>
    ),
    title: "Custom Itinerary Advice",
    desc: "Routes, neighborhoods, timing, and logistics — built around your budget and travel style.",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
      </svg>
    ),
    title: "Insider Safety & Scam Tips",
    desc: "What to avoid, what's overrated, and what only locals (and Zoe) know about your destination.",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
      </svg>
    ),
    title: "Budget Breakdown",
    desc: "Real numbers for accommodation, food, transport, and activities — from someone who paid them.",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
      </svg>
    ),
    title: "Direct Access to Zoe",
    desc: "No chatbots, no agents. You're talking directly with Intercontinental Zoe — the person who's been there.",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m6.115 5.19.319 1.913A6 6 0 0 0 8.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 0 0 2.288-4.042 1.087 1.087 0 0 0-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 0 1-.98-.314l-.295-.295a1.125 1.125 0 0 1 0-1.591l.13-.132a1.125 1.125 0 0 1 1.3-.21l.603.302a1.125 1.125 0 0 0 1.068-.689l.323-.98a1.125 1.125 0 0 0-.47-1.257l-.003-.003a1.125 1.125 0 0 0-.382-.13 5.963 5.963 0 0 0-2.074-.102" />
      </svg>
    ),
    title: "Any Destination Zoe's Visited",
    desc: "50 countries across 5 continents — if she's been there, she can walk you through it in detail.",
  },
];

const HOW_IT_WORKS = [
  { step: "01", title: "Complete Payment", desc: "Pay $150 via PayPal using the button below." },
  { step: "02", title: "Send a Message", desc: "After payment, message Zoe on Instagram or email with your receipt and preferred time slot." },
  { step: "03", title: "Get on the Call", desc: "Zoe confirms your 15-minute slot and you connect via video or voice call." },
];

export default function ConsultationPage() {
  const navigate = (path: string) => {
    window.history.pushState({}, "", path);
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return (
    <div className="min-h-screen" style={{ background: "var(--gg-bg-primary)", color: "var(--gg-text-primary)" }}>

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
          <img src="/logo.png" alt="Global Gallivant" className="h-20 w-auto object-contain drop-shadow-lg" />
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

      <div className="max-w-5xl mx-auto px-6 md:px-16 py-16">

        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="text-xs font-bold tracking-[0.4em] uppercase mb-4" style={{ color: "var(--gg-accent-gold)" }}>
            Travel Consultation
          </div>
          <h1
            className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Book Your
            <br />
            <span className="text-transparent" style={{ WebkitTextStroke: "1.5px var(--gg-accent-gold)" }}>
              15-Minute Session
            </span>
          </h1>
          <p className="text-lg max-w-xl" style={{ color: "var(--gg-text-muted)" }}>
            Get direct access to Intercontinental Zoe — 50 countries, 5 continents, 1,800 videos worth of real travel knowledge, focused entirely on your next trip.
          </p>
        </motion.div>

        {/* Main booking card + what you get */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">

          {/* Booking card */}
          <motion.div
            className="flex flex-col gap-6 p-8"
            style={{
              background: "linear-gradient(135deg, rgba(255,215,0,0.08) 0%, rgba(255,215,0,0.02) 100%)",
              border: "1px solid rgba(255,215,0,0.25)",
              borderRadius: "var(--gg-radius-card)",
              boxShadow: "var(--gg-shadow-haptic)",
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div>
              <div className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "var(--gg-text-muted)" }}>
                One-Time Payment
              </div>
              <div className="flex items-end gap-3 mb-1">
                <span
                  className="text-7xl font-black leading-none"
                  style={{ fontFamily: "var(--font-display)", color: "var(--gg-accent-gold)" }}
                >
                  $150
                </span>
              </div>
              <div className="text-sm font-medium" style={{ color: "var(--gg-text-muted)" }}>
                for a 15-minute 1-on-1 session with Zoe
              </div>
            </div>

            <div className="h-px" style={{ background: "rgba(255,215,0,0.12)" }} />

            <ul className="space-y-3 text-sm" style={{ color: "var(--gg-text-muted)" }}>
              {["15 min focused session", "Any destination Zoe has visited", "Custom itinerary + insider tips", "Budget & safety breakdown", "Direct with Intercontinental Zoe"].map(item => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ background: "rgba(255,215,0,0.12)" }}>
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} style={{ color: "var(--gg-accent-gold)" }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="h-px" style={{ background: "rgba(255,215,0,0.12)" }} />

            {/* PayPal CTA */}
            <a
              href="https://paypal.me/barberworldtv/150"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 text-base font-black tracking-wide transition-all"
              style={{
                background: "var(--gg-accent-gold)",
                color: "#05070A",
                borderRadius: "var(--gg-radius-agentic)",
                textDecoration: "none",
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "0.9")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c1.379 2.608.517 5.71-2.159 7.222a7.02 7.02 0 0 1-3.354.826H12.43l-.98 6.219h2.373c.459 0 .85-.334.922-.787l.038-.196.735-4.653.047-.257a.932.932 0 0 1 .92-.787h.582c3.754 0 6.691-1.525 7.548-5.935.359-1.845.174-3.386-.793-4.469z"/>
              </svg>
              Pay $150 with PayPal
            </a>

            <p className="text-xs text-center" style={{ color: "var(--gg-text-muted)", opacity: 0.5 }}>
              After payment, DM Zoe on Instagram or email with your receipt to schedule your time slot.
            </p>
          </motion.div>

          {/* What you get */}
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="text-2xl font-black tracking-tight mb-2" style={{ fontFamily: "var(--font-display)" }}>
              What's Included
            </h2>
            {WHAT_YOU_GET.map((item) => (
              <div
                key={item.title}
                className="flex gap-4 p-4"
                style={{
                  background: "var(--gg-surface-glass)",
                  border: "1px solid var(--gg-accent-slate)",
                  borderRadius: "16px",
                  backdropFilter: "var(--gg-surface-blur)",
                }}
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "rgba(255,215,0,0.1)", color: "var(--gg-accent-gold)" }}
                >
                  {item.icon}
                </div>
                <div>
                  <div className="text-sm font-bold mb-0.5" style={{ color: "var(--gg-text-primary)" }}>
                    {item.title}
                  </div>
                  <div className="text-xs leading-relaxed" style={{ color: "var(--gg-text-muted)" }}>
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* How it works */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-black tracking-tight mb-8 text-center" style={{ fontFamily: "var(--font-display)" }}>
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {HOW_IT_WORKS.map((step, i) => (
              <motion.div
                key={step.step}
                className="text-center p-6"
                style={{
                  background: "var(--gg-surface-glass)",
                  border: "1px solid var(--gg-accent-slate)",
                  borderRadius: "var(--gg-radius-card)",
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div
                  className="text-5xl font-black mb-3"
                  style={{ fontFamily: "var(--font-display)", color: "rgba(255,215,0,0.2)" }}
                >
                  {step.step}
                </div>
                <div className="text-base font-bold mb-2" style={{ color: "var(--gg-text-primary)" }}>
                  {step.title}
                </div>
                <div className="text-sm" style={{ color: "var(--gg-text-muted)" }}>
                  {step.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center py-12 px-8"
          style={{
            background: "linear-gradient(135deg, rgba(255,215,0,0.06) 0%, rgba(255,215,0,0.02) 100%)",
            border: "1px solid rgba(255,215,0,0.15)",
            borderRadius: "var(--gg-radius-card)",
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-3xl font-black tracking-tight mb-3" style={{ fontFamily: "var(--font-display)" }}>
            Ready to Plan Your Trip?
          </h3>
          <p className="text-sm mb-8 max-w-md mx-auto" style={{ color: "var(--gg-text-muted)" }}>
            15 minutes with Zoe can save you weeks of research and hundreds of dollars in mistakes. Let's get your trip right.
          </p>
          <a
            href="https://paypal.me/barberworldtv/150"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 py-4 px-8 text-base font-black tracking-wide transition-all"
            style={{
              background: "var(--gg-accent-gold)",
              color: "#05070A",
              borderRadius: "var(--gg-radius-agentic)",
              textDecoration: "none",
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.9")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c1.379 2.608.517 5.71-2.159 7.222a7.02 7.02 0 0 1-3.354.826H12.43l-.98 6.219h2.373c.459 0 .85-.334.922-.787l.038-.196.735-4.653.047-.257a.932.932 0 0 1 .92-.787h.582c3.754 0 6.691-1.525 7.548-5.935.359-1.845.174-3.386-.793-4.469z"/>
            </svg>
            Book Now — $150 via PayPal
          </a>
        </motion.div>

      </div>
    </div>
  );
}
