"use client";

import Link from "next/link";

export default function NewsPage() {
  const newsCategories = [
    {
      categoryTitle: "🚀 Newly Released Games",
      categoryDesc:
        "Latest titles newly released and recently introduced to the gaming community.",
      items: [
        {
          id: 1,
          title: "The Blood of Dawnwalker",
          date: "September 2026",
          tag: "New Release (PC)",
          summary:
            "A dark fantasy RPG from Rebel Wolves has arrived as one of September's notable PC releases, combining an open-world adventure with a vampire-focused setting, exploration, combat, and meaningful story choices.",
        },
        {
          id: 2,
          title: "Shape of Dreams",
          date: "September 17, 2026",
          tag: "New Release (Xbox)",
          summary:
            "Shape of Dreams has expanded to Xbox after gaining attention on PC. The action-roguelike combines fast-paced combat with customizable abilities and a replayable adventure designed for players who enjoy experimenting with different builds.",
        },
      ],
    },
    {
      categoryTitle: "🔥 Popular Games",
      categoryDesc:
        "Games currently receiving significant attention and active player interest.",
      items: [
        {
          id: 3,
          title: "Brawl Stars x Duolingo Event Goes Live",
          date: "September 19, 2026",
          tag: "Live Event (Mobile)",
          summary:
            "Brawl Stars has launched a limited-time collaboration with Duolingo. The event brings Duo into Starr Park, adds special challenges and a Boss Fight, and gives players several opportunities to collect rewards before the crossover ends.",
        },
        {
          id: 4,
          title: "PUBG MOBILE Adds Midnight Hunters",
          date: "September 2026",
          tag: "Major Update (Mobile)",
          summary:
            "PUBG MOBILE's Version 4.6 update introduces Midnight Hunters, a supernatural-themed experience featuring vampires, monster hunting mechanics, new events, and additional content across several parts of the game.",
        },
      ],
    },
    {
      categoryTitle: "⚡ Featured Games",
      categoryDesc:
        "Games currently featured because of major updates, announcements, or upcoming releases.",
      items: [
        {
          id: 5,
          title: "Persona 4 Revival Gets New Details",
          date: "September 17, 2026",
          tag: "Featured Upcoming Game",
          summary:
            "Persona 4 Revival received new information during the Xbox Tokyo Game Show presentation. The upcoming remake continues to modernize the classic mystery RPG while bringing its characters and world to a new generation of players.",
        },
        {
          id: 6,
          title: "Wo Long 2: Wings of Ember Shows New Gameplay",
          date: "September 17, 2026",
          tag: "Featured Upcoming Game",
          summary:
            "Wo Long 2: Wings of Ember received a new gameplay presentation showcasing a powerful boss encounter and additional combat details. The sequel is scheduled to launch in 2027 across major platforms.",
        },
      ],
    },
    {
      categoryTitle: "⭐ Moderator's Recommendation",
      categoryDesc:
        "A special title selected by our team for players looking for something worth trying.",
      items: [
        {
          id: 7,
          title: "One Gun",
          date: "September 22, 2026",
          tag: "Moderator's Recommendation",
          summary:
            "One Gun remains one of the titles highlighted by the GamePlate team. Its straightforward gameplay, wave-based action, and progression system make it a simple but enjoyable choice for players who want something easy to pick up while still having room to improve.",
        },
      ],
    },
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
              📰
            </span>
            <div>
              <h1 className="text-2xl font-extrabold text-white">
                News & Announcements
              </h1>
              <p className="text-xs md:text-sm text-slate-400">
                Newly released games, popular titles, featured games, and
                moderator recommendations.
              </p>
            </div>
          </div>
        </div>

        {/* Categories List */}
        <div className="flex flex-col gap-10">
          {newsCategories.map((cat, index) => (
            <div key={index} className="flex flex-col gap-4">
              {/* Category Title and Description */}
              <div className="border-b border-slate-900 pb-3 px-1">
                <h2 className="text-xl font-black text-white">
                  {cat.categoryTitle}
                </h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  {cat.categoryDesc}
                </p>
              </div>

              {/* News Cards within Category */}
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

                      <h3 className="text-base font-extrabold text-white">
                        {news.title}
                      </h3>

                      <p className="text-xs text-slate-300 leading-relaxed">
                        {news.summary}
                      </p>
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