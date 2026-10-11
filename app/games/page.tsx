
"use client";

import Link from "next/link";

export default function GamesPage() {
  const gameModules = [
    {
      id: 3,
      title: "Brawl Stars",
      platform: "Mobile",
      category: "Popular",
      version: "Game Guide",
      stats: "Multiplayer / Competitive",
      description:
        "A competitive multiplayer game featuring unique brawlers, fast-paced matches, team-based modes, and trophy progression.",
      bgImage:
        "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=1200&auto=format&fit=crop",
      features: [
        "Brawler selection and counter picks",
        "Competitive matches and ranked play",
        "Team coordination and positioning",
      ],
      modules: {
        news: { active: true, label: "Read News", href: "/news" },
        tactics: { active: true, label: "Explore Tactics", href: "/tools" },
      },
    },
    {
      id: 4,
      title: "PUBG Mobile",
      platform: "Mobile",
      category: "Popular",
      version: "Game Guide",
      stats: "Battle Royale / Survival",
      description:
        "A battle royale shooter where players loot equipment, choose their positions, coordinate with teammates, and compete to be the last survivor.",
      bgImage:
        "https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=1200&auto=format&fit=crop",
      features: [
        "Weapon and equipment management",
        "Map awareness and tactical rotations",
        "Solo and squad survival strategies",
      ],
      modules: {
        news: { active: true, label: "Read News", href: "/news" },
        tactics: { active: true, label: "Explore Tactics", href: "/tools" },
      },
    },
    {
      id: 5,
      title: "One Gun",
      platform: "Mobile",
      category: "Popular & Community Pick",
      version: "Game Guide",
      stats: "Action / Item Farming",
      description:
        "A pixel-style action game focused on surviving enemy waves, collecting useful items, improving equipment, and progressing through increasingly difficult challenges.",
      bgImage:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop",
      features: [
        "Level and wave progression",
        "Item farming and equipment upgrades",
        "Community gameplay tactics",
      ],
      modules: {
        news: { active: true, label: "Read News", href: "/news" },
        tactics: { active: true, label: "Explore Tactics", href: "/tools" },
      },
    },
    {
      id: 6,
      title: "GTA 6",
      platform: "PC / Console",
      category: "Upcoming",
      version: "Game Guide",
      stats: "Open World / Action",
      description:
        "Rockstar Games' highly anticipated open-world adventure set in the fictional state of Leonida. Explore the world, follow the story, and discover the activities and opportunities available throughout the game.",
      bgImage:
        "https://images.unsplash.com/photo-1519608487953-e999c86e7455?q=80&w=1200&auto=format&fit=crop",
      features: [
        "Open-world exploration",
        "Story and character information",
        "News, updates, and gameplay coverage",
      ],
      modules: {
        news: { active: true, label: "Read News", href: "/news" },
        tactics: { active: true, label: "Explore Tactics", href: "/tools" },
      },
    },
    {
      id: 7,
      title: "Call of Duty: Modern Warfare 4",
      platform: "PC / Console",
      category: "Game News",
      version: "Game Guide",
      stats: "FPS / Tactical Combat",
      description:
        "Follow Call of Duty coverage and first-person shooter tactics, including weapon control, positioning, map awareness, and objective-based teamwork.",
      bgImage:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
      features: [
        "FPS aiming and recoil-control tips",
        "Map awareness and positioning",
        "News and updates related to the series",
      ],
      modules: {
        news: { active: true, label: "Read News", href: "/news" },
        tactics: { active: true, label: "Explore Tactics", href: "/tools" },
      },
    },
    {
      id: 8,
      title: "Minecraft",
      platform: "PC / Console / Mobile",
      category: "Popular",
      version: "Game Guide",
      stats: "Sandbox / Survival",
      description:
        "A sandbox game built around exploration, crafting, construction, and survival. Gather resources, explore dangerous locations, and create your own world.",
      bgImage:
        "https://images.unsplash.com/photo-1607513746994-51f730a44832?q=80&w=1200&auto=format&fit=crop",
      features: [
        "Survival and resource management",
        "Building and crafting strategies",
        "Exploration and combat tips",
      ],
      modules: {
        news: { active: true, label: "Read News", href: "/news" },
        tactics: { active: true, label: "Explore Tactics", href: "/tools" },
      },
    },
    {
      id: 9,
      title: "Fortnite",
      platform: "PC / Console / Mobile",
      category: "Popular",
      version: "Game Guide",
      stats: "Battle Royale / Building",
      description:
        "A multiplayer battle royale game that combines combat, strategic rotations, resource management, and building in supported modes.",
      bgImage:
        "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=1200&auto=format&fit=crop",
      features: [
        "Landing and loot strategies",
        "Storm rotations and positioning",
        "Combat and building fundamentals",
      ],
      modules: {
        news: { active: true, label: "Read News", href: "/news" },
        tactics: { active: true, label: "Explore Tactics", href: "/tools" },
      },
    },
    {
      id: 10,
      title: "Apex Legends",
      platform: "PC / Console",
      category: "Popular",
      version: "Game Guide",
      stats: "Battle Royale / FPS",
      description:
        "A squad-based battle royale shooter featuring unique Legends, team abilities, fast movement, and tactical engagements.",
      bgImage:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
      features: [
        "Squad coordination and communication",
        "Ring rotations and positioning",
        "Legend abilities and combat tactics",
      ],
      modules: {
        news: { active: false, label: "Read News", href: "/news" },
        tactics: { active: true, label: "Explore Tactics", href: "/tools" },
      },
    },
    {
      id: 11,
      title: "Marathon",
      platform: "PC / Console",
      category: "Game News",
      version: "Game Guide",
      stats: "Sci-Fi / Extraction Shooter",
      description:
        "A sci-fi extraction shooter centered on dangerous expeditions, valuable loot, tactical encounters, and the challenge of escaping successfully.",
      bgImage:
        "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1200&auto=format&fit=crop",
      features: [
        "Extraction planning and survival",
        "Risk and reward decisions",
        "Combat awareness and resource management",
      ],
      modules: {
        news: { active: true, label: "Read News", href: "/news" },
        tactics: { active: true, label: "Explore Tactics", href: "/tools" },
      },
    },
    {
      id: 12,
      title: "Persona 4 Revival",
      platform: "PC / Console",
      category: "Game News",
      version: "Game Guide",
      stats: "RPG / Mystery",
      description:
        "Follow news and gameplay coverage related to Persona 4 Revival, with a focus on role-playing mechanics, party preparation, enemy weaknesses, and story developments.",
      bgImage:
        "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop",
      features: [
        "RPG combat and party preparation",
        "Enemy weaknesses and resource management",
        "Game announcements and news coverage",
      ],
      modules: {
        news: { active: true, label: "Read News", href: "/news" },
        tactics: { active: true, label: "Explore Tactics", href: "/tools" },
      },
    },
    {
      id: 13,
      title: "The Blood of Dawnwalker",
      platform: "PC / PS5 / Xbox Series X|S",
      category: "Game News",
      version: "Game Guide",
      stats: "Dark Fantasy / RPG",
      description:
        "A dark fantasy role-playing adventure from Rebel Wolves. Follow its development and explore general RPG tactics covering combat preparation, exploration, and resource management.",
      bgImage:
        "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop",
      features: [
        "Dark fantasy world and story coverage",
        "Combat preparation and enemy awareness",
        "News and release-related information",
      ],
      modules: {
        news: { active: true, label: "Read News", href: "/news" },
        tactics: { active: true, label: "Explore Tactics", href: "/tools" },
      },
    },
    {
      id: 14,
      title: "Marvel's Wolverine",
      platform: "PlayStation",
      category: "Game News",
      version: "Game Guide",
      stats: "Action / Superhero",
      description:
        "Follow news and gameplay coverage for Marvel's Wolverine, with general action-game tips covering combat timing, movement, and prioritizing threats.",
      bgImage:
        "https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1200&auto=format&fit=crop",
      features: [
        "Combat timing and movement",
        "Enemy prioritization",
        "Announcements and development news",
      ],
      modules: {
        news: { active: true, label: "Read News", href: "/news" },
        tactics: { active: true, label: "Explore Tactics", href: "/tools" },
      },
    },
    {
      id: 15,
      title: "Pixel Strike 3D",
      platform: "PC / Mobile",
      category: "Popular",
      version: "Game Guide",
      stats: "FPS / Multiplayer",
      description:
        "A block-style multiplayer shooter focused on quick matches, weapon selection, aim, movement, and map awareness.",
      bgImage:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
      features: [
        "Aim and weapon-control fundamentals",
        "Map awareness and movement",
        "Multiplayer combat strategies",
      ],
      modules: {
        news: { active: true, label: "Read News", href: "/news" },
        tactics: { active: false, label: "Explore Tactics", href: "/tools" },
      },
    },
  ];

  return (
    <div className="games-page min-h-screen bg-[#02040a] text-slate-100 flex flex-col justify-between relative overflow-hidden font-sans select-none">
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
        <div className="games-info-panel bg-slate-950/80 border border-purple-500/20 rounded-2xl p-6 md:p-8 backdrop-blur-sm shadow-xl">
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
              className="games-card relative rounded-2xl overflow-hidden border border-slate-800 hover:border-purple-500/50 transition shadow-xl flex flex-col justify-between group"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105 z-0"
                style={{ backgroundImage: `url(${game.bgImage})` }}
              ></div>

              {/* Dark Overlay */}
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
                  {game.modules.news.active ? (
                    <Link
                      href={game.modules.news.href}
                      className="py-2.5 px-1 bg-purple-600/80 hover:bg-purple-600 border border-purple-400/40 text-white rounded-xl text-[10px] font-bold transition shadow-lg text-center cursor-pointer backdrop-blur-sm flex items-center justify-center"
                    >
                      {game.modules.news.label}
                    </Link>
                  ) : (
                    <button
                      type="button"
                      disabled
                      className="py-2.5 px-1 bg-slate-700/60 border border-slate-600/50 text-slate-500 rounded-xl text-[10px] font-bold shadow-lg text-center cursor-not-allowed backdrop-blur-sm flex items-center justify-center"
                    >
                      {game.modules.news.label}
                    </button>
                  )}

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

      {/* =====================================================
          LIGHT MODE ONLY
          ===================================================== */}
      <style jsx global>{`
        html[data-theme="light"] .games-info-panel {
          background-color: #ffffff !important;
          border-color: rgba(168, 85, 247, 0.25) !important;
        }

        html[data-theme="light"] .games-info-panel .text-white {
          color: #0f172a !important;
        }

        html[data-theme="light"] .games-info-panel .text-slate-400 {
          color: #475569 !important;
        }

        /*
          Games cards intentionally stay dark in Light Mode.
          This prevents the global light-theme rules from changing
          the card appearance, text, overlays or buttons.
        */

        html[data-theme="light"] .games-card {
          color: #f1f5f9 !important;
        }

        html[data-theme="light"] .games-card .text-white {
          color: #ffffff !important;
        }

        html[data-theme="light"] .games-card .text-slate-300 {
          color: #cbd5e1 !important;
        }

        html[data-theme="light"] .games-card .text-slate-400 {
          color: #94a3b8 !important;
        }

        html[data-theme="light"] .games-card .bg-slate-900\\/80 {
          background-color: rgba(15, 23, 42, 0.8) !important;
        }

        html[data-theme="light"] .games-card .border-slate-800 {
          border-color: #1e293b !important;
        }

        html[data-theme="light"] .games-card .border-slate-700\\/60 {
          border-color: rgba(51, 65, 85, 0.6) !important;
        }

        html[data-theme="light"] .games-card .bg-slate-700\\/60 {
          background-color: rgba(51, 65, 85, 0.6) !important;
        }

        html[data-theme="light"] .games-card .text-slate-500 {
          color: #64748b !important;
        }
      `}</style>
    </div>
  );
}
