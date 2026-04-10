import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const DESTINATIONS = [
  "Oranjestad · Aruba","Rio de Janeiro · Brazil","Salvador de Bahia · Brazil","São Paulo · Brazil",
  "Bogotá · Colombia","Cali · Colombia","Cartagena · Colombia","Medellín · Colombia","San Andrés · Colombia",
  "San José · Costa Rica","Willemstad · Curaçao","Punta Cana · Dom. Republic","Santo Domingo · Dom. Republic",
  "Sosúa · Dom. Republic","Mexico City · Mexico","Playa del Carmen · Mexico","Panama City · Panama",
  "Cusco · Peru","Lima · Peru","Phnom Penh · Cambodia","Siem Reap · Cambodia","Kuala Lumpur · Malaysia",
  "Angeles City · Philippines","Cebu · Philippines","Manila · Philippines","Palawan · Philippines",
  "Bangkok · Thailand","Pattaya · Thailand","Phuket · Thailand","Da Nang · Vietnam",
  "Ho Chi Minh City · Vietnam","Nairobi · Kenya",
  "Cape Town · South Africa","Johannesburg · South Africa","Paris · France","Barcelona · Spain","Giza · Egypt",
];

const STATS = [
  { value: "20", label: "Countries" },
  { value: "39", label: "Cities" },
  { value: "4", label: "Continents" },
  { value: "100+", label: "Videos" },
];

const CITY_SLIDES = [
  { file: "oranjestad.jpg",    label: "Oranjestad",       country: "Aruba",              region: "Caribbean" },
  { file: "rio.jpg",           label: "Rio de Janeiro",   country: "Brazil",             region: "South America" },
  { file: "cartagena_new.jpg", label: "Cartagena",        country: "Colombia",           region: "South America" },
  { file: "san_jose_cr.jpg",   label: "San José",         country: "Costa Rica",         region: "Central America" },
  { file: "willemstad.jpg",    label: "Willemstad",       country: "Curaçao",            region: "Caribbean" },
  { file: "santo_domingo.jpg", label: "Santo Domingo",    country: "Dominican Republic", region: "Caribbean" },
  { file: "mexico_city.jpg",   label: "Mexico City",      country: "Mexico",             region: "North America" },
  { file: "panama_city.jpg",   label: "Panama City",      country: "Panama",             region: "Central America" },
  { file: "cusco.jpg",         label: "Cusco",            country: "Peru",               region: "South America" },
  { file: "siem_reap.jpg",     label: "Siem Reap",        country: "Cambodia",           region: "Southeast Asia" },
  { file: "kuala_lumpur.jpg",  label: "Kuala Lumpur",     country: "Malaysia",           region: "Southeast Asia" },
  { file: "manila.jpg",        label: "Manila",           country: "Philippines",        region: "Southeast Asia" },
  { file: "bangkok.jpg",       label: "Bangkok",          country: "Thailand",           region: "Southeast Asia" },
  { file: "ho_chi_minh.jpg",   label: "Ho Chi Minh City", country: "Vietnam",           region: "Southeast Asia" },
  { file: "nairobi.jpg",       label: "Nairobi",          country: "Kenya",              region: "Africa" },
  { file: "lagos.jpg",         label: "Lagos",            country: "Nigeria",            region: "Africa" },
  { file: "cape_town.jpg",     label: "Cape Town",        country: "South Africa",       region: "Africa" },
  { file: "paris.jpg",         label: "Paris",            country: "France",             region: "Europe" },
  { file: "barcelona.jpg",     label: "Barcelona",        country: "Spain",              region: "Europe" },
  { file: "giza.jpg",          label: "Giza",             country: "Egypt",              region: "Africa" },
];

const SLIDE_DURATION = 5000;

const doubled = [...DESTINATIONS, ...DESTINATIONS];

