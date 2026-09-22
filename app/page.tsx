"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const heroSlides = [
    {
      id: 1,
      title: "NetSec PRO Coming Soon!",
      description:
        "The advanced NetSec PRO version, featuring a fully pro-grade design, will soon be available for download through this platform.",
      tag: "PRO Version & Security",
      imageSrc:
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Brawl Macro is Live!",
      description:
        "Brawl Macro is now live in its initial release, allowing you to use a simple bot for Brawl Stars and create your own macros with anti-ban protection!",
      tag: "Announcement & Free Version",
      imageSrc:
        "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "One Gun Auto Farm is Live!",
      description:
        "The auto farm tool for One Gun stickman is now live and free to use!",
      tag: "Announcement & Free Version",
      imageSrc:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => {
        if (prev === heroSlides.length - 1) {
          return 0;
        }

        return prev + 1;
      });
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#02040a] text-slate-100 flex flex-col justify-between relative overflow-hidden font-sans select-none">

      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-10 left-12 w-1 h-1 bg-white rounded-full opacity-50 animate-pulse" />
        <div className="absolute top-24 right-20 w-1.5 h-1.5 bg-white rounded-full opacity-40" />
        <div className="absolute top-40 left-1/3 w-0.5 h-0.5 bg-white rounded-full opacity-60" />
        <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-white rounded-full opacity-35" />
        <div className="absolute top-1/2 left-20 w-1 h-1 bg-white rounded-full opacity-45 animate-pulse" />
        <div className="absolute top-2/3 right-1/3 w-0.5 h-0.5 bg-white rounded-full opacity-50" />
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-white rounded-full opacity-40" />
        <div className="absolute bottom-16 right-16 w-1 h-1 bg-white rounded-full opacity-55" />
        <div className="absolute top-1/3 right-12 w-0.5 h-0.5 bg-white rounded-full opacity-40" />
      </div>

      <main className="relative z-10 flex-1 max-w-6xl w-full mx-auto px-4 py-8 flex flex-col gap-8">

        <section className="bg-slate-950/80 border border-purple-500/20 rounded-2xl p-5 md:p-6 relative overflow-hidden shadow-2xl backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">

            <div className="relative h-56 md:h-72 w-full bg-slate-900 rounded-2xl border border-purple-500/20 overflow-hidden shadow-inner">
              <img
                src={heroSlides[currentSlide].imageSrc}
                alt={heroSlides[currentSlide].title}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#02040a]/80 via-transparent to-transparent" />

              <div className="absolute bottom-4 left-4 right-4">
                <span className="inline-block bg-purple-500/20 border border-purple-400/30 text-purple-300 text-xs font-bold px-3 py-1 rounded-full">
                  {heroSlides[currentSlide].tag}
                </span>
              </div>
            </div>

            <div className="flex flex-col min-h-56 md:min-h-72">
              <div className="flex flex-col gap-2 flex-1">

                {heroSlides.map((slide, index) => (
                  <button
                    key={slide.id}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-full text-left rounded-xl px-4 py-3 transition-all duration-300 border ${
                      currentSlide === index
                        ? "bg-purple-500/10 border-purple-500/30 text-white"
                        : "bg-transparent border-transparent text-slate-400 hover:text-white hover:bg-slate-900/60"
                    }`}
                  >
                    <span
                      className={`block leading-snug ${
                        currentSlide === index
                          ? "text-base md:text-lg font-extrabold"
                          : "text-sm md:text-base font-bold"
                      }`}
                    >
                      {slide.title}
                    </span>
                  </button>
                ))}

              </div>

              <Link
                href="/news"
                className="mt-3 w-full rounded-xl bg-purple-600 hover:bg-purple-500 border border-purple-500 text-white font-bold text-sm py-3 text-center transition shadow-lg shadow-purple-900/30"
              >
                Tüm Haberler
              </Link>
            </div>

          </div>
        </section>

        <section className="bg-slate-950/70 border border-slate-900 rounded-2xl p-6 md:p-8 backdrop-blur-sm shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            <Link
              href="/tools"
              className="p-4 rounded-xl font-bold text-sm transition cursor-pointer flex flex-col items-center justify-center gap-2 border bg-purple-600 text-white border-purple-500 shadow-lg shadow-purple-900/40 hover:bg-purple-500"
            >
              <span className="text-lg">⚡</span>
              <span>Tools</span>
            </Link>

            <Link
              href="/games"
              className="p-4 rounded-xl font-bold text-sm transition cursor-pointer flex flex-col items-center justify-center gap-2 border bg-purple-600 text-white border-purple-500 shadow-lg shadow-purple-900/40 hover:bg-purple-500"
            >
              <span className="text-lg">🎮</span>
              <span>Games</span>
            </Link>

            <Link
              href="/news"
              className="p-4 rounded-xl font-bold text-sm transition cursor-pointer flex flex-col items-center justify-center gap-2 border bg-purple-600 text-white border-purple-500 shadow-lg shadow-purple-900/40 hover:bg-purple-500"
            >
              <span className="text-lg">📰</span>
              <span>News</span>
            </Link>

          </div>
        </section>

      </main>
    </div>
  );
}