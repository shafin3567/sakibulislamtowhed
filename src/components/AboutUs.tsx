import { Heart, CheckCircle2, Award, Star } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

export default function AboutUs() {
  const { t } = useLanguage();

  const values = [
    {
      icon: <Heart className="w-6 h-6 text-berry-500 fill-berry-100" />,
      title: "Homemade Freshness",
      description: "Baked custom to your order. No premade bases or stored creams.",
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-berry-500" />,
      title: t("aboutStatsEggless"),
      description: "Strictly vegetarian recipes crafted in high-purity clean kitchen environments.",
    },
    {
      icon: <Award className="w-6 h-6 text-berry-500" />,
      title: "Premium Finishings",
      description: "High-end packaging, elegant borders, and bespoke theme coordination.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-cream-100 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full bg-berry-50/60 blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* About Us Visual Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden border-2 border-white shadow-md">
                  <img
                    src="/src/assets/images/ig_strawberry_1781682095315.jpg"
                    alt="Premium freshly decorated cakes"
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden border-2 border-white shadow-md">
                  <img
                    src="/src/assets/images/gift_hamper_1781682042798.jpg"
                    alt="Bakery gifts and hampers"
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square rounded-2xl overflow-hidden border-2 border-white shadow-md">
                  <img
                    src="/src/assets/images/return_gifts_1781682058690.jpg"
                    alt="Return Gift bags and boxes"
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden border-2 border-white shadow-md">
                  <img
                    src="/src/assets/images/trousseau_packing_1781682075779.jpg"
                    alt="Trousseau bridal packing trays"
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>

            {/* Premium horizontal quote banner positioned neatly BELOW the image collage so they remain completely visible */}
            <div className="mt-8 bg-cocoa-900 text-cream-100 p-5 rounded-2xl shadow-lg border border-cocoa-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex-1">
                <div className="flex gap-1 mb-1 text-amber-400 justify-start">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-current text-amber-400" />
                  ))}
                </div>
                <p className="text-sm font-medium italic text-cream-50/90 leading-relaxed text-left">
                  {t("aboutQuote")}
                </p>
              </div>
              <div className="shrink-0 text-left sm:text-right border-t sm:border-t-0 sm:border-l border-cocoa-800/80 pt-3 sm:pt-0 sm:pl-4">
                <span className="text-xs font-serif font-bold text-berry-500 block">— Simran G.</span>
                <span className="text-[10px] font-mono tracking-widest uppercase text-cream-300">Ludhiana, India</span>
              </div>
            </div>
          </div>

          {/* About Us Content */}
          <div className="space-y-8 text-left">
            <div className="space-y-4 text-center lg:text-left">
              <span className="text-xs font-mono uppercase tracking-widest text-berry-500 font-semibold bg-berry-100 px-3 py-1 rounded-full inline-block">
                {t("aboutBadge")}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cocoa-900 leading-tight">
                {t("aboutTitle")}
              </h2>
              <div className="w-16 h-1 bg-berry-500 mx-auto lg:mx-0 rounded-full" />
            </div>

            <p className="text-base sm:text-lg text-cocoa-600 leading-relaxed text-center lg:text-left max-w-xl mx-auto lg:mx-0">
              {t("aboutText1")}
            </p>
            <p className="text-sm sm:text-base text-cocoa-550 leading-relaxed text-center lg:text-left max-w-xl mx-auto lg:mx-0">
              {t("aboutText2")}
            </p>

            {/* Values Grid */}
            <div className="space-y-4 pt-2">
              {values.map((v, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/40 transition-all border border-transparent hover:border-cocoa-100 justify-start text-left"
                >
                  <div className="p-2 bg-white rounded-lg shadow-xs border border-cocoa-100 text-berry-600 shrink-0">
                    {v.icon}
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-cocoa-900">
                      {v.title}
                    </h3>
                    <p className="text-sm text-cocoa-600">
                      {v.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
