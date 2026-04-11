import { motion } from "framer-motion";

const SERVICES = [
  {
    id: "consultations",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
      </svg>
    ),
    title: "Travel Consultations",
    price: "$150 · 15 min",
    description:
      "A focused 15-minute 1-on-1 session with Zoe. Get insider routes, budget breakdowns, safety tips, and a custom itinerary built around your travel style — from someone who's actually been there.",
    cta: "Book a Session",
    href: "/consultation",
    featured: true,
  },
  {
    id: "guides",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    title: "Travel Guides",
    price: "From $19",
    description:
      "In-depth digital guides for every destination Zoe has visited. Neighborhoods, hidden restaurants, transport hacks, safety notes, and must-see spots — no fluff, just what actually works.",
    cta: "Get a Guide",
    href: "https://www.patreon.com/internationalzoe/shop",
    featured: false,
  },
  {
    id: "rentals",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
      </svg>
    ),
    title: "Local Rentals",
    price: "Varies by destination",
    description:
      "Accommodations, vehicles, and curated local experiences at Zoe's visited destinations — vetted personally. Skip the search. Rent what she actually used and trusted.",
    cta: "Browse Rentals",
    href: "/rentals",
    featured: false,
  },
  {
    id: "merch",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007Z" />
      </svg>
    ),
    title: "Merchandise",
    price: "From $25",
    description:
      "Global Gallivant branded apparel, accessories, and travel gear. Built for the road. Designed for the traveler who moves with intention.",
    cta: "Shop Now",
    href: "/merch",
    featured: false,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 md:px-16" style={{ background: "var(--gg-bg-primary)" }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div
            className="text-xs font-bold tracking-[0.4em] uppercase mb-4"
            style={{ color: "var(--gg-accent-gold)" }}
          >
            What We Offer
          </div>
          <h2
            className="text-5xl md:text-6xl font-black tracking-tighter leading-none"
            style={{ fontFamily: "var(--font-display)", color: "var(--gg-text-primary)" }}
          >
            Travel Smarter.
            <br />
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "1.5px var(--gg-accent-gold)" }}
            >
              Live Richer.
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.id}
              id={service.id}
              className="relative flex flex-col gap-6 overflow-hidden"
              style={{
                background: service.featured
                  ? "linear-gradient(135deg, rgba(255,215,0,0.08) 0%, rgba(255,215,0,0.03) 100%)"
                  : "var(--gg-surface-glass)",
                border: service.featured
                  ? "1px solid rgba(255,215,0,0.3)"
                  : "1px solid var(--gg-accent-slate)",
                borderRadius: "var(--gg-radius-card)",
                padding: "2rem",
                backdropFilter: "var(--gg-surface-blur)",
                boxShadow: service.featured ? "var(--gg-shadow-haptic)" : "none",
                transition: "var(--gg-transition-fluid)",
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
            >
              {service.featured && (
                <div
                  className="absolute -top-24 -left-24 w-72 h-72 rounded-full pointer-events-none"
                  style={{
                    background: "radial-gradient(circle, var(--gg-accent-gold-glow) 0%, transparent 70%)",
                  }}
                />
              )}

              <div style={{ color: service.featured ? "var(--gg-accent-gold)" : "var(--gg-accent-slate)" }}>
                {service.icon}
              </div>

              <div className="flex-1">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3
                    className="text-2xl font-black tracking-tight leading-tight"
                    style={{ fontFamily: "var(--font-display)", color: "var(--gg-text-primary)" }}
                  >
                    {service.title}
                  </h3>
                  <span
                    className="text-sm font-bold shrink-0 pt-1"
                    style={{ color: service.featured ? "var(--gg-accent-gold)" : "var(--gg-text-muted)" }}
                  >
                    {service.price}
                  </span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "var(--gg-text-muted)" }}>
                  {service.description}
                </p>
              </div>

              <a
                href={(service as { href?: string }).href ?? `#${service.id}`}
                target={((service as { href?: string }).href ?? "").startsWith("http") ? "_blank" : undefined}
                rel={((service as { href?: string }).href ?? "").startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-2 text-sm font-bold tracking-wider w-fit"
                style={{
                  background: service.featured ? "var(--gg-accent-gold)" : "transparent",
                  color: service.featured ? "#05070A" : "var(--gg-text-primary)",
                  border: service.featured ? "none" : "1px solid var(--gg-accent-slate)",
                  borderRadius: "var(--gg-radius-agentic)",
                  padding: "0.75rem 1.5rem",
                  transition: "var(--gg-transition-fluid)",
                }}
              >
                {service.cta}
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
