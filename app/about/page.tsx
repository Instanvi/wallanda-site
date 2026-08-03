"use client";

import type { ReactNode } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import {
  ArrowUpRight,
  Globe,
  Shield,
  Zap,
  Users,
  Briefcase,
  Target,
  TrendingUp,
  Heart,
  MapPin,
  Award,
  Cpu,
  Smartphone,
  Umbrella,
  ChevronRight,
} from "lucide-react";
import BrandsGrid from "@/components/BrandsGrid";
import PartnersSection from "@/components/PartnersSection";
import ValueCard from "@/components/ValueCard";


interface BrandItem {
  name: string;
  tag: string;
  description: string;
  link: string;
  icon: ReactNode;
  accent: string;
}

export default function AboutUsPage() {
  const brands: BrandItem[] = [
    {
      name: "Ntigi",
      tag: "Shipping Technology",
      description: "Advanced desktop and web shipping technology solutions powering label generation, automated routing, and carrier API integrations.",
      link: "/brands/ntigi",
      icon: <Cpu className="h-7 w-7" />,
      accent: "border-t-4 border-accent",
    },
    {
      name: "Kassongo",
      tag: "Shipping App",
      description: "The premier consumer and commercial shipping application connecting users to global delivery networks and localized hubs instantly.",
      link: "/brands/kassongo",
      icon: <Smartphone className="h-7 w-7" />,
      accent: "border-t-4 border-accent",
    },
    {
      name: "Kovasure",
      tag: "Cargo Insurance",
      description: "Fully integrated cargo insurance providing real-time quotes, peace-of-mind transit protection, and automated claim handling.",
      link: "/brands/kovasure",
      icon: <Umbrella className="h-7 w-7" />,
      accent: "border-t-4 border-accent",
    },
  ];

  const YoutubeIcon = () => (
    <svg
      className="w-4 h-4"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );

  const LinkedInIcon = () => (
    <svg
      className="w-4 h-4"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.447 20.452H16.89v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.345V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.369-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.063 2.063 0 1 1 0-4.126 2.063 2.063 0 0 1 0 4.126zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );

  const FacebookIcon = () => (
    <svg
      className="w-4 h-4"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-1">
        {/* Page Hero with Background Image */}
        <PageHero
          title="We move the world's commerce forward"
          description="wollanda Global is the intelligent backbone of modern trade. Through our family of brands, we connect businesses, carriers, and consumers with seamless shipping, insurance, and financial technology."
          backgroundImage="/ship.jpeg"
        />


        <section className="py-24 md:py-32 bg-white">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              {/* Left - Image */}
              <div className="relative">
                <div className="overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    src="/ship.jpeg"
                    alt="wollanda Global team collaborating on logistics technology"
                    className="w-full h-[550px] object-cover"
                  />
                </div>
              </div>

              {/* Right - Content */}
              <div>
                <span className="mb-4 block text-sm font-extrabold uppercase tracking-wider text-accent">
                  Our Story
                </span>

                <h2 className="mb-6 font-display text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
                  Built for global trade, designed for local trust
                </h2>

                <div className="space-y-5 leading-relaxed text-gray-600">
                  <p>
                    wollanda Global was founded on a simple but powerful belief:
                    that the complexity of international logistics should never
                    be a barrier to growth. What began as a single shipping API
                    has evolved into a comprehensive ecosystem serving
                    enterprises, marketplaces, and independent merchants across
                    six continents.
                  </p>

                  <p>
                    Today, our family of brands
                    <strong className="text-primary"> Ntigi</strong> for enterprise
                    shipping technology,
                    <strong className="text-primary"> Kassongo</strong> for consumer
                    and commercial shipping applications, and
                    <strong className="text-primary"> Kovasure</strong> for integrated
                    cargo insurance work together to deliver end-to-end supply
                    chain confidence.
                  </p>

                  <p>
                    We don't just move packages. We move possibilities. Every
                    label printed, every policy issued, and every payment
                    processed is another step toward a more connected and
                    resilient global economy.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>


        <section id="leadership" className="py-24 bg-gray-50 border-y border-gray-100 scroll-mt-20">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-sm font-extrabold tracking-wider text-accent uppercase mb-4 block">
                Leadership
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-primary mb-4">
                Guided by vision, driven by execution
              </h2>
              <p className="text-gray-600 text-lg">
                Our leadership team brings decades of experience in logistics, fintech, and global enterprise technology.
              </p>
            </div>

            {/* CEO Feature */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-200/80 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-5">

                {/* Left Content */}
                <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center">
                  <div className="mb-6">
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-primary mb-1">
                      Genesis St. James Amahnui
                    </h3>

                    <p className="text-accent font-semibold text-sm uppercase tracking-wider">
                      Founder &amp; Chief Executive Officer
                    </p>
                  </div>

                  <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
                    <p>
                      Genesis St. James Amahnui is a Cameroonian technology entrepreneur and
                      software systems designer. As the Founder and CEO of wollanda Global, he
                      is dedicated to building innovative logistics and commerce technologies
                      that empower businesses across Africa and global markets. His leadership
                      focuses on creating scalable digital infrastructure that drives efficiency,
                      connectivity, and sustainable business growth.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/5 text-primary rounded-lg text-xs font-semibold">
                      <MapPin className="h-3.5 w-3.5" />
                      Douala, Cameroon
                    </span>

                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/5 text-primary rounded-lg text-xs font-semibold">
                      <Award className="h-3.5 w-3.5" />
                      10+ Years Experience
                    </span>

                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/5 text-primary rounded-lg text-xs font-semibold">
                      <Globe className="h-3.5 w-3.5" />
                      4 Continents Scaled
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Link
                      href="#"
                      className="p-2 bg-gray-100 rounded-lg text-gray-500 hover:bg-primary hover:text-white transition-colors"
                    >
                      <FacebookIcon />
                    </Link>

                    <Link
                      href="#"
                      className="p-2 bg-gray-100 rounded-lg text-gray-500 hover:bg-primary hover:text-white transition-colors"
                    >
                      <LinkedInIcon />
                    </Link>
                  </div>
                </div>

                {/* Right Image */}
                <div className="md:col-span-2 relative min-h-[420px]">
                  <img
                    src="/emoji.avif"
                    alt="Genesis St. James Amahnui"
                    className="absolute inset-0 h-full w-full object-cover"
                  />

                  {/* Optional dark gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>

              </div>
            </div>
          </div>
        </section>

        <BrandsGrid />
        <PartnersSection />

        <section className="py-24 bg-gray-50 border-y border-gray-100">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-sm font-extrabold tracking-wider text-accent uppercase mb-4 block">
                What We Stand For
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-primary mb-4">
                Our values define every shipment
              </h2>
              <p className="text-gray-600 text-lg">
                From the warehouse floor to the boardroom, these principles guide how we build, partner, and serve.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <ValueCard
                title="Reliability First"
                description="We treat every package as a promise. Our systems are engineered for 99.9% uptime, and our carrier network is rigorously vetted for consistency."
                icon={<Shield className="h-6 w-6" />}
              />
              <ValueCard
                title="Borderless Innovation"
                description="Global trade knows no borders, and neither do we. We build technology that works seamlessly across languages, currencies, and regulatory frameworks."
                icon={<Globe className="h-6 w-6" />}
              />
              <ValueCard
                title="Radical Transparency"
                description="No hidden fees, no black-box algorithms. Our customers see exactly what they pay for and where their goods are &mdash; always."
                icon={<Target className="h-6 w-6" />}
              />
              <ValueCard
                title="Human-Centered Design"
                description="Technology should reduce complexity, not add to it. Every interface, API, and workflow is designed with the end user in mind."
                icon={<Heart className="h-6 w-6" />}
              />
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}