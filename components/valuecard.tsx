'use client'

import { ReactNode } from "react";

export default function ValueCard({ title, description, icon }: { title: string; description: string; icon: ReactNode }) {
  return (
    <div className="group p-8 rounded-2xl bg-white border border-gray-200/80 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
      <div className="p-3 rounded-xl w-fit mb-5 text-primary">
        {icon}
      </div>
      <h3 className="font-display text-xl font-bold text-primary mb-3">
        {title}
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}