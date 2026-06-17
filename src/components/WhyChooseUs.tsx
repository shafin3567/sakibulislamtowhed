import { Smile, Award, ShieldAlert, Sparkles, Heart, BadgeIndianRupee } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

export default function WhyChooseUs() {
  const { t } = useLanguage();

  const points = [
    {
      icon: <ShieldAlert className="w-6 h-6 text-emerald-600" />,
      title: t("whyCard1Title"),
      description: t("whyCard1Desc"),
      color: "bg-emerald-50 border-emerald-100",
    },
    {
      icon: <Heart className="w-6 h-6 text-pink-600 fill-pink-50" />,
      title: t("whyCard2Title"),
      description: t("whyCard2Desc"),
      color: "bg-pink-50 border-pink-100",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-amber-600" />,
      title: t("whyCard3Title"),
      description: t("whyCard3Desc"),
      color: "bg-amber-50 border-amber-100",
    },
    {
      icon: <Award className="w-6 h-6 text-purple-600" />,
      title: t("whyCard4Title"),
      description: t("whyCard4Desc"),
      color: "bg-purple-50 border-purple-100",
    },
    {
      icon: <BadgeIndianRupee className="w-6 h-6 text-neutral-850" />,
      title: "Affordable Pricing",
      description: "Delivering top-tiered wedding and birthday standards at affordable, reasonable homemade rates.",
      color: "bg-stone-100 border-stone-200",
    },
    {
      icon: <Smile className="w-6 h-6 text-sky-600" />,
      title: "Personalized Service",
      description: "From custom flavors to on-time home deliveries in Ludhiana, get quick direct access to the baker.",
      color: "bg-sky-50 border-sky-100",
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-cream-100 relative overflow-hidden">
      {/* Decorative side shape */}
      <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-berry-50/40 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-berry-500 font-bold bg-berry-100 px-3 py-1 rounded-full inline-block">
            {t("whyBadge")}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-cocoa-900 leading-tight">
            {t("whyTitle")}
          </h2>
          <div className="w-16 h-1 bg-berry-400 mx-auto rounded-full" />
          <p className="font-sans text-sm sm:text-base text-cocoa-600 max-w-xl mx-auto">
            {t("whySubtitle")}
          </p>
        </div>

        {/* Value Cards Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {points.map((p, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className={`p-8 bg-white border border-cocoa-100 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between`}
            >
              <div className="space-y-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${p.color} shadow-inner shrink-0`}>
                  {p.icon}
                </div>
                
                <h3 className="font-serif text-xl font-bold text-cocoa-900 leading-snug">
                  {p.title}
                </h3>
                
                <p className="text-sm text-cocoa-600 leading-relaxed">
                  {p.description}
                </p>
              </div>

              {/* Decorative bottom bar line */}
              <div className="w-8 h-1 bg-berry-200 mt-6 rounded-full group-hover:w-full transition-all" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
