import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function ContactSection() {
  const { t } = useLanguage();

  const infoItems = [
    {
      icon: <Phone className="w-5 h-5 text-berry-600" />,
      label: t("contactLabelCall"),
      value: "+91 70091 42146",
      action: "tel:+917009142146",
    },
    {
      icon: <MessageCircle className="w-5 h-5 text-berry-600 fill-berry-50" />,
      label: t("contactLabelWa"),
      value: "+91 70091 42146",
      action: "https://wa.me/917009142146?text=Hi%20Home%20Bakers!%20I%20want%2520to%20place%20an%20order.",
    },
    {
      icon: <MapPin className="w-5 h-5 text-berry-600" />,
      label: t("contactLabelAddress"),
      value: "Jain homes, Ludhiana, Punjab, India 141011",
      action: "https://maps.google.com/?q=Jain+homes,+Ludhiana,+Punjab,+India+141011",
    },
    {
      icon: <Clock className="w-5 h-5 text-berry-600" />,
      label: t("contactLabelTiming"),
      value: "09:00 AM - 09:00 PM (Daily)",
      action: null,
    },
  ];

  return (
    <section id="contact" className="py-24 bg-cream-50 relative overflow-hidden">
      {/* Decorative Ornaments */}
      <div className="absolute top-[20%] left-[-10%] w-80 h-80 rounded-full bg-berry-50/60 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-berry-500 font-bold bg-berry-100 px-3 py-1 rounded-full inline-block">
            {t("contactBadge")}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-cocoa-900 leading-tight">
            {t("contactTitle")}
          </h2>
          <div className="w-16 h-1 bg-berry-400 mx-auto rounded-full" />
          <p className="font-sans text-sm sm:text-base text-cocoa-600 max-w-xl mx-auto">
            {t("contactSubtitle")}
          </p>
        </div>

        {/* Content Panel Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Left Block: Contact Cards Stack */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-cocoa-100 shadow-xl space-y-6">
            <h3 className="font-serif text-2xl font-bold text-cocoa-900">
              {t("contactLeftTitle")}
            </h3>
            <p className="text-sm text-cocoa-650 leading-relaxed font-sans">
              All cakes are prepared customized at our home premises in a pristine hygienic oven setup. Since every tier is freshly baked, we request bookings to be closed at least 48 hours beforehand. Happy celebratings!
            </p>

            <div className="grid grid-cols-1 gap-4 pt-2">
              {infoItems.map((item, index) => {
                const Tag = item.action ? "a" : "div";
                const triggerProps = item.action
                  ? {
                      href: item.action,
                      target: item.action.startsWith("http") ? "_blank" : undefined,
                      rel: item.action.startsWith("http") ? "noopener noreferrer" : undefined,
                      className: "group flex items-start gap-4 p-4 bg-cream-50 hover:bg-cream-100/70 border border-cocoa-105 rounded-2xl transition-all duration-300 hover:scale-[1.01]"
                    }
                  : {
                      className: "flex items-start gap-4 p-4 bg-cream-50 border border-cocoa-105 rounded-2xl"
                    };

                return (
                  <Tag key={index} {...triggerProps as any}>
                    <div className="p-3 bg-white border border-cocoa-100 rounded-xl text-berry-600 shadow-inner group-hover:scale-105 transition-all shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono tracking-widest text-cocoa-400 block uppercase font-bold">
                        {item.label}
                      </span>
                      <span className="text-sm sm:text-base font-semibold text-cocoa-900 block mt-1">
                        {item.value}
                      </span>
                      {item.action && (
                        <span className="text-[10px] text-berry-500 font-semibold uppercase font-sans mt-1.5 inline-flex items-center gap-1">
                          {item.action.startsWith("tel:") ? "Click to Call Now 📞" : item.action.startsWith("http") ? "Click To Open Link ↗" : ""}
                        </span>
                      )}
                    </div>
                  </Tag>
                );
              })}
            </div>
          </div>

          {/* Right Block: Call-to-Actions panel */}
          <div className="lg:col-span-5 bg-cocoa-900 text-cream-50 p-8 sm:p-10 rounded-3xl border border-cocoa-800 shadow-xl flex flex-col justify-between space-y-8 relative overflow-hidden">
            {/* Ambient gold star sparkles background decoration */}
            <div className="absolute top-[10%] right-[-10%] w-44 h-44 bg-berry-500/10 rounded-full blur-3xl" />

            <div className="space-y-4 relative z-10">
              <span className="text-xs font-mono tracking-widest uppercase text-berry-300 font-bold block animate-pulse">
                Instant Connections
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold leading-tight">
                Ludhiana Delivery & Ordering Sparkles
              </h3>
              <p className="text-xs sm:text-sm text-cream-200/80 leading-relaxed">
                Whether it's a 3-tier anniversary fondant creation or a set of 50 baby shower return hampers matching the nursery themes, we have you securely covered. Contact us instantly:
              </p>
            </div>

            {/* Quick Actions Groups */}
            <div className="space-y-3 relative z-10">
              <a
                href="https://wa.me/917009142146?text=Hi%20Home%20Bakers!%20Let%27s%20design%20a%20delicious%20cake."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-berry-500 hover:bg-berry-600 text-cream-50 font-bold rounded-2xl flex items-center justify-center gap-2 shadow-sm hover:scale-[1.01] transition-all text-sm"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>{t("waInquiry")}</span>
              </a>

              <a
                href="tel:+917009142146"
                className="w-full py-4 bg-white/10 hover:bg-white/25 text-cream-50 border border-white/20 font-bold rounded-2xl flex items-center justify-center gap-2 shadow-sm transition-all text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Call +91 70091 42146</span>
              </a>
            </div>

            {/* Verification card */}
            <div className="border-t border-cocoa-800 pt-4 text-center mt-auto">
              <span className="text-[10px] uppercase tracking-wider font-mono text-cocoa-400 block font-semibold">
                © Home Baker's Ludhiana • Private Kitchen Licensed
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
