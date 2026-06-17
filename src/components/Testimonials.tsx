import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote, Heart } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Review } from "../types";
import { useLanguage } from "../context/LanguageContext";

export default function Testimonials() {
  const { t, isRtl } = useLanguage();

  const reviews: Review[] = [
    {
      id: "1",
      name: "Priya Sharma",
      location: "BRS Nagar, Ludhiana",
      stars: 5,
      text: "Beautiful cake and amazing taste. Made my daughters birthday completely memorable!",
      date: "2 weeks ago",
    },
    {
      id: "2",
      name: "Jaspreet Kaur",
      location: "Sarabha Nagar, Ludhiana",
      stars: 5,
      text: "The hamper packaging was extremely elegant and delivered right on time in perfect state.",
      date: "1 month ago",
    },
    {
      id: "3",
      name: "Rajesh Mehra",
      location: "Civil Lines, Ludhiana",
      stars: 5,
      text: "Highly recommended for all special occasions. Pure luxury and absolute trust.",
      date: "3 weeks ago",
    },
    {
      id: "4",
      name: "Harneet Singh",
      location: "Model Town, Ludhiana",
      stars: 5,
      text: "Our guests couldn't believe the entire wedding packing was homemade. Utterly beautiful layouts!",
      date: "2 months ago",
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Auto scroll effect
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="reviews" className="py-24 bg-cream-100 relative overflow-hidden">
      {/* Decorative Warm Backdrop Circle */}
      <div className="absolute top-[10%] left-[10%] w-60 h-60 rounded-full bg-berry-100/30 blur-3xl animate-pulse" />
      <div className="absolute bottom-[10%] right-[10%] w-72 h-72 rounded-full bg-cream-300/40 blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-berry-500 font-bold bg-berry-100 px-3 py-1 rounded-full inline-block">
            {t("testimonialsBadge")}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-cocoa-900 leading-tight">
            {t("testimonialsTitle")}
          </h2>
          <div className="w-16 h-1 bg-berry-400 mx-auto rounded-full" />
          <p className="font-sans text-sm sm:text-base text-cocoa-600 max-w-xl mx-auto">
            {t("testimonialsSubtitle")}
          </p>
        </div>

        {/* Carousel Housing Card */}
        <div className="relative bg-white border border-cocoa-100 rounded-3xl p-8 sm:p-12 shadow-xl hover:shadow-2xl transition-all duration-300">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-berry-500 text-cream-50 flex items-center justify-center shadow-lg">
            <Quote className="w-5 h-5 fill-current" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: isRtl ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: isRtl ? 20 : -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-6 text-center"
            >
              {/* Star Rating Layout */}
              <div className="flex justify-center gap-1.5 text-amber-500">
                {Array.from({ length: reviews[activeIndex].stars }).map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-amber-400 stroke-amber-500" />
                ))}
              </div>

              {/* Review Testimonial Text */}
              <p className="font-serif text-lg sm:text-2xl font-semibold text-cocoa-900 italic leading-relaxed max-w-2xl mx-auto">
                "{reviews[activeIndex].text}"
              </p>

              {/* Author & Profile information */}
              <div className="space-y-1">
                <h4 className="font-sans text-base sm:text-lg font-bold text-cocoa-800 flex items-center justify-center gap-1.5">
                  <span>{reviews[activeIndex].name}</span>
                  <Heart className="w-3.5 h-3.5 text-berry-500 fill-berry-300 animate-pulse" />
                </h4>
                <p className="text-xs text-cocoa-450 font-semibold tracking-wider font-mono uppercase flex items-center justify-center gap-1">
                  <span>{reviews[activeIndex].location}</span>
                  <span className="text-neutral-300">•</span>
                  <span className="text-berry-400">{reviews[activeIndex].date}</span>
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slider controls (Arrows) */}
          <div className="flex justify-between items-center mt-10 pt-6 border-t border-cocoa-100/50">
            {/* Dots Indicator */}
            <div className="flex gap-2">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all focus:outline-none ${
                    idx === activeIndex ? "bg-berry-500 w-6" : "bg-cocoa-100 hover:bg-cocoa-200"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Nav Arrows */}
            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-cocoa-200 text-cocoa-700 bg-white hover:bg-cream-100 flex items-center justify-center transition-all focus:outline-none active:scale-95"
                aria-label={t("testimonialsPrev")}
              >
                <ChevronLeft className={`w-5 h-5 ${isRtl ? "rotate-180" : ""}`} />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-cocoa-200 text-cocoa-700 bg-white hover:bg-cream-100 flex items-center justify-center transition-all focus:outline-none active:scale-95"
                aria-label={t("testimonialsNext")}
              >
                <ChevronRight className={`w-5 h-5 ${isRtl ? "rotate-180" : ""}`} />
              </button>
            </div>
          </div>
        </div>

        {/* Local citation */}
        <div className="text-center mt-8 text-[11px] sm:text-xs font-mono text-cocoa-450 font-black tracking-widest uppercase">
          ⭐⭐⭐⭐⭐ OVER 400+ HAPPY CELEBRATIONS IN PUNJAB
        </div>

      </div>
    </section>
  );
}
