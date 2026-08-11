import { getBlogPosts, isContentfulConfigured } from "@/lib/contentful";
import { relatedPressData } from "./pressData";
import PressListingClient, { UnifiedPressPost } from "./PressListingClient";

export const revalidate = 60; // Revalidate dynamic content every 60 seconds

export default async function PressListingPage() {
  let posts: UnifiedPressPost[] = [];

  if (isContentfulConfigured) {
    const contentfulPosts = await getBlogPosts();
    if (contentfulPosts && contentfulPosts.length > 0) {
      posts = contentfulPosts.map((post: any) => {
        const fields = post.fields;
        return {
          slug: fields.slug,
          title: fields.title,
          excerpt: fields.excerpt,
          category: fields.category || "Press",
          date: fields.date ? fields.date.split("T")[0] : "",
          readTime: fields.readTime || "5 min",
          thumbnail: fields.coverImage?.fields?.file?.url 
            ? `https:${fields.coverImage.fields.file.url}` 
            : "/ship.jpeg",
          source: fields.source || "wollanda Newsroom",
          tags: (Array.isArray(fields.tags) 
            ? fields.tags 
            : (typeof fields.tags === "string" ? [fields.tags] : []))
            .flatMap((tag: string) => tag.split(",").map((t: string) => t.trim())),
          isContentful: true,
        };
      });
    }
  }

  // Fallback to static data if Contentful has no entries or is not configured
  if (posts.length === 0) {
    posts = relatedPressData.map((post) => ({
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      category: post.category,
      date: post.date,
      readTime: post.readTime,
      source: post.source,
      thumbnail: post.thumbnail,
      tags: post.tags,
      isContentful: false,
    }));
  }

  return <PressListingClient posts={posts} />;
}
