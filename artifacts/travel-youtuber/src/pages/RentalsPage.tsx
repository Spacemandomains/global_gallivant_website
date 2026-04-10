import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const AMENITY_ICON: Record<string, JSX.Element> = {
  wifi: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z" />
    </svg>
  ),
  ac: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
    </svg>
  ),
  kitchen: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
    </svg>
  ),
  washer: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
  ),
  pool: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253" />
    </svg>
  ),
  workspace: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0H3" />
    </svg>
  ),
  beach: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364-.707-.707M6.343 6.343l-.707-.707m12.728 0-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
    </svg>
  ),
  parking: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
    </svg>
  ),
  shopping: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
    </svg>
  ),
  gym: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  ),
};

const RENTALS = [
  {
    id: "bossa-beach",
    name: "Bossa Beach Condo",
    tagline: "Bossa Beach Condo",
    location: "Rio de Janeiro, Brazil",
    neighborhood: "Beachfront · Rio de Janeiro",
    description:
      "A stunning beachfront condo in the heart of Rio de Janeiro with breathtaking ocean views. Wake up to the sound of waves and enjoy easy access to Rio's iconic beaches, vibrant food scene, and cultural landmarks — all curated from Zoe's personal experience living here.",
    type: "Entire Condo",
    guests: 4,
    bedrooms: 2,
    bathrooms: 1,
    price: "Price TBD",
    priceNote: "per night",
    images: ["bossa_beach_exterior.jpg", "bossa_beach_interior.jpg"],
    amenities: [
      { key: "wifi", label: "High-Speed Wi-Fi" },
      { key: "ac", label: "Air Conditioning" },
      { key: "kitchen", label: "Full Kitchen" },
      { key: "beach", label: "Beach Access" },
      { key: "pool", label: "Pool Access" },
      { key: "workspace", label: "Dedicated Workspace" },
    ],
    bookingUrl: "https://google.com",
    bookingPlatform: "Google",
    badge: "Rio de Janeiro · Brazil",
    airbnbUrl: "https://www.airbnb.com/rooms/1282871117993975231",
  },
  {
    id: "woodbury-3br",
    name: "Modern 3BR Near Woodbury Commons",
    tagline: "Modern 3BR Near Woodbury Commons",
    location: "Woodbury, New York",
    neighborhood: "Minutes to Woodbury Commons · New York",
    description:
      "A spacious and stylishly furnished 3-bedroom home just minutes from Woodbury Commons Premium Outlets — one of the largest outlet shopping destinations in the US. Perfect for families or groups who want comfort, space, and easy access to top shopping, dining, and New York's Hudson Valley.",
    type: "Entire Home",
    guests: 6,
    bedrooms: 3,
    bathrooms: 2,
    price: "Price TBD",
    priceNote: "per night",
    images: ["woodbury_3br_interior.jpg", "woodbury_3br_exterior.jpg"],
    amenities: [
      { key: "wifi", label: "High-Speed Wi-Fi" },
      { key: "ac", label: "Air Conditioning" },
      { key: "kitchen", label: "Full Kitchen" },
      { key: "washer", label: "Washer & Dryer" },
      { key: "parking", label: "Free Parking" },
      { key: "shopping", label: "Near Woodbury Commons" },
    ],
    bookingUrl: "https://google.com",
    bookingPlatform: "Google",
    badge: "Woodbury · New York",
    airbnbUrl: "https://www.airbnb.com/rooms/1611627841243353963",
  },
  {
    id: "woodbury-1br",
    name: "Modern 1BR Near Woodbury Commons",
    tagline: "Modern 1BR Near Woodbury Commons",
    location: "Woodbury, New York",
    neighborhood: "Minutes to Woodbury Commons · New York",
    description:
      "A sleek, modern 1-bedroom retreat perfect for couples or solo travelers visiting the New York area. Steps from Woodbury Commons Premium Outlets and close to great restaurants, hiking trails, and easy access into NYC. Clean, comfortable, and completely self-contained.",
    type: "Entire Apartment",
    guests: 2,
    bedrooms: 1,
    bathrooms: 1,
    price: "Price TBD",
    priceNote: "per night",
    images: ["woodbury_1br_interior.jpg", "woodbury_commons.jpg"],
    amenities: [
      { key: "wifi", label: "High-Speed Wi-Fi" },
      { key: "ac", label: "Air Conditioning" },
      { key: "kitchen", label: "Full Kitchen" },
      { key: "washer", label: "Washer & Dryer" },
      { key: "parking", label: "Free Parking" },
      { key: "shopping", label: "Near Woodbury Commons" },
    ],
    bookingUrl: "https://google.com",
    bookingPlatform: "Google",
    badge: "Woodbury · New York",
    airbnbUrl: "https://www.airbnb.com/rooms/1611649956545320764",
  },
];

