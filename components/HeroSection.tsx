"use client";

import { Button } from "@/components/ui/Button";
import { ArrowUpRight, ChevronRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[70vh] overflow-hidden bg-[#001D47] text-white flex items-center">

      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#001D47]">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/ship.jpeg"
          aria-label="Background video showcasing global logistics operations"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-primary/75" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/80 opacity-30" />

        {/* Decorative Blurs */}
        <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-accent/10 blur-3xl translate-x-1/3 -translate-y-1/3" />

        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-3xl -translate-x-1/3 translate-y-1/3" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_65%)]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-8 py-16 md:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-6">
            A new era in end-to-end logistics starts now
          </h1>

          <p className="mx-auto max-w-2xl text-lg sm:text-xl leading-relaxed text-white/80 mb-10">
            Bringing together leading technology, global carriers, and
            unified integrations to optimize, protect, and scale your
            fulfillment operations worldwide.
          </p>

          <div className="flex flex-wrap justify-center gap-4">

            <Button
              href="/brands"
              variant="secondary"
              size="lg"
              className="shadow-lg shadow-black/20 hover:scale-[1.02]"
            >
              Explore Our Brands
              <ChevronRight className="h-5 w-5" />
            </Button>

            <Button
              href="/about"
              variant="outline"
              size="lg"
            >
              <ArrowUpRight className="h-5 w-5" />
              Learn More
            </Button>

          </div>

        </div>
      </div>
    </section>
  );
}