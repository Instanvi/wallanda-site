"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
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

export default function CompanyPage() {
  const stats = [
    { label: "Founded", value: "2025" },
    { label: "Global Offices", value: "3 Hubs" },
    { label: "Carrier Network", value: "50+" },
    { label: "Active Shippers", value: "120+" },
  ];

  const offices = [
    {
      city: "Douala",
      country: "Cameroon",
      role: "Global Headquarters & Engineering Hub",
      address: "4 Étage, Bonaberi, Douala",
      email: "douala@wallanda.com",
    },
    {
      city: "London",
      country: "United Kingdom",
      role: "European Operations & FinTech Desk",
      address: "30 St Mary Axe (The Gherkin), London",
      email: "london@wallanda.com",
    },
    {
      city: "New York",
      country: "United States",
      role: "North American Logistics & Carrier Partnerships",
      address: "1 World Trade Center, New York, NY",
      email: "nyc@wallanda.com",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900 font-sans antialiased overflow-x-hidden selection:bg-accent/20 selection:text-primary">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-[#001D47] text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-accent/10 blur-3xl translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-3xl -translate-x-1/3 translate-y-1/3" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02),transparent_60%)]" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8 py-20 md:py-28">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                One ecosystem. Endless connections.
              </h1>
              <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                Wallanda Global is a leading multinational logistics technology corporation. We develop software infrastructure, consumer freight platforms, and financial products that make cross-border trade seamless, reliable, and secure.
              </p>
            </div>
          </div>
        </section>

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
                  About the Corporation
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
                  Powering global trade through digital innovation
                </h2>
                <p className="text-gray-600 leading-relaxed text-base">
                  Founded to address the friction points of international shipping and logistics financing, Wallanda Global represents a strategic evolution in the freight sector. By bringing together advanced API integrations, consumer apps, and cargo security protocols, we offer a complete tech stack for modern commerce.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                  <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-gray-100 flex items-center justify-center flex-shrink-0">
                      <Globe2 className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-primary mb-1">Global Presence</h4>
                      <p className="text-xs text-gray-500 leading-relaxed">Operating hubs across Africa, Europe, and North America.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-gray-100 flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-primary mb-1">Compliance & Risk</h4>
                      <p className="text-xs text-gray-500 leading-relaxed">Integrated real-time insurance protection and customs modules.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Graphical Card side widget */}
              <div className="lg:col-span-5 bg-slate-50 p-8 rounded-3xl border border-gray-200/80 shadow-soft space-y-6">
                <h3 className="font-display font-bold text-primary text-xl">Quick References</h3>
                <p className="text-xs text-gray-500 leading-relaxed">Access official corporate downloads, PR inquiries, and executive media assets.</p>
                
                <div className="space-y-3">
                  <a
                    href="/press"
                    className="flex items-center justify-between p-4 bg-white border border-gray-100 rounded-xl hover:border-accent hover:shadow-sm transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-primary" />
                      <span className="text-xs font-bold text-gray-700">Official Newsroom</span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-accent transition-colors" />
                  </a>
                  <a
                    href="/about#leadership"
                    className="flex items-center justify-between p-4 bg-white border border-gray-100 rounded-xl hover:border-accent hover:shadow-sm transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <Users2 className="w-5 h-5 text-primary" />
                      <span className="text-xs font-bold text-gray-700">Leadership Team</span>
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
                Global Operations
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
                Corporate Hubs & Offices
              </h2>
              <p className="text-gray-600 text-sm">
                Connecting global logistic corridors through strategic physical presences.
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
