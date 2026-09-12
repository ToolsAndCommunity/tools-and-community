'use client';

import Link from 'next/link';

export default function GamesPage() {
  const gameModules = [
    {
      id: 1,
      title: "Pragmata",
      platform: "PC / Console",
      category: "New Release",
      version: "v1.0.4 Release",
      stats: "Ray Tracing / 4K / 60 FPS",
      description:
        "An immersive title set in a lunar-based dystopian atmosphere within Capcom's next-gen sci-fi action-adventure world. Solve gravity puzzles alongside your AI companion and look for ways to return to Earth while escaping dangerous android threats.",
      bgImage:
        "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=1200&auto=format&fit=crop",
      features: [
        "Next-gen Unreal Engine 5 physics engine",
        "Advanced dystopian lunar-based story mode",
        "Custom cinematic camera angles and dynamic combat mechanics"
      ],
      modules: {
        news: { active: true, label: "Read News", href: "/news" },
        tactics: { active: false, label: "Explore Tactics", href: "/tools" }
      }
    },
    {
      id: 2,
      title: "Kingdom Rush 6: Genesis TD",
      platform: "Mobile",
      category: "New Release",
      version: "v2.1.0 Genesis",
      stats: "Master of 32+ New Towers",
      description:
        "The brand-new installment of the legendary tower defense series released for mobile platforms, featuring tactical depth and strategic gameplay. Upgrade legendary heroes, cast magical spell combinations, and conquer challenging boss fights to protect your kingdom.",
      bgImage:
        "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop",
      features: [
        "Expanded skill tree and 4 different hero classes",
        "Offline playability and strategic challenge modes",
        "Special weekly tournaments and global leaderboard ranking"
      ],
      modules: {
        news: { active: true, label: "Read News", href: "/news" },
        tactics: { active: false, label: "Explore Tactics", href: "/tools" }
      }
    },
    {
      id: 3,
      title: "Brawl Stars",
      platform: "Mobile",
      category: "Popular",
      version: "Season 34: Cyber-Brawl",
      stats: "50M+ Active Players / Trophy Pushing",
      description:
        "A fast-paced competitive multiplayer game featuring intense 3v3 matches, unique brawler abilities, trophy progression, and competitive game modes. Build your team, master different brawlers, and climb the ranks.",
      bgImage:
        "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=1200&auto=format&fit=crop",
      features: [
        "Advanced trophy progression and match strategies",
        "Custom map editor and community votes",
        "Competitive 3v3 gameplay and ranked progression"
      ],
      modules: {
        news: { active: true, label: "Read News", href: "/news" },
        tactics: { active: true, label: "Explore Tactics", href: "/tools" }
      }
    },
    {
      id: 4,
      title: "PUBG Mobile",
      platform: "Mobile",
      category: "Popular",
      version: "v3.5 Frozen Kingdom",
      stats: "100 Players / Erangel Arena",
      description:
        "The most populated arena of mobile platforms with expansive battlegrounds, tactical survival mechanics, and a massive community base. Optimize weapon attachments, establish team coordination, and make strategic moves to become the last person standing (Winner Winner Chicken Dinner).",
      bgImage:
        "https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=1200&auto=format&fit=crop",
      features: [
        "Ultra HD graphics support and 90/120 FPS smooth gameplay experience",
        "Wide map options (Erangel, Miramar, Livik, Sanhok)",
        "Esports-oriented tournament and competitive ranking system"
      ],
      modules: {
        news: { active: true, label: "Read News", href: "/news" },
        tactics: { active: true, label: "Explore Tactics", href: "/tools" }
      }
    },
    {
      id: 5,
      title: "One Gun",
      platform: "Mobile",
      category: "Popular & Community Pick",
      version: "v4.2.1 Endless Wave",
      stats: "Level Progression / Item Farming",
      description:
        "One Gun is a fast-paced mobile action game where players try to survive against waves of enemies in pixel-style maps. The primary goal is to defeat enemies to clear levels, gather useful items from the map, and use these items to increase character weapon and equipment power. Progress through tactical maneuvers in an endless wave system that becomes progressively more difficult.",
      bgImage:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop",
      features: [
        "Level up and wave optimization guides",
        "Item farming and progression strategies",
        "Tactics sharing support"
      ],
      modules: {
        news: { active: true, label: "Read News", href: "/news" },
        tactics: { active: true, label: "Explore Tactics", href: "/tools" }
      }
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

      {/* Main Content */}
      <main className="relative z-10 flex-1 max-w-6xl w-full mx-auto px-4 py-8 flex flex-col gap-10">

        {/* Top Header */}
        <div className="bg-slate-950/80 border border-purple-500/20 rounded-2xl p-6 md:p-8 backdrop-blur-sm shadow-xl">
          <div className="flex items-center gap-3">
            <span className="text-2xl p-2.5 bg-purple-500/10 border border-purple-500/30 rounded-xl">
              🎮
            </span>

            <div>
              <h1 className="text-2xl font-extrabold text-white">
                Extended Game Archive & Modules
              </h1>

              <p className="text-xs md:text-sm text-slate-400">
                Detailed game descriptions, version info, and gameplay tactics.
              </p>
            </div>
          </div>
        </div>

        {/* Game Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {gameModules.map((game) => (
            <div
              key={game.id}
              className="relative rounded-2xl overflow-hidden border border-slate-800 hover:border-purple-500/50 transition shadow-xl flex flex-col justify-between group"
            >

              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105 z-0"
                style={{ backgroundImage: `url(${game.bgImage})` }}
              ></div>

              <div className="absolute inset-0 bg-gradient-to-t from-[#02040a] via-[#02040a]/95 to-[#02040a]/70 z-0"></div>

              {/* Card Top Section */}
              <div className="relative z-10 p-5 flex flex-col gap-3">

                <div className="flex justify-between items-center">
                  <span className="bg-purple-500/20 text-purple-300 text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-purple-500/40 backdrop-blur-md">
                    {game.platform}
                  </span>

                  <span className="text-[10px] bg-slate-900/80 text-slate-300 px-2.5 py-0.5 rounded-md border border-slate-700/60 font-medium backdrop-blur-md">
                    {game.category}
                  </span>
                </div>

                <h3 className="text-lg font-extrabold text-white drop-shadow-md">
                  {game.title}
                </h3>

                {/* Version and Stats Info */}
                <div className="flex gap-2 text-[10px] font-medium text-purple-300">
                  <span className="bg-purple-950/60 border border-purple-800/50 px-2 py-0.5 rounded">
                    {game.version}
                  </span>

                  <span className="bg-slate-900/80 border border-slate-800 px-2 py-0.5 rounded text-slate-400">
                    {game.stats}
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed font-normal pt-1">
                  {game.description}
                </p>

                {/* Features List */}
                <div className="flex flex-col gap-1 pt-2 border-t border-slate-800/80">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Highlights:
                  </span>

                  <ul className="flex flex-col gap-1">
                    {game.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="text-[11px] text-slate-300 flex items-center gap-1.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="relative z-10 p-5 pt-0 flex flex-col gap-2">
                <div className="grid grid-cols-2 gap-2">

                  {/* Read News */}
                  <Link
                    href={game.modules.news.href}
                    className="py-2.5 px-1 bg-purple-600/80 hover:bg-purple-600 border border-purple-400/40 text-white rounded-xl text-[10px] font-bold transition shadow-lg text-center cursor-pointer backdrop-blur-sm flex items-center justify-center"
                  >
                    {game.modules.news.label}
                  </Link>

                  {/* Explore Tactics */}
                  {game.modules.tactics.active ? (
                    <Link
                      href={game.modules.tactics.href}
                      className="py-2.5 px-1 bg-emerald-600/80 hover:bg-emerald-600 border border-emerald-400/40 text-white rounded-xl text-[10px] font-bold transition shadow-lg text-center cursor-pointer backdrop-blur-sm flex items-center justify-center"
                    >
                      {game.modules.tactics.label}
                    </Link>
                  ) : (
                    <button
                      type="button"
                      disabled
                      className="py-2.5 px-1 bg-slate-700/60 border border-slate-600/50 text-slate-500 rounded-xl text-[10px] font-bold shadow-lg text-center cursor-not-allowed backdrop-blur-sm flex items-center justify-center"
                    >
                      {game.modules.tactics.label}
                    </button>
                  )}

                </div>
              </div>

            </div>
          ))}

        </div>

      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-900 bg-[#02040a]/90 text-slate-400 px-6 py-6 text-center text-xs">
        © 2026 Gameplate - Games Module.
      </footer>

    </div>
  );
}
