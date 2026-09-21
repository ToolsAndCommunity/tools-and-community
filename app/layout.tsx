import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Gameplate",
  description: "Modern tools, gaming resources and community platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#02040a] text-slate-100 flex flex-col overflow-x-hidden">

        {/* Background */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-purple-600/10 blur-[140px] rounded-full" />
          <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[400px] bg-purple-500/5 blur-[120px] rounded-full" />
        </div>

        {/* Navbar */}
        <header className="sticky top-0 z-50 border-b border-slate-900 bg-[#02040a]/80 backdrop-blur-md">
          <div className="flex items-center justify-between gap-2 sm:gap-4 px-2.5 sm:px-10 lg:px-14 py-3 sm:py-4">

            {/* Logo Area */}
            <div className="flex items-center gap-1.5 sm:gap-3 min-w-0 shrink-0">

              {/* GamePlate Logo */}
              <div className="w-7 h-7 sm:w-9 sm:h-9 shrink-0 flex items-center justify-center">
                <svg
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                  aria-label="GamePlate logo"
                >
                  <defs>
                    <filter
                      id="purpleGlow"
                      x="-100%"
                      y="-100%"
                      width="300%"
                      height="300%"
                    >
                      <feGaussianBlur
                        stdDeviation="2.5"
                        result="blur"
                      />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>

                    <linearGradient
                      id="purpleFire"
                      x1="0"
                      y1="1"
                      x2="1"
                      y2="0"
                    >
                      <stop offset="0%" stopColor="#7c3aed" />
                      <stop offset="50%" stopColor="#a855f7" />
                      <stop offset="100%" stopColor="#d8b4fe" />
                    </linearGradient>
                  </defs>

                  {/* Hafif mor yangın */}
                  <path
                    d="M12 48
                       C7 43 10 37 15 34
                       C12 29 16 24 21 22
                       C20 28 24 29 26 25
                       C29 20 31 15 34 11
                       C35 18 40 20 39 27
                       C43 24 47 27 47 32
                       C53 34 55 40 51 46
                       C47 53 39 56 30 56
                       C22 56 16 53 12 48Z"
                    fill="none"
                    stroke="url(#purpleFire)"
                    strokeWidth="2"
                    opacity="0.75"
                    filter="url(#purpleGlow)"
                  />

                  {/* G */}
                  <text
                    x="22"
                    y="42"
                    textAnchor="middle"
                    fontFamily="Arial, Helvetica, sans-serif"
                    fontSize="22"
                    fontWeight="900"
                    fill="white"
                  >
                    G
                  </text>

                  {/* Mor / */}
                  <text
                    x="32"
                    y="42"
                    textAnchor="middle"
                    fontFamily="Arial, Helvetica, sans-serif"
                    fontSize="23"
                    fontWeight="900"
                    fill="#a855f7"
                    filter="url(#purpleGlow)"
                  >
                    /
                  </text>

                  {/* P */}
                  <text
                    x="43"
                    y="42"
                    textAnchor="middle"
                    fontFamily="Arial, Helvetica, sans-serif"
                    fontSize="22"
                    fontWeight="900"
                    fill="white"
                  >
                    P
                  </text>
                </svg>
              </div>

              <Link
                href="/"
                className="text-[11px] sm:text-lg font-black tracking-[0.12em] sm:tracking-widest text-white hover:opacity-80 transition whitespace-nowrap"
              >
                GAMEPLATE
              </Link>

            </div>

            {/* Navigation */}
            <nav className="flex items-center gap-0.5 sm:gap-2 bg-slate-950/90 border border-slate-800 p-1 sm:p-2 rounded-lg sm:rounded-2xl shadow-xl shrink-0">

              <Link
                href="/"
                className="px-1.5 sm:px-4 py-1.5 sm:py-2 rounded-md sm:rounded-xl text-[10px] sm:text-sm font-bold text-slate-300 hover:text-white hover:bg-purple-500/10 transition flex items-center gap-0.5 sm:gap-2 whitespace-nowrap"
              >
                <span>⌂</span>
                <span>Home</span>
              </Link>

              <Link
                href="/tools"
                className="px-1.5 sm:px-4 py-1.5 sm:py-2 rounded-md sm:rounded-xl text-[10px] sm:text-sm font-bold text-slate-300 hover:text-white hover:bg-purple-500/10 transition flex items-center gap-0.5 sm:gap-2 whitespace-nowrap"
              >
                <span>⚡</span>
                <span>Tools</span>
              </Link>

              <Link
                href="/games"
                className="px-1.5 sm:px-4 py-1.5 sm:py-2 rounded-md sm:rounded-xl text-[10px] sm:text-sm font-bold text-slate-300 hover:text-white hover:bg-purple-500/10 transition flex items-center gap-0.5 sm:gap-2 whitespace-nowrap"
              >
                <span>🎮</span>
                <span>Games</span>
              </Link>

              <Link
                href="/news"
                className="px-1.5 sm:px-4 py-1.5 sm:py-2 rounded-md sm:rounded-xl text-[10px] sm:text-sm font-bold text-slate-300 hover:text-white hover:bg-purple-500/10 transition flex items-center gap-0.5 sm:gap-2 whitespace-nowrap"
              >
                <span>📰</span>
                <span>News</span>
              </Link>

            </nav>

          </div>
        </header>

        {/* Main Content */}
        <main className="relative z-10 flex-1">
          {children}
        </main>

        {/* Footer */}
        <footer className="relative z-10 border-t border-slate-900 bg-[#02040a]/90 backdrop-blur-md mt-20">

          <div className="max-w-7xl mx-auto px-8 py-12">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

              {/* About */}
              <div>
                <h5 className="text-sm font-black tracking-widest text-white">
                  GAMEPLATE
                </h5>

                <p className="text-sm text-slate-500 leading-relaxed mt-4 max-w-md">
                  Modern tools, gaming resources, gameplay tactics, and
                  community-focused content.
                </p>
              </div>

              {/* Navigation */}
              <div>
                <h5 className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  Navigation
                </h5>

                <div className="flex flex-col gap-3 mt-4">

                  <Link
                    href="/"
                    className="text-sm text-slate-500 hover:text-purple-400 transition"
                  >
                    Home
                  </Link>

                  <Link
                    href="/tools"
                    className="text-sm text-slate-500 hover:text-purple-400 transition"
                  >
                    Tools
                  </Link>

                  <Link
                    href="/games"
                    className="text-sm text-slate-500 hover:text-purple-400 transition"
                  >
                    Games
                  </Link>

                  <Link
                    href="/news"
                    className="text-sm text-slate-500 hover:text-purple-400 transition"
                  >
                    News
                  </Link>

                </div>
              </div>

              {/* Legal */}
              <div>
                <h5 className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  Legal & Contact
                </h5>

                <div className="flex flex-col gap-3 mt-4">

                  <Link
                    href="/privacy"
                    className="text-sm text-slate-500 hover:text-purple-400 transition"
                  >
                    Privacy Policy
                  </Link>

                  <Link
                    href="/terms"
                    className="text-sm text-slate-500 hover:text-purple-400 transition"
                  >
                    Terms of Service
                  </Link>

                  <Link
                    href="/cookies"
                    className="text-sm text-slate-500 hover:text-purple-400 transition"
                  >
                    Cookie Policy
                  </Link>

                  <Link
                    href="/contact"
                    className="text-sm text-slate-500 hover:text-purple-400 transition"
                  >
                    Contact
                  </Link>

                </div>
              </div>

            </div>

            {/* Bottom */}
            <div className="border-t border-slate-900 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">

              <p className="text-xs text-slate-600">
                © 2026 Gameplate. All rights reserved.
              </p>

              <p className="text-xs text-slate-700">
                Modern tools. Gaming resources. Community.
              </p>

            </div>

          </div>

        </footer>

      </body>
    </html>
  );
}