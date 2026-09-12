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
      <body className="min-h-screen bg-[#02040a] text-slate-100 flex flex-col">

        {/* Background */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-purple-600/10 blur-[140px] rounded-full" />
          <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[400px] bg-purple-500/5 blur-[120px] rounded-full" />
        </div>

        {/* Navbar */}
        <header className="sticky top-0 z-50 border-b border-slate-900 bg-[#02040a]/80 backdrop-blur-md">
          <div className="grid grid-cols-3 items-center px-8 py-6">

            {/* Logo */}
            <Link
              href="/"
              className="text-lg font-black tracking-widest text-white justify-self-start hover:opacity-80 transition"
            >
              GAMEPLATE
            </Link>

            {/* Navigation */}
            <nav className="justify-self-center flex items-center gap-3 bg-slate-950/90 border border-slate-800 p-2 rounded-2xl shadow-xl">

              <Link
                href="/tools"
                className="px-4 py-2 rounded-xl text-sm font-bold text-slate-300 hover:text-white hover:bg-purple-500/10 transition flex items-center gap-2"
              >
                <span>⚡</span>
                Tools
              </Link>

              <Link
                href="/games"
                className="px-4 py-2 rounded-xl text-sm font-bold text-slate-300 hover:text-white hover:bg-purple-500/10 transition flex items-center gap-2"
              >
                <span>🎮</span>
                Games
              </Link>

              <Link
                href="/news"
                className="px-4 py-2 rounded-xl text-sm font-bold text-slate-300 hover:text-white hover:bg-purple-500/10 transition flex items-center gap-2"
              >
                <span>📰</span>
                News
              </Link>

            </nav>

            {/* Right Side */}
            <div></div>

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
