"use client";

export default function PartnersSection() {
  // Only major logistics and shipping carriers
  const carriers = [
    { src: "/DHL-Logo.wine.svg", alt: "DHL", h: "100px" },
    { src: "/FedEx_Express.webp", alt: "FedEx", h: "35px" },
    { src: "/United_Parcel_Service-Logo.wine.svg", alt: "UPS", h: "70px" },
    { src: "/DPD_id9sTo-S4f_0.svg", alt: "DPD", h: "30px" },
    { src: "/campost.png", alt: "campost", h: "60px" },
    { src: "/Yodel_logo.webp", alt: "Yodel", h: "26px" },
    { src: "/USPS_-_Color_Logo.svg", alt: "USPS", h: "38px" },

  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-primary mb-4">
            Global carrier network
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Integrated with the world's leading logistics carriers to deliver your packages reliably and efficiently
          </p>
        </div>

        {/* Carriers Grid - Simple and Clean */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12 items-center">
          {carriers.map((carrier) => (
            <div
              key={carrier.alt}
              className="flex items-center justify-center h-20 px-4 group"
            >
              <img
                src={carrier.src}
                alt={`${carrier.alt} - Logistics Partner`}
                style={{ height: carrier.h, maxWidth: "100%", width: "auto" }}
                className="object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="font-display text-3xl md:text-4xl font-bold text-primary mb-2">
                1,000+
              </div>
              <div className="text-gray-600 text-sm md:text-base">
                Carrier Partnerships
              </div>
            </div>
            <div>
              <div className="font-display text-3xl md:text-4xl font-bold text-primary mb-2">
                50+
              </div>
              <div className="text-gray-600 text-sm md:text-base">
                Platform Integrations
              </div>
            </div>
            <div>
              <div className="font-display text-3xl md:text-4xl font-bold text-primary mb-2">
                30+
              </div>
              <div className="text-gray-600 text-sm md:text-base">
                Countries Served
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
