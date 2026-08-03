"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#001D47] text-white pt-16 pb-8 border-t border-[#002B69]">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-12 border-b border-white/10">
          {/* Logo & Platform Info */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <Link href="/" className="inline-block">
              <Image 
                src="/wallanda-logo.svg" 
                alt="wollanda Global Logo" 
                width={140} 
                height={40} 
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-sm text-gray-300 max-w-xs">
              An intelligent end-to-end logistics platform powering commerce worldwide.
            </p>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="text-sm font-bold tracking-wider text-accent uppercase mb-4">
              Brands
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <Link href="/brands#ntigi" className="hover:text-accent transition-colors">
                  Ntigi
                </Link>
              </li>
              <li>
                <Link href="/brands#kassongo" className="hover:text-accent transition-colors">
                  Kassongo
                </Link>
              </li>
              <li>
                <Link href="/brands#kovasure" className="hover:text-accent transition-colors">
                  Kovasure
                </Link>
              </li>
              <li>
                <Link href="/brands" className="hover:text-accent transition-colors">
                  View All Brands
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-sm font-bold tracking-wider text-accent uppercase mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <Link href="/about" className="hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/brands" className="hover:text-accent transition-colors">
                  Our Brands
                </Link>
              </li>
              <li>
                <Link href="/press" className="hover:text-accent transition-colors">
                  Press & News
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="text-sm font-bold tracking-wider text-accent uppercase mb-4">
              Legal
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <Link href="/terms-service" className="hover:text-accent transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-accent transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 gap-4 text-xs text-gray-400">
          <p>
            wollanda is an intelligent logistics platform. © {new Date().getFullYear()} wollanda Inc. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:underline">Privacy</Link>
            <Link href="/terms-service" className="hover:underline">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
