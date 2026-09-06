export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#02040a] text-slate-100 px-4 py-10">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="bg-slate-950/80 border border-purple-500/20 rounded-2xl p-8 shadow-xl">
          <div className="flex items-center gap-4">
            <span className="text-2xl p-3 bg-purple-500/10 border border-purple-500/30 rounded-xl">
              🔒
            </span>

            <div>
              <h1 className="text-2xl font-extrabold text-white">
                Privacy Policy
              </h1>

              <p className="text-sm text-slate-400 mt-1">
                Last updated: September 4, 2026
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="mt-6 bg-slate-950/80 border border-slate-900 rounded-2xl p-6 md:p-8 shadow-xl space-y-8">

          {/* 1 */}
          <section>
            <h2 className="text-lg font-bold text-purple-300">
              1. Introduction
            </h2>

            <p className="text-sm text-slate-400 leading-relaxed mt-3">
              Tools & Community respects your privacy. This Privacy Policy
              explains how information may be handled when you visit or use
              our website, tools, gaming resources, and community content.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-lg font-bold text-purple-300">
              2. Information We Collect
            </h2>

            <p className="text-sm text-slate-400 leading-relaxed mt-3">
              Tools & Community does not currently require users to create
              an account and does not intentionally collect personal
              information such as names, passwords, or payment information
              through the website.
            </p>

            <p className="text-sm text-slate-400 leading-relaxed mt-3">
              If you contact us by email, we may receive the information you
              choose to include in your message, such as your email address
              and the contents of your message. This information is used only
              to respond to your request and communicate with you.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-lg font-bold text-purple-300">
              3. Advertising
            </h2>

            <p className="text-sm text-slate-400 leading-relaxed mt-3">
              Tools & Community may display advertisements provided by
              third-party advertising services, including Google advertising
              services.
            </p>

            <p className="text-sm text-slate-400 leading-relaxed mt-3">
              These advertising providers may use cookies, advertising
              identifiers, or similar technologies to provide, measure, and
              improve advertisements. Depending on applicable laws and your
              settings, advertisements may be personalized based on
              information associated with your browsing activity.
            </p>

            <p className="text-sm text-slate-400 leading-relaxed mt-3">
              Third-party advertising providers operate under their own
              privacy policies and terms. Users should review Google's
              privacy and advertising policies for additional information
              about how Google handles advertising-related data.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-lg font-bold text-purple-300">
              4. Cookies and Similar Technologies
            </h2>

            <p className="text-sm text-slate-400 leading-relaxed mt-3">
              Our website may use cookies and similar technologies for
              essential website functionality and advertising purposes.
            </p>

            <p className="text-sm text-slate-400 leading-relaxed mt-3">
              Some cookies may be placed by third-party advertising providers.
              Cookie usage and consent requirements may vary depending on
              your location and applicable privacy laws.
            </p>

            <p className="text-sm text-slate-400 leading-relaxed mt-3">
              For more information about cookies used on this website, please
              review our Cookie Policy.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-lg font-bold text-purple-300">
              5. Third-Party Services
            </h2>

            <p className="text-sm text-slate-400 leading-relaxed mt-3">
              The website may contain links to or integrations with
              third-party services. These services may process information
              according to their own privacy policies.
            </p>

            <p className="text-sm text-slate-400 leading-relaxed mt-3">
              Tools & Community is not responsible for the privacy practices
              of third-party websites or services that are outside our
              control.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-lg font-bold text-purple-300">
              6. Data Security
            </h2>

            <p className="text-sm text-slate-400 leading-relaxed mt-3">
              We take reasonable measures to protect information that may be
              provided to us through the website or by email. However, no
              method of transmission or electronic storage can be guaranteed
              to be completely secure.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-lg font-bold text-purple-300">
              7. Children's Privacy
            </h2>

            <p className="text-sm text-slate-400 leading-relaxed mt-3">
              Tools & Community is not intentionally designed to collect
              personal information from children. If you believe that a child
              has provided personal information to us, please contact us so
              that we can review the situation and take appropriate action.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-lg font-bold text-purple-300">
              8. Your Privacy Choices
            </h2>

            <p className="text-sm text-slate-400 leading-relaxed mt-3">
              Depending on your location, you may have rights regarding your
              personal information, cookies, and personalized advertising.
              Available choices may vary according to applicable laws and the
              services used on the website.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-lg font-bold text-purple-300">
              9. Changes to This Privacy Policy
            </h2>

            <p className="text-sm text-slate-400 leading-relaxed mt-3">
              We may update this Privacy Policy when our website, services,
              advertising systems, or legal requirements change. The updated
              version will be published on this page together with the
              corresponding update date.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-lg font-bold text-purple-300">
              10. Contact
            </h2>

            <p className="text-sm text-slate-400 leading-relaxed mt-3">
              If you have questions about this Privacy Policy or how your
              information is handled, you can contact us by email.
            </p>

            <a
              href="mailto:baris2012arabacioglu@gmail.com"
              className="inline-block mt-4 text-purple-400 hover:text-purple-300 font-semibold transition"
            >
              baris2012arabacioglu@gmail.com
            </a>
          </section>

        </div>

        {/* Footer Note */}
        <div className="text-center text-xs text-slate-600 mt-6">
          © 2026 Tools & Community. All rights reserved.
        </div>

      </div>
    </div>
  );
}