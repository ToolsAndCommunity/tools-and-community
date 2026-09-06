'use client';

import { useState } from "react";

export default function ToolsPage() {
  const tools = [
    {
      name: "One Gun Auto Farm",
      version: "v1.0",
      status: "Active",
      description:
        "An automation tool designed to simplify repetitive in-game actions through configurable controls and automated routines.",
      image:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop",
      download: "/onegunautofarm.exe",
    },
    {
      name: "Brawl Macro",
      version: "v1.0",
      status: "Active",
      description:
        "A customizable automation tool with configurable input controls, automation features, and custom profiles for supported applications.",
      image:
        "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=1000&auto=format&fit=crop",
      download: "/brawlmacro.exe",
    },
    {
      name: "NetSec",
      version: "v1.0",
      status: "Active",
      description:
        "A web security analysis tool designed to examine publicly accessible web information and provide useful security-related insights.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1000&auto=format&fit=crop",
      download: "/netsec.exe",
    },
    {
      name: "NetSec PRO",
      version: "v1.0",
      status: "Coming Soon",
      description:
        "An advanced web security analysis tool designed for authorized security testing and research.",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop",
      download: null,
    },
  ];

  const tacticCategories = [
    {
      id: "brawl-stars",
      title: "🎯 Brawl Stars Tactics",
      tactics: [
        {
          title: "Counter Picks",
          text: "In Ranked, choose counter brawlers against the enemy team. This can significantly increase your chances of winning.",
        },
        {
          title: "Spread Out",
          text: "Avoid grouping up with your teammates when possible. Spreading out makes it harder for enemies to hit multiple players with the same attack.",
        },
        {
          title: "Use Your Range",
          text: "When playing a long-range brawler, keep your distance and use your range advantage instead of taking unnecessary close-range fights.",
        },
      ],
    },
    {
      id: "one-gun",
      title: "⚡ One Gun Tactics",
      tactics: [
        {
          title: "Maxing Out Your Item",
          text: "While getting a Red Item may seem like the hardest part of the game, the real challenge is getting it to max level. Upgrading it can sometimes require a very high amount of resources.",
        },
        {
          title: "Item Farming",
          text: "You can replay levels you have already completed to farm items and get Purple rarity items.",
        },
        {
          title: "Gold Monster Strategy",
          text: "If you want to set a record in Hell Mode, always focus on Gold Monsters. The Hearts they drop are extremely important.",
        },
      ],
    },
    {
      id: "pubg",
      title: "🔫 PUBG Tactics",
      tactics: [
        {
          title: "Cover Advantage",
          text: "Always try to fight from cover. Using rocks, walls, trees, and buildings can reduce your exposure and give you more opportunities to survive during gunfights.",
        },
        {
          title: "Don't Rush Every Fight",
          text: "You don't have to take every fight you encounter. Consider your position, cover, equipment, and the situation before committing to a gunfight.",
        },
        {
          title: "Watch Your Surroundings",
          text: "Before moving into an open area, check your surroundings and possible enemy positions. Moving without checking can leave you exposed to unexpected attacks.",
        },
      ],
    },
  ];

  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const toggleCategory = (id: string) => {
    setOpenCategory((current) => (current === id ? null : id));
  };

  return (
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="bg-slate-950/80 border border-purple-500/20 rounded-2xl p-8 shadow-xl">
          <div className="flex items-center gap-4">
            <span className="text-2xl p-3 bg-purple-500/10 border border-purple-500/30 rounded-xl">
              ⚡
            </span>

            <div>
              <h1 className="text-2xl font-extrabold text-white">
                Tools Center
              </h1>

              <p className="text-sm text-slate-400">
                Explore available software tools and practical gameplay tips.
              </p>
            </div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-8 mt-8">

          {/* Tools */}
          <div className="flex flex-col gap-4">
            <h2 className="text-sm font-bold text-purple-400 uppercase tracking-wider">
              Available Tools
            </h2>

            {tools.map((tool) => (
              <div
                key={tool.name}
                className="bg-slate-950/80 border border-purple-500/20 rounded-2xl overflow-hidden shadow-xl"
              >
                {/* Image */}
                <div className="relative h-36 overflow-hidden">
                  <img
                    src={tool.image}
                    alt={tool.name}
                    className="w-full h-full object-cover opacity-60"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                  <div className="absolute bottom-3 left-5">
                    <span className="text-xs text-purple-400 font-bold">
                      {tool.version}
                    </span>

                    <h3 className="text-lg font-bold text-white">
                      {tool.name}
                    </h3>
                  </div>

                  <span
                    className={
                      tool.status === "Active"
                        ? "absolute top-3 right-3 text-xs text-emerald-400 bg-emerald-950/70 border border-emerald-500/30 px-2 py-1 rounded-lg"
                        : "absolute top-3 right-3 text-xs text-amber-400 bg-amber-950/70 border border-amber-500/30 px-2 py-1 rounded-lg"
                    }
                  >
                    {tool.status}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {tool.description}
                  </p>

                  {tool.status === "Active" && tool.download ? (
                    <a
                      href={tool.download}
                      download
                      className="w-full mt-5 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-sm font-bold transition flex items-center justify-center gap-2"
                    >
                      <span>📥</span>
                      Download
                    </a>
                  ) : (
                    <button
                      disabled
                      className="w-full mt-5 py-3 rounded-xl bg-slate-800 text-slate-500 text-sm font-bold cursor-not-allowed"
                    >
                      🔒 Coming Soon
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Tactics */}
          <div className="bg-slate-950/80 border border-slate-900 rounded-2xl p-6 shadow-xl h-fit">

            <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">
              Gameplay Tactics
            </span>

            <h2 className="text-xl font-extrabold text-white mt-1">
              Improve Your Gameplay
            </h2>

            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              Explore practical tactics and strategies for different games
              and tools.
            </p>

            <div className="flex flex-col gap-4 mt-6">

              {tacticCategories.map((category) => {
                const isOpen = openCategory === category.id;

                return (
                  <div
                    key={category.id}
                    className="bg-slate-900/60 border border-slate-800 rounded-xl overflow-hidden transition-all duration-300"
                  >

                    {/* Category Header */}
                    <div className="flex items-center justify-between p-4">

                      <h3 className="font-bold text-purple-300">
                        {category.title}
                      </h3>

                      <button
                        onClick={() => toggleCategory(category.id)}
                        className="text-xs font-bold text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-700 px-3 py-2 rounded-lg transition"
                      >
                        {isOpen ? "←" : "Read"}
                      </button>

                    </div>

                    {/* Expanded Content */}
                    {isOpen && (
                      <div className="border-t border-slate-800 p-4 flex flex-col gap-5">

                        {category.tactics.map((tactic, index) => (
                          <div key={tactic.title}>

                            <div className="flex items-center gap-2">
                              <span className="text-xs text-purple-400 font-bold">
                                #{index + 1}
                              </span>

                              <h4 className="text-sm font-bold text-white">
                                {tactic.title}
                              </h4>
                            </div>

                            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                              {tactic.text}
                            </p>

                          </div>
                        ))}

                      </div>
                    )}

                  </div>
                );
              })}

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}