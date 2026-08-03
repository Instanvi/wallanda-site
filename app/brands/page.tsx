"use client";

import type { ReactNode } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import {
    ArrowUpRight,
    Cpu,
    Smartphone,
    Umbrella,
    Globe,
    Zap,
    Shield,
    BarChart3,
    Truck,
    CreditCard,
    ChevronRight,
    Quote,
} from "lucide-react";
import FeaturePill from "@/components/FeaturePill";


function Testimonial({ quote, name, title, company }: { quote: string; name: string; title: string; company: string }) {
    return (
        <div className="relative bg-gray-50 rounded-xl md:rounded-2xl p-4 md:p-6 border border-gray-100">
            <Quote className="h-5 w-5 md:h-6 md:w-6 text-accent/40 mb-2 md:mb-3" />
            <p className="text-gray-700 text-xs md:text-sm leading-relaxed italic mb-3 md:mb-4">
                &ldquo;{quote}&rdquo;
            </p>
            <div className="flex items-center gap-2 md:gap-3">
                <div className="h-8 w-8 md:h-9 md:w-9 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-[10px] md:text-xs flex-shrink-0">
                    {name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                    <p className="text-xs md:text-sm font-bold text-primary">{name}</p>
                    <p className="text-[10px] md:text-xs text-gray-500">{title}, {company}</p>
                </div>
            </div>
        </div>
    );
}

interface BrandSectionProps {
    name: string;
    tagline: string;
    description: string;
    features: { icon: ReactNode; label: string }[];
    testimonial: { quote: string; name: string; title: string; company: string };
    ctaUrl: string;
    ctaLabel: string;
    icon: ReactNode;
    logo: string;
    accentColor: string;
    badges: { icon: ReactNode; label: string }[];
    reverse?: boolean;
}

function BrandSection({ name, tagline, description, features, testimonial, ctaUrl, ctaLabel, icon, logo, accentColor, badges, reverse }: BrandSectionProps) {
    return (
        <section id={name.toLowerCase()} className="py-16 md:py-20 lg:py-28 border-b border-gray-100 last:border-b-0 scroll-mt-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center ${reverse ? "lg:flex-row-reverse" : ""}`}>
                    {/* Content */}
                    <div className={reverse ? "lg:order-2" : ""}>
                        <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                            <div className="flex items-center justify-center bg-gray-50 rounded-lg md:rounded-xl px-3 py-2 md:px-4 md:py-3">
                                <Image 
                                    src={logo} 
                                    alt={`${name} logo`}
                                    width={140}
                                    height={40}
                                    className="h-8 md:h-10 w-auto object-contain"
                                />
                            </div>
                        </div>
                        <p className="text-xs md:text-sm font-semibold text-accent uppercase tracking-wider mb-3 md:mb-4">
                            {tagline}
                        </p>

                        <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-5 md:mb-6">
                            {description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
                            {features.map((f, i) => (
                                <FeaturePill key={i} icon={f.icon} label={f.label} />
                            ))}
                        </div>

                        <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-8 md:mb-10">
                            <a
                                href={ctaUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button
                                    variant="primary"
                                    size="lg"
                                    className="shadow-lg shadow-primary/20 hover:scale-[1.02] text-sm md:text-base"
                                >
                                    {ctaLabel}
                                    <ArrowUpRight className="h-4 w-4 md:h-5 md:w-5" />
                                </Button>
                            </a>
                            <Link
                                href={`/brands/${name.toLowerCase()}`}
                                className="inline-flex items-center gap-1 text-xs md:text-sm font-bold text-accent hover:text-accent-hover transition-colors"
                            >
                                Learn more about {name}
                                <ChevronRight className="h-3.5 w-3.5 md:h-4 md:w-4" />
                            </Link>
                        </div>

                        <Testimonial
                            quote={testimonial.quote}
                            name={testimonial.name}
                            title={testimonial.title}
                            company={testimonial.company}
                        />
                    </div>

                    {/* Visual */}
                    <div className={reverse ? "lg:order-1" : ""}>
                        <div className="relative aspect-square max-w-lg mx-auto">
                            <div className="absolute inset-0 rounded-2xl md:rounded-3xl bg-primary/6 border border-gray-100 overflow-hidden">
                                <div className={`absolute inset-0 opacity-10 bg-gradient-to-br ${accentColor.replace("bg-", "from-")} to-primary`} />

                                <div className="absolute top-4 left-4 right-4 bottom-4 md:top-8 md:left-8 md:right-8 md:bottom-8 flex items-center justify-center">
                                    <div className="relative w-full h-full">
                                        {/* Center logo card - responsive sizing */}
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-white rounded-xl md:rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center justify-center z-10 p-3">
                                            <Image 
                                                src={logo} 
                                                alt={`${name} logo`}
                                                width={120}
                                                height={40}
                                                className="h-6 sm:h-8 md:h-10 w-auto object-contain mb-2"
                                            />
                                            <span className="text-[10px] sm:text-xs font-semibold text-gray-500 uppercase tracking-wider text-center">{tagline}</span>
                                        </div>

                                        <div className="absolute top-2 left-2 sm:top-3 sm:left-3 md:top-4 md:left-4 bg-white rounded-lg md:rounded-xl shadow-md border border-gray-100 p-2 md:p-3 flex items-center gap-1.5 md:gap-2 hover:shadow-lg transition-shadow">
                                            <span className="w-3 h-3 md:w-4 md:h-4 flex items-center justify-center text-primary">
                                                {badges[0].icon}
                                            </span>
                                            <span className="text-[10px] md:text-xs font-semibold text-primary hidden sm:inline">{badges[0].label}</span>
                                        </div>
                                        <div className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 bg-white rounded-lg md:rounded-xl shadow-md border border-gray-100 p-2 md:p-3 flex items-center gap-1.5 md:gap-2 hover:shadow-lg transition-shadow">
                                            <span className="w-3 h-3 md:w-4 md:h-4 flex items-center justify-center text-primary">
                                                {badges[1].icon}
                                            </span>
                                            <span className="text-[10px] md:text-xs font-semibold text-primary hidden sm:inline">{badges[1].label}</span>
                                        </div>
                                        <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 md:bottom-4 md:left-4 bg-white rounded-lg md:rounded-xl shadow-md border border-gray-100 p-2 md:p-3 flex items-center gap-1.5 md:gap-2 hover:shadow-lg transition-shadow">
                                            <span className="w-3 h-3 md:w-4 md:h-4 flex items-center justify-center text-primary">
                                                {badges[2].icon}
                                            </span>
                                            <span className="text-[10px] md:text-xs font-semibold text-primary hidden sm:inline">{badges[2].label}</span>
                                        </div>
                                        <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 md:bottom-4 md:right-4 bg-white rounded-lg md:rounded-xl shadow-md border border-gray-100 p-2 md:p-3 flex items-center gap-1.5 md:gap-2 hover:shadow-lg transition-shadow">
                                            <span className="w-3 h-3 md:w-4 md:h-4 flex items-center justify-center text-primary">
                                                {badges[3].icon}
                                            </span>
                                            <span className="text-[10px] md:text-xs font-semibold text-primary hidden sm:inline">{badges[3].label}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative blur */}
                            <div className={`absolute -top-4 -right-4 h-24 w-24 md:h-32 md:w-32 rounded-full ${accentColor} opacity-20 blur-3xl`} />
                            <div className="absolute -bottom-4 -left-4 h-20 w-20 md:h-24 md:w-24 rounded-full bg-primary opacity-10 blur-3xl" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default function BrandsPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Header />
            <main className="flex-1">
                {/* Page Hero with Background Image */}
                <PageHero
                    title="Deliver confidence with wollanda"
                    description="Our family of specialized brands gives you the technology, coverage, and connectivity to scale across borders with complete confidence."
                    backgroundImage="/hero/image2.jpg"
                />

                <BrandSection
                    name="Ntigi"
                    tagline="Ntigi Logistics"
                    description="Ntigi is your key to unlocking scalable logistics success. Our powerful, user-friendly platform empowers online sellers and enterprises to manage, process, fulfill, and ship orders efficiently — no matter the volume. With deep carrier API integrations, automated routing intelligence, and real-time label generation, Ntigi makes scaling your shipping operations effortless."
                    features={[
                        { icon: <Cpu className="h-3.5 w-3.5" />, label: "API-First Architecture" },
                        { icon: <Zap className="h-3.5 w-3.5" />, label: "Automated Routing" },
                        { icon: <Truck className="h-3.5 w-3.5" />, label: "Multi-Carrier Labels" },
                        { icon: <BarChart3 className="h-3.5 w-3.5" />, label: "Real-Time Analytics" },
                    ]}
                    testimonial={{
                        quote: "We've gone from shipping a few hundred packages a day to tens of thousands. And thanks to Ntigi, we reduced our delivery costs by 18% while improving on-time performance to 99.4%.",
                        name: "Marcus Chen",
                        title: "VP of Operations",
                        company: "Atlas Commerce",
                    }}
                    ctaUrl="https://ntigi.com"
                    ctaLabel="Visit Ntigi"
                    icon={<Cpu className="h-7 w-7" />}
                    logo="/ntigi1.svg"
                    accentColor="bg-primary"
                    badges={[
                        { icon: <Cpu className="h-4 w-4" />, label: "API-First" },
                        { icon: <Truck className="h-4 w-4" />, label: "600+ Carriers" },
                        { icon: <Zap className="h-4 w-4" />, label: "Automated" },
                        { icon: <BarChart3 className="h-4 w-4" />, label: "Analytics" },
                    ]}
                />

                <BrandSection
                    name="Kassongo"
                    tagline="Kassongo Mail"
                    description="Kassongo connects consumers and businesses to global delivery networks instantly through an intuitive mobile and web application. Whether you're a solopreneur sending your first international package or a growing SMB managing hundreds of shipments weekly, Kassongo puts enterprise-grade logistics in your pocket. Book, track, and manage every delivery from one beautifully simple interface."
                    features={[
                        { icon: <Smartphone className="h-3.5 w-3.5" />, label: "Mobile-First Design" },
                        { icon: <Globe className="h-3.5 w-3.5" />, label: "190+ Countries" },
                        { icon: <CreditCard className="h-3.5 w-3.5" />, label: "Instant Quotes" },
                        { icon: <Zap className="h-3.5 w-3.5" />, label: "One-Tap Booking" },
                    ]}
                    testimonial={{
                        quote: "As a small business owner, I never thought I could access the same shipping rates as the big players. Kassongo leveled the playing field — my customers get faster delivery and I save over 20% on every shipment.",
                        name: "Amara Okafor",
                        title: "Founder",
                        company: "Lagos Luxe Interiors",
                    }}
                    ctaUrl="https://kassongomail.com"
                    ctaLabel="Visit Kassongo"
                    icon={<Smartphone className="h-7 w-7" />}
                    logo="/kassongo.svg"
                    accentColor="bg-accent"
                    badges={[
                        { icon: <Smartphone className="h-4 w-4" />, label: "Mobile-First" },
                        { icon: <Globe className="h-4 w-4" />, label: "190+ Countries" },
                        { icon: <Zap className="h-4 w-4" />, label: "Instant" },
                        { icon: <CreditCard className="h-4 w-4" />, label: "Pay Easy" },
                    ]}
                    reverse
                />

                <BrandSection
                    name="Kovasure"
                    tagline="Kovasure Insurance"
                    description="Kovasure delivers fully integrated cargo insurance that moves at the speed of commerce. Get real-time quotes in seconds, not days. Protect high-value, fragile, and time-sensitive shipments with policies designed for modern supply chains. Our automated claim handling and direct carrier partnerships mean that when the unexpected happens, resolution is fast, transparent, and fair."
                    features={[
                        { icon: <Shield className="h-3.5 w-3.5" />, label: "Real-Time Quotes" },
                        { icon: <Umbrella className="h-3.5 w-3.5" />, label: "All-Risk Coverage" },
                        { icon: <Zap className="h-3.5 w-3.5" />, label: "Auto Claims" },
                        { icon: <BarChart3 className="h-3.5 w-3.5" />, label: "Risk Analytics" },
                    ]}
                    testimonial={{
                        quote: "Before Kovasure, filing a cargo claim meant weeks of paperwork and uncertainty. Now claims are resolved in under 48 hours. That kind of speed and transparency has completely changed how we think about risk management.",
                        name: "Elena Vasquez",
                        title: "Supply Chain Director",
                        company: "Pacifica Imports",
                    }}
                    ctaUrl="https://kovasure.com"
                    ctaLabel="Visit Kovasure"
                    icon={<Umbrella className="h-7 w-7" />}
                    logo="/kovasure.svg"
                    accentColor="bg-primary"
                    badges={[
                        { icon: <Shield className="h-4 w-4" />, label: "Protected" },
                        { icon: <Umbrella className="h-4 w-4" />, label: "All-Risk" },
                        { icon: <Zap className="h-4 w-4" />, label: "Fast Claims" },
                        { icon: <BarChart3 className="h-4 w-4" />, label: "Risk Insights" },
                    ]}
                />

                <section className="py-16 md:py-20 lg:py-24 bg-gray-50 border-y border-gray-100">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
                            <span className="text-xs md:text-sm font-extrabold tracking-wider text-accent uppercase mb-3 md:mb-4 block">
                                The Ecosystem
                            </span>
                            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-primary mb-3 md:mb-4">
                                One platform. Infinite possibilities.
                            </h2>
                            <p className="text-gray-600 text-base md:text-lg">
                                Ntigi, Kassongo, and Kovasure are designed to work together or stand alone. Mix and match the tools your business needs.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {/* Ntigi */}
                            <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 border border-gray-200/80 shadow-sm">
                                <div className="flex items-center justify-center bg-gray-50 rounded-lg md:rounded-xl w-fit mb-4 md:mb-5 px-3 py-2 md:px-4 md:py-3">
                                    <Image 
                                        src="/ntigi1.svg" 
                                        alt="Ntigi logo"
                                        width={100}
                                        height={32}
                                        className="h-6 md:h-8 w-auto object-contain"
                                    />
                                </div>
                                <p className="text-xs md:text-sm text-gray-500 font-semibold uppercase tracking-wider mb-3 md:mb-4">Ntigi</p>
                                <ul className="space-y-2 md:space-y-3 text-xs md:text-sm text-gray-600">
                                    <li className="flex items-start gap-2">
                                        <ChevronRight className="h-3.5 w-3.5 md:h-4 md:w-4 text-accent shrink-0 mt-0.5" />
                                        <span>Web, Mobile &amp; Desktop shipping platform</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ChevronRight className="h-3.5 w-3.5 md:h-4 md:w-4 text-accent shrink-0 mt-0.5" />
                                        <span>600+ carrier API integrations</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ChevronRight className="h-3.5 w-3.5 md:h-4 md:w-4 text-accent shrink-0 mt-0.5" />
                                        <span>Automated batch label generation</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ChevronRight className="h-3.5 w-3.5 md:h-4 md:w-4 text-accent shrink-0 mt-0.5" />
                                        <span>Enterprise analytics dashboard</span>
                                    </li>
                                </ul>
                                <div className="mt-5 md:mt-6 pt-5 md:pt-6 border-t border-gray-100">
                                    <a
                                        href="https://new.ntigi.cm"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 text-xs md:text-sm font-bold text-accent hover:text-accent-hover transition-colors"
                                    >
                                        Visit ntigi.cm
                                        <ArrowUpRight className="h-3.5 w-3.5 md:h-4 md:w-4" />
                                    </a>
                                </div>
                            </div>

                            {/* Kassongo */}
                            <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 border border-gray-200/80 shadow-sm relative">
                                <div className="flex items-center justify-center bg-gray-50 rounded-lg md:rounded-xl w-fit mb-4 md:mb-5 px-3 py-2 md:px-4 md:py-3">
                                    <Image 
                                        src="/kassongo.svg" 
                                        alt="Kassongo logo"
                                        width={100}
                                        height={32}
                                        className="h-6 md:h-8 w-auto object-contain"
                                    />
                                </div>
                                <p className="text-xs md:text-sm text-gray-500 font-semibold uppercase tracking-wider mb-3 md:mb-4">Kassongo</p>
                                <ul className="space-y-2 md:space-y-3 text-xs md:text-sm text-gray-600">
                                    <li className="flex items-start gap-2">
                                        <ChevronRight className="h-3.5 w-3.5 md:h-4 md:w-4 text-accent shrink-0 mt-0.5" />
                                        <span>iOS &amp; Android consumer app</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ChevronRight className="h-3.5 w-3.5 md:h-4 md:w-4 text-accent shrink-0 mt-0.5" />
                                        <span>Instant rate comparison</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ChevronRight className="h-3.5 w-3.5 md:h-4 md:w-4 text-accent shrink-0 mt-0.5" />
                                        <span>Localized hub pickup &amp; drop-off</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ChevronRight className="h-3.5 w-3.5 md:h-4 md:w-4 text-accent shrink-0 mt-0.5" />
                                        <span>Push notifications &amp; live tracking</span>
                                    </li>
                                </ul>
                                <div className="mt-5 md:mt-6 pt-5 md:pt-6 border-t border-gray-100">
                                    <a
                                        href="https://kassongomail.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 text-xs md:text-sm font-bold text-accent hover:text-accent-hover transition-colors"
                                    >
                                        Visit kassongomail.com
                                        <ArrowUpRight className="h-3.5 w-3.5 md:h-4 md:w-4" />
                                    </a>
                                </div>
                            </div>

                            {/* Kovasure */}
                            <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 border border-gray-200/80 shadow-sm sm:col-span-2 lg:col-span-1">
                                <div className="flex items-center justify-center bg-gray-50 rounded-lg md:rounded-xl w-fit mb-4 md:mb-5 px-3 py-2 md:px-4 md:py-3">
                                    <Image 
                                        src="/kovasure.svg" 
                                        alt="Kovasure logo"
                                        width={100}
                                        height={32}
                                        className="h-6 md:h-8 w-auto object-contain"
                                    />
                                </div>
                                <p className="text-xs md:text-sm text-gray-500 font-semibold uppercase tracking-wider mb-3 md:mb-4">Kovasure</p>
                                <ul className="space-y-2 md:space-y-3 text-xs md:text-sm text-gray-600">
                                    <li className="flex items-start gap-2">
                                        <ChevronRight className="h-3.5 w-3.5 md:h-4 md:w-4 text-accent shrink-0 mt-0.5" />
                                        <span>Real-time policy quotes</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ChevronRight className="h-3.5 w-3.5 md:h-4 md:w-4 text-accent shrink-0 mt-0.5" />
                                        <span>All-risk &amp; named-peril coverage</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ChevronRight className="h-3.5 w-3.5 md:h-4 md:w-4 text-accent shrink-0 mt-0.5" />
                                        <span>Automated claims processing</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ChevronRight className="h-3.5 w-3.5 md:h-4 md:w-4 text-accent shrink-0 mt-0.5" />
                                        <span>Integrated with Ntigi &amp; Kassongo</span>
                                    </li>
                                </ul>
                                <div className="mt-5 md:mt-6 pt-5 md:pt-6 border-t border-gray-100">
                                    <a
                                        href="https://kovasure.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 text-xs md:text-sm font-bold text-accent hover:text-accent-hover transition-colors"
                                    >
                                        Visit kovasure.com
                                        <ArrowUpRight className="h-3.5 w-3.5 md:h-4 md:w-4" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}