import { motion } from "framer-motion";

const AIRBNB_ICON = (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.001 1.5C6.201 1.5 1.5 6.201 1.5 12.001S6.201 22.5 12.001 22.5 22.5 17.799 22.5 12.001 17.801 1.5 12.001 1.5zm0 1.5c4.97 0 9.001 4.029 9.001 9.001 0 4.97-4.031 9.001-9.001 9.001-4.972 0-9.001-4.031-9.001-9.001C3 6.529 7.029 3 12.001 3zm-.5 3.5c-1.38 0-2.5 1.567-2.5 3.5 0 .786.213 1.513.567 2.097C8.45 12.612 7.5 13.695 7.5 15c0 1.657 1.79 3 4 3s4-1.343 4-3c0-1.305-.95-2.388-2.068-2.903C13.787 11.513 14 10.786 14 10c0-1.933-1.12-3.5-2.499-3.5zM12 8c.552 0 1 .897 1 2s-.448 2-1 2-1-.897-1-2 .448-2 1-2zm-.5 5.5h1c1.105 0 2 .672 2 1.5S12.605 16.5 11.5 16.5c-1.104 0-2-.672-2-1.5s.896-1.5 2-1.5z"/>
  </svg>
);

const VRBO_ICON = (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 2c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8zm-1 3v2H8l4 8 4-8h-3V7h-2z"/>
  </svg>
);

const PROPERTIES = [
  {
    platform: "airbnb",
    name: "Intercontinental Zoe's Place",
    location: "Zoe's Personal Listing",
    desc: "Stay where Zoe stays. A handpicked space that reflects her standard for comfort, location, and everything a traveler actually needs.",
    url: "https://airbnb.com/h/internationalzoe",
    badge: "Airbnb · Zoe's Pick",
  },
  {
    platform: "airbnb",
    name: "Hudson Valley Retreat",
    location: "Hudson Valley, New York",
    desc: "A peaceful retreat in New York's Hudson Valley — great nature, charming towns, and easy access to NYC. Perfect for a getaway.",
    url: "https://airbnb.com/h/hudsonvalleyretreat",
    badge: "Airbnb · Hudson Valley",
  },
  {
    platform: "airbnb",
    name: "Hudson Valley Home",
    location: "Hudson Valley, New York",
    desc: "A full home in the heart of Hudson Valley. Space, comfort, and the kind of slow travel Zoe recommends for anyone wanting to actually feel somewhere.",
    url: "https://airbnb.com/h/hudsonvallethome",
    badge: "Airbnb · Hudson Valley",
  },
];

