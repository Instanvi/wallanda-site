"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl h-20 items-center justify-between px-6 md:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/wollanda.svg"
            alt="Wallanda Global Logo"
            width={50}
            height={44}
            className="h-20 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/about"
            className="text-[15px] font-medium text-gray-600 transition-colors hover:text-primary"
          >
            About Us
          </Link>
          <Link
            href="/brands"
            className="text-[15px] font-medium text-gray-600 transition-colors hover:text-primary"
          >
            Brands
          </Link>
          <Link
            href="/press"
            className="text-[15px] font-medium text-gray-600 transition-colors hover:text-primary"
          >
            Press
          </Link>
          <Link
            href="/company"
            className="text-[15px] font-medium text-gray-600 transition-colors hover:text-primary"
          >
            Company
          </Link>
          <Link
            href="/careers"
            className="text-[15px] font-medium text-gray-600 transition-colors hover:text-primary"
          >
            Careers
          </Link>
        </nav>



        {/* Mobile menu toggle */}
        <button
          className="flex md:hidden items-center justify-center w-10 h-10 rounded-lg text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile nav overlay */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white shadow-lg">
          <nav className="px-6 py-6 space-y-1">
            <Link
              href="/about"
              className="block py-3 text-base font-semibold text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg px-3 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            
            <Link
              href="/brands"
              className="block py-3 text-base font-semibold text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg px-3 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Brands
            </Link>

            <Link
              href="/press"
              className="block py-3 text-base font-semibold text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg px-3 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Press
            </Link>
            
            <Link
              href="/company"
              className="block py-3 text-base font-semibold text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg px-3 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Company
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
