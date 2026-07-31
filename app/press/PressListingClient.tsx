"use client";

import { useState } from "react";
import { Clock, Calendar, Tag, Search, Filter, ArrowRight, Newspaper } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/ui/Button";

export interface UnifiedPressPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  thumbnail: string;
  source: string;
  tags: string[];
  isContentful: boolean;
}

interface PressListingClientProps {
  posts: UnifiedPressPost[];
}

const categories = ["all", "corporate", "awards", "funding", "guides", "industry"];

export default function PressListingClient({ posts }: PressListingClientProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = posts.filter((post) => {
    const postCategory = post.category ? post.category.toLowerCase() : "";
    const matchesCategory = selectedCategory === "all" || postCategory === selectedCategory.toLowerCase();

    const titleText = post.title ? post.title.toLowerCase() : "";
    const excerptText = post.excerpt ? post.excerpt.toLowerCase() : "";
    const sourceText = post.source ? post.source.toLowerCase() : "";
    
    const tagsArray = Array.isArray(post.tags) ? post.tags : [];
    const tagMatch = tagsArray.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesSearch =
      searchQuery === "" ||
      titleText.includes(searchQuery.toLowerCase()) ||
      excerptText.includes(searchQuery.toLowerCase()) ||
      sourceText.includes(searchQuery.toLowerCase()) ||
      tagMatch;

    return matchesCategory && matchesSearch;
  });

  // Split out the featured post (latest post)
  const featuredPost = filteredPosts.length > 0 ? filteredPosts[0] : null;
  const remainingPosts = filteredPosts.length > 1 ? filteredPosts.slice(1) : [];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-gray-900 font-sans antialiased overflow-x-hidden selection:bg-accent/20 selection:text-primary">
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-white border-b border-gray-100">
          <div className="mx-auto max-w-7xl px-6 md:px-8 py-12 md:py-16">
            <div className="max-w-3xl">
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-primary mb-4">
                News, updates, and trade insights
              </h1>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Stay connected with the latest corporate mergers, strategic investments, product rollouts, and executive awards at wollanda Global.
              </p>
            </div>
          </div>
        </section>

        {/* Filter and Search Bar */}
        <section className="sticky top-20 z-40 w-full py-5 bg-white/80 backdrop-blur-lg border-b border-gray-200/80 shadow-sm">
          <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Box */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles, sources, tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-sm bg-gray-50 transition-all"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto scrollbar-none py-1">
              <Filter className="w-4 h-4 text-gray-400 flex-shrink-0 mr-1 hidden sm:block" />
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-300 border ${
                    selectedCategory === cat
                      ? "bg-primary text-white border-primary"
                      : "bg-white text-gray-600 border-gray-200 hover:border-accent hover:text-accent"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Articles List */}
        <section className="py-20 max-w-7xl mx-auto px-6 md:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl border border-gray-150 shadow-sm">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-slate-100 flex items-center justify-center">
                <Search className="w-6 h-6 text-gray-400" />
              </div>
              <h3 className="text-xl font-display font-bold text-primary mb-2">No Articles Found</h3>
              <p className="text-gray-500 mb-6 max-w-md mx-auto">We couldn't find any press releases matching "{searchQuery}" under "{selectedCategory}" category.</p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
              >
                Clear Search filters
              </Button>
            </div>
          ) : (
            <div className="space-y-16">
              {/* Featured Post Card (High Impact Layout) */}
              {featuredPost && selectedCategory === "all" && searchQuery === "" && (
                <div className="relative group bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-soft hover:shadow-lg transition-all duration-500">
                  <div className="grid grid-cols-1 lg:grid-cols-12">
                    <a
                      href={`/press/${featuredPost.slug}`}
                      className="lg:col-span-7 relative h-72 lg:h-[450px] block bg-slate-100 overflow-hidden"
                    >
                      <img
                        src={featuredPost.thumbnail}
                        alt={featuredPost.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-transparent"></div>
                      <div className="absolute top-6 left-6 px-3 py-1 bg-accent text-white text-xs font-black tracking-wider uppercase rounded-full">
                        FEATURED
                      </div>
                    </a>
                    
                    <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-3 text-xs text-gray-500 mb-6">
                          <span className="inline-flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            {featuredPost.date}
                          </span>
                          <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
                          <span className="font-semibold text-primary">{featuredPost.source}</span>
                        </div>
                        
                        <a href={`/press/${featuredPost.slug}`} className="block group/title">
                          <h2 className="font-display text-2xl lg:text-3xl font-extrabold text-primary mb-4 leading-tight group-hover/title:text-accent transition-colors">
                            {featuredPost.title}
                          </h2>
                        </a>
                        
                        <p className="text-gray-600 text-sm leading-relaxed mb-6">
                          {featuredPost.excerpt}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                        <span className="text-xs text-gray-500 flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          {featuredPost.readTime}
                        </span>
                        <a
                          href={`/press/${featuredPost.slug}`}
                          className="inline-flex items-center gap-1 text-sm font-bold text-primary group/link hover:text-accent transition-colors"
                        >
                          Read Full Release
                          <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Grid of Other Posts */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {(selectedCategory !== "all" || searchQuery !== "" ? filteredPosts : remainingPosts).map((post) => (
                  <article
                    key={post.slug}
                    className="group bg-white rounded-2xl border border-gray-200/80 overflow-hidden shadow-soft hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      {/* Image container */}
                      <a href={`/press/${post.slug}`} className="block h-48 bg-slate-100 overflow-hidden relative">
                        <img
                          src={post.thumbnail}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4 px-2.5 py-1 bg-primary text-white text-[10px] font-bold tracking-wider uppercase rounded-full border border-white/10 backdrop-blur-md">
                          {post.category}
                        </div>
                      </a>

                      <div className="p-6">
                        <div className="flex items-center gap-2.5 text-[11px] text-gray-500 mb-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {post.date}
                          </span>
                          <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                          <span className="font-semibold text-primary">{post.source}</span>
                        </div>

                        <a href={`/press/${post.slug}`}>
                          <h3 className="font-display font-bold text-lg text-primary mb-3 leading-snug group-hover:text-accent transition-colors line-clamp-2">
                            {post.title}
                          </h3>
                        </a>

                        <p className="text-gray-600 text-xs leading-relaxed mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                      </div>
                    </div>

                    <div className="px-6 pb-6 pt-4 border-t border-gray-50 flex items-center justify-between text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                      <a
                        href={`/press/${post.slug}`}
                        className="font-bold text-primary hover:text-accent inline-flex items-center gap-0.5 group/link"
                      >
                        Read More
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5" />
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
