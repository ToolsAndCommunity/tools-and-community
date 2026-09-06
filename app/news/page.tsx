'use client';

import Link from 'next/link';

export default function NewsPage() {
  // News data categorized (All dates updated to the current date of September 3, 2026)
  const newsCategories = [
    {
      categoryTitle: "🚀 Newly Released Games",
      categoryDesc: "Latest titles newly added to our platform and initial integration announcements.",
      items: [
        { id: 1, title: "Pragmata", date: "September 3, 2026", tag: "New Release (PC)", summary: "An immersive adventure set in a lunar-based dystopian atmosphere within Capcom's next-gen sci-fi action-adventure world." },
        { id: 2, title: "Kingdom Rush 6: Genesis TD", date: "September 3, 2026", tag: "New Game (Mobile)", summary: "The brand-new installment of the legendary tower defense series released for mobile platforms, taking its place on mobile devices with tactical depth and fresh hero abilities." }
      ]
    },
    {
      categoryTitle: "🔥 Popular Games",
      categoryDesc: "Titles that the community is most interested in and actively playing.",
      items: [
        { id: 3, title: "Brawl Stars", date: "September 3, 2026", tag: "Popular (Mobile)", summary: "The shooter phenomenon of the mobile world that never leaves the top, keeping players hooked with constantly updated seasons and competitive character dynamics." },
        { id: 4, title: "PUBG Mobile", date: "September 3, 2026", tag: "Popular (Mobile)", summary: "The most populated action arena of mobile platforms with its vast battlegrounds, tactical survival mechanics, and massive community base." }
      ]
    },
    {
      categoryTitle: "⚡ Featured Games",
      categoryDesc: "Supported titles that are featured and actively available on our platform.",
      items: [
        { id: 5, title: "Brawl Stars", date: "September 3, 2026", tag: "Featured Game", summary: "An actively supported title featured on our platform with gameplay resources, tactics, and community-focused content." },
        { id: 6, title: "One Gun", date: "September 3, 2026", tag: "Featured Game", summary: "A featured title on our platform with progression-focused content and community resources." }
      ]
    },
    {
      categoryTitle: "⭐ Moderator's Recommendation",
      categoryDesc: "Special recommendations, tips, and important announcements chosen by our team members.",
      items: [
        { id: 7, title: "One Gun", date: "September 3, 2026", tag: "Important Recommendation", summary: "Our moderator team's favorite recommendation that we strongly advise you to try this period, with unique wave mechanics and in-depth progression dynamics." }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#02040a] text-slate-100 flex flex-col justify-between relative overflow-hidden font-sans select-none">
      
      {/* Background star effect */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-10 left-12 w-1 h-1 bg-white rounded-full opacity-50 animate-pulse"></div>
        <div className="absolute top-24 right-20 w-1.5 h-1.5 bg-white rounded-full opacity-40"></div>
        <div className="absolute top-40 left-1/3 w-0.5 h-0.5 bg-white rounded-full opacity-60"></div>
        <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-white rounded-full opacity-35"></div>
        <div className="absolute top-1/2 left-20 w-1 h-1 bg-white rounded-full opacity-45 animate-pulse"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-white rounded-full opacity-40"></div>
        <div className="absolute bottom-16 right-16 w-1 h-1 bg-white rounded-full opacity-55"></div>
      </div>

      {/* Top Menu (Navbar) */}

      {/* Main Content */}
      <main className="relative z-10 flex-1 max-w-6xl w-full mx-auto px-4 py-8 flex flex-col gap-10">
        
        {/* Top Header */}
        <div className="bg-slate-950/80 border border-purple-500/20 rounded-2xl p-6 md:p-8 backdrop-blur-sm shadow-xl">
          <div className="flex items-center gap-3">
            <span className="text-2xl p-2.5 bg-purple-500/10 border border-purple-500/30 rounded-xl">📰</span>
            <div>
              <h1 className="text-2xl font-extrabold text-white">News & Announcements</h1>
              <p className="text-xs md:text-sm text-slate-400">Newly released games, popular titles, featured games, and moderator recommendations.</p>
            </div>
          </div>
        </div>

        {/* Categories List */}
        <div className="flex flex-col gap-10">
          {newsCategories.map((cat, index) => (
            <div key={index} className="flex flex-col gap-4">
              
              {/* Category Title and Description */}
              <div className="border-b border-slate-900 pb-3 px-1">
                <h2 className="text-xl font-black text-white">{cat.categoryTitle}</h2>
                <p className="text-xs text-slate-400 mt-0.5">{cat.categoryDesc}</p>
              </div>

              {/* News Cards within Category (Grid) */}
              <div className="grid md:grid-cols-2 gap-4">
                {cat.items.map((news) => (
                  <div
                    key={news.id}
                    className="bg-slate-950/80 border border-slate-900 rounded-2xl p-5 hover:border-purple-500/40 transition shadow-lg flex flex-col justify-between gap-4"
                  >
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between items-center">
                        <span className="bg-purple-500/10 text-purple-400 text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-purple-500/30">
                          {news.tag}
                        </span>
                        <span className="text-[10px] text-slate-500 font-medium">
                          {news.date}
                        </span>
                      </div>
                      <h3 className="text-base font-extrabold text-white">{news.title}</h3>
                      <p className="text-xs text-slate-300 leading-relaxed">{news.summary}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-900 bg-[#02040a]/90 text-slate-400 px-6 py-6 text-center text-xs">
        © 2026 Secure Community Platform - News Module.
      </footer>
    </div>
  );
}