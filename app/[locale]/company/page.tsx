"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Image from "next/image";
import BrandsGrid from "@/components/BrandsGrid";
import {
  Building2,
  Globe2,
  ShieldCheck,
  Users2,
  ArrowUpRight,
  MapPin,
  Mail,
  FileText
} from "lucide-react";
import { useTranslations } from "next-intl";

export default function CompanyPage() {
  const t = useTranslations("CompanyPage");
  const tOffices = useTranslations("Offices");
  
  const stats = [
    { label: t("statFounded"), value: "2025" },
    { label: t("statOffices"), value: "3 Hubs" },
    { label: t("statCarriers"), value: "50+" },
    { label: t("statShippers"), value: "120+" },
  ];

  const offices = [
    {
      city: "Douala",
      country: "Cameroon",
      role: tOffices("doualaRole"),
      address: tOffices("doualaAddress"),
      email: "douala@wollanda.com",
    },
    {
      city: "London",
      country: "United Kingdom",
      role: tOffices("londonRole"),
      address: tOffices("londonAddress"),
      email: "london@wollanda.com",
    },
    {
      city: "New York",
      country: "United States",
      role: tOffices("nycRole"),
      address: tOffices("nycAddress"),
      email: "nyc@wollanda.com",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900 font-sans antialiased overflow-x-hidden selection:bg-accent/20 selection:text-primary">
      <Header />

      <main className="flex-1">
        {/* Page Hero with Background Image */}
        <PageHero
          title={t("pageTitle")}
          description={t("pageDescription")}
          backgroundImage="/hero/image3.jpg"
        />

        {/* Stats Section */}
        <section className="relative z-20 -mt-12 max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white p-8 rounded-3xl shadow-soft border border-gray-100">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-extrabold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Corporate Overview Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs font-extrabold tracking-wider text-accent uppercase block">
                  {t("aboutBadge")}
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
                  {t("aboutTitle")}
                </h2>
                <p className="text-gray-600 leading-relaxed text-base">
                  {t("aboutDescription")}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                  <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-gray-100 flex items-center justify-center flex-shrink-0">
                      <Globe2 className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-primary mb-1">{t("aboutGlobalPresence")}</h4>
                      <p className="text-xs text-gray-500 leading-relaxed">{t("aboutGlobalPresenceDesc")}</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-gray-100 flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-primary mb-1">{t("aboutCompliance")}</h4>
                      <p className="text-xs text-gray-500 leading-relaxed">{t("aboutComplianceDesc")}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Graphical Card side widget */}
              <div className="lg:col-span-5 bg-slate-50 p-8 rounded-3xl border border-gray-200/80 shadow-soft space-y-6">
                <h3 className="font-display font-bold text-primary text-xl">{t("quickRefsTitle")}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{t("quickRefsDesc")}</p>
                
                <div className="space-y-3">
                  <a
                    href="/press"
                    className="flex items-center justify-between p-4 bg-white border border-gray-100 rounded-xl hover:border-accent hover:shadow-sm transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-primary" />
                      <span className="text-xs font-bold text-gray-700">{t("quickRefsNewsroom")}</span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-accent transition-colors" />
                  </a>
                  <a
                    href="/about#leadership"
                    className="flex items-center justify-between p-4 bg-white border border-gray-100 rounded-xl hover:border-accent hover:shadow-sm transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <Users2 className="w-5 h-5 text-primary" />
                      <span className="text-xs font-bold text-gray-700">{t("quickRefsLeadership")}</span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-accent transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

            <BrandsGrid />

        {/* Global Offices */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-extrabold tracking-wider text-accent uppercase mb-3 block">
                {t("officesBadge")}
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
                {t("officesTitle")}
              </h2>
              <p className="text-gray-600 text-sm">
                {t("officesDescription")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {offices.map((office, index) => (
                <div
                  key={index}
                  className="bg-slate-50 border border-gray-100 p-6 rounded-2xl flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 text-primary font-display font-bold text-lg mb-1">
                      <MapPin className="w-4 h-4 text-accent" />
                      {office.city}, {office.country}
                    </div>
                    <p className="text-[11px] text-gray-500 font-semibold mb-4 uppercase tracking-wider">{office.role}</p>
                    <p className="text-xs text-gray-600 leading-relaxed mb-6">{office.address}</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-accent font-bold pt-4 border-t border-gray-200/60">
                    <Mail className="w-3.5 h-3.5" />
                    {office.email}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
