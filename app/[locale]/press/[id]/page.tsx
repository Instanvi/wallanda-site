import { getBlogPostBySlug, getBlogPosts, isContentfulConfigured } from "@/lib/contentful";
import { pressArticles } from "../pressData";
import PressArticleClient from "./PressArticleClient";

export const revalidate = 60; // Revalidate dynamic content every 60 seconds

export async function generateStaticParams() {
  // Generate static params for static fallback routes
  return Object.keys(pressArticles).map((slug) => ({ id: slug }));
}

export default async function PressArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  let initialPost = null;
  let allPosts: any[] = [];
  if (isContentfulConfigured) {
    initialPost = await getBlogPostBySlug(id);
    allPosts = await getBlogPosts();
  }

  return <PressArticleClient slug={id} initialPost={initialPost} allPosts={allPosts} />;
}
