"use client";

interface PageHeroProps {
  title: string;
  description: string;
  backgroundImage?: string;
}

export default function PageHero({ title, description, backgroundImage = "/hero/image1.jpg" }: PageHeroProps) {
  return (
    <section className="relative min-h-[60vh] bg-[#001D47] text-white overflow-hidden flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt="Hero background"
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        {/* Dark gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#001D47]/80 via-[#001D47]/90 to-[#001D47]/70 opacity-50" />
        
        {/* Gradient overlays for visual interest */}
        <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-accent/10 blur-3xl translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-3xl -translate-x-1/3 translate-y-1/3" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02),transparent_60%)]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full mx-auto max-w-7xl px-6 md:px-8 py-20">
        <div className="max-w-3xl">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight text-white">
            {title}
          </h1>
          <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
