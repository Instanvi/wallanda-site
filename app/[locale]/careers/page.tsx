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

export default function CareersPage() {
  const [selectedDept, setSelectedDept] = useState("All");

  const benefits = [
    {
      title: "Global Mobility",
      description: "Work remote-first from anywhere in the world, or collaborate from one of our corporate hubs in Douala, London, or New York.",
      icon: <Globe className="w-5 h-5 text-accent" />,
    },
    {
      title: "Comprehensive Coverage",
      description: "Premium health, dental, and travel insurance coverage powered directly by our integrated brand, Kovasure.",
      icon: <Heart className="w-5 h-5 text-accent" />,
    },
    {
      title: "Growth & Learning",
      description: "An annual learning stipend for courses, conferences, or books to help you stay ahead in engineering and supply chain tech.",
      icon: <Award className="w-5 h-5 text-accent" />,
    },
    {
      title: "Modern Work Setup",
      description: "A hardware budget to set up your home office with top-tier laptops, screens, and accessories to work efficiently.",
      icon: <Zap className="w-5 h-5 text-accent" />,
    },
  ];

  const jobs = [
    {
      title: "Senior Full-Stack Engineer (React / Next.js / Go)",
      department: "Engineering",
      location: "Douala, Cameroon (Hybrid) / Remote",
      type: "Full-Time",
      description: "Architect and develop core components for Ntigi Shipping Tech APIs and high-performance carrier integration backends.",
    },
    {
      title: "Lead Mobile Developer (React Native / iOS & Android)",
      department: "Engineering",
      location: "Remote (Global)",
      type: "Full-Time",
      description: "Own the mobile checkout experience and localized hub tracking maps inside the Kassongo consumer shipping application.",
    },
    {
      title: "Supply Chain Product Manager",
      department: "Product",
      location: "New York, NY / Hybrid",
      type: "Full-Time",
      description: "Define product requirements for our automated custom clearance systems and coordinate integrations with international freight carriers.",
    },
    {
      title: "Logistics Integration Specialist",
      department: "Operations",
      location: "London, UK / Hybrid",
      type: "Full-Time",
      description: "Help enterprise clients integrate Ntigi APIs into their warehouse systems and orchestrate carrier dispatch channels.",
    },
    {
      title: "Global Brand & Marketing Manager",
      department: "Marketing",
      location: "London, UK / Hybrid",
      type: "Full-Time",
      description: "Craft and execute the communication strategy for wollanda Global, coordinating PR campaigns across all three core brands.",
    },
  ];

  const departments = ["All", "Engineering", "Product", "Operations", "Marketing"];

  const filteredJobs = jobs.filter(
    (job) => selectedDept === "All" || job.department.toLowerCase() === selectedDept.toLowerCase()
  );

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900 font-sans antialiased overflow-x-hidden selection:bg-accent/20 selection:text-primary">
      <Header />

      <main className="flex-1">
        {/* Page Hero with Background Image */}
        <PageHero
          title="Build the future of borderless trade."
          description="We are a team of software engineers, logistics experts, and Fintech builders working globally to streamline international commerce. Join us and shape how products move around the world."
          backgroundImage="/ship.jpeg"
        />

        {/* Benefits Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
                Designed to support your best work
              </h2>
              <p className="text-gray-500 text-sm">
                We believe in taking care of our team so they can focus on solving complex global problems.
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
                Explore our current openings
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
                  <p className="text-gray-500 text-sm">No open positions matching your filter. Keep an eye out or send an open application!</p>
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
                        Apply Now
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
