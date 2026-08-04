"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  transparent?: boolean;
}

export default function Header({ transparent = false }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

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
            About Us
          </Link>
          <Link
            href="/brands"
            className={`text-[15px] font-medium transition-colors ${
              transparent 
                ? 'text-white/90 hover:text-white' 
                : 'text-gray-600 hover:text-primary'
            }`}
          >
            Brands
          </Link>
          <Link
            href="/press"
            className={`text-[15px] font-medium transition-colors ${
              transparent 
                ? 'text-white/90 hover:text-white' 
                : 'text-gray-600 hover:text-primary'
            }`}
          >
            Press
          </Link>
          <Link
            href="/company"
            className={`text-[15px] font-medium transition-colors ${
              transparent 
                ? 'text-white/90 hover:text-white' 
                : 'text-gray-600 hover:text-primary'
            }`}
          >
            Company
          </Link>
          <Link
            href="/careers"
            className={`text-[15px] font-medium transition-colors ${
              transparent 
                ? 'text-white/90 hover:text-white' 
                : 'text-gray-600 hover:text-primary'
            }`}
          >
            Careers
          </Link>
        </nav>



        {/* Mobile menu toggle */}
        <button
          className={`flex md:hidden items-center justify-center w-10 h-10 rounded-lg transition-colors ${
            transparent 
              ? 'text-white/90 hover:text-white hover:bg-white/10' 
              : 'text-gray-600 hover:text-primary hover:bg-gray-50'
          }`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
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
              About Us
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
              Brands
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
              Press
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
              Company
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
              Careers
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
