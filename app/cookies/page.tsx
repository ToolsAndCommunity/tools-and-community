export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-[#02040a] text-slate-100 px-4 py-10">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="bg-slate-950/80 border border-purple-500/20 rounded-2xl p-8 shadow-xl">
          <div className="flex items-center gap-4">
            <span className="text-2xl p-3 bg-purple-500/10 border border-purple-500/30 rounded-xl">
              🍪
            </span>

            <div>
              <h1 className="text-2xl font-extrabold text-white">
                Cookie Policy
              </h1>

              <p className="text-sm text-slate-400 mt-1">
                Last updated: September 5, 2026
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
              Tools & Community may use cookies and similar technologies to
              support website functionality and advertising. This Cookie
              Policy explains what cookies are, how they may be used on our
              website, and what choices may be available to you.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-lg font-bold text-purple-300">
              2. What Are Cookies?
            </h2>

            <p className="text-sm text-slate-400 leading-relaxed mt-3">
              Cookies are small text files that may be stored on your device
              when you visit a website. They can help websites remember
              information, provide functionality, understand how a website is
              used, or support advertising services.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-lg font-bold text-purple-300">
              3. How We May Use Cookies
            </h2>

            <p className="text-sm text-slate-400 leading-relaxed mt-3">
              Tools & Community may use cookies or similar technologies for
              the following purposes:
            </p>

            <ul className="mt-4 space-y-3 text-sm text-slate-400 list-disc pl-5">
              <li>
                Essential website functionality and technical operation.
              </li>

              <li>
                Remembering certain preferences or settings when applicable.
              </li>

              <li>
                Supporting and measuring third-party advertising.
              </li>

              <li>
                Helping us understand and improve the website when relevant
                technologies are enabled.
              </li>
            </ul>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-lg font-bold text-purple-300">
              4. Advertising Cookies
            </h2>

            <p className="text-sm text-slate-400 leading-relaxed mt-3">
              Tools & Community may display advertisements provided by
              third-party advertising services, including Google advertising
              services.
            </p>

            <p className="text-sm text-slate-400 leading-relaxed mt-3">
              Advertising providers may use cookies or similar technologies
              to deliver, measure, and improve advertisements. Depending on
              your location, consent choices, and applicable laws,
              advertisements may be personalized or non-personalized.
            </p>

            <p className="text-sm text-slate-400 leading-relaxed mt-3">
              The specific advertising technologies used on the website may
              change depending on the advertising provider and configuration
              we use.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-lg font-bold text-purple-300">
              5. Third-Party Cookies
            </h2>

            <p className="text-sm text-slate-400 leading-relaxed mt-3">
              Some cookies may be placed by third-party services rather than
              directly by Tools & Community.
            </p>

            <p className="text-sm text-slate-400 leading-relaxed mt-3">
              These third parties may process information according to their
              own privacy policies and terms. Tools & Community does not
              control third-party cookie technologies or their independent
              data practices.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-lg font-bold text-purple-300">
              6. Your Cookie Choices
            </h2>

            <p className="text-sm text-slate-400 leading-relaxed mt-3">
              Depending on your location and the technologies used on the
              website, you may be able to accept, reject, or manage certain
              non-essential cookies.
            </p>

            <p className="text-sm text-slate-400 leading-relaxed mt-3">
              You can also manage cookies through your browser settings.
              Blocking or deleting cookies may affect certain website
              features or functionality.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-lg font-bold text-purple-300">
              7. Browser Cookie Controls
            </h2>

            <p className="text-sm text-slate-400 leading-relaxed mt-3">
              Most modern web browsers provide settings that allow you to
              control, block, or delete cookies. The available options depend
              on the browser and device you use.
            </p>

            <p className="text-sm text-slate-400 leading-relaxed mt-3">
              Please note that disabling certain cookies may affect the
              functionality or appearance of parts of the website.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-lg font-bold text-purple-300">
              8. Changes to This Cookie Policy
            </h2>

            <p className="text-sm text-slate-400 leading-relaxed mt-3">
              We may update this Cookie Policy when our website, advertising
              systems, technologies, or legal requirements change.
            </p>

            <p className="text-sm text-slate-400 leading-relaxed mt-3">
              The latest version will always be published on this page
              together with the corresponding update date.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-lg font-bold text-purple-300">
              9. Contact
            </h2>

            <p className="text-sm text-slate-400 leading-relaxed mt-3">
              If you have questions about this Cookie Policy or the use of
              cookies on Tools & Community, you can contact us by email.
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