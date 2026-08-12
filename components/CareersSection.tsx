"use client";

import Image from "next/image";
import { Users, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useTranslations } from "next-intl";

export default function CareersSection() {
  const t = useTranslations("Careers");
  return (
    <section className="relative overflow-hidden bg-[#001D47] py-24 text-white">
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-accent/20 blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">

          {/* Left Content */}
          <div>

            <h2 className="font-display text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-6">
              {t("title")}
              <span className="block text-accent">
                {t("titleHighlight")}
              </span>
            </h2>

            <p className="max-w-xl text-lg leading-8 text-white/75 mb-10">
              {t("description")}
            </p>

            <Button
              href="/careers"
              variant="secondary"
              size="lg"
              className="shadow-lg shadow-black/20"
            >
              <Briefcase className="h-5 w-5" />
              {t("exploreButton")}
            </Button>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
              <Image
                src="/team.jpeg"
                alt={t("teamAlt")}
                width={700}
                height={600}
                className="h-[500px] w-full object-cover"
                priority={false}
              />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 rounded-2xl border border-white/10 bg-white p-5 shadow-2xl">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-accent/10 p-3">
                  <Users className="h-6 w-6 text-accent" />
                </div>

                <div>
                  <p className="font-display text-xl font-bold text-primary">
                    {t("growingTeam")}
                  </p>
                  <p className="text-sm text-gray-500">
                    {t("buildFuture")}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}