const SPOTIFY_EMBED_URL = "https://open.spotify.com/embed/show/7xBfUSgrqgTBmkrzq73YjB?utm_source=generator";

export default function FromTheRoadPage() {
  return (
    <div
      className="min-h-screen"
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

      <div className="px-6 md:px-16 py-10 md:py-16">
        <div className="max-w-3xl mx-auto">
          <h1
            className="text-4xl md:text-5xl font-black tracking-tight mb-4"
            style={{ fontFamily: "var(--font-display)", color: "var(--gg-text-primary)" }}
          >
            From the Road with Zoe
          </h1>
          <div className="mb-12 space-y-5">
            <p className="text-lg leading-relaxed" style={{ color: "var(--gg-text-muted)" }}>
              <span style={{ color: "var(--gg-text-primary)", fontWeight: 700 }}>"From the Road with Zoe"</span> is an immersive audio experience that brings the energy of global travel directly to your ears. Whether you're browsing the site, working out, jogging, or just moving through your day, this is something you can press play on and let it ride.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: "var(--gg-text-muted)" }}>
              Blending real audio from street interviews, nightlife moments, and personal experiences from around the world, Zoe captures what it truly feels like to be outside — meeting new people, discovering fascinating locations, and living life with style and good vibes.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: "var(--gg-text-muted)" }}>
              Guided by Zoe's signature smooth baritone voice — it's like music.
            </p>
          </div>

          <div
            className="rounded-2xl p-4 md:p-8"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(74,101,114,0.2)",
            }}
          >
            <iframe
              data-testid="embed-iframe"
              style={{ borderRadius: "12px" }}
              src={SPOTIFY_EMBED_URL}
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