const VRBO_LINKS = [
  {
    name: "VRBO Property 1",
    url: "https://vrbo.onelink.me/ItNz/w8u3tztz",
    desc: "Book this property directly through VRBO — Zoe-vetted and ready for your next trip.",
  },
  {
    name: "VRBO Property 2",
    url: "https://vrbo.onelink.me/ItNz/vrovutnm",
    desc: "A quality short-term rental available on VRBO. Check availability and book your dates directly.",
  },
  {
    name: "VRBO Property 3",
    url: "https://vrbo.onelink.me/ItNz/8k0itjue",
    desc: "Another hand-selected VRBO listing from Zoe's rental portfolio. Click through to see photos and availability.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
};

function PropertyCard({
  name,
  location,
  desc,
  url,
  badge,
  delay = 0,
}: {
  name: string;
  location: string;
  desc: string;
  url: string;
  badge: string;
  delay?: number;
}) {
  return (
    <motion.div
      {...fadeUp}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
      className="flex flex-col justify-between p-8 h-full"
      style={{
        background: "var(--gg-bg-secondary)",
        border: "1px solid rgba(74,101,114,0.25)",
        borderRadius: "var(--gg-radius-card)",
        boxShadow: "var(--gg-shadow-haptic)",
      }}
    >
      <div>
        <div
          className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1.5 mb-5"
          style={{
            background: "var(--gg-accent-gold)",
            color: "#05070A",
            borderRadius: "var(--gg-radius-agentic)",
          }}
        >
          {badge}
        </div>
        <h3
          className="text-xl font-black tracking-tight mb-1 leading-tight"
          style={{ fontFamily: "var(--font-display)", color: "var(--gg-text-primary)" }}
        >
          {name}
        </h3>
        <p className="text-xs font-semibold tracking-wider mb-4" style={{ color: "var(--gg-accent-gold)", opacity: 0.8 }}>
          {location}
        </p>
        <p className="text-sm leading-relaxed" style={{ color: "var(--gg-text-muted)" }}>
          {desc}
        </p>
      </div>

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex items-center justify-center gap-2 font-bold tracking-wider text-sm py-3.5 px-6 transition-all duration-300 w-full"
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
        Book on Airbnb
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>
      </a>
    </motion.div>
  );
}

function VrboCard({
  name,
  desc,
  url,
  delay = 0,
}: {
  name: string;
  desc: string;
  url: string;
  delay?: number;
}) {
  return (
    <motion.div
      {...fadeUp}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
      className="flex flex-col justify-between p-8 h-full"
      style={{
        background: "var(--gg-bg-secondary)",
        border: "1px solid rgba(74,101,114,0.25)",
        borderRadius: "var(--gg-radius-card)",
        boxShadow: "var(--gg-shadow-haptic)",
      }}
    >
      <div>
        <div
          className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1.5 mb-5"
          style={{
            background: "rgba(0,113,194,0.12)",
            color: "#4BA3C3",
            border: "1px solid rgba(75,163,195,0.3)",
            borderRadius: "var(--gg-radius-agentic)",
          }}
        >
          VRBO · Vacation Rental
        </div>
        <h3
          className="text-xl font-black tracking-tight mb-4 leading-tight"
          style={{ fontFamily: "var(--font-display)", color: "var(--gg-text-primary)" }}
        >
          {name}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: "var(--gg-text-muted)" }}>
          {desc}
        </p>
      </div>

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex items-center justify-center gap-2 font-bold tracking-wider text-sm py-3.5 px-6 transition-all duration-300 w-full"
        style={{
          background: "transparent",
          color: "#4BA3C3",
          border: "1px solid rgba(75,163,195,0.4)",
          borderRadius: "var(--gg-radius-agentic)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "rgba(75,163,195,0.1)";
          e.currentTarget.style.borderColor = "#4BA3C3";
          e.currentTarget.style.transform = "translateY(-2px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "transparent";
          e.currentTarget.style.borderColor = "rgba(75,163,195,0.4)";
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        Book on VRBO
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>
      </a>
    </motion.div>
  );
}

export default function RentalsPage() {
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

      {/* Hero */}
      <div className="max-w-6xl mx-auto px-6 md:px-16 pt-20 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            className="text-xs font-bold tracking-[0.4em] uppercase mb-5"
            style={{ color: "var(--gg-accent-gold)" }}
          >
            Curated by Intercontinental Zoe
          </div>
          <h1
            className="text-6xl md:text-7xl font-black tracking-tighter leading-none mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Stay
            <br />
            <span className="text-transparent" style={{ WebkitTextStroke: "2px var(--gg-accent-gold)" }}>
              Somewhere Real.
            </span>
          </h1>
          <p
            className="text-base max-w-xl leading-relaxed"
            style={{ color: "var(--gg-text-muted)" }}
          >
            Properties hand-selected and listed by Intercontinental Zoe — available to book directly on
            Airbnb and VRBO. No middlemen, no mystery. Just great places to stay.
          </p>

          {/* Platform pills */}
          <div className="flex flex-wrap gap-3 mt-8">
            {[
              { label: "Airbnb", color: "#FF5A5F" },
              { label: "VRBO", color: "#4BA3C3" },
            ].map(({ label, color }) => (
              <span
                key={label}
                className="text-xs font-semibold tracking-wider px-4 py-2"
                style={{
                  border: `1px solid ${color}40`,
                  color,
                  borderRadius: "var(--gg-radius-agentic)",
                  background: `${color}0A`,
                }}
              >
                {label}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Airbnb Section */}
      <div className="max-w-6xl mx-auto px-6 md:px-16 pb-16">
        <motion.div
          {...fadeUp}
          className="flex items-center gap-4 mb-8"
        >
          <div
            className="flex items-center gap-2.5 text-sm font-bold tracking-[0.25em] uppercase"
            style={{ color: "#FF5A5F" }}
          >
            <svg className="w-5 h-5" viewBox="0 0 32 32" fill="currentColor">
              <path d="M16 1C8.268 1 2 7.268 2 15c0 4.892 2.556 9.174 6.4 11.664L16 31l7.6-4.336C27.444 24.174 30 19.892 30 15c0-7.732-6.268-14-14-14zm0 9c1.654 0 3 1.794 3 4s-1.346 4-3 4-3-1.794-3-4 1.346-4 3-4zm0 14c-2.966 0-5.59-1.488-7.168-3.744C10.516 18.58 13.09 17 16 17s5.484 1.58 7.168 3.256C21.59 22.512 18.966 24 16 24z"/>
            </svg>
            Airbnb Properties
          </div>
          <div className="flex-1 h-px" style={{ background: "rgba(255,90,95,0.2)" }} />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROPERTIES.map((p, i) => (
            <PropertyCard key={p.url} {...p} delay={i * 0.1} />
          ))}
        </div>
      </div>

      {/* VRBO Section */}
      <div className="max-w-6xl mx-auto px-6 md:px-16 pb-16">
        <motion.div
          {...fadeUp}
          className="flex items-center gap-4 mb-8"
        >
          <div
            className="flex items-center gap-2.5 text-sm font-bold tracking-[0.25em] uppercase"
            style={{ color: "#4BA3C3" }}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
            </svg>
            VRBO Listings
          </div>
          <div className="flex-1 h-px" style={{ background: "rgba(75,163,195,0.2)" }} />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {VRBO_LINKS.map((v, i) => (
            <VrboCard key={v.url} {...v} delay={i * 0.1} />
          ))}
        </div>
      </div>

      {/* Notice */}
      <div className="max-w-6xl mx-auto px-6 md:px-16 pb-24">
        <motion.div
          {...fadeUp}
          className="flex gap-4 items-start p-6 text-sm"
          style={{
            borderRadius: "var(--gg-radius-card)",
            border: "1px solid rgba(74,101,114,0.2)",
            background: "rgba(74,101,114,0.04)",
            color: "var(--gg-text-muted)",
          }}
        >
          <svg
            className="w-5 h-5 shrink-0 mt-0.5"
            style={{ color: "var(--gg-accent-gold)" }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
          </svg>
          <div>
            <strong style={{ color: "var(--gg-text-primary)" }}>Booking Policy</strong>
            <p className="mt-1 leading-relaxed">
              All bookings are completed directly through Airbnb or VRBO. Pricing, availability, and
              cancellation policies are set and managed by those platforms. Global Gallivant does not
              process payments or issue refunds for rental bookings. See our{" "}
              <a href="/terms" style={{ color: "var(--gg-accent-gold)" }}>
                Terms of Service
              </a>{" "}
              for full details.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