function RentalCard({ rental, reverse }: { rental: typeof RENTALS[0]; reverse?: boolean }) {
  const [imgIdx, setImgIdx] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden ${reverse ? "lg:[&>*:first-child]:order-last" : ""}`}
      style={{
        borderRadius: "var(--gg-radius-card)",
        border: "1px solid rgba(74,101,114,0.25)",
        background: "var(--gg-bg-secondary)",
        boxShadow: "var(--gg-shadow-haptic)",
      }}
    >
      {/* Image panel */}
      <div className="flex flex-col" style={{ minHeight: "400px" }}>
        {/* Main image */}
        <div className="relative flex-1 overflow-hidden" style={{ minHeight: "320px" }}>
          <AnimatePresence mode="sync">
            <motion.img
              key={imgIdx}
              src={`${import.meta.env.BASE_URL}images/${rental.images[imgIdx]}`}
              alt={`${rental.name} — photo ${imgIdx + 1}`}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            />
          </AnimatePresence>

          <div className="absolute inset-0 bg-gradient-to-t from-[#05070A]/50 via-transparent to-transparent pointer-events-none" />

          {/* Location badge */}
          <div
            className="absolute top-4 left-4 text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1.5"
            style={{
              background: "var(--gg-accent-gold)",
              color: "#05070A",
              borderRadius: "var(--gg-radius-agentic)",
            }}
          >
            {rental.badge}
          </div>

          {/* Photo counter */}
          <div
            className="absolute top-4 right-4 text-[10px] font-bold tracking-widest px-2.5 py-1.5"
            style={{
              background: "rgba(5,7,10,0.65)",
              color: "rgba(255,255,255,0.8)",
              borderRadius: "var(--gg-radius-agentic)",
              backdropFilter: "blur(8px)",
            }}
          >
            {imgIdx + 1} / {rental.images.length}
          </div>

          {/* Prev / Next arrows */}
          {rental.images.length > 1 && (
            <>
              <button
                onClick={() => setImgIdx((imgIdx - 1 + rental.images.length) % rental.images.length)}
                className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-8 h-8 transition-all duration-200"
                style={{
                  background: "rgba(5,7,10,0.6)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: "50%",
                  color: "#fff",
                  cursor: "pointer",
                  backdropFilter: "blur(8px)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,215,0,0.85)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(5,7,10,0.6)")}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
              </button>
              <button
                onClick={() => setImgIdx((imgIdx + 1) % rental.images.length)}
                className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-8 h-8 transition-all duration-200"
                style={{
                  background: "rgba(5,7,10,0.6)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: "50%",
                  color: "#fff",
                  cursor: "pointer",
                  backdropFilter: "blur(8px)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,215,0,0.85)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(5,7,10,0.6)")}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </>
          )}
        </div>

        {/* Thumbnail strip */}
        <div
          className="flex gap-2 p-3"
          style={{ background: "rgba(5,7,10,0.6)", backdropFilter: "blur(8px)" }}
        >
          {rental.images.map((img, i) => (
            <button
              key={i}
              onClick={() => setImgIdx(i)}
              className="relative overflow-hidden flex-1 transition-all duration-200"
              style={{
                height: "56px",
                borderRadius: "6px",
                outline: i === imgIdx ? "2px solid var(--gg-accent-gold)" : "2px solid transparent",
                outlineOffset: "1px",
                cursor: "pointer",
                border: "none",
                padding: 0,
                opacity: i === imgIdx ? 1 : 0.55,
              }}
              onMouseEnter={(e) => { if (i !== imgIdx) e.currentTarget.style.opacity = "0.85"; }}
              onMouseLeave={(e) => { if (i !== imgIdx) e.currentTarget.style.opacity = "0.55"; }}
            >
              <img
                src={`${import.meta.env.BASE_URL}images/${img}`}
                alt={`Thumbnail ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Info panel */}
      <div className="flex flex-col p-8 md:p-10">
        <div
          className="text-xs font-bold tracking-[0.35em] uppercase mb-3"
          style={{ color: "var(--gg-accent-gold)" }}
        >
          {rental.neighborhood}
        </div>

        <h2
          className="text-2xl md:text-3xl font-black tracking-tight leading-tight mb-1"
          style={{ fontFamily: "var(--font-display)", color: "var(--gg-text-primary)" }}
        >
          {rental.tagline}
        </h2>
        <div className="text-sm mb-5" style={{ color: "var(--gg-text-muted)" }}>
          {rental.location}
        </div>

        {/* Quick stats */}
        <div
          className="flex gap-4 mb-6 py-4"
          style={{ borderTop: "1px solid rgba(74,101,114,0.2)", borderBottom: "1px solid rgba(74,101,114,0.2)" }}
        >
          {[
            { label: "Type", value: rental.type },
            { label: "Guests", value: rental.guests },
            { label: "Beds", value: rental.bedrooms },
            { label: "Baths", value: rental.bathrooms },
          ].map((s) => (
            <div key={s.label} className="text-center flex-1">
              <div className="text-sm font-bold" style={{ color: "var(--gg-text-primary)" }}>
                {s.value}
              </div>
              <div className="text-[10px] tracking-widest uppercase mt-0.5" style={{ color: "var(--gg-text-muted)" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--gg-text-muted)" }}>
          {rental.description}
        </p>

        <div className="grid grid-cols-2 gap-2 mb-8">
          {rental.amenities.map((a) => (
            <div
              key={a.key}
              className="flex items-center gap-2 text-xs font-medium"
              style={{ color: "var(--gg-text-muted)" }}
            >
              <span style={{ color: "var(--gg-accent-gold)" }}>
                {AMENITY_ICON[a.key]}
              </span>
              {a.label}
            </div>
          ))}
        </div>

        {/* Price + CTA */}
        <div className="mt-auto flex items-center justify-between gap-4 flex-wrap">
          <div>
            <div
              className="text-xl font-black"
              style={{ fontFamily: "var(--font-display)", color: "var(--gg-text-primary)" }}
            >
              {rental.price}
            </div>
            <div className="text-[10px] tracking-widest uppercase mt-0.5" style={{ color: "var(--gg-text-muted)" }}>
              {rental.priceNote}
            </div>
          </div>
          <a
            href={rental.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-bold tracking-wider px-8 py-3.5 text-sm transition-all duration-300"
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
            Book Now
          </a>
        </div>
        <div className="mt-2 text-[10px]" style={{ color: "var(--gg-text-muted)", opacity: 0.5 }}>
          via {rental.bookingPlatform}
        </div>
      </div>
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
          className="text-xs font-bold tracking-widest uppercase transition-colors duration-200"
          style={{ color: "var(--gg-text-muted)" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gg-accent-gold)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--gg-text-muted)")}
        >
          ← Back
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
            Local
            <br />
            <span className="text-transparent" style={{ WebkitTextStroke: "2px var(--gg-accent-gold)" }}>
              Rentals.
            </span>
          </h1>
          <p
            className="text-base max-w-xl leading-relaxed"
            style={{ color: "var(--gg-text-muted)" }}
          >
            Three handpicked spaces Zoe has personally vetted — from a beachfront condo in Rio de Janeiro
            to modern retreats minutes from Woodbury Commons, New York. Places that feel like a home,
            not a hotel.
          </p>

          {/* Location pills */}
          <div className="flex flex-wrap gap-3 mt-8">
            {["Rio de Janeiro · Brazil", "Woodbury · New York"].map((loc) => (
              <span
                key={loc}
                className="text-xs font-semibold tracking-wider px-4 py-2"
                style={{
                  border: "1px solid rgba(255,215,0,0.2)",
                  color: "var(--gg-accent-gold)",
                  borderRadius: "var(--gg-radius-agentic)",
                  background: "rgba(255,215,0,0.04)",
                }}
              >
                {loc}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Rental listings */}
      <div className="max-w-6xl mx-auto px-6 md:px-16 pb-16 space-y-12">
        {RENTALS.map((rental, i) => (
          <RentalCard key={rental.id} rental={rental} reverse={i % 2 !== 0} />
        ))}
      </div>

      {/* Refund / booking notice */}
      <div className="max-w-6xl mx-auto px-6 md:px-16 pb-24">
        <div
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
            <strong style={{ color: "var(--gg-text-primary)" }}>Booking & Refund Policy</strong>
            <p className="mt-1 leading-relaxed">
              Global Gallivant serves as a referral and listing service only. All bookings are completed
              through the platform linked with each property. Refund eligibility is governed entirely by
              that platform's cancellation policy — Global Gallivant does not process or issue refunds
              for rental bookings. See our{" "}
              <a href="/terms" style={{ color: "var(--gg-accent-gold)" }}>
                Terms of Service
              </a>{" "}
              for full details.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
