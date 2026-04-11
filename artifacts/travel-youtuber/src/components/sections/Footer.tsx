const LINKS = {
  Services: [
    { label: "Travel Consultations", href: "#consultations" },
    { label: "Travel Guides", href: "https://www.patreon.com/internationalzoe/shop" },
    { label: "Local Rentals", href: "/rentals" },
    { label: "Merchandise", href: "#merch" },
  ],
  Explore: [
    { label: "Destinations", href: "#destinations" },
    { label: "From the Road", href: "#" },
    { label: "About Zoe", href: "#" },
    { label: "Contact", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer
      className="py-16 px-6 md:px-16"
      style={{
        background: "var(--gg-bg-secondary)",
        borderTop: "1px solid rgba(74,101,114,0.3)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div
              className="font-black tracking-tighter text-2xl leading-none mb-2"
              style={{ fontFamily: "var(--font-display)", color: "var(--gg-text-primary)" }}
            >
              GLOBAL GALLIVANT
            </div>
            <div
              className="text-[10px] tracking-[0.25em] uppercase mb-4"
              style={{ color: "var(--gg-accent-gold)", opacity: 0.7 }}
            >
              by Intercontinental Zoe
            </div>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "var(--gg-text-muted)" }}>
              Consultations, guides, rentals, and gear for the traveler who goes beyond the tourist trail.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([heading, links]) => (
            <div key={heading}>
              <div
                className="text-[10px] font-bold tracking-[0.3em] uppercase mb-5"
                style={{ color: "var(--gg-accent-slate)" }}
              >
                {heading}
              </div>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm transition-colors duration-200"
                      style={{ color: "var(--gg-text-muted)", transition: "var(--gg-transition-fluid)" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gg-accent-gold)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--gg-text-muted)")}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(74,101,114,0.2)" }}
        >
          <div className="text-xs" style={{ color: "var(--gg-text-muted)", opacity: 0.5 }}>
            © 2025 Global Gallivant · Intercontinental Zoe. All rights reserved.
          </div>
          <div className="flex gap-6">
            {[
              { label: "Privacy", href: "/privacy" },
              { label: "Terms", href: "/terms" },
              { label: "Contact", href: "mailto:hello@globalgallivant.com" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs transition-colors duration-200"
                style={{ color: "var(--gg-text-muted)", opacity: 0.5, transition: "var(--gg-transition-fluid)" }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "var(--gg-accent-gold)"; e.currentTarget.style.opacity = "1"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "var(--gg-text-muted)"; e.currentTarget.style.opacity = "0.5"; }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
