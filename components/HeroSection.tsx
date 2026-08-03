"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight, ChevronRight } from "lucide-react";

const HERO_IMAGES = ["/hero/image1.jpg", "/hero/image2.jpg", "/hero/image3.jpg"];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen bg-[#001D47] text-white overflow-hidden flex items-center">
      {/* Background Image Slideshow */}
      <div className="absolute inset-0 z-0">
        {HERO_IMAGES.map((img, idx) => (
          <img
            key={img}
            src={img}
            alt={`Hero background ${idx + 1}`}
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-1000"
            style={{
              opacity: currentSlide === idx ? 0.15 : 0,
            }}
          />
        ))}
        {/* Gradient overlays for consistency */}
        <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-accent/10 blur-3xl translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-3xl -translate-x-1/3 translate-y-1/3" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02),transparent_60%)]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full mx-auto max-w-7xl px-6 md:px-8 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
            A new era in end-to-end logistics starts now
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed mb-10">
            Bringing together leading technology, global carriers, and unified integrations to optimize and scale your fulfillment operations.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              href="/brands"
              variant="secondary"
              size="lg"
              className="shadow-lg shadow-black/10 hover:scale-[1.02]"
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
