"use client";

import { Users, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function CareersSection() {
  return (
    <section className="py-20 bg-primary text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-accent/20 blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl -translate-x-1/2 translate-y-1/2"></div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 md:px-8 text-center">
        <div className="inline-flex p-3 bg-white/10 rounded-2xl mb-6">
          <Users className="h-8 w-8 text-accent" />
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
          Join the Wallanda Global team
        </h2>
        <p className="font-sans text-gray-300 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          We're shaping the future of global commerce and intelligent logistics. Discover career paths that empower you to innovate and thrive in a fast-growing, international environment.
        </p>
        <div>
          <Button 
            href="/careers" 
            variant="secondary" 
            size="lg"
            className="shadow-lg shadow-black/10 hover:scale-[1.02]"
          >
            <Briefcase className="h-5 w-5" />
            Explore Opportunities
          </Button>
        </div>
      </div>
    </section>
  );
}
