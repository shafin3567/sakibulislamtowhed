import { useState, useEffect, useRef } from "react";
import { Menu, X, Heart, Sparkles, MessageCircle, Phone, Globe, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage, Language } from "../context/LanguageContext";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const { language, setLanguage, t, isRtl } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowLangDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const menuItems = [
    { label: t("navHome"), href: "#home" },
    { label: t("navAbout"), href: "#about" },
    { label: t("navOfferings"), href: "#products" },
    { label: t("navWhyUs"), href: "#why-us" },
    { label: t("navGallery"), href: "#gallery" },
    { label: t("navReviews"), href: "#reviews" },
    { label: t("navProcess"), href: "#process" },
    { label: t("navContact"), href: "#contact" },
  ];

  const languagesList: { code: Language; label: string; flag: string; nativeName: string }[] = [
    { code: "en", label: "English", flag: "🇬🇧", nativeName: "English" },
    { code: "pa", label: "Punjabi", flag: "🌾", nativeName: "ਪੰਜਾਬੀ" },
    { code: "hi", label: "Hindi", flag: "🌸", nativeName: "हिन्दी" },
    { code: "ur", label: "Urdu", flag: "✍️", nativeName: "اردو" }
  ];

  const currentLanguageObj = languagesList.find((l) => l.code === language) || languagesList[0];

  const handleScrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-cocoa-900 text-cream-100 text-xs py-2 px-4 shadow-inner text-center font-medium tracking-wider flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-cream-300 animate-pulse shrink-0" />
        <span className="line-clamp-1">{t("announcement")}</span>
        <Sparkles className="w-3.5 h-3.5 text-cream-300 animate-pulse shrink-0" />
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-cream-50/90 backdrop-blur-md border-b border-cocoa-100 shadow-sm py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* Logo Brand */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleScrollTo("#home");
            }}
            className="flex items-center gap-1.5 focus:outline-none shrink-0"
            id="nav-logo"
          >
            <div className="w-10 h-10 rounded-full bg-berry-100 flex items-center justify-center text-berry-600 shadow-sm shrink-0">
              <Heart className="w-5 h-5 fill-berry-400 stroke-berry-600" />
            </div>
            <div>
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-cocoa-900 block leading-tight">
                Home Baker's
              </span>
              <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-cocoa-400 block -mt-0.5">
                {t("logoSubtitle")}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo(item.href);
                }}
                className="font-sans text-xs xl:text-sm font-semibold text-cocoa-600 hover:text-berry-500 transition-colors relative group py-2 whitespace-nowrap"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-berry-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Buttons Group (Lang, WhatsApp & Call) */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3 shrink-0">
            
            {/* Elegant Language Switcher Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setShowLangDropdown(!showLangDropdown)}
                className="px-3 py-2 text-xs font-semibold text-cocoa-800 bg-white hover:bg-cream-100/50 border border-cocoa-150 rounded-full flex items-center gap-1.5 transition-all shadow-xs"
                title="Change Language"
                id="language-dropdown-btn"
              >
                <Globe className="w-3.5 h-3.5 text-berry-500" />
                <span className="font-mono text-[11px] font-bold">
                  {currentLanguageObj.flag} {currentLanguageObj.nativeName}
                </span>
                <ChevronDown className={`w-3 h-3 text-cocoa-400 transition-transform ${showLangDropdown ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {showLangDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-2 w-44 bg-white border border-cocoa-100/75 rounded-xl shadow-xl overflow-hidden z-55 py-1"
                  >
                    <div className="px-3 py-1.5 border-b border-cocoa-50 text-[10px] font-mono tracking-widest text-cocoa-400 uppercase">
                      Select Language
                    </div>
                    {languagesList.map((lang) => {
                      const active = lang.code === language;
                      return (
                        <button
                          key={lang.code}
                          onClick={() => {
                            setLanguage(lang.code);
                            setShowLangDropdown(false);
                          }}
                          className={`w-full px-3 py-2 text-left text-xs font-medium flex items-center justify-between gap-2 transition-colors ${
                            active
                              ? "bg-berry-50 text-berry-600 font-bold"
                              : "text-cocoa-800 hover:bg-cream-100/40"
                          }`}
                        >
                          <span className="flex items-center gap-2">
                            <span className="text-sm shrink-0">{lang.flag}</span>
                            <span className={lang.code === 'ur' ? 'font-serif text-right' : 'font-sans'}>
                              {lang.label} ({lang.nativeName})
                            </span>
                          </span>
                          {active && (
                            <span className="w-1.5 h-1.5 rounded-full bg-berry-500" />
                          )}
                        </button>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Calling Options */}
            <a
              href="tel:+917009142146"
              className="px-3.5 py-2 text-xs font-semibold text-cocoa-800 bg-cream-100 hover:bg-cream-200 border border-cocoa-200 rounded-full flex items-center gap-1.5 transition-all whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{t("callUs")}</span>
            </a>

            {/* WhatsApp Options */}
            <a
              href="https://wa.me/917009142146?text=Hi%20Home%20Bakers!%20I%20am%20visiting%20your%20website%20and%20would%20love%20to%20know%20more%20about%20your%20100%25%20eggless%2520cakes%20and%20hampers."
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 text-xs font-semibold text-cream-50 bg-berry-500 hover:bg-berry-600 rounded-full flex items-center gap-1.5 shadow-xs transition-all hover:scale-[1.02] whitespace-nowrap"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>{t("waOrder")}</span>
            </a>
          </div>

          {/* Mobile Right Controls Block */}
          <div className="flex md:hidden items-center gap-1.5 shrink-0">
            
            {/* Inline Quick Cycle Language switch button on Mobile for great UX */}
            <button
              onClick={() => {
                // simple cycle
                const idx = languagesList.findIndex((l) => l.code === language);
                const nextIdx = (idx + 1) % languagesList.length;
                setLanguage(languagesList[nextIdx].code);
              }}
              className="p-1.5 rounded-full bg-white border border-cocoa-150 text-berry-600 hover:bg-cream-100 transition-all flex items-center justify-center gap-1 font-mono text-[10px] font-black"
              title="Quick Toggle Language"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{currentLanguageObj.flag}</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-cocoa-800 hover:text-berry-600 focus:outline-none focus:ring-2 focus:ring-berry-200 rounded-md"
              aria-label="Toggle menu"
              id="mobile-menu-toggle"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>
        </div>
      </header>

      {/* Mobile Menu Draw Down */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed top-[112px] left-0 w-full bg-cream-50/95 backdrop-blur-lg border-b border-cocoa-100 shadow-lg z-40 overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-2 flex flex-col">
              
              {/* Language Selector block inside Mobile Menu */}
              <div className="px-3 py-2 border-b border-cocoa-100/50 mb-1">
                <span className="text-[10px] font-mono tracking-wider text-cocoa-400 block mb-2 uppercase">Local Website Language</span>
                <div className="grid grid-cols-4 gap-1.5">
                  {languagesList.map((lang) => {
                    const active = lang.code === language;
                    return (
                      <button
                        key={lang.code}
                        onClick={() => setLanguage(lang.code)}
                        className={`py-2 rounded-xl text-xs font-semibold flex flex-col items-center justify-center transition-all border ${
                          active
                            ? "bg-berry-500 text-cream-50 border-berry-600 shadow-sm"
                            : "bg-white text-cocoa-800 border-cocoa-150 hover:bg-cream-100/30"
                        }`}
                      >
                        <span className="text-sm">{lang.flag}</span>
                        <span className="text-[10px] mt-0.5">{lang.nativeName}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {menuItems.map((item, idx) => (
                <motion.a
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04 }}
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollTo(item.href);
                  }}
                  className="px-3 py-2.5 text-base font-semibold text-cocoa-800 hover:bg-cream-100 hover:text-berry-600 rounded-lg transition-all"
                >
                  {item.label}
                </motion.a>
              ))}

              <div className="pt-4 flex flex-col gap-3 px-3">
                <a
                  href="tel:+917009142146"
                  className="py-3 text-center text-sm font-semibold text-cocoa-800 bg-cream-100 border border-cocoa-200 rounded-full flex items-center justify-center gap-2 transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>{t("callNow")}</span>
                </a>
                <a
                  href="https://wa.me/917009142146?text=Hi%20Home%2520Bakers!%20I%27d%20love%2520to%20discuss%20an%20order."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 text-center text-sm font-semibold text-cream-50 bg-berry-500 rounded-full flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>{t("waInquiry")}</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
