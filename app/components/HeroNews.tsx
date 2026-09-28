"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type NewsItem = {
  category: string;
  title: string;
  date: string;
  tag: string;
  summary: string;
  image: string;
  content: string;
  faq?: {
    question: string;
    answer: string;
  }[];
};

export default function HeroNews({ news }: { news: NewsItem[] }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (news.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => {
        if (prev === news.length - 1) {
          return 0;
        }

        return prev + 1;
      });
    }, 3000);

    return () => clearInterval(timer);
  }, [news.length]);

  if (news.length === 0) {
    return (
      <section className="bg-slate-950/80 border border-purple-500/20 rounded-2xl p-5 md:p-6 relative overflow-hidden shadow-2xl backdrop-blur-sm">
        <div className="flex items-center justify-center min-h-56 md:min-h-72">
          <p className="text-slate-400">No news available.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-slate-950/80 border border-purple-500/20 rounded-2xl p-5 md:p-6 relative overflow-hidden shadow-2xl backdrop-blur-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
        <div className="relative h-56 md:h-72 w-full bg-slate-900 rounded-2xl border border-purple-500/20 overflow-hidden shadow-inner">
          <img
            src={news[currentSlide].image}
            alt={news[currentSlide].title}
            className="absolute inset-0 w-full h-full object-cover transition-all duration-500"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#02040a]/80 via-transparent to-transparent" />

          <div className="absolute bottom-4 left-4 right-4">
            <span className="inline-block bg-purple-500/20 border border-purple-400/30 text-purple-300 text-xs font-bold px-3 py-1 rounded-full">
              {news[currentSlide].tag}
            </span>
          </div>
        </div>

        <div className="flex flex-col min-h-56 md:min-h-72">
          <div className="flex flex-col gap-2 flex-1">
            {news.map((item, index) => (
              <button
                key={`${item.title}-${item.date}`}
                onClick={() => setCurrentSlide(index)}
                className={`w-full text-left rounded-xl px-4 py-3 transition-all duration-300 border ${
                  currentSlide === index
                    ? "bg-purple-500/10 border-purple-500/30 text-white"
                    : "bg-transparent border-transparent text-slate-400 hover:text-white hover:bg-slate-900/60"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-16 h-12 shrink-0 rounded-lg overflow-hidden bg-slate-900 border border-white/5">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <span
                    className={`block leading-snug ${
                      currentSlide === index
                        ? "text-base md:text-lg font-extrabold"
                        : "text-sm md:text-base font-bold"
                    }`}
                  >
                    {item.title}
                  </span>
                </div>
              </button>
            ))}
          </div>

          <Link
            href="/news"
            className="mt-3 w-full rounded-xl bg-purple-600 hover:bg-purple-500 border border-purple-500 text-white font-bold text-sm py-3 text-center transition shadow-lg shadow-purple-900/30"
          >
            All News
          </Link>
        </div>
      </div>
    </section>
  );
}