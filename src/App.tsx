import { useState } from "react";
import { MessageCircle, X, ChevronUp, Cake } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "./context/LanguageContext";

import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import ProductCatalog from "./components/ProductCatalog";
import WhyChooseUs from "./components/WhyChooseUs";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import OrderProcess from "./components/OrderProcess";
import OrderForm from "./components/OrderForm";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  const { t, language, isRtl } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("🎂 Custom Cakes");
  const [showWhatsAppBubble, setShowWhatsAppBubble] = useState(true);

  // Smooth scroll handler which integrates with pre-selecting categories
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    const orderFormElement = document.getElementById("order-form");
    if (orderFormElement) {
      orderFormElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Helper translations for the floating widget
  const bubbleTitle: Record<string, string> = {
    en: "Event coming up in Ludhiana? 🎂",
    pa: "ਲੁਧਿਆਣਾ ਵਿੱਚ ਕੋਈ ਪ੍ਰੋਗਰਾਮ ਆ ਰਿਹਾ ਹੈ? 🎂",
    hi: "लुधियाना में कोई समारोह आ रहा है? 🎂",
    ur: "لدھیانہ میں کوئی تقریب آ رہی ہے؟ 🎂"
  };

  const bubbleText: Record<string, string> = {
    en: "Let's design a custom 100% Eggless Cake or Hamper today!",
    pa: "ਆਓ ਅੱਜ ਹੀ ਬਿਨਾਂ ਅੰਡੇ ਦਾ ਇੱਕ ਖਾਸ ਕੇਕ ਜਾਂ ਤੋਹਫ਼ਾ ਡਿਜ਼ਾਈਨ ਕਰੀਏ!",
    hi: "आइए आज ही स्वादिष्ट अंडा-रहित केक या हैंपर डिजाइन करें!",
    ur: "آئیں آج ہی بغیر انڈے کا شاندار کیک یا ہیمپر آرڈر کریں!"
  };

  const bubbleBtn: Record<string, string> = {
    en: "Build custom order",
    pa: "ਆਰਡਰ ਤਿਆر ਕਰੋ",
    hi: "ऑर्डर तैयार करें",
    ur: "آرڈر ڈرافٹ کریں"
  };

  const currentLang = language || "en";

  return (
    <div className={`font-sans antialiased text-cocoa-900 bg-cream-50 min-h-screen relative selection:bg-berry-200 ${isRtl ? "rtl" : "ltr"}`}>
      
      {/* Dynamic Header Block */}
      <Header />

      {/* Hero Section */}
      <Hero
        onViewProducts={() => {
          const productsElement = document.getElementById("products");
          if (productsElement) {
            productsElement.scrollIntoView({ behavior: "smooth" });
          }
        }}
        onOpenOrderForm={() => handleCategorySelect(t("itemCustomCakesTitle"))}
      />

      {/* About Us Section */}
      <AboutUs />

      {/* Featured Products / Offerings list */}
      <ProductCatalog onSelectCategoryForOrder={handleCategorySelect} />

      {/* Why Choose Us checklist */}
      <WhyChooseUs />

      {/* Custom Instagram Lookbook Live Grid & Lightbox */}
      <Gallery />

      {/* Customer Testimonials Carousel slider */}
      <Testimonials />

      {/* Timeline Steps Order Process */}
      <OrderProcess />

      {/* Interactive WhatsApp Order builder Form */}
      <OrderForm initialCategory={selectedCategory} />

      {/* Physical address & Call section */}
      <ContactSection />

      {/* Complete Footer credits & quick links */}
      <Footer />

      {/* Floating Helper: Premium Sticky WhatsApp Order Button */}
      <div className={`fixed bottom-6 z-40 flex flex-col items-end gap-3 pointer-events-none ${isRtl ? "left-6" : "right-6"}`}>
        
        {/* Helper custom chat banner */}
        <AnimatePresence>
          {showWhatsAppBubble && (
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 10 }}
              className="bg-white text-cocoa-900 px-4 py-3 rounded-2xl shadow-2xl border border-cocoa-100 flex items-start gap-2.5 max-w-[260px] pointer-events-auto"
            >
              <div className="p-1.5 bg-berry-100 rounded-lg text-berry-600 shrink-0">
                <Cake className="w-4 h-4 fill-berry-200" />
              </div>
              <div className="space-y-1 text-left">
                <p className="text-xs font-semibold leading-tight text-cocoa-900">
                  {bubbleTitle[currentLang] || bubbleTitle.en}
                </p>
                <p className="text-[10px] text-cocoa-450 leading-snug">
                  {bubbleText[currentLang] || bubbleText.en}
                </p>
                <button
                  onClick={() => handleCategorySelect(t("itemCustomCakesTitle"))}
                  className="text-[10px] font-bold text-berry-500 hover:text-berry-600 flex items-center gap-0.5 pt-0.5 uppercase tracking-wider cursor-pointer"
                >
                  <span>{bubbleBtn[currentLang] || bubbleBtn.en}</span>
                </button>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowWhatsAppBubble(false);
                }}
                className="text-cocoa-200 hover:text-cocoa-400 focus:outline-none shrink-0 cursor-pointer"
                aria-label="Dismiss helper"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Real Interactive WhatsApp Target anchor and scroll-to-top */}
        <div className="flex gap-2 pointer-events-auto">
          {/* Scroll top helper */}
          <button
            onClick={handleScrollToTop}
            className="w-12 h-12 rounded-full bg-white text-cocoa-700 hover:bg-cream-100 shadow-xl border border-cocoa-150 flex items-center justify-center transition-all focus:outline-none active:scale-95 cursor-pointer"
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-5 h-5 pointer-events-none" />
          </button>

          {/* Direct WhatsApp Action Link */}
          <a
            href="https://wa.me/917009142146?text=Hi%20Home%20Bakers!%20I%20visited%2520your%2520website%20and%20would%20like%20to%20discuss%20a%20delicious%20order."
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl flex items-center justify-center transition-all hover:scale-105 active:scale-95 animate-bounce-slow"
            aria-label="Order on WhatsApp directly"
          >
            <MessageCircle className="w-7 h-7 fill-current stroke-emerald-500" />
          </a>
        </div>

      </div>

    </div>
  );
}
