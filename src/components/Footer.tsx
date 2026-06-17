import { Heart, Instagram, Phone, MessageCircle, MapPin } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-cocoa-950 text-cream-100/90 pt-16 pb-12 relative overflow-hidden border-t border-cocoa-900 text-left">
      
      {/* Background Graphic */}
      <div className="absolute bottom-[-10%] left-[-5%] w-72 h-72 rounded-full bg-berry-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-cocoa-900 pb-12">
          
          {/* Footer Brand Info Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-berry-500 text-white flex items-center justify-center shadow-sm">
                <Heart className="w-4 h-4 fill-current stroke-white" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-cream-50">
                Home Baker's
              </span>
            </div>
            <p className="text-sm font-serif italic text-cream-200">
              Love at First Bite ❤️
            </p>
            <p className="text-xs text-cocoa-200 max-w-sm leading-relaxed font-sans">
              100% Eggless homemade cakes, designer gift baskets, premium return gifts, and custom wedding/trousseau wrapping trays in Ludhiana, Punjab. Every celebration made luxurious.
            </p>

            {/* Instagram Quick Link Tag */}
            <div className="pt-2">
              <a
                href="https://instagram.com/home_bakers_11111"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-berry-300 hover:text-berry-200 font-semibold uppercase tracking-wider font-mono bg-white/5 px-3 py-1.5 rounded-lg border border-white/10"
              >
                <Instagram className="w-4 h-4" />
                <span>@home_bakers_11111</span>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-cream-400 font-mono">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs">
              {[
                { label: t("navHome"), href: "home" },
                { label: t("navAbout"), href: "about" },
                { label: t("navOfferings"), href: "products" },
                { label: t("navWhyUs"), href: "why-us" },
                { label: t("navGallery"), href: "gallery" },
                { label: t("navReviews"), href: "reviews" },
                { label: t("navContact"), href: "contact" },
              ].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleScrollTo(link.href)}
                    className="hover:text-berry-400 text-cocoa-200 transition-colors text-left font-sans cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Quick Summary Column */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-cream-400 font-mono">
              The Ludhiana Studio
            </h4>
            <ul className="space-y-3 text-xs text-cocoa-200">
              <li className="flex gap-2 items-start justify-start">
                <MapPin className="w-4 h-4 text-berry-400 shrink-0 mt-0.5" />
                <span className="font-medium text-left">
                  Jain homes, Ludhiana, Punjab, India 141011
                </span>
              </li>
              <li className="flex gap-2 items-center justify-start">
                <Phone className="w-4 h-4 text-berry-400 shrink-0" />
                <span className="font-mono text-left">+91 70091 42146</span>
              </li>
              <li className="flex gap-2 items-center justify-start">
                <MessageCircle className="w-4 h-4 text-berry-400 shrink-0 fill-current" />
                <span className="font-semibold text-emerald-400 text-left">Direct WhatsApp Ordering</span>
              </li>
            </ul>

            {/* Little stamp of eggless gurantee */}
            <div className="pt-2 flex items-center gap-1.5 text-[10px] text-emerald-450 uppercase tracking-widest font-mono justify-start">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping inline-block shrink-0" />
              <span>★ 100% Vegetarian Certified</span>
            </div>
          </div>

        </div>

        {/* Footer Base bottom details */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-cocoa-400 font-mono tracking-wider">
          <p>© 2026 Home Baker's Ludhiana. All Rights Reserved.</p>
          <p className="flex items-center gap-1 text-center sm:text-right mt-2 sm:mt-0 justify-start">
            <span>Freshly baked in Ludhiana</span>
            <Heart className="w-3 h-3 text-berry-500 fill-berry-550" />
          </p>
        </div>

      </div>
    </footer>
  );
}
