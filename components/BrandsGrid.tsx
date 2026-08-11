"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { ArrowUpRight, Cpu, Smartphone, Umbrella } from "lucide-react";

interface BrandItem {
  name: string;
  description: string;
  link: string;
  icon: React.ReactNode;
  logo?: string;
  bgColorClass: string;
  textColorClass: string;
  tagColorClass: string;
  tag: string;
}

export default function BrandsGrid() {
  const t = useTranslations("Brands");
  
  const brands: BrandItem[] = [
    {
      name: t("ntigi.name"),
      tag: t("ntigi.tag"),
      description: t("ntigi.description"),
      link: "/brands#ntigi",
      icon: <Cpu className="h-7 w-7" />,
      logo: "/ntigi1.svg",
      bgColorClass: "bg-[#263071]",
      textColorClass: "text-white",
      tagColorClass: "text-blue-100",
    },
    {
      name: t("kassongo.name"),
      tag: t("kassongo.tag"),
      description: t("kassongo.description"),
      link: "/brands#kassongo",
      icon: <Smartphone className="h-7 w-7" />,
      logo: "/kassongo.svg",
      bgColorClass: "bg-green-900",
      textColorClass: "text-white",
      tagColorClass: "text-green-100",
    },
    {
      name: t("kovasure.name"),
      tag: t("kovasure.tag"),
      description: t("kovasure.description"),
      link: "/brands#kovasure",
      icon: <Umbrella className="h-7 w-7" />,
      logo: "/kovasure.svg",
      bgColorClass: "bg-[#0008ff]",
      textColorClass: "text-white",
      tagColorClass: "text-orange-100",
    },
  ];

  return (
    <section className="py-24 bg-gray-50 border-y border-gray-100">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-primary mb-4">
            {t("title")}
          </h2>
          <p className="font-sans text-gray-600 text-base sm:text-lg">
            {t("description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {brands.map((brand, idx) => (
            <div
              key={idx}
              className={`flex flex-col justify-between ${brand.bgColorClass} p-8 rounded-2xl shadow-sm border border-gray-200/80 transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  {brand.logo ? (
                    <div className="h-16 flex items-center bg-white rounded-lg px-4 py-2">
                      <Image 
                        src={brand.logo} 
                        alt={`${brand.name} logo`}
                        width={120}
                        height={36}
                        className="h-9 w-auto object-contain max-w-[180px]"
                      />
                    </div>
                  ) : (
                    <span className={`p-3 bg-white rounded-xl ${brand.textColorClass} font-semibold`}>
                      {brand.icon}
                    </span>
                  )}
                  <span className={`text-xs uppercase font-extrabold tracking-wider ${brand.tagColorClass}`}>
                    {brand.tag}
                  </span>
                </div>
                <h3 className={`font-display text-2xl font-bold ${brand.textColorClass} mb-3`}>
                  {brand.name}
                </h3>
                <p className={`text-sm ${brand.textColorClass} opacity-90 leading-relaxed`}>
                  {brand.description}
                </p>
              </div>

              <div className="pt-6 border-t border-white/20 mt-8">
                <Link
                  href={brand.link}
                  className={`inline-flex items-center gap-1 text-sm font-bold ${brand.textColorClass} hover:opacity-80 transition-opacity`}
                >
                  {t("learnMore")}
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
