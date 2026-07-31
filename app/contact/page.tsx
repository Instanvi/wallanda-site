"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Building2,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  Globe2,
  Calendar,
  ArrowRight
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "general",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "general",
        message: "",
      });
    }, 1500);
  };

  const offices = [
    {
      city: "Douala",
      country: "Cameroon",
      role: "Global Headquarters",
      address: "Rue Joss, Bonanjo, Douala",
      phone: "+237 233 44 55 66",
      email: "douala@wallanda.com",
      hours: "Mon - Fri: 8:00 AM - 5:00 PM (GMT+1)",
    },
    {
      city: "London",
      country: "United Kingdom",
      role: "European Operations Hub",
      address: "30 St Mary Axe (The Gherkin), London",
      phone: "+44 20 7946 0958",
      email: "london@wallanda.com",
      hours: "Mon - Fri: 9:00 AM - 6:00 PM (GMT)",
    },
    {
      city: "New York",
      country: "United States",
      role: "North American Desk",
      address: "1 World Trade Center, New York, NY",
      phone: "+1 212 555 0199",
      email: "nyc@wallanda.com",
      hours: "Mon - Fri: 9:00 AM - 5:00 PM (EST)",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-gray-900 font-sans antialiased overflow-x-hidden selection:bg-accent/20 selection:text-primary">
      <Header />

      <main className="flex-1">
        {/* Simple & Elegant Hero Section */}
        <section className="bg-white border-b border-gray-200 py-16 md:py-24 px-6 md:px-8">
          <div className="max-w-7xl mx-auto">
            <span className="text-xs font-extrabold tracking-wider text-accent uppercase block mb-3">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-black tracking-tight text-primary mb-4 leading-tight">
              Connect with our global offices.
            </h1>
            <p className="text-base text-gray-500 max-w-2xl leading-relaxed">
              Have questions about our shipping technology APIs, consumer logistics application, or cargo insurance policies? Send us a message and our support desks will reply shortly.
            </p>
          </div>
        </section>

        {/* Contact Content Grid */}
        <section className="py-20 max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* General Inquiries Card */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-soft hover:shadow-md transition-all group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-gray-100 flex items-center justify-center flex-shrink-0">
                    <Globe2 className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-primary text-base mb-1">General Support</h3>
                    <p className="text-xs text-gray-500 mb-3">For customer issues, shipping updates, or tracking help.</p>
                    <a
                      href="mailto:support@wallanda.com"
                      className="text-xs font-bold text-primary hover:text-accent transition-colors flex items-center gap-1 group/link"
                    >
                      support@wallanda.com
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Developer Desk Card */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-soft hover:shadow-md transition-all group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-gray-100 flex items-center justify-center flex-shrink-0">
                    <Cpu className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-primary text-base mb-1">Developer API Desk</h3>
                    <p className="text-xs text-gray-500 mb-3">For Ntigi label integration and webhook implementation help.</p>
                    <a
                      href="mailto:devs@wallanda.com"
                      className="text-xs font-bold text-primary hover:text-accent transition-colors flex items-center gap-1 group/link"
                    >
                      devs@wallanda.com
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Corporate Desk Card */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-soft hover:shadow-md transition-all group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-gray-100 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-primary text-base mb-1">Media &amp; Public Relations</h3>
                    <p className="text-xs text-gray-500 mb-3">For PR assets, news desk inquiries, and corporate updates.</p>
                    <a
                      href="mailto:press@wallanda.com"
                      className="text-xs font-bold text-primary hover:text-accent transition-colors flex items-center gap-1 group/link"
                    >
                      press@wallanda.com
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Cargo Protection Desk Card */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-soft hover:shadow-md transition-all group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-gray-100 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-primary text-base mb-1">Kovasure Cargo Protection</h3>
                    <p className="text-xs text-gray-500 mb-3">For policy status, claims resolution, and transit insurance quotes.</p>
                    <a
                      href="mailto:insurance@wallanda.com"
                      className="text-xs font-bold text-primary hover:text-accent transition-colors flex items-center gap-1 group/link"
                    >
                      insurance@wallanda.com
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5" />
                    </a>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Contact Form Column */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200/80 shadow-soft">
                
                {status === "success" ? (
                  <div className="text-center py-8 max-w-md mx-auto">
                    <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="font-display font-extrabold text-2xl text-primary mb-3">Message Sent!</h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-8">
                      Thank you for contacting Wallanda Global. A logistics coordinator from our Douala engineering hub will review your query and reply shortly.
                    </p>
                    <Button onClick={() => setStatus("idle")} variant="outline">
                      Send another message
                    </Button>
                  </div>
                ) : (
                  <>
                    <h2 className="font-display text-2xl md:text-3xl font-extrabold text-primary mb-2">Send us a message</h2>
                    <p className="text-sm text-gray-500 mb-8">Tell us about your logistics needs and we'll route your request to the right desk.</p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-xs font-bold text-primary mb-2 uppercase tracking-wide">
                            Full Name *
                          </label>
                          <Input
                            type="text"
                            name="name"
                            id="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-xs font-bold text-primary mb-2 uppercase tracking-wide">
                            Email Address *
                          </label>
                          <Input
                            type="email"
                            name="email"
                            id="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@company.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="phone" className="block text-xs font-bold text-primary mb-2 uppercase tracking-wide">
                            Phone Number
                          </label>
                          <Input
                            type="tel"
                            name="phone"
                            id="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+1 (555) 000-0000"
                          />
                        </div>
                        <div>
                          <label htmlFor="company" className="block text-xs font-bold text-primary mb-2 uppercase tracking-wide">
                            Company Name
                          </label>
                          <Input
                            type="text"
                            name="company"
                            id="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="e.g. Acme Corp"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-xs font-bold text-primary mb-2 uppercase tracking-wide">
                          Inquiry Desk *
                        </label>
                        <Select
                          name="subject"
                          id="subject"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                        >
                          <option value="general">General Inquiries Desk</option>
                          <option value="ntigi">Ntigi Developer API Support</option>
                          <option value="kassongo">Kassongo Shipping Support</option>
                          <option value="kovasure">Kovasure Cargo Protection</option>
                          <option value="press">Media &amp; Press Relations</option>
                        </Select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-xs font-bold text-primary mb-2 uppercase tracking-wide">
                          Your Message *
                        </label>
                        <textarea
                          name="message"
                          id="message"
                          required
                          rows={6}
                          value={formData.message}
                          onChange={handleChange}
                          className="flex w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary focus:bg-white transition-all resize-none"
                          placeholder="How can we help optimize your supply chain?"
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={status === "submitting"}
                        className="w-full sm:w-auto"
                      >
                        {status === "submitting" ? "Sending Message..." : "Send Message"}
                        <Send className="w-4 h-4 ml-1" />
                      </Button>
                    </form>
                  </>
                )}
              </div>
            </div>

          </div>
        </section>

        {/* Global Offices */}
        <section className="py-24 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-extrabold tracking-wider text-accent uppercase mb-3 block">
                Corporate Hubs
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
                Our Physical Presence
              </h2>
              <p className="text-gray-500 text-sm">
                Managing international transport corridors through our regional hub network.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {offices.map((office, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 border border-gray-150 p-8 rounded-3xl hover:shadow-soft transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 text-primary font-display font-bold text-lg mb-1">
                      <MapPin className="w-4 h-4 text-accent" />
                      {office.city}, {office.country}
                    </div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-4">{office.role}</p>
                    <p className="text-xs text-gray-600 leading-relaxed mb-6">{office.address}</p>
                  </div>
                  
                  <div className="space-y-2 pt-6 border-t border-gray-250/60 text-xs text-gray-500">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-gray-400" />
                      <span>{office.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-gray-400" />
                      <span>{office.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span>{office.hours}</span>
                    </div>
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
