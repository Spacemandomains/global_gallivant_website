const LINKS = {
  Services: [
    { label: "Travel Consultations", href: "/consultation" },
    { label: "Travel Guides", href: "https://www.patreon.com/internationalzoe/shop" },
    { label: "Local Rentals", href: "/rentals" },
    { label: "Merchandise", href: "#merch" },
  ],
  Explore: [
    { label: "Destinations", href: "https://www.youtube.com/@INTERNATIONALZOE/playlists" },
    { label: "From the Road", href: "#" },
    { label: "About Zoe", href: "/about" },
    { label: "Contact", href: "#" },
  ],
};

const SOCIAL_LINKS = [
  {
    label: "YouTube",
    href: "https://www.youtube.com/@INTERNATIONALZOE",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/intzoe",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
      </svg>
    ),
  },
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
    label: "X (Twitter)",
    href: "https://x.com/intlzoe",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
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
    label: "Patreon",
    href: "https://www.patreon.com/internationalzoe",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14.82 2.41C18.78 2.41 22 5.65 22 9.62c0 3.96-3.22 7.18-7.18 7.18-3.95 0-7.17-3.22-7.17-7.18 0-3.97 3.22-7.21 7.17-7.21zM2 21.6h3.5V2.41H2V21.6z"/>
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
];

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
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
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

        {/* Social icons — centered */}
        <div
          className="flex justify-center items-center gap-3 py-8"
          style={{ borderTop: "1px solid rgba(74,101,114,0.2)", borderBottom: "1px solid rgba(74,101,114,0.2)" }}
        >
          {SOCIAL_LINKS.map((s) => (
            <a
              key={s.href}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="flex items-center justify-center w-9 h-9 rounded-full transition-all duration-200"
              style={{
                color: "var(--gg-text-muted)",
                border: "1px solid rgba(74,101,114,0.3)",
                background: "transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--gg-accent-gold)";
                e.currentTarget.style.borderColor = "var(--gg-accent-gold)";
                e.currentTarget.style.background = "rgba(255,215,0,0.06)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--gg-text-muted)";
                e.currentTarget.style.borderColor = "rgba(74,101,114,0.3)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="text-xs" style={{ color: "var(--gg-text-muted)", opacity: 0.5 }}>
            © 2025 Global Gallivant · Intercontinental Zoe. All rights reserved.
          </div>
          <div className="flex gap-6">
            {[
              { label: "Privacy", href: "/privacy" },
              { label: "Terms", href: "/terms" },
              { label: "Contact", href: "mailto:globalgallivantzoe@gmail.com" },
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
