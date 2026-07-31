"use client";

import { useState } from "react";
import {
  ArrowLeft,
  Clock,
  Calendar,
  Tag,
  Lightbulb,
  CheckCircle,
  AlertTriangle,
  ChevronRight,
  Copy,
  Check,
  Share2,
} from "lucide-react";
import { BLOCKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/ui/Button";
import { pressArticles, relatedPressData } from "../pressData";

interface PressArticleClientProps {
  slug: string;
  initialPost?: any; // Contentful post
  allPosts?: any[];
}

export default function PressArticleClient({ slug, initialPost, allPosts = [] }: PressArticleClientProps) {
  const [copied, setCopied] = useState(false);

  const isContentful = !!initialPost;

  let title = "";
  let excerpt = "";
  let category = "";
  let date = "";
  let readTime = "";
  let image = "";
  let imageAlt = "";
  let tags: string[] = [];
  let content: any = null;
  let related: any[] = [];
  let author = "Wallanda Global Communications";
  let authorBio = "";
  let source = "Wallanda Newsroom";

  if (isContentful) {
    const fields = initialPost.fields;
    title = fields.title || "";
    excerpt = fields.excerpt || "";
    category = fields.category || "Press";
    date = fields.date ? fields.date.split("T")[0] : "";
    readTime = fields.readTime || "5 min";
    image = fields.coverImage?.fields?.file?.url 
      ? `https:${fields.coverImage.fields.file.url}` 
      : "/ship.jpeg";
    imageAlt = fields.title || "";
    tags = fields.tags || [];
    content = fields.content; // Rich text document
    source = fields.source || "Wallanda Newsroom";
    
    // Filter and map dynamic related releases from Contentful
    related = allPosts
      .filter((post: any) => post.fields.slug !== slug)
      .slice(0, 2)
      .map((post: any) => {
        const f = post.fields;
        return {
          slug: f.slug,
          title: f.title || "",
          excerpt: f.excerpt || "",
          category: f.category || "Press",
          date: f.date ? f.date.split("T")[0] : "",
          readTime: f.readTime || "5 min",
          thumbnail: f.coverImage?.fields?.file?.url 
            ? `https:${f.coverImage.fields.file.url}` 
            : "/ship.jpeg",
          source: f.source || "Wallanda Newsroom",
          tags: f.tags || [],
        };
      });

    // Fallback if no other posts exist in Contentful
    if (related.length === 0) {
      related = relatedPressData.slice(0, 2);
    }
  } else {
    const article = pressArticles[slug];
    if (!article) {
      return (
        <div className="flex flex-col min-h-screen bg-slate-50">
          <Header />
          <main className="flex-1 pt-32 pb-20 px-6 text-center">
            <h1 className="text-4xl font-display font-bold text-primary mb-4">
              Article Not Found
            </h1>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              We couldn't locate this press release. It may have been moved or deleted.
            </p>
            <Button variant="primary" href="/press">
              Return to Pressroom
            </Button>
          </main>
          <Footer />
        </div>
      );
    }
    title = article.title;
    excerpt = article.excerpt;
    category = article.category;
    date = article.date;
    readTime = article.readTime;
    image = article.image;
    imageAlt = article.imageAlt;
    tags = article.tags;
    content = article.content; // static ContentBlock[]
    author = article.author;
    authorBio = article.authorBio;
    source = article.source;
    related = relatedPressData.filter((p) => article.relatedSlugs.includes(p.slug));
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText(typeof window !== "undefined" ? window.location.href : "");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const renderContentfulContent = (contentDoc: any) => {
    if (!contentDoc) return null;
    return documentToReactComponents(contentDoc, {
      renderNode: {
        [BLOCKS.HEADING_2]: (node, children) => (
          <h2 className="text-2xl md:text-3xl font-display font-bold text-primary mt-12 mb-5">
            {children}
          </h2>
        ),
        [BLOCKS.HEADING_3]: (node, children) => (
          <h3 className="text-xl md:text-2xl font-bold text-primary mt-8 mb-4">
            {children}
          </h3>
        ),
        [BLOCKS.PARAGRAPH]: (node, children) => (
          <p className="text-base text-gray-700 leading-relaxed mb-6 whitespace-pre-line">
            {children}
          </p>
        ),
        [BLOCKS.UL_LIST]: (node, children) => (
          <ul className="space-y-3 mb-6 pl-5">
            {children}
          </ul>
        ),
        [BLOCKS.OL_LIST]: (node, children) => (
          <ol className="space-y-4 mb-6 pl-5">
            {children}
          </ol>
        ),
        [BLOCKS.LIST_ITEM]: (node, children) => (
          <li className="flex items-start gap-3 text-base text-gray-700 leading-relaxed">
            <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 flex-shrink-0"></span>
            <span>{children}</span>
          </li>
        ),
        [BLOCKS.QUOTE]: (node, children) => (
          <div className="bg-slate-50 border-l-4 border-accent rounded-r-xl p-5 mb-6 flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-bold text-primary uppercase tracking-wide">Note</span>
              <div className="text-sm text-gray-700 leading-relaxed mt-1">{children}</div>
            </div>
          </div>
        ),
        [BLOCKS.HR]: () => <hr className="my-10 border-gray-200" />,
        [BLOCKS.EMBEDDED_ASSET]: (node) => {
          const target = node.data?.target;
          const fields = target?.fields;
          if (fields?.file?.url) {
            return (
              <div className="my-8 rounded-2xl overflow-hidden border border-gray-200 shadow-soft">
                <img
                  src={`https:${fields.file.url}`}
                  alt={fields.title || "Embedded Asset"}
                  className="w-full h-auto"
                />
              </div>
            );
          }
          return null;
        }
      }
    });
  };

  const renderStaticContentBlock = (block: any, index: number) => {
    switch (block.type) {
      case "h2":
        return (
          <h2 key={index} className="text-2xl md:text-3xl font-display font-bold text-primary mt-12 mb-5">
            {block.content}
          </h2>
        );
      case "h3":
        return (
          <h3 key={index} className="text-xl md:text-2xl font-bold text-primary mt-8 mb-4">
            {block.content}
          </h3>
        );
      case "p":
        return (
          <p key={index} className="text-base text-gray-700 leading-relaxed mb-6">
            {block.content}
          </p>
        );
      case "ul":
        return (
          <ul key={index} className="space-y-3 mb-6 pl-1">
            {block.items?.map((item: string, i: number) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 flex-shrink-0"></span>
                <span className="text-base text-gray-700 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        );
      case "ol":
        return (
          <ol key={index} className="space-y-4 mb-6 pl-1">
            {block.items?.map((item: string, i: number) => (
              <li key={i} className="flex items-start gap-4">
                <span className="flex-shrink-0 w-7 h-7 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">
                  {i + 1}
                </span>
                <span className="text-base text-gray-700 leading-relaxed pt-0.5">{item}</span>
              </li>
            ))}
          </ol>
        );
      case "tip":
        return (
          <div key={index} className="bg-slate-50 border-l-4 border-accent rounded-r-xl p-5 mb-6 flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-bold text-primary uppercase tracking-wide">Note</span>
              <p className="text-sm text-gray-700 leading-relaxed mt-1">{block.content}</p>
            </div>
          </div>
        );
      case "warning":
        return (
          <div key={index} className="bg-red-50 border-l-4 border-red-500 rounded-r-xl p-5 mb-6 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-bold text-red-700 uppercase tracking-wide">Important Notice</span>
              <p className="text-sm text-gray-700 leading-relaxed mt-1">{block.content}</p>
            </div>
          </div>
        );
      case "checklist":
        return (
          <div key={index} className="bg-slate-50 border border-gray-150 rounded-xl p-5 mb-6">
            <ul className="space-y-3">
              {block.items?.map((item: string, i: number) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      case "cta":
        return (
          <div key={index} className="bg-primary rounded-2xl p-8 my-8 text-center text-white">
            <p className="text-lg font-bold mb-6 max-w-xl mx-auto">{block.content}</p>
            <Button variant="secondary" size="lg" href="/contact" className="shadow-soft">
              Contact Media Desk
            </Button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900 font-sans antialiased overflow-x-hidden">
      <Header />

      <main className="flex-1">
        <article className="pb-24">
          {/* Top navigation row */}
          <div className="border-b border-gray-100 bg-slate-50 py-4 px-6">
            <div className="max-w-4xl mx-auto flex items-center justify-between">
              <a
                href="/press"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-600 hover:text-accent transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Pressroom
              </a>
              <div className="flex items-center gap-1.5 text-xs text-gray-500">
                <a href="/" className="hover:text-primary transition-colors">Home</a>
                <ChevronRight className="w-3.5 h-3.5 text-gray-300" />
                <a href="/press" className="hover:text-primary transition-colors">Pressroom</a>
                <ChevronRight className="w-3.5 h-3.5 text-gray-300" />
                <span className="text-gray-900 font-medium truncate max-w-[200px]">{title}</span>
              </div>
            </div>
          </div>

          {/* Premium Header Layout */}
          <div className="relative pt-16 pb-20 bg-slate-900 text-white overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <img
                src={image}
                alt={imageAlt}
                className="w-full h-full object-cover filter blur-[2px]"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent"></div>
            
            <div className="relative z-10 max-w-4xl mx-auto px-6">
              <span className="inline-flex items-center gap-1 bg-accent text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full mb-6">
                <Tag className="w-3 h-3" />
                {category}
              </span>
              <h1 className="text-3xl md:text-5xl font-display font-extrabold text-white leading-tight tracking-tight mb-6">
                {title}
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed font-light mb-8 max-w-3xl">
                {excerpt}
              </p>
              
              <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-white/10 text-xs text-gray-400">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-accent" />
                  <span>Published: {date}</span>
                </div>
                <div className="w-1.5 h-1.5 bg-white/20 rounded-full"></div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-accent" />
                  <span>{readTime} read</span>
                </div>
                <div className="w-1.5 h-1.5 bg-white/20 rounded-full"></div>
                <div>
                  <span>Source: <strong>{source}</strong></span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content & Side widgets */}
          <div className="max-w-4xl mx-auto px-6 pt-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Left Content column */}
              <div className="lg:col-span-8">
                <div className="prose max-w-none text-gray-700 leading-relaxed text-[15px]">
                  {isContentful
                    ? renderContentfulContent(content)
                    : content.map((block: any, idx: number) => renderStaticContentBlock(block, idx))}
                </div>

                {/* Tags */}
                {(() => {
                  const tagsArray = (Array.isArray(tags) ? tags : (typeof tags === "string" ? [tags] : []))
                    .flatMap((tag) => typeof tag === "string" ? tag.split(",").map((t) => t.trim()) : []);
                  if (tagsArray.length === 0) return null;
                  return (
                    <div className="mt-12 pt-8 border-t border-gray-100 flex flex-wrap gap-2">
                      {tagsArray.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-slate-50 text-gray-600 rounded-full text-xs font-semibold hover:bg-slate-100 transition-colors"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  );
                })()}
              </div>

              {/* Right Side Widgets column */}
              <div className="lg:col-span-4 space-y-8">
                {/* Sharing and Action Box */}
                <div className="bg-slate-50 border border-gray-150 rounded-2xl p-6">
                  <h4 className="font-display font-bold text-primary mb-4 text-sm uppercase tracking-wider">Actions</h4>
                  <div className="space-y-3">
                    <button
                      onClick={handleCopyLink}
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-white border border-gray-200 text-gray-700 text-xs font-bold rounded-lg hover:border-accent hover:text-accent transition-all cursor-pointer"
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4 text-accent" />
                          Link Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          Copy Release Link
                        </>
                      )}
                    </button>
                    <button
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-primary text-white text-xs font-bold rounded-lg hover:bg-primary/95 transition-all cursor-pointer"
                    >
                      <Share2 className="w-4 h-4" />
                      Share on LinkedIn
                    </button>
                  </div>
                </div>

                {/* Author Info */}
                <div className="bg-slate-50 border border-gray-150 rounded-2xl p-6">
                  <h4 className="font-display font-bold text-primary mb-3 text-sm uppercase tracking-wider">PR Contact</h4>
                  <p className="text-xs text-gray-600 font-bold mb-1">{author}</p>
                  {authorBio && <p className="text-xs text-gray-500 leading-relaxed mb-3">{authorBio}</p>}
                  <p className="text-xs text-accent font-semibold">press@wallanda.com</p>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts Section */}
        {related.length > 0 && (
          <section className="bg-slate-50 py-20 border-t border-gray-100">
            <div className="max-w-4xl mx-auto px-6">
              <h3 className="font-display text-2xl font-bold text-primary mb-8">Related Releases</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {related.map((post) => (
                  <a
                    href={`/press/${post.slug}`}
                    key={post.slug}
                    className="group bg-white rounded-xl border border-gray-200/80 shadow-soft hover:shadow-md transition-all flex flex-col justify-between overflow-hidden"
                  >
                    <div>
                      <div className="h-40 bg-slate-100 overflow-hidden relative">
                        <img
                          src={post.thumbnail}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-5">
                        <span className="text-[10px] font-bold text-accent uppercase tracking-wider">{post.category}</span>
                        <h4 className="font-display font-bold text-base text-primary group-hover:text-accent transition-colors mt-2 mb-2 line-clamp-2">
                          {post.title}
                        </h4>
                        <p className="text-gray-500 text-xs line-clamp-2 leading-relaxed">
                          {post.excerpt}
                        </p>
                      </div>
                    </div>
                    <div className="px-5 pb-5 pt-3 border-t border-gray-50 text-[10px] text-gray-400 flex items-center justify-between">
                      <span>{post.date}</span>
                      <span className="font-bold text-primary group-hover:text-accent">Read Release →</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
