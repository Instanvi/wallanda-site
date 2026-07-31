export interface ContentBlock {
  type: "h2" | "h3" | "p" | "ul" | "ol" | "tip" | "warning" | "checklist" | "cta";
  content: string;
  items?: string[];
}

export interface PressArticle {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  source: string;
  author: string;
  authorBio: string;
  image: string;
  imageAlt: string;
  tags: string[];
  content: ContentBlock[];
  relatedSlugs: string[];
}

export interface PressPostSummary {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  source: string;
  thumbnail: string;
  tags: string[];
}

export const pressArticles: Record<string, PressArticle> = {
  "merger-announcement": {
    slug: "merger-announcement",
    title: "Potta Finance and wollanda Complete Merger, Creating Leading Logistics Provider wollanda Global",
    excerpt: "The combining of these two industry leaders creates a unified global powerhouse with unmatched software capability and carrier partnerships.",
    category: "Corporate",
    date: "2026-07-28",
    readTime: "5 min",
    source: "PR Newswire",
    author: "wollanda Global PR",
    authorBio: "Official communications department of wollanda Global.",
    image: "/ship.jpeg",
    imageAlt: "Logistics vessel representing the global scale of wollanda Global",
    tags: ["Merger", "Fintech", "Logistics", "Corporate"],
    content: [
      {
        type: "p",
        content: "We are thrilled to announce the official merger of Potta Finance and wollanda, bringing together two category leaders in financial technology and logistics orchestration under a single unified brand: wollanda Global. By combining Potta Finance's robust financial platform with wollanda's intelligent multi-carrier routing systems, we are introducing a modern global freight management platform tailored for the digital-first economy."
      },
      {
        type: "h2",
        content: "A Unified Vision for Seamless Logistics"
      },
      {
        type: "p",
        content: "Historically, logistics orchestration and cargo financing have lived in isolated silos, causing delays, reconciliation bottlenecks, and capital inefficiencies for merchants worldwide. wollanda Global directly addresses this integration gap. Our combined suite brings together Ntigi Shipping Tech, Kassongo Shipping App, and Kovasure Cargo Insurance, offering custom APIs and apps that embed finance and freight capabilities into a single checkout flow."
      },
      {
        type: "tip",
        content: "Under the new entity, existing clients of both Potta Finance and wollanda will gain instant access to integrated cargo insurance and priority carrier dispatch routing at no additional monthly subscription cost."
      },
      {
        type: "h2",
        content: "Key Strategic Milestones of the Merger"
      },
      {
        type: "ul",
        content: "",
        items: [
          "Establishment of unified localized hubs across Africa, Europe, and North America.",
          "Automatic onboarding of 45,000+ certified shipping carrier partners.",
          "Enhanced end-to-end payload visibility and electronic custom clearance modules.",
          "Integration of automated cargo insurance claims powered by Kovasure."
        ]
      },
      {
        type: "h2",
        content: "Statement from our CEO"
      },
      {
        type: "p",
        content: "\"The merger between Potta Finance and wollanda marks a major turning point in how global supply chains operate. We are building the infrastructure that will allow any enterprise to operate borders-free, resolving both the movement of physical goods and the digital payments backing them in real-time.\" — Genesis St. James Amahnui, CEO of wollanda Global."
      },
      {
        type: "cta",
        content: "Discover how wollanda Global can help optimize your supply chain. Explore our product offerings today."
      }
    ],
    relatedSlugs: ["pros-to-know", "strategic-investment"]
  },
  "pros-to-know": {
    slug: "pros-to-know",
    title: "Three wollanda Global Leaders Named Recipients of 2026 Pros to Know Award for Supply Chain Innovation",
    excerpt: "Annual award program recognizes supply chain professionals who have demonstrated exceptional leadership and strategic foresight.",
    category: "Awards",
    date: "2026-06-15",
    readTime: "4 min",
    source: "Supply Chain Digest",
    author: "Corporate Communications",
    authorBio: "Official communications department of wollanda Global.",
    image: "/boss.jpeg",
    imageAlt: "Genesis St. James Amahnui named supply chain pro to know",
    tags: ["Leadership", "Innovation", "Awards"],
    content: [
      {
        type: "p",
        content: "We are proud to share that Supply Chain Digest has named three executives from wollanda Global as recipients of the prestigious 2026 Pros to Know Award. The award honors outstanding supply chain leaders who are driving efficiency and building resilience in global trade."
      },
      {
        type: "h2",
        content: "Recognizing Exceptional Industry Leadership"
      },
      {
        type: "p",
        content: "The annual Pros to Know award recognizes professionals who showcase forward-thinking strategies, technical expertise, and dedication to supply chain advancement. Our awardees this year were selected from a pool of hundreds of nominees across international logistics companies, tech providers, and academic institutes."
      },
      {
        type: "h3",
        content: "Our Honored Leaders"
      },
      {
        type: "ul",
        content: "",
        items: [
          "Genesis St. James Amahnui (CEO): Honored for pioneering tech-driven cargo financing and multi-carrier integrations.",
          "Sarah Jenkins (Chief Operating Officer): Selected for her strategic scaling of local hubs across five continents.",
          "David Vance (VP of Products): Recognized for designing Ntigi's auto-routing algorithms."
        ]
      },
      {
        type: "p",
        content: "This recognition highlights our company's dedication to solving modern trade complexities. By developing technology that cuts administrative friction and automates compliance checks, wollanda Global continues to stand at the forefront of digital freight transformation."
      },
      {
        type: "cta",
        content: "Interested in working with an award-winning team? Head over to our Careers page to see open opportunities."
      }
    ],
    relatedSlugs: ["merger-announcement", "strategic-investment"]
  },
  "strategic-investment": {
    slug: "strategic-investment",
    title: "wollanda Global Receives Strategic Investment to Expand Unified Logistics and Fintech Solutions",
    excerpt: "New investment round will accelerate product integration, core platform scalability, and enhance international delivery offerings.",
    category: "Funding",
    date: "2026-05-20",
    readTime: "6 min",
    source: "Financial Times",
    author: "Fintech Relations",
    authorBio: "Official communications department of wollanda Global.",
    image: "/about-hero.webp",
    imageAlt: "wollanda Global global shipping network graphic illustration",
    tags: ["Investment", "Scale", "Fintech", "Funding"],
    content: [
      {
        type: "p",
        content: "wollanda Global has closed a significant strategic investment round led by major venture firms specializing in enterprise logistics, cross-border payments, and supply chain technology. The fresh capital injection will be deployed to accelerate product consolidation across our core brands, expand international routing pipelines, and grow our engineering presence in global trade centers."
      },
      {
        type: "h2",
        content: "Expanding cross-border delivery capability"
      },
      {
        type: "p",
        content: "With this investment, wollanda Global will build deeper integrations between Ntigi Shipping Tech and Kassongo Shipping App, providing small and large merchants with automated Customs Declaration generation and instantaneous shipment tracking. Additionally, Kovasure Cargo Insurance will expand its risk underwriting algorithms to cover temperature-sensitive goods and high-value industrial machinery across transatlantic corridors."
      },
      {
        type: "h2",
        content: "Next-gen API features under development"
      },
      {
        type: "p",
        content: "A large portion of the capital will fund research and development in real-time predictive ETA analytics. By utilizing machine learning algorithms to process historical carrier transit logs, port congestion reports, and weather patterns, wollanda Global will offer merchants a highly accurate, dynamic arrival window for ocean and air cargo shipments."
      },
      {
        type: "tip",
        content: "Our developers are already testing the private beta of this predictive ETA engine with selected enterprise shippers, yielding a 14% improvement in slot planning accuracy."
      },
      {
        type: "cta",
        content: "Get in touch with our team to learn how wollanda's technology can future-proof your logistics enterprise."
      }
    ],
    relatedSlugs: ["merger-announcement", "pros-to-know"]
  }
};

export const relatedPressData: PressPostSummary[] = Object.values(pressArticles).map((art) => ({
  slug: art.slug,
  title: art.title,
  excerpt: art.excerpt,
  category: art.category,
  date: art.date,
  readTime: art.readTime,
  source: art.source,
  thumbnail: art.image,
  tags: art.tags
}));
