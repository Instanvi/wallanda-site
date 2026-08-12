"use client";

import type { ReactNode } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Link from "next/link";
import { useTranslations } from "next-intl";
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
  const t = useTranslations("About");
  const tBrands = useTranslations("Brands");
  const tCommon = useTranslations("Common");
  
  const brands: BrandItem[] = [
    {
      name: tBrands("ntigi.name"),
      tag: tBrands("ntigi.tag"),
      description: tBrands("ntigi.description"),
      link: "/brands/ntigi",
      icon: <Cpu className="h-7 w-7" />,
      accent: "border-t-4 border-accent",
    },
    {
      name: tBrands("kassongo.name"),
      tag: tBrands("kassongo.tag"),
      description: tBrands("kassongo.description"),
      link: "/brands/kassongo",
      icon: <Smartphone className="h-7 w-7" />,
      accent: "border-t-4 border-accent",
    },
    {
      name: tBrands("kovasure.name"),
      tag: tBrands("kovasure.tag"),
      description: tBrands("kovasure.description"),
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
          title={t("pageTitle")}
          description={t("pageDescription")}
          backgroundImage="/shipment.jpg"
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
                  {t("ourStoryBadge")}
                </span>

                <h2 className="mb-6 font-display text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
                  {t("ourStoryTitle")}
                </h2>

                <div className="space-y-5 leading-relaxed text-gray-600">
                  <p>
                    {t("ourStoryP1")}
                  </p>

                  <p>
                    {t("ourStoryP2")}
                    <strong className="text-primary"> {t("ourStoryP2Ntigi")}</strong> {t("ourStoryP2For")}
                    <strong className="text-primary"> {t("ourStoryP2Kassongo")}</strong> {t("ourStoryP2ForConsumer")}
                    <strong className="text-primary"> {t("ourStoryP2Kovasure")}</strong> {t("ourStoryP2ForInsurance")}
                  </p>

                  <p>
                    {t("ourStoryP3")}
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
                {t("leadershipBadge")}
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-primary mb-4">
                {t("leadershipTitle")}
              </h2>
              <p className="text-gray-600 text-lg">
                {t("leadershipDescription")}
              </p>
            </div>

            {/* CEO Feature */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-200/80 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-5">

                {/* Left Content */}
                <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center">
                  <div className="mb-6">
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-primary mb-1">
                      {t("ceoName")}
                    </h3>

                    <p className="text-accent font-semibold text-sm uppercase tracking-wider">
                      {t("ceoTitle")}
                    </p>
                  </div>

                  <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
                    <p>
                      {t("ceoDescription")}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/5 text-primary rounded-lg text-xs font-semibold">
                      <MapPin className="h-3.5 w-3.5" />
                      {t("ceoLocation")}
                    </span>

                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/5 text-primary rounded-lg text-xs font-semibold">
                      <Award className="h-3.5 w-3.5" />
                      {t("ceoExperience")}
                    </span>

                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/5 text-primary rounded-lg text-xs font-semibold">
                      <Globe className="h-3.5 w-3.5" />
                      {t("ceoContinents")}
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
                {t("valuesBadge")}
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-primary mb-4">
                {t("valuesTitle")}
              </h2>
              <p className="text-gray-600 text-lg">
                {t("valuesDescription")}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <ValueCard
                title={t("valueReliability")}
                description={t("valueReliabilityDesc")}
                icon={<Shield className="h-6 w-6" />}
              />
              <ValueCard
                title={t("valueBorderless")}
                description={t("valueBorderlessDesc")}
                icon={<Globe className="h-6 w-6" />}
              />
              <ValueCard
                title={t("valueTransparency")}
                description={t("valueTransparencyDesc")}
                icon={<Target className="h-6 w-6" />}
              />
              <ValueCard
                title={t("valueHuman")}
                description={t("valueHumanDesc")}
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