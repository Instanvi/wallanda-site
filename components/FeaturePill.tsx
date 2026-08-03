"use client"

import { ReactNode } from "react";

export default function FeaturePill({ icon, label }: { icon: ReactNode; label: string }) {
    return (
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/5 text-primary rounded-full text-xs font-semibold">
            {icon}
            {label}
        </div>
    );
}