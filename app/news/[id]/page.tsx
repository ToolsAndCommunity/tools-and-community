
import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import Link from "next/link";

type NewsFaq = {
  question: string;
  answer: string;
};

type NewsArticle = {
  category: string;
  title: string;
  date: string;
  tag: string;
  image?: string;
  summary: string;
  content: string;
  faq?: NewsFaq[];
};

function getArticle(id: string): NewsArticle | null {
  const newsDirectory = path.join(
    process.cwd(),
    "app",
    "data",
    "news"
  );

  const filePath = path.join(newsDirectory, `${id}.json`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  try {
    const fileContent = fs.readFileSync(filePath, "utf-8");

    return JSON.parse(fileContent) as NewsArticle;
  } catch (error) {
    console.error(`Could not load news article: ${id}`, error);
    return null;
  }
}

export const dynamic = "force-dynamic";

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const article = getArticle(id);

  if (!article) {
    notFound();
  }

  const paragraphs = article.content
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  return (
    <main className="min-h-screen bg-[#02040a] text-slate-100 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-12 w-1 h-1 bg-white rounded-full opacity-50 animate-pulse" />
        <div className="absolute top-24 right-20 w-1.5 h-1.5 bg-white rounded-full opacity-40" />
        <div className="absolute top-40 left-1/3 w-0.5 h-0.5 bg-white rounded-full opacity-60" />
        <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-white rounded-full opacity-35" />
        <div className="absolute top-1/2 left-20 w-1 h-1 bg-white rounded-full opacity-45 animate-pulse" />
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-white rounded-full opacity-40" />
        <div className="absolute bottom-16 right-16 w-1 h-1 bg-white rounded-full opacity-55" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 py-8">
        <Link
          href="/news"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition mb-6 select-none"
        >
          ← Back to News
        </Link>

        <article className="bg-slate-950/80 border border-purple-500/20 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm">
          {/* News Image */}
          {article.image && (
            <div className="w-full h-64 md:h-96 bg-slate-900 overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="p-6 md:p-10">
            {/* Tag + Date */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="bg-purple-500/10 text-purple-400 text-xs font-bold px-3 py-1 rounded-full border border-purple-500/30">
                {article.tag}
              </span>

              <span className="text-xs text-slate-500">
                {article.date}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-black text-white leading-tight">
              {article.title}
            </h1>

            {/* Summary */}
            <p className="mt-5 text-base md:text-lg text-slate-300 leading-relaxed">
              {article.summary}
            </p>

            {/* Article Content */}
            <div className="mt-8 border-t border-slate-800 pt-8">
              {paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-sm md:text-base text-slate-300 leading-8 mb-6 last:mb-0"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* FAQ */}
            {article.faq && article.faq.length > 0 && (
              <section className="mt-12 border-t border-slate-800 pt-8">
                <h2 className="text-2xl md:text-3xl font-black text-white mb-6">
                  Frequently Asked Questions
                </h2>

                <div className="space-y-5">
                  {article.faq.map((item, index) => (
                    <div
                      key={index}
                      className="bg-slate-900/70 border border-slate-800 rounded-xl p-5"
                    >
                      <h3 className="text-base md:text-lg font-bold text-white leading-relaxed">
                        {item.question}
                      </h3>

                      <p className="mt-3 text-sm md:text-base text-slate-300 leading-7">
                        {item.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </article>
      </div>
    </main>
  );
}