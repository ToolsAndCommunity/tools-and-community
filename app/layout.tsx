
import Link from "next/link";
import "./globals.css";
import ThemeToggle from "./components/ThemeToggle";

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
    <html lang="en" className="overflow-x-clip">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  var theme = localStorage.getItem("gameplate-theme");
                  document.documentElement.setAttribute(
                    "data-theme",
                    theme === "light" ? "light" : "dark"
                  );
                } catch (e) {
                  document.documentElement.setAttribute("data-theme", "dark");
                }
              })();
            `,
          }}
        />
      </head>

      <body className="min-h-screen w-full max-w-full bg-[#02040a] text-slate-100 flex flex-col overflow-x-clip">
        {/* Background */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-purple-600/10 blur-[140px] rounded-full" />
          <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[400px] bg-purple-500/5 blur-[120px] rounded-full" />
        </div>

        {/* Navbar */}
        <header className="sticky top-0 z-50 w-full max-w-full border-b border-slate-900 bg-[#02040a]/80 backdrop-blur-md">
          <div className="flex w-full min-w-0 items-center justify-between gap-1 px-2 py-3 sm:gap-4 sm:px-10 sm:py-4 lg:px-14">

            {/* Logo */}
            <div className="flex min-w-0 shrink items-center gap-1 sm:gap-3">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center sm:h-9 sm:w-9">
                <svg
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-full w-full"
                  aria-label="Gameplate logo"
                  role="img"
                >
                  <defs>
                    <filter
                      id="purpleGlow"
                      x="-100%"
                      y="-100%"
                      width="300%"
                      height="300%"
                    >
                      <feGaussianBlur stdDeviation="2.5" result="blur" />
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

                  <path
                    d="M12 48 C7 43 10 37 15 34 C12 29 16 24 21 22 C20 28 24 29 26 25 C29 20 31 15 34 11 C35 18 40 20 39 27 C43 24 47 27 47 32 C53 34 55 40 51 46 C47 53 39 56 30 56 C22 56 16 53 12 48Z"
                    fill="none"
                    stroke="url(#purpleFire)"
                    strokeWidth="2"
                    opacity="0.75"
                    filter="url(#purpleGlow)"
                  />

                  <text
                    x="22"
                    y="42"
                    textAnchor="middle"
                    fontFamily="Arial, Helvetica, sans-serif"
                    fontSize="22"
                    fontWeight="900"
                    className="logo-gp-letter"
                  >
                    G
                  </text>

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

                  <text
                    x="43"
                    y="42"
                    textAnchor="middle"
                    fontFamily="Arial, Helvetica, sans-serif"
                    fontSize="22"
                    fontWeight="900"
                    className="logo-gp-letter"
                  >
                    P
                  </text>
                </svg>
              </div>

              <Link
                href="/"
                className="whitespace-nowrap text-[9px] font-black tracking-[0.04em] text-white transition hover:opacity-80 min-[380px]:text-[10px] sm:text-lg sm:tracking-widest"
              >
                GAMEPLATE
              </Link>
            </div>

            {/* Navigation + Theme */}
            <div className="flex min-w-0 shrink-0 items-center gap-1 sm:gap-2">
              <nav className="flex shrink-0 items-center gap-0 rounded-lg border border-slate-800 bg-slate-950/90 p-0.5 shadow-xl min-[380px]:gap-0.5 sm:gap-2 sm:rounded-2xl sm:p-2">
                <Link
                  href="/"
                  className="flex items-center gap-0.5 whitespace-nowrap rounded-md px-1 py-1.5 text-[9px] font-bold text-slate-300 transition hover:bg-purple-500/10 hover:text-white min-[380px]:px-1.5 sm:gap-2 sm:rounded-xl sm:px-4 sm:py-2 sm:text-sm"
                >
                  <span>⌂</span>
                  <span>Home</span>
                </Link>

                <Link
                  href="/tools"
                  className="flex items-center gap-0.5 whitespace-nowrap rounded-md px-1 py-1.5 text-[9px] font-bold text-slate-300 transition hover:bg-purple-500/10 hover:text-white min-[380px]:px-1.5 sm:gap-2 sm:rounded-xl sm:px-4 sm:py-2 sm:text-sm"
                >
                  <span>⚡</span>
                  <span>Tools</span>
                </Link>

                <Link
                  href="/games"
                  className="flex items-center gap-0.5 whitespace-nowrap rounded-md px-1 py-1.5 text-[9px] font-bold text-slate-300 transition hover:bg-purple-500/10 hover:text-white min-[380px]:px-1.5 sm:gap-2 sm:rounded-xl sm:px-4 sm:py-2 sm:text-sm"
                >
                  <span>🎮</span>
                  <span>Games</span>
                </Link>

                <Link
                  href="/news"
                  className="flex items-center gap-0.5 whitespace-nowrap rounded-md px-1 py-1.5 text-[9px] font-bold text-slate-300 transition hover:bg-purple-500/10 hover:text-white min-[380px]:px-1.5 sm:gap-2 sm:rounded-xl sm:px-4 sm:py-2 sm:text-sm"
                >
                  <span>📰</span>
                  <span>News</span>
                </Link>
              </nav>

              <div className="flex shrink-0 items-center justify-center">
                <ThemeToggle />
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="relative z-10 min-w-0 w-full flex-1">
          {children}
        </main>

        {/* Footer */}
        <footer className="relative z-10 mt-20 w-full min-w-0 border-t border-slate-900 bg-[#02040a]/90 backdrop-blur-md">
          <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-8">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-3">

              {/* About */}
              <div>
                <h5 className="text-sm font-black tracking-widest text-white">
                  GAMEPLATE
                </h5>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-500">
                  Modern tools, gaming resources, gameplay tactics, and
                  community-focused content.
                </p>
              </div>

              {/* Navigation */}
              <div>
                <h5 className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  Navigation
                </h5>
                <div className="mt-4 flex flex-col gap-3">
                  <Link href="/" className="text-sm text-slate-500 transition hover:text-purple-400">
                    Home
                  </Link>
                  <Link href="/tools" className="text-sm text-slate-500 transition hover:text-purple-400">
                    Tools
                  </Link>
                  <Link href="/games" className="text-sm text-slate-500 transition hover:text-purple-400">
                    Games
                  </Link>
                  <Link href="/news" className="text-sm text-slate-500 transition hover:text-purple-400">
                    News
                  </Link>
                </div>
              </div>

              {/* Legal */}
              <div>
                <h5 className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  Legal & Contact
                </h5>
                <div className="mt-4 flex flex-col gap-3">
                  <Link href="/privacy" className="text-sm text-slate-500 transition hover:text-purple-400">
                    Privacy Policy
                  </Link>
                  <Link href="/terms" className="text-sm text-slate-500 transition hover:text-purple-400">
                    Terms of Service
                  </Link>
                  <Link href="/cookies" className="text-sm text-slate-500 transition hover:text-purple-400">
                    Cookie Policy
                  </Link>
                  <Link href="/contact" className="text-sm text-slate-500 transition hover:text-purple-400">
                    Contact
                  </Link>
                </div>
              </div>
            </div>

            {/* Bottom */}
            <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-slate-900 pt-6 md:flex-row">
              <p className="text-xs text-slate-600">
                © 2026 Gameplate. All rights reserved.
              </p>
              <p className="text-center text-xs text-slate-700">
                Modern tools. Gaming resources. Community.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
