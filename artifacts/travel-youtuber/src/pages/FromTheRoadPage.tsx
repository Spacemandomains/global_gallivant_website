export default function FromTheRoadPage() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "var(--gg-bg-primary)", color: "var(--gg-text-primary)" }}
    >
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

      <div className="px-6 md:px-16 py-16">
        <div className="max-w-3xl mx-auto">
          <h1
            className="text-4xl md:text-5xl font-black tracking-tight mb-4"
            style={{ fontFamily: "var(--font-display)", color: "var(--gg-text-primary)" }}
          >
            From the Road
          </h1>
          <p
            className="text-lg mb-12"
            style={{ color: "var(--gg-text-muted)" }}
          >
            Stories, lessons, and dispatches from 50 countries — straight from Intercontinental Zoe.
          </p>

          <div
            className="rounded-2xl p-6 md:p-8"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(74,101,114,0.2)",
            }}
          >
            <iframe
              data-testid="embed-iframe"
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/show/7xBfUSgrqgTBmkrzq73YjB?utm_source=generator"
              width="100%"
              height="352"
              frameBorder={0}
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
