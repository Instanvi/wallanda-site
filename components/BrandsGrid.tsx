"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Cpu, Smartphone, Umbrella } from "lucide-react";

interface BrandItem {
  name: string;
  description: string;
  link: string;
  icon: React.ReactNode;
  logo?: string;
  accent: string;
  tag: string;
}

export default function BrandsGrid() {
  const brands: BrandItem[] = [
    {
      name: "Ntigi",
      tag: "Shipping Technology",
      description: "Advanced desktop and web shipping technology solutions powering label generation, automated routing, and carrier API integrations.",
      link: "/brands#ntigi",
      icon: <Cpu className="h-7 w-7" />,
      logo: "/ntigi1.svg",
      accent: "border-t-4 border-primary",
    },
    {
      name: "Kassongo",
      tag: "Shipping App",
      description: "The premier consumer and commercial shipping application connecting users to global delivery networks and localized hubs instantly.",
      link: "/brands#kassongo",
      icon: <Smartphone className="h-7 w-7" />,
      logo: "/kassongo.svg",
      accent: "border-t-4 border-green-900",
    },
    {
      name: "Kovasure",
      tag: "Cargo Insurance",
      description: "Fully integrated cargo insurance providing real-time quotes, peace-of-mind transit protection, and automated claim handling.",
      link: "/brands#kovasure",
      icon: <Umbrella className="h-7 w-7" />,
      logo: "/kovasure.svg",
      accent: "border-t-4 border-orange-500",
    },
  ];

  return (
    <section className="py-24 bg-gray-50 border-y border-gray-100">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-primary mb-4">
            Get to know Wallanda Global's brands
          </h2>
          <p className="font-sans text-gray-600 text-base sm:text-lg">
            Discover our specialized suite of shipping technology, user-friendly mobile applications, and cargo insurance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {brands.map((brand, idx) => (
            <div
              key={idx}
              className={`flex flex-col justify-between bg-white p-8 rounded-2xl shadow-sm border border-gray-200/80 transition-all duration-300 hover:shadow-md hover:-translate-y-1 ${brand.accent}`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  {brand.logo ? (
                    <div className="h-16 flex items-center bg-gray-50 rounded-lg px-4 py-2">
                      <Image 
                        src={brand.logo} 
                        alt={`${brand.name} logo`}
                        width={120}
                        height={36}
                        className="h-9 w-auto object-contain max-w-[180px]"
                      />
                    </div>
                  ) : (
                    <span className="p-3 bg-gray-50 rounded-xl text-primary font-semibold">
                      {brand.icon}
                    </span>
                  )}
                  <span className="text-xs uppercase font-extrabold tracking-wider text-gray-400">
                    {brand.tag}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-bold text-primary mb-3">
                  {brand.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {brand.description}
                </p>
              </div>

              <div className="pt-6 border-t border-gray-100 mt-8">
                <Link
                  href={brand.link}
                  className="inline-flex items-center gap-1 text-sm font-bold text-accent hover:text-accent-hover transition-colors"
                >
                  Learn More
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
