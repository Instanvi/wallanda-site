"use client";

import { useState } from "react";
import { Link } from "@/i18n/navigation";
import { useTranslations, useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

interface HeaderProps {
  transparent?: boolean;
}

export default function Header({ transparent = false }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const t = useTranslations("Header");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (next: string) => {
    router.replace(pathname, { locale: next });
  };

  return (
    <header 
      className={`${
        transparent 
          ? 'absolute top-0 left-0 right-0' 
          : 'sticky top-0'
      } z-50 w-full ${
        transparent 
          ? '' 
          : 'bg-white/95 backdrop-blur-md border-b border-gray-100'
      }`}
    >
      <div className="mx-auto flex max-w-7xl h-20 items-center justify-between px-6 md:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={transparent ? "/wollanda-white.svg" : "/wollandaLogo.svg"}
            alt="wollanda Global Logo"
            width={120}
            height={32}
            className="h-8 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/about"
            className={`text-[15px] font-medium transition-colors ${
              transparent 
                ? 'text-white/90 hover:text-white' 
                : 'text-gray-600 hover:text-primary'
            }`}
          >
            {t("about")}
          </Link>
          <Link
            href="/brands"
            className={`text-[15px] font-medium transition-colors ${
              transparent 
                ? 'text-white/90 hover:text-white' 
                : 'text-gray-600 hover:text-primary'
            }`}
          >
            {t("brands")}
          </Link>
          <Link
            href="/press"
            className={`text-[15px] font-medium transition-colors ${
              transparent 
                ? 'text-white/90 hover:text-white' 
                : 'text-gray-600 hover:text-primary'
            }`}
          >
            {t("press")}
          </Link>
          <Link
            href="/company"
            className={`text-[15px] font-medium transition-colors ${
              transparent 
                ? 'text-white/90 hover:text-white' 
                : 'text-gray-600 hover:text-primary'
            }`}
          >
            {t("company")}
          </Link>
          <Link
            href="/careers"
            className={`text-[15px] font-medium transition-colors ${
              transparent 
                ? 'text-white/90 hover:text-white' 
                : 'text-gray-600 hover:text-primary'
            }`}
          >
            {t("careers")}
          </Link>
        </nav>

        {/* Right side - Desktop */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language switcher with flags */}
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              onMouseEnter={() => setIsLangOpen(true)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                transparent 
                  ? 'bg-white/10 hover:bg-white/20 text-white' 
                  : 'bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-700'
              }`}
            >
              <span className={`fi fi-${locale === "en" ? "us" : "fr"} rounded-sm`} style={{ width: "1rem", height: "0.75rem", display: "inline-block", backgroundSize: "cover" }} />
              <span>{locale.toUpperCase()}</span>
            </button>
            {isLangOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setIsLangOpen(false)}></div>
                <div
                  onMouseLeave={() => setIsLangOpen(false)}
                  className="absolute right-0 mt-2 w-36 bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-1 animate-fade-in"
                >
                  <button
                    onClick={() => { switchLocale("en"); setIsLangOpen(false); }}
                    className={`w-full flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md text-left hover:bg-gray-50 transition-colors ${locale === "en" ? "text-primary bg-primary/10" : "text-gray-700"}`}
                  >
                    <span className="fi fi-us rounded-sm" style={{ width: "1rem", height: "0.75rem", display: "inline-block", backgroundSize: "cover" }} />
                    <span>English</span>
                  </button>
                  <button
                    onClick={() => { switchLocale("fr"); setIsLangOpen(false); }}
                    className={`w-full flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md text-left hover:bg-gray-50 transition-colors ${locale === "fr" ? "text-primary bg-primary/10" : "text-gray-700"}`}
                  >
                    <span className="fi fi-fr rounded-sm" style={{ width: "1rem", height: "0.75rem", display: "inline-block", backgroundSize: "cover" }} />
                    <span>Français</span>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>



        {/* Mobile menu toggle */}
        <button
          className={`flex md:hidden items-center justify-center w-10 h-10 rounded-lg transition-colors ${
            transparent 
              ? 'text-white/90 hover:text-white hover:bg-white/10' 
              : 'text-gray-600 hover:text-primary hover:bg-gray-50'
          }`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={t("toggleMenu")}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile nav overlay */}
      {isOpen && (
        <div className={`md:hidden shadow-lg ${
          transparent 
            ? 'bg-[#001D47] border-t border-white/10' 
            : 'bg-white border-t border-gray-100'
        }`}>
          <nav className="px-6 py-6 space-y-1">
            <Link
              href="/about"
              className={`block py-3 text-base font-semibold rounded-lg px-3 transition-colors ${
                transparent 
                  ? 'text-white/90 hover:text-white hover:bg-white/10' 
                  : 'text-gray-700 hover:text-primary hover:bg-gray-50'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {t("about")}
            </Link>
            
            <Link
              href="/brands"
              className={`block py-3 text-base font-semibold rounded-lg px-3 transition-colors ${
                transparent 
                  ? 'text-white/90 hover:text-white hover:bg-white/10' 
                  : 'text-gray-700 hover:text-primary hover:bg-gray-50'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {t("brands")}
            </Link>

            <Link
              href="/press"
              className={`block py-3 text-base font-semibold rounded-lg px-3 transition-colors ${
                transparent 
                  ? 'text-white/90 hover:text-white hover:bg-white/10' 
                  : 'text-gray-700 hover:text-primary hover:bg-gray-50'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {t("press")}
            </Link>
            
            <Link
              href="/company"
              className={`block py-3 text-base font-semibold rounded-lg px-3 transition-colors ${
                transparent 
                  ? 'text-white/90 hover:text-white hover:bg-white/10' 
                  : 'text-gray-700 hover:text-primary hover:bg-gray-50'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {t("company")}
            </Link>

            <Link
              href="/careers"
              className={`block py-3 text-base font-semibold rounded-lg px-3 transition-colors ${
                transparent 
                  ? 'text-white/90 hover:text-white hover:bg-white/10' 
                  : 'text-gray-700 hover:text-primary hover:bg-gray-50'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {t("careers")}
            </Link>
          </nav>

          {/* Language row (mobile) */}
          <div className="flex justify-between items-center py-4 border-t border-white/10">
            <span className={`text-sm font-semibold ${
              transparent ? 'text-white/60' : 'text-gray-500'
            }`}>{t("language")}</span>
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => { switchLocale("en"); setIsOpen(false); }}
                className={`px-2 py-1.5 rounded-md border text-xs font-bold flex items-center gap-1 transition-all ${
                  locale === "en" 
                    ? 'bg-primary/20 text-primary border-primary/30' 
                    : transparent 
                      ? 'bg-white/10 border-white/20 text-white/70' 
                      : 'bg-white border-gray-200 text-gray-700'
                }`}
              >
                <span className="fi fi-us rounded-sm" style={{ width: "0.85rem", height: "0.64rem", display: "inline-block", backgroundSize: "cover" }} />
              </button>
              <button
                onClick={() => { switchLocale("fr"); setIsOpen(false); }}
                className={`px-2 py-1.5 rounded-md border text-xs font-bold flex items-center gap-1 transition-all ${
                  locale === "fr" 
                    ? 'bg-primary/20 text-primary border-primary/30' 
                    : transparent 
                      ? 'bg-white/10 border-white/20 text-white/70' 
                      : 'bg-white border-gray-200 text-gray-700'
                }`}
              >
                <span className="fi fi-fr rounded-sm" style={{ width: "0.85rem", height: "0.64rem", display: "inline-block", backgroundSize: "cover" }} />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
