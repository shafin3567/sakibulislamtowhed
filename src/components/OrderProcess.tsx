import { ShoppingBag, FileEdit, CheckCircle2, PartyPopper, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

export default function OrderProcess() {
  const { t, isRtl } = useLanguage();

  const steps = [
    {
      id: "01",
      icon: <ShoppingBag className="w-6 h-6 text-berry-600" />,
      title: t("processStep1Title"),
      description: t("processStep1Desc"),
    },
    {
      id: "02",
      icon: <FileEdit className="w-6 h-6 text-berry-600" />,
      title: t("processStep2Title"),
      description: t("processStep2Desc"),
    },
    {
      id: "03",
      icon: <CheckCircle2 className="w-6 h-6 text-berry-600" />,
      title: t("processStep3Title"),
      description: t("processStep3Desc"),
    },
    {
      id: "04",
      icon: <PartyPopper className="w-6 h-6 text-berry-600" />,
      title: t("processStep4Title"),
      description: t("processStep4Desc"),
    },
  ];

  return (
    <section id="process" className="py-24 bg-cream-50 relative overflow-hidden">
      {/* Decorative Ornaments */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-berry-50/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        
        {/* Section Title */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-berry-500 font-bold bg-berry-100 px-3 py-1 rounded-full inline-block">
            {t("processBadge")}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-cocoa-900 leading-tight animate-fade-in">
            {t("processTitle")}
          </h2>
          <div className="w-16 h-1 bg-berry-400 mx-auto rounded-full" />
          <p className="font-sans text-sm sm:text-base text-cocoa-600 max-w-xl mx-auto">
            {t("processSubtitle")}
          </p>
        </div>

        {/* Process Steps Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {/* Horizontal Line connector decoration (hidden on mobile) */}
          <div className="hidden lg:block absolute top-[44px] left-[15%] right-[15%] h-0.5 bg-cocoa-100 z-0" />

          {steps.map((s, index) => (
            <motion.div
              layout
              whileHover={{ y: -6 }}
              key={s.id}
              className="bg-white border border-cocoa-100 p-8 rounded-3xl relative z-10 group shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-6">
                
                {/* Step icon and number */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-berry-50 border border-berry-100 flex items-center justify-center text-berry-600 shadow-inner group-hover:scale-110 transition duration-300">
                    {s.icon}
                  </div>
                  <span className="font-mono text-2xl font-bold text-cocoa-101 group-hover:text-berry-200 transition duration-300">
                    {s.id}
                  </span>
                </div>

                <h3 className="font-serif text-lg sm:text-xl font-bold text-cocoa-900 leading-snug">
                  {s.title}
                </h3>

                <p className="text-sm text-cocoa-600 leading-relaxed">
                  {s.description}
                </p>

              </div>

              {/* Decorative end badge */}
              <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-berry-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>Configure details</span>
                <ChevronRight className={`w-3.5 h-3.5 ${isRtl ? "rotate-180" : ""}`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Button that scrolls down to inquiry */}
        <div className="text-center mt-16">
          <a
            href="#order-form"
            className="inline-flex items-center gap-2 px-8 py-4 bg-cocoa-800 hover:bg-cocoa-900 text-cream-50 font-semibold rounded-full shadow-md hover:scale-[1.02] transition-all"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById("order-form");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <span>Draft Your Package Inquiry</span>
            <ChevronRight className={`w-4 h-4 ${isRtl ? "rotate-180" : ""}`} />
          </a>
        </div>

      </div>
    </section>
  );
}
