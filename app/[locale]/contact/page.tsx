"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { toast } from "sonner";
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
import { useTranslations } from "next-intl";

export default function ContactPage() {
  const t = useTranslations("ContactPage");
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "contact",
          data: formData,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("success");
        toast.success("Message sent successfully to support@instanvi.com!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          subject: "general",
          message: "",
        });
      } else {
        setStatus("error");
        toast.error(result.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
      toast.error("An error occurred. Please try again later.");
    }
  };

  const offices = [
    {
      city: "Douala",
      country: "Cameroon",
      role: "Global Headquarters",
      address: "Rue Joss, Bonanjo, Douala",
      phone: "+237 233 44 55 66",
      email: "douala@wollanda.com",
      hours: "Mon - Fri: 8:00 AM - 5:00 PM (GMT+1)",
    },
    {
      city: "London",
      country: "United Kingdom",
      role: "European Operations Hub",
      address: "30 St Mary Axe (The Gherkin), London",
      phone: "+44 20 7946 0958",
      email: "london@wollanda.com",
      hours: "Mon - Fri: 9:00 AM - 6:00 PM (GMT)",
    },
    {
      city: "New York",
      country: "United States",
      role: "North American Desk",
      address: "1 World Trade Center, New York, NY",
      phone: "+1 212 555 0199",
      email: "nyc@wollanda.com",
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
            <h1 className="text-4xl md:text-5xl font-display font-black tracking-tight text-primary mb-4 leading-tight">
              {t("pageTitle")}
            </h1>
            <p className="text-base text-gray-500 max-w-2xl leading-relaxed">
              {t("pageDescription")}
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
                    <h3 className="font-display font-bold text-primary text-base mb-1">{t("generalSupportTitle")}</h3>
                    <p className="text-xs text-gray-500 mb-3">{t("generalSupportDesc")}</p>
                    <a
                      href="mailto:support@wollanda.com"
                      className="text-xs font-bold text-primary hover:text-accent transition-colors flex items-center gap-1 group/link"
                    >
                      support@wollanda.com
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
                    <h3 className="font-display font-bold text-primary text-base mb-1">{t("devDeskTitle")}</h3>
                    <p className="text-xs text-gray-500 mb-3">{t("devDeskDesc")}</p>
                    <a
                      href="mailto:devs@wollanda.com"
                      className="text-xs font-bold text-primary hover:text-accent transition-colors flex items-center gap-1 group/link"
                    >
                      devs@wollanda.com
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
                    <h3 className="font-display font-bold text-primary text-base mb-1">{t("corporateDeskTitle")}</h3>
                    <p className="text-xs text-gray-500 mb-3">{t("corporateDeskDesc")}</p>
                    <a
                      href="mailto:press@wollanda.com"
                      className="text-xs font-bold text-primary hover:text-accent transition-colors flex items-center gap-1 group/link"
                    >
                      press@wollanda.com
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
                    <h3 className="font-display font-bold text-primary text-base mb-1">{t("insuranceDeskTitle")}</h3>
                    <p className="text-xs text-gray-500 mb-3">{t("insuranceDeskDesc")}</p>
                    <a
                      href="mailto:insurance@wollanda.com"
                      className="text-xs font-bold text-primary hover:text-accent transition-colors flex items-center gap-1 group/link"
                    >
                      insurance@wollanda.com
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
                    <h3 className="font-display font-extrabold text-2xl text-primary mb-3">{t("successTitle")}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-8">
                      {t("successDescription")}
                    </p>
                    <Button onClick={() => setStatus("idle")} variant="outline">
                      {t("successButton")}
                    </Button>
                  </div>
                ) : (
                  <>
                    <h2 className="font-display text-2xl md:text-3xl font-extrabold text-primary mb-2">{t("formTitle")}</h2>
                    <p className="text-sm text-gray-500 mb-8">{t("formDescription")}</p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-xs font-bold text-primary mb-2 uppercase tracking-wide">
                            {t("formNameLabel")} *
                          </label>
                          <Input
                            type="text"
                            name="name"
                            id="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder={t("formNamePlaceholder")}
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-xs font-bold text-primary mb-2 uppercase tracking-wide">
                            {t("formEmailLabel")} *
                          </label>
                          <Input
                            type="email"
                            name="email"
                            id="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder={t("formEmailPlaceholder")}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="phone" className="block text-xs font-bold text-primary mb-2 uppercase tracking-wide">
                            {t("formPhoneLabel")}
                          </label>
                          <Input
                            type="tel"
                            name="phone"
                            id="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder={t("formPhonePlaceholder")}
                          />
                        </div>
                        <div>
                          <label htmlFor="company" className="block text-xs font-bold text-primary mb-2 uppercase tracking-wide">
                            {t("formCompanyLabel")}
                          </label>
                          <Input
                            type="text"
                            name="company"
                            id="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder={t("formCompanyPlaceholder")}
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-xs font-bold text-primary mb-2 uppercase tracking-wide">
                          {t("formSubjectLabel")} *
                        </label>
                        <Select
                          name="subject"
                          id="subject"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                        >
                          <option value="general">{t("formSubjectGeneral")}</option>
                          <option value="ntigi">{t("formSubjectNtigi")}</option>
                          <option value="kassongo">{t("formSubjectKassongo")}</option>
                          <option value="kovasure">{t("formSubjectKovasure")}</option>
                          <option value="press">{t("formSubjectPress")}</option>
                        </Select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-xs font-bold text-primary mb-2 uppercase tracking-wide">
                          {t("formMessageLabel")} *
                        </label>
                        <textarea
                          name="message"
                          id="message"
                          required
                          rows={6}
                          value={formData.message}
                          onChange={handleChange}
                          className="flex w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary focus:bg-white transition-all resize-none"
                          placeholder={t("formMessagePlaceholder")}
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={status === "submitting"}
                        className="w-full sm:w-auto"
                      >
                        {status === "submitting" ? t("formSubmitting") : t("formSubmit")}
                        <Send className="w-4 h-4 ml-1" />
                      </Button>
                    </form>
                  </>
                )}
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
