export default function PrivacyPage() {
  return (
    <div
      className="min-h-screen py-24 px-6 md:px-16"
      style={{ background: "var(--gg-bg-primary)", color: "var(--gg-text-primary)" }}
    >
      <div className="max-w-3xl mx-auto">
        {/* Back */}
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase mb-12 transition-colors duration-200"
          style={{ color: "var(--gg-accent-gold)" }}
        >
          ← Back to Global Gallivant
        </a>

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
          Privacy Policy
        </h1>
        <p className="text-sm mb-12" style={{ color: "var(--gg-text-muted)" }}>
          Last updated: April 2025
        </p>

        <div className="space-y-10 text-base leading-relaxed" style={{ color: "var(--gg-text-muted)" }}>
          <section>
            <h2
              className="text-xl font-bold mb-3"
              style={{ color: "var(--gg-text-primary)" }}
            >
              1. Who We Are
            </h2>
            <p>
              Global Gallivant ("we", "us", or "our") is operated by Intercontinental Zoe. We provide travel
              consultations, digital travel guides, local rental referrals, and related content. This Privacy
              Policy explains how we collect, use, and protect your personal information when you visit our
              website or purchase our products and services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "var(--gg-text-primary)" }}>
              2. Information We Collect
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Contact information</strong> — name and email address when you book a consultation, purchase a guide, or contact us.</li>
              <li><strong>Payment information</strong> — processed securely by Stripe or PayPal. We do not store your card number or payment credentials on our servers.</li>
              <li><strong>Usage data</strong> — pages visited, time on site, browser type, and device information collected via cookies and analytics tools.</li>
              <li><strong>Communications</strong> — messages you send us through the Ask Zoe chat, contact forms, or email.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "var(--gg-text-primary)" }}>
              3. How We Use Your Information
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>To deliver and fulfill your orders, consultations, and bookings.</li>
              <li>To communicate with you about your purchase or inquiry.</li>
              <li>To send occasional updates or promotional content (you may opt out at any time).</li>
              <li>To improve our website and services.</li>
              <li>To comply with applicable laws and payment processor requirements.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "var(--gg-text-primary)" }}>
              4. Third-Party Services
            </h2>
            <p>
              We use the following trusted third parties to operate our business. Each has its own privacy policy:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-3">
              <li><strong>Stripe</strong> — payment processing. See <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: "var(--gg-accent-gold)" }}>stripe.com/privacy</a>.</li>
              <li><strong>PayPal</strong> — payment processing. See <a href="https://www.paypal.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: "var(--gg-accent-gold)" }}>paypal.com/privacy</a>.</li>
              <li><strong>Analytics providers</strong> — to understand site traffic and usage patterns.</li>
            </ul>
            <p className="mt-3">
              We do not sell your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "var(--gg-text-primary)" }}>
              5. Cookies
            </h2>
            <p>
              We use cookies to remember your preferences and analyze site usage. You can disable cookies in
              your browser settings; however, some features of the site may not function correctly without them.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "var(--gg-text-primary)" }}>
              6. Data Retention
            </h2>
            <p>
              We retain your personal data for as long as necessary to provide our services, fulfill legal
              obligations, and resolve disputes. You may request deletion of your data at any time by contacting
              us.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "var(--gg-text-primary)" }}>
              7. Your Rights
            </h2>
            <p>
              Depending on your jurisdiction, you may have the right to access, correct, delete, or restrict
              processing of your personal data. To exercise any of these rights, please contact us at the email
              listed below.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "var(--gg-text-primary)" }}>
              8. Security
            </h2>
            <p>
              We use industry-standard security measures to protect your information. However, no method of
              transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "var(--gg-text-primary)" }}>
              9. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an
              updated revision date. Continued use of the site after changes constitutes acceptance of the
              updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "var(--gg-text-primary)" }}>
              10. Contact
            </h2>
            <p>
              For privacy-related questions, please contact us at{" "}
              <a
                href="mailto:hello@globalgallivant.com"
                style={{ color: "var(--gg-accent-gold)" }}
              >
                hello@globalgallivant.com
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
