import { ArrowRight, MessageCircle, Heart, Star, Sparkles, Award } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import heroImage from "../assets/images/hero_cake_1781682025087.jpg";

interface HeroProps {
  onViewProducts: () => void;
  onOpenOrderForm: () => void;
}

export default function Hero({ onViewProducts, onOpenOrderForm }: HeroProps) {
  const { t, isRtl } = useLanguage();

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center bg-cream-50 overflow-hidden pt-12 pb-20">
      {/* Background Soft Ornaments */}
      <div className="absolute top-[10%] left-[-5%] w-72 h-72 rounded-full bg-berry-100/45 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-5%] w-96 h-96 rounded-full bg-cream-200/50 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Content Column */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left space-y-6">
            
            {/* Soft Premium Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center justify-center lg:justify-start gap-2 self-center lg:self-start bg-berry-100 text-berry-600 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider"
            >
              <Award className="w-3.5 h-3.5 text-berry-500 fill-berry-200" />
              <span>{t("heroBadge")}</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-cocoa-900 leading-[1.11]"
            >
              {t("heroTitlePart1")} <span className="text-berry-500">{t("heroTitlePart2")}</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-sans text-base sm:text-lg lg:text-xl text-cocoa-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal"
            >
              {t("heroSubtitle")}
            </motion.p>

            {/* Quality USP Quick Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="grid grid-cols-3 gap-3 pt-2 text-center"
            >
              <div className="p-3 bg-white/70 backdrop-blur-sm rounded-xl border border-cocoa-100 flex flex-col items-center">
                <span className="text-xl sm:text-2xl font-serif font-bold text-berry-500">100%</span>
                <span className="text-[9px] sm:text-xs font-mono uppercase text-cocoa-455 tracking-wider font-semibold">{t("aboutStatsEggless")}</span>
              </div>
              <div className="p-3 bg-white/70 backdrop-blur-sm rounded-xl border border-cocoa-100 flex flex-col items-center">
                <span className="text-xl sm:text-2xl font-serif font-bold text-berry-500">Homemade</span>
                <span className="text-[9px] sm:text-xs font-mono uppercase text-cocoa-455 tracking-wider font-semibold">Fresh Quality</span>
              </div>
              <div className="p-3 bg-white/70 backdrop-blur-sm rounded-xl border border-cocoa-100 flex flex-col items-center">
                <span className="text-xl sm:text-2xl font-serif font-bold text-berry-500">Custom</span>
                <span className="text-[9px] sm:text-xs font-mono uppercase text-cocoa-455 tracking-wider font-semibold">Bespoke Trims</span>
              </div>
            </motion.div>

            {/* Buttons Group */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
            >
              <a
                href="https://wa.me/917009142146?text=Hi%20Home%20Bakers!%20I%20saw%20your%20website%20and%20want%252520to%20order%20some%20delicious%20eggless%20cakes/hampers!"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-berry-500 hover:bg-berry-600 text-cream-50 font-semibold rounded-full flex items-center justify-center gap-2 shadow-sm hover:shadow-md transition-all hover:scale-[1.03]"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>{t("waOrder")}</span>
              </a>

              <button
                onClick={onViewProducts}
                className="w-full sm:w-auto px-8 py-4 bg-cream-100 hover:bg-cream-200 text-cocoa-800 font-semibold border-2 border-cocoa-200 rounded-full flex items-center justify-center gap-2 transition-all hover:scale-[1.03]"
              >
                <span>{t("heroBtnExplore")}</span>
                <ArrowRight className={`w-4 h-4 ${isRtl ? "rotate-180" : ""}`} />
              </button>
            </motion.div>
          </div>

          {/* Hero Right Image / Visual Column */}
          <div className="lg:col-span-5 relative w-full flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-[450px] aspect-[4/3] sm:aspect-square overflow-hidden rounded-2xl border-4 border-white shadow-2xl"
            >
              <img
                src={heroImage}
                alt="Beautiful premium multi-tier celebration cake in Ludhiana"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cocoa-900/40 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            {/* Floating review popup - Moved underneath so it does NOT hide the cake image */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-4 w-full max-w-[450px] bg-white/95 backdrop-blur-md p-3.5 rounded-xl shadow-lg border border-cocoa-100/50 flex gap-3 items-start animate-bounce-slow"
            >
              <div className="w-10 h-10 rounded-full bg-berry-100 flex items-center justify-center shrink-0">
                <Heart className="w-5 h-5 text-berry-500 fill-berry-300" />
              </div>
              <div className="text-left">
                <div className="flex gap-0.5 text-amber-500 mb-0.5 justify-start">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-3 h-3 fill-current animate-pulse" />
                  ))}
                </div>
                <p className="text-xs text-cocoa-800 italic font-medium leading-tight">
                  {t("heroRatingQuote")}
                </p>
                <span className="text-[10px] font-mono text-cocoa-450 block mt-1 uppercase">{t("heroRatingTitle")}</span>
              </div>
            </motion.div>

            {/* Decorative Sparkle elements */}
            <div className={`absolute top-0 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md animate-pulse ${isRtl ? "-left-4" : "-right-4"}`}>
              <Sparkles className="w-6 h-6 text-cream-400" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
