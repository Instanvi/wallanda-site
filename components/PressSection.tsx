import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { getBlogPosts, isContentfulConfigured } from "@/lib/contentful";
import { relatedPressData } from "@/app/press/pressData";

interface PressItem {
  title: string;
  excerpt: string;
  date: string;
  source: string;
  link: string;
  thumbnail: string;
  readTime: string;
}

export default async function PressSection() {
  let articles: PressItem[] = [];

  if (isContentfulConfigured) {
    const contentfulPosts = await getBlogPosts();
    if (contentfulPosts && contentfulPosts.length > 0) {
      // Get the latest 3 articles
      articles = contentfulPosts.slice(0, 3).map((post: any) => {
        const fields = post.fields;
        return {
          title: fields.title || "",
          excerpt: fields.excerpt || "",
          date: fields.date ? fields.date.split("T")[0] : "",
          source: fields.source || "wollanda Newsroom",
          link: `/press/${fields.slug}`,
          thumbnail: fields.coverImage?.fields?.file?.url 
            ? `https:${fields.coverImage.fields.file.url}` 
            : "/ship.jpeg",
          readTime: fields.readTime || "5 min",
        };
      });
    }
  }

  // Fallback to static articles
  if (articles.length === 0) {
    articles = relatedPressData.slice(0, 3).map((art) => ({
      title: art.title,
      excerpt: art.excerpt,
      date: art.date,
      source: art.source,
      link: `/press/${art.slug}`,
      thumbnail: art.thumbnail,
      readTime: art.readTime,
    }));
  }

  return (
    <section className="py-24 bg-slate-50 border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="mb-4 block text-sm font-extrabold uppercase tracking-wider text-accent">
              Media Hub
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-primary mb-3">
              Recent Press & News
            </h2>
            <p className="font-sans text-gray-600 text-base max-w-xl">
              Stay up-to-date with our latest updates, industry integrations, and leadership announcements.
            </p>
          </div>
          <Link
            href="/press"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-accent transition-colors mt-6 md:mt-0 group"
          >
            More News & Press
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <article
              key={idx}
              className="group flex flex-col justify-between rounded-2xl border border-gray-200/80 bg-white overflow-hidden shadow-soft hover:shadow-md transition-all duration-300"
            >
              <div>
                {/* Visual Thumbnail */}
                <Link href={article.link} className="block h-48 overflow-hidden bg-slate-100 relative">
                  <img
                    src={article.thumbnail}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 px-2.5 py-1 bg-primary text-white text-[10px] font-bold tracking-wider uppercase rounded-full">
                    {article.source}
                  </div>
                </Link>

                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {article.date}
                    </span>
                    <span className="inline-block h-1 w-1 rounded-full bg-gray-300"></span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {article.readTime}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-primary mb-3 leading-snug group-hover:text-accent transition-colors line-clamp-2">
                    <Link href={article.link}>
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>
              </div>
              
              <div className="px-6 pb-6 pt-4 border-t border-gray-50 mt-auto">
                <Link
                  href={article.link}
                  className="inline-flex items-center gap-1 text-sm font-bold text-primary group/link hover:text-accent transition-colors"
                >
                  Read Full Release
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
