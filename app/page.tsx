'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const heroSlides = [
    {
      id: 1,
      title: "NetSec PRO Coming Soon!",
      description: "The advanced NetSec PRO version, featuring a fully pro-grade design, will soon be available for download through this platform.",
      tag: "PRO Version & Security",
      imageSrc: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Brawl Macro is Live!",
      description: "Brawl Macro is now live in its initial release, allowing you to use a simple bot for Brawl Stars and create your own macros with anti-ban protection!",
      tag: "Announcement & Free Version",
      imageSrc: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "One Gun Auto Farm is Live!",
      description: "The auto farm tool for One Gun stickman is now live and free to use!",
      tag: "Announcement & Free Version",
      imageSrc: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#02040a] text-slate-100 flex flex-col justify-between relative overflow-hidden font-sans select-none">

      {/* Background star effect */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-10 left-12 w-1 h-1 bg-white rounded-full opacity-50 animate-pulse"></div>
        <div className="absolute top-24 right-20 w-1.5 h-1.5 bg-white rounded-full opacity-40"></div>
        <div className="absolute top-40 left-1/3 w-0.5 h-0.5 bg-white rounded-full opacity-60"></div>
        <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-white rounded-full opacity-35"></div>
        <div className="absolute top-1/2 left-20 w-1 h-1 bg-white rounded-full opacity-45 animate-pulse"></div>
        <div className="absolute top-2/3 right-1/3 w-0.5 h-0.5 bg-white rounded-full opacity-50"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-white rounded-full opacity-40"></div>
        <div className="absolute bottom-16 right-16 w-1 h-1 bg-white rounded-full opacity-55"></div>
        <div className="absolute top-1/3 right-12 w-0.5 h-0.5 bg-white rounded-full opacity-40"></div>
      </div>

      {/* Top Menu (Navbar) */}

      {/* Main Content */}
      <main className="relative z-10 flex-1 max-w-6xl w-full mx-auto px-4 py-8 flex flex-col gap-8">

        {/* Hero Area */}
        <section className="bg-slate-950/80 border border-purple-500/20 rounded-2xl p-10 md:p-12 relative overflow-hidden shadow-2xl backdrop-blur-sm">
          <div className="grid md:grid-cols-2 gap-10 items-center">

            <div className="flex flex-col items-start text-left justify-center">
              <span className="bg-purple-500/10 text-purple-400 text-xs font-bold px-3.5 py-1.5 rounded-full mb-5 border border-purple-500/30">
                {heroSlides[currentSlide].tag} ({currentSlide + 1}/{heroSlides.length})
              </span>

              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-white leading-tight">
                {heroSlides[currentSlide].title}
              </h2>

              <p className="text-slate-300 text-sm md:text-base font-medium leading-relaxed mb-8">
                {heroSlides[currentSlide].description}
              </p>

              <div className="flex items-center gap-5">
                <div className="flex gap-2.5">
                  <button
                    onClick={prevSlide}
                    className="bg-slate-900 hover:bg-purple-950/50 text-purple-400 w-10 h-10 rounded-xl transition border border-purple-500/20 flex items-center justify-center font-bold cursor-pointer shadow-md"
                  >
                    ‹
                  </button>

                  <button
                    onClick={nextSlide}
                    className="bg-slate-900 hover:bg-purple-950/50 text-purple-400 w-10 h-10 rounded-xl transition border border-purple-500/20 flex items-center justify-center font-bold cursor-pointer shadow-md"
                  >
                    ›
                  </button>
                </div>

                <div className="flex gap-2">
                  {heroSlides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        currentSlide === index
                          ? 'w-8 bg-purple-500 shadow-sm shadow-purple-500/50'
                          : 'w-2 bg-slate-800'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side: Related Module Image */}
            <div className="relative h-56 md:h-72 w-full bg-slate-900 rounded-2xl border border-purple-500/20 flex items-center justify-center overflow-hidden shadow-inner group">
              <img
                src={heroSlides[currentSlide].imageSrc}
                alt={heroSlides[currentSlide].title}
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#02040a] via-transparent to-transparent opacity-80"></div>
            </div>

          </div>
        </section>

        {/* Bottom Module Area (Buttons transformed into Links routing to respective pages) */}
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