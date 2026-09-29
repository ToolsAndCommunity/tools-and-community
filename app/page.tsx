import { promises as fs } from "fs";
import path from "path";
import Link from "next/link";
import HeroNews from "./components/HeroNews";

type NewsItem = {
  id: string;
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

async function getLatestNews(): Promise<NewsItem[]> {
  const newsDirectory = path.join(process.cwd(), "app", "data", "news");

  try {
    const files = await fs.readdir(newsDirectory);

    const jsonFiles = files.filter((file) => file.endsWith(".json"));

    const news: NewsItem[] = [];

    for (const file of jsonFiles) {
      try {
        const filePath = path.join(newsDirectory, file);
        const fileContent = await fs.readFile(filePath, "utf8");

        const data = JSON.parse(fileContent);

        news.push({
          id: file.replace(".json", ""),
          category: data.category,
          title: data.title,
          date: data.date,
          tag: data.tag,
          summary: data.summary,
          image: data.image,
          content: data.content,
          faq: data.faq,
        });
      } catch {
        // Bozuk veya okunamayan JSON dosyalarını atla
      }
    }

    news.sort(
      (a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    return news.slice(0, 4);
  } catch {
    return [];
  }
}

export default async function Home() {
  const latestNews = await getLatestNews();

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
        <HeroNews news={latestNews} />

        <section className="bg-slate-950/70 border border-slate-900 rounded-2xl p-6 md:p-8 backdrop-blur-sm shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
          </div>
        </section>
      </main>
    </div>
  );
}