import fs from "fs";
import path from "path";
import Link from "next/link";

type NewsArticle = {
  category: string;
  title: string;
  date: string;
  tag: string;
  image?: string;
  summary: string;
  content: string;
};

type NewsArticleWithId = NewsArticle & {
  id: string;
};

const newsCategories = [
  {
    id: "all",
    categoryTitle: "📰 All News",
    categoryDesc:
      "All gaming news, new releases, major updates, and featured stories.",
  },
  {
    id: "newly-released",
    categoryTitle: "🚀 Newly Released Games",
    categoryDesc:
      "Latest titles newly released and recently introduced to the gaming community.",
  },
  {
    id: "popular",
    categoryTitle: "🔥 Popular Games",
    categoryDesc:
      "Games currently receiving significant attention and active player interest.",
  },
  {
    id: "featured",
    categoryTitle: "⚡ Featured Games",
    categoryDesc:
      "Games currently featured because of major updates, announcements, or upcoming releases.",
  },
  {
    id: "moderator",
    categoryTitle: "⭐ Moderator's Recommendation",
    categoryDesc:
      "A special title selected by our team for players looking for something worth trying.",
  },
];

function getNewsArticles(): NewsArticleWithId[] {
  const newsDirectory = path.join(
    process.cwd(),
    "app",
    "data",
    "news"
  );

  if (!fs.existsSync(newsDirectory)) {
    console.error("News directory not found:", newsDirectory);
    return [];
  }

  const files = fs
    .readdirSync(newsDirectory)
    .filter((file) => file.toLowerCase().endsWith(".json"));

  const articles: NewsArticleWithId[] = [];

  for (const file of files) {
    try {
      const filePath = path.join(newsDirectory, file);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const data = JSON.parse(fileContent) as NewsArticle;

      const id = file.replace(/\.json$/i, "");

      if (
        !data.category ||
        !data.title ||
        !data.date ||
        !data.tag ||
        !data.summary ||
        !data.content
      ) {
        console.error(`Invalid news file: ${file}`);
        continue;
      }

      articles.push({
        ...data,
        category: String(data.category).trim().toLowerCase(),
        id,
      });
    } catch (error) {
      console.error(`Could not load news file: ${file}`, error);
    }
  }

  return articles;
}

export const dynamic = "force-dynamic";

export default async function NewsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const newsArticles = getNewsArticles();
  const params = await searchParams;

  const selectedCategory = params.category
    ? String(params.category).trim().toLowerCase()
    : "all";

  const visibleArticles =
    selectedCategory === "all"
      ? newsArticles
      : newsArticles.filter(
          (article) =>
            article.category.trim().toLowerCase() === selectedCategory
        );

  return (
    <div className="min-h-screen bg-[#02040a] text-slate-100 flex flex-col justify-between relative overflow-hidden font-sans select-none">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-10 left-12 w-1 h-1 bg-white rounded-full opacity-50 animate-pulse" />
        <div className="absolute top-24 right-20 w-1.5 h-1.5 bg-white rounded-full opacity-40" />
        <div className="absolute top-40 left-1/3 w-0.5 h-0.5 bg-white rounded-full opacity-60" />
        <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-white rounded-full opacity-35" />
        <div className="absolute top-1/2 left-20 w-1 h-1 bg-white rounded-full opacity-45 animate-pulse" />
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-white rounded-full opacity-40" />
        <div className="absolute bottom-16 right-16 w-1 h-1 bg-white rounded-full opacity-55" />
      </div>

      <main className="relative z-10 flex-1 max-w-6xl w-full mx-auto px-4 py-8 flex flex-col gap-8">
        {/* Header */}
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
                Gaming news, new releases, major updates, and featured stories.
              </p>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="bg-slate-950/80 border border-slate-900 rounded-2xl p-2 backdrop-blur-sm shadow-xl overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            {newsCategories.map((category) => {
              const isSelected = selectedCategory === category.id;

              return (
                <Link
                  key={category.id}
                  href={
                    category.id === "all"
                      ? "/news"
                      : `/news?category=${category.id}`
                  }
                  className={`px-4 py-3 rounded-xl text-sm font-bold transition whitespace-nowrap select-none ${
                    isSelected
                      ? "text-white bg-purple-600/20 border border-purple-500/40"
                      : "text-slate-400 hover:text-white hover:bg-slate-900"
                  }`}
                >
                  {category.categoryTitle}
                </Link>
              );
            })}
          </div>
        </div>

        {/* News */}
        <div className="flex flex-col gap-10">
          {newsCategories.map((category) => {
            if (
              selectedCategory !== category.id &&
              !(selectedCategory === "all" && category.id === "all")
            ) {
              return null;
            }

            const categoryNews =
              category.id === "all"
                ? visibleArticles
                : visibleArticles.filter(
                    (article) =>
                      article.category.trim().toLowerCase() === category.id
                  );

            if (categoryNews.length === 0) {
              return null;
            }

            return (
              <section
                key={category.id}
                className="flex flex-col gap-5"
              >
                <div className="border-b border-slate-900 pb-4 px-1">
                  <h2 className="text-xl md:text-2xl font-black text-white">
                    {category.categoryTitle}
                  </h2>

                  <p className="text-xs md:text-sm text-slate-400 mt-1">
                    {category.categoryDesc}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  {categoryNews.map((news) => (
                    <article
                      key={news.id}
                      className="bg-slate-950/80 border border-slate-900 rounded-2xl p-5 hover:border-purple-500/40 transition shadow-lg flex flex-col justify-between gap-5"
                    >
                      <div className="flex flex-col gap-3">
                        {news.image && (
                          <div
                            className="w-full rounded-xl overflow-hidden bg-slate-900"
                            style={{ aspectRatio: "16 / 9" }}
                          >
                            <img
                              src={news.image}
                              alt={news.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}

                        <div className="flex justify-between items-center gap-3">
                          <span className="bg-purple-500/10 text-purple-400 text-[10px] font-bold px-2.5 py-1 rounded-full border border-purple-500/30">
                            {news.tag}
                          </span>

                          <span className="text-[10px] text-slate-500 font-medium whitespace-nowrap">
                            {news.date}
                          </span>
                        </div>

                        <h3 className="text-lg font-extrabold text-white leading-snug">
                          {news.title}
                        </h3>

                        <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                          {news.summary}
                        </p>
                      </div>

                      <Link
                        href={`/news/${news.id}`}
                        className="w-full text-center bg-purple-600 hover:bg-purple-500 border border-purple-500 text-white font-bold text-sm py-3 rounded-xl transition shadow-lg shadow-purple-900/20 select-none"
                      >
                        Read More
                      </Link>
                    </article>
                  ))}
                </div>
              </section>
            );
          })}

          {visibleArticles.length === 0 && (
            <div className="bg-slate-950/80 border border-slate-900 rounded-2xl p-8 text-center">
              <p className="text-sm text-slate-500">
                No news available yet.
              </p>
            </div>
          )}
        </div>
      </main>

      <footer className="relative z-10 border-t border-slate-900 bg-[#02040a]/90 text-slate-400 px-6 py-6 text-center text-xs">
        © 2026 GamePlate - News Module.
      </footer>
    </div>
  );
}