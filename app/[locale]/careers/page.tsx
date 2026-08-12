"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Button from "@/components/ui/Button";
import {
  Briefcase,
  MapPin,
  Clock,
  Heart,
  Globe,
  Award,
  Zap,
  ChevronRight,
  Send,
  Building
} from "lucide-react";
import { useTranslations } from "next-intl";

export default function CareersPage() {
  const t = useTranslations("CareersPage");
  const [selectedDept, setSelectedDept] = useState(t("filterAll"));

  const benefits = [
    {
      title: t("benefitGlobalMobility"),
      description: t("benefitGlobalMobilityDesc"),
      icon: <Globe className="w-5 h-5 text-accent" />,
    },
    {
      title: t("benefitCoverage"),
      description: t("benefitCoverageDesc"),
      icon: <Heart className="w-5 h-5 text-accent" />,
    },
    {
      title: t("benefitGrowth"),
      description: t("benefitGrowthDesc"),
      icon: <Award className="w-5 h-5 text-accent" />,
    },
    {
      title: t("benefitSetup"),
      description: t("benefitSetupDesc"),
      icon: <Zap className="w-5 h-5 text-accent" />,
    },
  ];

  const jobs = [
    {
      title: t("job1Title"),
      department: t("filterEngineering"),
      location: t("job1Location"),
      type: t("fullTime"),
      description: t("job1Description"),
    },
    {
      title: t("job2Title"),
      department: t("filterEngineering"),
      location: t("job2Location"),
      type: t("fullTime"),
      description: t("job2Description"),
    },
    {
      title: t("job3Title"),
      department: t("filterProduct"),
      location: t("job3Location"),
      type: t("fullTime"),
      description: t("job3Description"),
    },
    {
      title: t("job4Title"),
      department: t("filterOperations"),
      location: t("job4Location"),
      type: t("fullTime"),
      description: t("job4Description"),
    },
    {
      title: t("job5Title"),
      department: t("filterMarketing"),
      location: t("job5Location"),
      type: t("fullTime"),
      description: t("job5Description"),
    },
  ];

  const departments = [
    t("filterAll"),
    t("filterEngineering"),
    t("filterProduct"),
    t("filterOperations"),
    t("filterMarketing")
  ];

  const filteredJobs = jobs.filter(
    (job) => selectedDept === t("filterAll") || job.department.toLowerCase() === selectedDept.toLowerCase()
  );

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900 font-sans antialiased overflow-x-hidden selection:bg-accent/20 selection:text-primary">
      <Header />

      <main className="flex-1">
        {/* Page Hero with Background Image */}
        <PageHero
          title={t("pageTitle")}
          description={t("pageDescription")}
          backgroundImage="/ship.jpeg"
        />

        {/* Benefits Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
                {t("benefitsTitle")}
              </h2>
              <p className="text-gray-500 text-sm">
                {t("benefitsDescription")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-slate-50 border border-gray-200 p-8 rounded-2xl transition-all duration-300 hover:shadow-soft"
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center mb-6 shadow-sm">
                    {benefit.icon}
                  </div>
                  <h3 className="font-display font-bold text-primary text-base mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions Section */}
        <section className="py-24 bg-slate-50 border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl font-extrabold text-primary tracking-tight mb-4">
                {t("openingsTitle")}
              </h2>
              
              {/* Department Filters */}
              <div className="flex flex-wrap justify-center gap-2 mt-8">
                {departments.map((dept) => (
                  <button
                    key={dept}
                    onClick={() => setSelectedDept(dept)}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all border ${
                      selectedDept === dept
                        ? "bg-primary text-white border-primary"
                        : "bg-white text-gray-600 border-gray-200 hover:border-accent hover:text-accent"
                    }`}
                  >
                    {dept}
                  </button>
                ))}
              </div>
            </div>

            {/* Job Board List */}
            <div className="space-y-4">
              {filteredJobs.length === 0 ? (
                <div className="text-center py-12 bg-white rounded-2xl border border-gray-150 p-8">
                  <p className="text-gray-500 text-sm">{t("noPositions")}</p>
                </div>
              ) : (
                filteredJobs.map((job, index) => (
                  <div
                    key={index}
                    className="group bg-white p-6 rounded-2xl border border-gray-200/80 shadow-soft hover:shadow-md hover:border-accent/40 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6"
                  >
                    <div className="max-w-2xl">
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="px-2 py-0.5 bg-slate-100 text-gray-500 rounded text-[9px] font-bold uppercase tracking-wider">
                          {job.department}
                        </span>
                        <span className="px-2 py-0.5 bg-accent/10 text-accent rounded text-[9px] font-bold uppercase tracking-wider">
                          {job.type}
                        </span>
                      </div>
                      <h3 className="font-display font-bold text-primary text-lg mb-2 group-hover:text-accent transition-colors">
                        {job.title}
                      </h3>
                      <p className="text-gray-500 text-xs leading-relaxed mb-4">
                        {job.description}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-gray-400">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {job.location}
                        </span>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <Button
                        href={`mailto:careers@wollanda.com?subject=Application for ${encodeURIComponent(job.title)}`}
                        variant="outline"
                        size="sm"
                        className="w-full md:w-auto"
                      >
                        {t("applyNow")}
                        <ChevronRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
