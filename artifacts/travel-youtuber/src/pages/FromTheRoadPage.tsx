import { useState } from "react";

const SPOTIFY_SHOW_URL = "https://open.spotify.com/show/7xBfUSgrqgTBmkrzq73YjB";
const SPOTIFY_APP_URL = "spotify:show:7xBfUSgrqgTBmkrzq73YjB";

function SpotifyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M8 5v14l11-7z"/>
    </svg>
  );
}

function MobileBanner({ onDismiss }: { onDismiss: () => void }) {
  return (
    <div
      className="md:hidden mx-4 mt-4 rounded-2xl px-4 py-3 flex items-center gap-3"
      style={{
        background: "rgba(30,215,96,0.08)",
        border: "1px solid rgba(30,215,96,0.3)",
      }}
    >
      <div
        className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
        style={{ background: "rgba(30,215,96,0.15)", color: "#1ED760" }}
      >
        <SpotifyIcon />
      </div>
      <p className="flex-1 text-xs leading-snug" style={{ color: "var(--gg-text-muted)" }}>
        <span style={{ color: "var(--gg-text-primary)", fontWeight: 700 }}>Listen like a music player.</span>
        {" "}Tap the player bar below or open directly in Spotify.
      </p>
      <button
        onClick={onDismiss}
        className="flex-shrink-0 text-lg leading-none pl-2"
        style={{ color: "var(--gg-text-muted)" }}
        aria-label="Dismiss"
      >
        ×
      </button>
    </div>
  );
}

function MobileMiniPlayer() {
  const [playing, setPlaying] = useState(false);

  function handlePlay() {
    setPlaying(true);
    // Try native Spotify app first, fallback to web
    window.location.href = SPOTIFY_APP_URL;
    setTimeout(() => {
      window.open(SPOTIFY_SHOW_URL, "_blank");
    }, 1200);
  }

  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex items-center gap-3 px-4 py-3"
      style={{
        background: "rgba(10,12,16,0.97)",
        backdropFilter: "blur(20px)",
        borderTop: "1px solid rgba(30,215,96,0.2)",
        boxShadow: "0 -4px 30px rgba(0,0,0,0.6)",
      }}
    >
      {/* Artwork */}
      <div
        className="flex-shrink-0 w-11 h-11 rounded-lg flex items-center justify-center"
        style={{ background: "linear-gradient(135deg,#1ED760 0%,#0d9f45 100%)" }}
      >
        <SpotifyIcon />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <p
          className="text-sm font-bold truncate"
          style={{ color: "var(--gg-text-primary)" }}
        >
          From the Road
        </p>
        <p
          className="text-xs truncate"
          style={{ color: "var(--gg-text-muted)" }}
        >
          Intercontinental Zoe · Global Gallivant
        </p>
      </div>

      {/* Progress bar (decorative) */}
      <div className="hidden xs:block flex-1 max-w-[80px]">
        <div className="h-1 rounded-full" style={{ background: "rgba(255,255,255,0.1)" }}>
          <div
            className="h-1 rounded-full transition-all duration-300"
            style={{
              width: playing ? "35%" : "0%",
              background: "#1ED760",
            }}
          />
        </div>
      </div>

      {/* Play button */}
      <button
        onClick={handlePlay}
        className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-150 active:scale-90"
        style={{
          background: playing ? "rgba(30,215,96,0.2)" : "#1ED760",
          color: playing ? "#1ED760" : "#000",
          border: playing ? "1px solid #1ED760" : "none",
        }}
        aria-label="Play on Spotify"
      >
        <PlayIcon />
      </button>

      {/* Spotify link */}
      <a
        href={SPOTIFY_SHOW_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-shrink-0 text-xs font-bold px-3 py-1.5 rounded-full"
        style={{
          background: "rgba(30,215,96,0.1)",
          color: "#1ED760",
          border: "1px solid rgba(30,215,96,0.3)",
        }}
      >
        Open
      </a>
    </div>
  );
}

export default function FromTheRoadPage() {
  const [bannerDismissed, setBannerDismissed] = useState(false);

  return (
    <div
      className="min-h-screen pb-20 md:pb-0"
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

      {/* Mobile notification banner */}
      {!bannerDismissed && <MobileBanner onDismiss={() => setBannerDismissed(true)} />}

      <div className="px-6 md:px-16 py-10 md:py-16">
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

          {/* Desktop: full embed */}
          <div
            className="hidden md:block rounded-2xl p-6 md:p-8"
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

          {/* Mobile: Open in Spotify card */}
          <div
            className="md:hidden rounded-2xl p-6 flex flex-col items-center text-center gap-5"
            style={{
              background: "rgba(30,215,96,0.04)",
              border: "1px solid rgba(30,215,96,0.15)",
            }}
          >
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center"
              style={{ background: "linear-gradient(135deg,#1ED760 0%,#0d9f45 100%)" }}
            >
              <svg viewBox="0 0 24 24" fill="black" className="w-10 h-10">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
              </svg>
            </div>
            <div>
              <p className="font-black text-xl mb-1" style={{ color: "var(--gg-text-primary)" }}>
                From the Road
              </p>
              <p className="text-sm" style={{ color: "var(--gg-text-muted)" }}>
                Intercontinental Zoe · Global Gallivant Podcast
              </p>
            </div>
            <a
              href={SPOTIFY_SHOW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-xl font-bold text-sm tracking-wide text-center"
              style={{ background: "#1ED760", color: "#000" }}
            >
              Open in Spotify
            </a>
            <p className="text-xs" style={{ color: "var(--gg-text-muted)" }}>
              Or tap the player bar at the bottom of your screen to listen
            </p>
          </div>
        </div>
      </div>

      {/* Mobile sticky mini player */}
      <MobileMiniPlayer />
    </div>
  );
}
