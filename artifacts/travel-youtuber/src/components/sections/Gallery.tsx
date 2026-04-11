import { motion } from "framer-motion";

const IMAGES = [
  {
    src: "images/zoe2.jpg",
    label: "Intercontinental Zoe",
    sublabel: "Living the journey, not just visiting.",
  },
  {
    src: "images/latin_street.jpg",
    label: "The Americas",
    sublabel: "Cartagena · Havana · Mexico City",
  },
];

export default function Gallery() {
  return (
    <section className="py-24 px-6 md:px-16" style={{ background: "var(--gg-bg-primary)" }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div
            className="text-xs font-bold tracking-[0.4em] uppercase mb-4"
            style={{ color: "var(--gg-accent-gold)" }}
          >
            From the Road
          </div>
          <h2
            className="text-5xl md:text-6xl font-black tracking-tighter leading-none"
            style={{ fontFamily: "var(--font-display)", color: "var(--gg-text-primary)" }}
          >
            Experience It
            <br />
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "1.5px var(--gg-accent-gold)" }}
            >
              First-Hand.
            </span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Video tile */}
          <motion.div
            className="relative overflow-hidden md:col-span-1 h-64 md:h-auto"
            style={{ borderRadius: "var(--gg-radius-card)" }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <video
              className="w-full h-full object-cover min-h-[280px]"
              src={`${import.meta.env.BASE_URL}videos/couple_traveling.mp4`}
              autoPlay
              muted
              loop
              playsInline
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#05070A]/80 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5">
              <div
                className="text-[10px] font-bold tracking-[0.3em] uppercase mb-1"
                style={{ color: "var(--gg-accent-gold)" }}
              >
                On the Ground
              </div>
              <div className="text-base font-bold" style={{ color: "var(--gg-text-primary)" }}>
                People. Places. Moments.
              </div>
            </div>
          </motion.div>

          {/* Photo tiles */}
          <div className="md:col-span-2 flex flex-col gap-4">
            {IMAGES.map((img, i) => (
              <motion.div
                key={img.src}
                className="relative overflow-hidden"
                style={{
                  height: "calc(50% - 8px)",
                  minHeight: "200px",
                  borderRadius: "var(--gg-radius-card)",
                }}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
              >
                <img
                  src={`${import.meta.env.BASE_URL}${img.src}`}
                  className="w-full h-full object-cover"
                  alt={img.label}
                  style={{ minHeight: "200px" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05070A]/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <div
                    className="text-[10px] font-bold tracking-[0.3em] uppercase mb-1"
                    style={{ color: "var(--gg-accent-gold)" }}
                  >
                    {img.label}
                  </div>
                  <div className="text-base font-bold" style={{ color: "var(--gg-text-primary)" }}>
                    {img.sublabel}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA strip */}
        <motion.div
          className="mt-12 px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{
            background: "linear-gradient(135deg, rgba(255,215,0,0.06) 0%, rgba(74,101,114,0.08) 100%)",
            border: "1px solid rgba(255,215,0,0.2)",
            borderRadius: "var(--gg-radius-card)",
            backdropFilter: "var(--gg-surface-blur)",
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <h3
              className="text-2xl md:text-3xl font-black tracking-tight mb-1"
              style={{ fontFamily: "var(--font-display)", color: "var(--gg-text-primary)" }}
            >
              Ready to plan your trip?
            </h3>
            <p className="text-sm" style={{ color: "var(--gg-text-muted)" }}>
              Let Intercontinental Zoe guide you — from idea to itinerary.
            </p>
          </div>
          <a
            href="/consultation"
            className="shrink-0 font-bold tracking-wider px-10 py-4 text-sm"
            style={{
              background: "var(--gg-accent-gold)",
              color: "#05070A",
              borderRadius: "var(--gg-radius-agentic)",
              boxShadow: "var(--gg-shadow-haptic)",
              transition: "var(--gg-transition-fluid)",
            }}
          >
            Book a Consultation · $150
          </a>
        </motion.div>
      </div>
    </section>
  );
}
