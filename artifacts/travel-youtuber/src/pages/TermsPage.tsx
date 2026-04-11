export default function TermsPage() {
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
          <img src="/logo.png" alt="Global Gallivant" className="h-14 w-auto object-contain drop-shadow-lg" />
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

        <div
          className="text-xs font-bold tracking-[0.4em] uppercase mb-4"
          style={{ color: "var(--gg-accent-gold)" }}
        >
          Legal
        </div>
        <h1
          className="text-5xl font-black tracking-tighter leading-none mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Terms of Service
        </h1>
        <p className="text-sm mb-12" style={{ color: "var(--gg-text-muted)" }}>
          Last updated: April 2025
        </p>

        <div className="space-y-10 text-base leading-relaxed" style={{ color: "var(--gg-text-muted)" }}>
          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "var(--gg-text-primary)" }}>
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using the Global Gallivant website or purchasing any of our products and
              services, you agree to be bound by these Terms of Service. If you do not agree, please do not
              use our site or services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "var(--gg-text-primary)" }}>
              2. Products and Services
            </h2>
            <p>
              Global Gallivant offers the following:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-3">
              <li><strong>Travel Consultations</strong> — one-on-one sessions with Intercontinental Zoe delivered via video call or written itinerary.</li>
              <li><strong>Digital Travel Guides</strong> — downloadable PDF guides for specific destinations or travel topics.</li>
              <li><strong>Local Rentals</strong> — referrals and booking links to third-party rental platforms and local providers.</li>
              <li><strong>Merchandise</strong> — physical goods shipped to your address.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "var(--gg-text-primary)" }}>
              3. Payments
            </h2>
            <p>
              All payments are processed securely through <strong>Stripe</strong> or <strong>PayPal</strong>.
              By completing a purchase, you agree to the respective payment processor's terms of service:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-3">
              <li>
                Stripe:{" "}
                <a href="https://stripe.com/legal" target="_blank" rel="noopener noreferrer" style={{ color: "var(--gg-accent-gold)" }}>
                  stripe.com/legal
                </a>
              </li>
              <li>
                PayPal:{" "}
                <a href="https://www.paypal.com/legalhub" target="_blank" rel="noopener noreferrer" style={{ color: "var(--gg-accent-gold)" }}>
                  paypal.com/legalhub
                </a>
              </li>
            </ul>
            <p className="mt-3">
              Prices are listed in USD and are subject to change without notice. We are not responsible for
              currency conversion fees or charges imposed by your bank or card issuer.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "var(--gg-text-primary)" }}>
              4. Refund Policy
            </h2>

            <div
              className="p-5 mb-6 rounded-xl"
              style={{
                background: "rgba(255,215,0,0.05)",
                border: "1px solid rgba(255,215,0,0.15)",
              }}
            >
              <p className="font-semibold mb-1" style={{ color: "var(--gg-text-primary)" }}>
                General Policy — All Sales Final
              </p>
              <p>
                All purchases on Global Gallivant are <strong>non-refundable</strong>. Once a transaction is
                completed, no refunds will be issued except where explicitly stated below or required by
                applicable law.
              </p>
            </div>

            <h3 className="text-base font-bold mb-2" style={{ color: "var(--gg-text-primary)" }}>
              4a. Travel Consultations
            </h3>
            <p className="mb-6">
              Consultation fees are non-refundable. If you need to reschedule, please contact us at least
              48 hours before your scheduled session. No-shows forfeit the full session fee with no credit
              or rebooking.
            </p>

            <h3 className="text-base font-bold mb-2" style={{ color: "var(--gg-text-primary)" }}>
              4b. Digital Travel Guides
            </h3>
            <p className="mb-6">
              Due to the immediate digital nature of these products, all guide sales are final. No refunds
              are available once a download link has been issued.
            </p>

            <h3 className="text-base font-bold mb-2" style={{ color: "var(--gg-text-primary)" }}>
              4c. Merchandise
            </h3>
            <p className="mb-6">
              We accept exchanges or store credit for items received damaged or defective. Proof of damage
              must be submitted within 7 days of delivery. Return shipping costs are the responsibility of
              the customer unless the item arrived damaged.
            </p>

            <h3 className="text-base font-bold mb-2" style={{ color: "var(--gg-text-primary)" }}>
              4d. Local Rentals
            </h3>
            <p>
              Global Gallivant acts solely as a referral and booking intermediary for local rentals. We do
              not own, operate, or control the rental properties or vehicles listed. All rental transactions
              are completed directly through the applicable booking platform (such as Airbnb, Booking.com,
              or a local provider's own system).
            </p>
            <p className="mt-3">
              <strong>Refund eligibility for local rentals is governed entirely by the platform or provider
              used to complete the booking.</strong> Global Gallivant accepts no responsibility and will
              issue no refunds for rental bookings. Any disputes must be resolved directly with the
              platform or rental provider.
            </p>

            <h3 className="text-base font-bold mt-6 mb-2" style={{ color: "var(--gg-text-primary)" }}>
              4e. Stripe & PayPal Buyer Protections
            </h3>
            <p>
              If you paid via Stripe or PayPal, you may have access to their respective buyer protection
              programs under their terms. We will cooperate with legitimate disputes raised through those
              platforms in accordance with their policies. Chargebacks initiated without first contacting
              us may result in account suspension and are subject to applicable dispute fees.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "var(--gg-text-primary)" }}>
              5. Intellectual Property
            </h2>
            <p>
              All content on this website — including text, images, videos, guides, and branding — is owned
              by Global Gallivant or its licensors. You may not reproduce, distribute, or use our content
              without prior written permission.
            </p>
            <p className="mt-3">
              Digital guides purchased are licensed for personal, non-commercial use only. They may not be
              resold, shared, or redistributed in any form.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "var(--gg-text-primary)" }}>
              6. Disclaimer of Warranties
            </h2>
            <p>
              Travel advice and recommendations provided through consultations or guides are based on personal
              experience and are informational only. Global Gallivant makes no guarantees about the accuracy,
              completeness, or timeliness of any travel information. Conditions in destinations change
              frequently — always verify critical details (visas, safety, health requirements) independently
              before traveling.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "var(--gg-text-primary)" }}>
              7. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by law, Global Gallivant and Intercontinental Zoe shall not be
              liable for any indirect, incidental, special, or consequential damages arising from your use of
              our website or services, including losses arising from travel decisions made based on our
              content or advice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "var(--gg-text-primary)" }}>
              8. Governing Law
            </h2>
            <p>
              These Terms are governed by and construed in accordance with applicable law. Any disputes
              arising under these Terms shall be subject to the exclusive jurisdiction of the courts of the
              applicable jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "var(--gg-text-primary)" }}>
              9. Changes to These Terms
            </h2>
            <p>
              We reserve the right to update these Terms at any time. Changes will be posted on this page
              with an updated date. Your continued use of the site after changes take effect constitutes
              acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "var(--gg-text-primary)" }}>
              10. Contact
            </h2>
            <p>
              Questions about these Terms? Contact us at{" "}
              <a
                href="mailto:globalgallivantzoe@gmail.com"
                style={{ color: "var(--gg-accent-gold)" }}
              >
                globalgallivantzoe@gmail.com
              </a>.
            </p>
          </section>
        </div>
      </div>
      </div>
    </div>
  );
}
