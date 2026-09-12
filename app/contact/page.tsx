export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#02040a] text-slate-100 px-4 py-10">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="bg-slate-950/80 border border-purple-500/20 rounded-2xl p-8 shadow-xl">
          <div className="flex items-center gap-4">
            <span className="text-2xl p-3 bg-purple-500/10 border border-purple-500/30 rounded-xl">
              📧
            </span>

            <div>
              <h1 className="text-2xl font-extrabold text-white">
                Contact
              </h1>

              <p className="text-sm text-slate-400 mt-1">
                Get in touch with Gameplate
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="mt-6 bg-slate-950/80 border border-slate-900 rounded-2xl p-6 md:p-8 shadow-xl">

          <section>
            <h2 className="text-lg font-bold text-purple-300">
              Get in Touch
            </h2>

            <p className="text-sm text-slate-400 leading-relaxed mt-3">
              If you have a question, suggestion, bug report, or need help
              regarding Gameplate, you can contact us by email.
            </p>
          </section>

          {/* Email Card */}
          <div className="mt-8 p-5 bg-purple-500/5 border border-purple-500/20 rounded-2xl">
            <div className="flex items-center gap-4">

              <div className="p-3 bg-purple-500/10 border border-purple-500/20 rounded-xl text-xl">
                ✉️
              </div>

              <div className="flex-1">
                <p className="text-xs uppercase tracking-wider text-slate-500 font-bold">
                  Email
                </p>

                <a
                  href="mailto:supportgameplate@gmail.com"
                  className="inline-block mt-1 text-sm md:text-base text-purple-400 hover:text-purple-300 font-semibold transition break-all"
                >
                  supportgameplate@gmail.com
                </a>
              </div>

            </div>
          </div>

          {/* Contact Information */}
          <section className="mt-8">
            <h2 className="text-lg font-bold text-purple-300">
              Before Contacting Us
            </h2>

            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li className="flex gap-3">
                <span className="text-purple-400">•</span>
                <span>
                  Please clearly describe your question or issue.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="text-purple-400">•</span>
                <span>
                  For bug reports, include the tool or page where the problem
                  occurred.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="text-purple-400">•</span>
                <span>
                  Do not send passwords, payment information, or other
                  sensitive information by email.
                </span>
              </li>
            </ul>
          </section>

          {/* Response */}
          <section className="mt-8">
            <h2 className="text-lg font-bold text-purple-300">
              Response Time
            </h2>

            <p className="text-sm text-slate-400 leading-relaxed mt-3">
              We will review messages and respond when possible. Response
              times may vary depending on the type and volume of requests.
            </p>
          </section>

        </div>

        {/* Footer Note */}
        <div className="text-center text-xs text-slate-600 mt-6">
          © 2026 Gameplate. All rights reserved.
        </div>

      </div>
    </div>
  );
}