export default function Destinations() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [transitioning, setTransitioning] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = (idx: number) => {
    if (transitioning || idx === current) return;
    setPrev(current);
    setCurrent(idx);
    setTransitioning(true);
    setTimeout(() => {
      setPrev(null);
      setTransitioning(false);
    }, 800);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent(c => {
        const next = (c + 1) % CITY_SLIDES.length;
        setPrev(c);
        setTransitioning(true);
        setTimeout(() => {
          setPrev(null);
          setTransitioning(false);
        }, 800);
        return next;
      });
    }, SLIDE_DURATION);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent(c => {
        const next = (c + 1) % CITY_SLIDES.length;
        setPrev(c);
        setTransitioning(true);
        setTimeout(() => {
          setPrev(null);
          setTransitioning(false);
        }, 800);
        return next;
      });
    }, SLIDE_DURATION);
  };

  const handleDotClick = (idx: number) => {
    goTo(idx);
    resetTimer();
  };

  const slide = CITY_SLIDES[current];
  const prevSlide = prev !== null ? CITY_SLIDES[prev] : null;

  return (
    <section id="destinations" className="py-24 overflow-hidden" style={{ background: "var(--gg-bg-secondary)" }}>
      <div className="max-w-6xl mx-auto px-6 md:px-16">
        <motion.div
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <div
              className="text-xs font-bold tracking-[0.4em] uppercase mb-4"
              style={{ color: "var(--gg-accent-gold)" }}
            >
              The Journey So Far
            </div>
            <h2
              className="text-5xl md:text-6xl font-black tracking-tighter leading-none"
              style={{ fontFamily: "var(--font-display)", color: "var(--gg-text-primary)" }}
            >
              Every Place
              <br />
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1.5px var(--gg-accent-gold)" }}
              >
                Has a Story.
              </span>
            </h2>
          </div>

          <div className="flex gap-8 md:gap-12">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div
                  className="text-4xl md:text-5xl font-black leading-none"
                  style={{ fontFamily: "var(--font-display)", color: "var(--gg-accent-gold)" }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-xs tracking-widest uppercase mt-1"
                  style={{ color: "var(--gg-text-muted)" }}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scrolling tickers — full bleed */}
      <div
        className="mb-5"
        style={{ maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)" }}
      >
        <motion.div
          className="flex gap-8 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        >
          {doubled.map((dest, i) => (
            <span
              key={i}
              className="text-base md:text-lg font-semibold tracking-wide shrink-0"
              style={{ color: "var(--gg-text-muted)" }}
            >
              {dest}
              <span className="mx-6" style={{ color: "var(--gg-accent-gold)", opacity: 0.5 }}>✦</span>
            </span>
          ))}
        </motion.div>
      </div>
      <div style={{ maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)" }}>
        <motion.div
          className="flex gap-8 whitespace-nowrap"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {[...doubled].reverse().map((dest, i) => (
            <span
              key={i}
              className="text-base md:text-lg font-semibold tracking-wide shrink-0"
              style={{ color: "var(--gg-text-primary)", opacity: 0.2 }}
            >
              {dest}
              <span className="mx-6" style={{ color: "var(--gg-accent-slate)" }}>·</span>
            </span>
          ))}
        </motion.div>
      </div>

      {/* City slideshow */}
      <div className="max-w-6xl mx-auto px-6 md:px-16 mt-16">
        <motion.div
          className="relative overflow-hidden h-[40vh] md:h-[55vh]"
          style={{ borderRadius: "var(--gg-radius-card)", boxShadow: "var(--gg-shadow-haptic)" }}
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Previous slide (fades out) */}
          {prevSlide && (
            <img
              key={`prev-${prev}`}
              src={`${import.meta.env.BASE_URL}images/${prevSlide.file}`}
              className="absolute inset-0 w-full h-full object-cover"
              alt={`${prevSlide.label}, ${prevSlide.country}`}
              style={{
                opacity: 0,
                transition: "opacity 0.8s ease-in-out",
              }}
            />
          )}

          {/* Current slide (fades in) */}
          <AnimatePresence mode="sync">
            <motion.img
              key={`slide-${current}`}
              src={`${import.meta.env.BASE_URL}images/${slide.file}`}
              className="absolute inset-0 w-full h-full object-cover"
              alt={`${slide.label}, ${slide.country}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          </AnimatePresence>

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#05070A]/85 via-[#05070A]/20 to-transparent pointer-events-none" />

          {/* City label */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`label-${current}`}
              className="absolute bottom-6 left-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div
                className="text-xs font-bold tracking-[0.3em] uppercase mb-1"
                style={{ color: "var(--gg-accent-gold)" }}
              >
                {slide.region}
              </div>
              <div
                className="text-2xl md:text-3xl font-black tracking-tight leading-tight"
                style={{ fontFamily: "var(--font-display)", color: "var(--gg-text-primary)" }}
              >
                {slide.label}
              </div>
              <div
                className="text-sm font-semibold tracking-widest uppercase mt-0.5"
                style={{ color: "var(--gg-text-muted)" }}
              >
                {slide.country}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slide counter */}
          <div className="absolute top-5 right-6 flex items-center gap-2">
            <span
              className="text-xs font-bold tabular-nums"
              style={{ color: "var(--gg-accent-gold)" }}
            >
              {String(current + 1).padStart(2, "0")}
            </span>
            <span className="text-xs" style={{ color: "var(--gg-text-muted)" }}>
              / {String(CITY_SLIDES.length).padStart(2, "0")}
            </span>
          </div>

          {/* Dot navigation */}
          <div className="absolute bottom-6 right-6 flex flex-wrap justify-end gap-1.5 max-w-[160px]">
            {CITY_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => handleDotClick(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === current ? "20px" : "6px",
                  height: "6px",
                  background: i === current ? "var(--gg-accent-gold)" : "rgba(255,255,255,0.3)",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                }}
              />
            ))}
          </div>

          {/* Progress bar */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: "rgba(255,255,255,0.1)" }}>
            <motion.div
              key={`progress-${current}`}
              className="h-full"
              style={{ background: "var(--gg-accent-gold)" }}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
