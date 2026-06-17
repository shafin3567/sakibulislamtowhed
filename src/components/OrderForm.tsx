import { useState, useEffect } from "react";
import { MessageCircle, ShoppingBag, Calendar, Sparkles, CheckSquare, Cake, Heart } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { CustomOrder } from "../types";
import { useLanguage } from "../context/LanguageContext";

interface OrderFormProps {
  initialCategory?: string;
}

export default function OrderForm({ initialCategory = "🎂 Custom Cakes" }: OrderFormProps) {
  const { t, isRtl } = useLanguage();

  const categories = [
    t("itemCustomCakesTitle"),
    t("itemGiftHampersTitle"),
    t("itemReturnGiftsTitle"),
    t("itemTrousseauTitle")
  ];

  const cakeFlavors = [
    "Signature Chocolate Truffle 🍫",
    "Fresh Strawberry Cream 🍓",
    "Red Velvet Velvet Dream 🍰",
    "Madagascar Vanilla Buttercream 🍦",
    "Mango-Pineapple Tropical Burst 🍍",
    "Salted Caramel Crunch 🍯",
  ];

  const packingStyles = [
    "Suede Basket / Tray 🌸",
    "Premium Wooden Chest 🪵",
    "Transparent Acrylic Mirror Box 💎",
    "Artisanal Lace Wrapping Wrapper 🎀",
    "Biodegradable Handmade Jute Bags 🌾",
  ];

  const [order, setOrder] = useState<CustomOrder>({
    category: initialCategory,
    theme: "",
    flavor: cakeFlavors[0],
    weight: "1.0 Kg",
    date: "",
    message: "",
    packingType: packingStyles[0],
    qty: "1 Tray/Box",
  });

  const [isCopied, setIsCopied] = useState(false);

  // Sync category state updates from other sections
  useEffect(() => {
    if (initialCategory) {
      // Find the translated category name if needed
      let resolvedCategory = initialCategory;
      if (initialCategory === t("itemCustomCakesTitle")) {
        resolvedCategory = t("itemCustomCakesTitle");
      } else if (initialCategory === "Custom Cakes" || initialCategory === "🎂 Custom Cakes") {
        resolvedCategory = t("itemCustomCakesTitle");
      } else if (initialCategory === t("itemGiftHampersTitle") || initialCategory === "Gift Hampers") {
        resolvedCategory = t("itemGiftHampersTitle");
      } else if (initialCategory === t("itemReturnGiftsTitle") || initialCategory === "Return Gifts") {
        resolvedCategory = t("itemReturnGiftsTitle");
      } else if (initialCategory === t("itemTrousseauTitle") || initialCategory === "Trousseau Packing") {
        resolvedCategory = t("itemTrousseauTitle");
      }
      setOrder((prev) => ({ ...prev, category: resolvedCategory }));
    }
  }, [initialCategory, t]);

  const generateWhatsAppText = () => {
    const isCake = order.category === t("itemCustomCakesTitle") || order.category.includes("Cakes") || order.category.includes("🎂");
    
    let text = `Hi Home Baker's Ludhiana! ❤️ *Eggless Order Inquiry*\n\n`;
    text += `*🛍️ Category:* ${order.category}\n`;
    
    if (order.theme) {
      text += `*🎈 Occasion/Theme:* ${order.theme}\n`;
    }

    if (isCake) {
      text += `*🍰 Flavor Choice:* ${order.flavor}\n`;
      text += `*⚖️ Estimated Weight:* ${order.weight}\n`;
    } else {
      text += `*📦 Packing Style:* ${order.packingType}\n`;
      text += `*🔢 Custom Quantity:* ${order.qty}\n`;
    }

    if (order.date) {
      text += `*📅 Delivery / Pick-up Date:* ${order.date}\n`;
    }

    if (order.message) {
      text += `*✍️ Message on Cake / Card:* "${order.message}"\n`;
    }

    text += `\n_Catalog Reference URL: homebakersguide.com_`;
    text += `\n\nPlease let me know scheduling availability and cost estimate. Thanks!`;
    return encodeURIComponent(text);
  };

  const getWhatsAppLink = () => {
    return `https://wa.me/917009142146?text=${generateWhatsAppText()}`;
  };

  return (
    <section id="order-form" className="py-24 bg-cream-100 relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-[10%] left-[-10%] w-[450px] h-[450px] rounded-full bg-berry-100/50 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[450px] h-[450px] rounded-full bg-cream-300/40 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        
        {/* Module Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-berry-500 font-bold bg-berry-100 px-3 py-1 rounded-full inline-block">
            {t("orderBadge")}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-cocoa-900 leading-tight">
            {t("orderTitle")}
          </h2>
          <div className="w-16 h-1 bg-berry-400 mx-auto rounded-full" />
          <p className="font-sans text-sm sm:text-base text-cocoa-600 max-w-xl mx-auto">
            {t("orderSubtitle")}
          </p>
        </div>

        {/* Form and Preview Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Form Builder */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-cocoa-100/70 shadow-xl space-y-6">
            
            <h3 className="font-serif text-2xl font-bold text-cocoa-900 border-b border-cocoa-100 pb-3 flex items-center gap-2">
              <ShoppingBag className="w-6 h-6 text-berry-500" />
              <span>{t("orderStepTitle")}</span>
            </h3>

            {/* Form Fields Stack */}
            <div className="space-y-5">
              
              {/* Category Selector Buttons */}
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-cocoa-600 block">
                  {t("orderSelectCatLabel")}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setOrder((prev) => ({ ...prev, category: cat }))}
                      className={`py-3 px-4 text-xs sm:text-sm font-semibold rounded-2xl border text-center transition-all ${
                        order.category === cat
                          ? "bg-berry-500 text-cream-50 border-berry-500 shadow-sm scale-[1.01]"
                          : "bg-cream-50 hover:bg-cream-100 text-cocoa-800 border-cocoa-150"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Occasion / Theme */}
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-cocoa-600 block">
                  {t("orderOccasionLabel")}
                </label>
                <span className="text-[10px] text-cocoa-400 block -mt-1 mb-1">{t("orderOccasionPlaceholder")}</span>
                <input
                  type="text"
                  placeholder="e.g., Baby Shower, 1st Birthday, Floral Wedding theme"
                  value={order.theme}
                  onChange={(e) => setOrder((prev) => ({ ...prev, theme: e.target.value }))}
                  className="w-full bg-cream-50 border border-cocoa-100 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-berry-200 text-cocoa-900 placeholder:text-stone-350 text-sm font-medium"
                />
              </div>

              {/* Conditional Inputs Block */}
              <AnimatePresence mode="wait">
                {order.category === t("itemCustomCakesTitle") || order.category.includes("Cakes") || order.category.includes("🎂") ? (
                  <motion.div
                    key="cakes-block"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                  >
                    {/* Flavor Choice */}
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-cocoa-600 block">
                        {t("orderEgglessFlavorLabel")}
                      </label>
                      <select
                        value={order.flavor}
                        onChange={(e) => setOrder((prev) => ({ ...prev, flavor: e.target.value }))}
                        className="w-full bg-cream-50 border border-cocoa-100 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-berry-200 text-cocoa-900 text-sm font-medium"
                      >
                        {cakeFlavors.map((flv) => (
                          <option key={flv} value={flv}>{flv}</option>
                        ))}
                      </select>
                    </div>

                    {/* Weight Details */}
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-cocoa-600 block">
                        {t("orderWeightLabel")}
                      </label>
                      <input
                        type="text"
                        placeholder="e.g., 1.5 Kg"
                        value={order.weight}
                        onChange={(e) => setOrder((prev) => ({ ...prev, weight: e.target.value }))}
                        className="w-full bg-cream-50 border border-cocoa-100 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-berry-200 text-cocoa-900 placeholder:text-stone-350 text-sm font-medium"
                      />
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="packing-block"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                  >
                    {/* Packing Style Choice */}
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-cocoa-600 block">
                        {t("orderPackingStyleLabel")}
                      </label>
                      <select
                        value={order.packingType}
                        onChange={(e) => setOrder((prev) => ({ ...prev, packingType: e.target.value }))}
                        className="w-full bg-cream-50 border border-cocoa-100 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-berry-200 text-cocoa-900 text-sm font-medium"
                      >
                        {packingStyles.map((style) => (
                          <option key={style} value={style}>{style}</option>
                        ))}
                      </select>
                    </div>

                    {/* Quantity Selector */}
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-cocoa-600 block">
                        {t("orderQtyLabel")}
                      </label>
                      <input
                        type="text"
                        placeholder="e.g., 15 boxes"
                        value={order.qty}
                        onChange={(e) => setOrder((prev) => ({ ...prev, qty: e.target.value }))}
                        className="w-full bg-cream-50 border border-cocoa-100 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-berry-200 text-cocoa-900 placeholder:text-stone-350 text-sm font-medium"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Event Celebration Date */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-cocoa-600 block flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-berry-500" />
                    <span>{t("orderRequiredDateLabel")}</span>
                  </label>
                  <input
                    type="date"
                    value={order.date}
                    onChange={(e) => setOrder((prev) => ({ ...prev, date: e.target.value }))}
                    className="w-full bg-cream-50 border border-cocoa-100 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-berry-200 text-cocoa-900 text-sm font-medium"
                  />
                  <span className="text-[10px] text-cocoa-450 italic font-semibold font-mono uppercase block mt-1">
                    {t("orderRequiredDateNote")}
                  </span>
                </div>

                {/* Cake / Card Custom Text */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-cocoa-600 block">
                    {t("orderMessageOnCakeLabel")}
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., 'Happy Anniversary!'"
                    value={order.message}
                    onChange={(e) => setOrder((prev) => ({ ...prev, message: e.target.value }))}
                    className="w-full bg-cream-50 border border-cocoa-100 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-berry-200 text-cocoa-900 placeholder:text-stone-350 text-sm font-medium"
                  />
                </div>
              </div>

            </div>

            {/* Launch WhatsApp Order Button */}
            <div className="pt-4">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  setIsCopied(true);
                  setTimeout(() => setIsCopied(false), 2000);
                }}
                className="w-full py-4 bg-berry-500 hover:bg-berry-600 text-cream-50 font-bold rounded-2xl flex items-center justify-center gap-2 shadow-sm hover:shadow-md transition-all hover:scale-[1.01]"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>{t("orderSendWaBtn")}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Dynamic Live Receipt Preview */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24 text-left">
            
            <div className="bg-cocoa-900 text-cream-50 p-6 sm:p-8 rounded-3xl border border-cocoa-800 shadow-xl relative overflow-hidden">
              
              {/* Bakery Seal Overlap backdrop */}
              <div className="absolute -bottom-10 -right-10 w-44 h-44 rounded-full bg-cream-100/5 opacity-10 flex items-center justify-center text-white p-2 pointer-events-none">
                <Cake className="w-full h-full stroke-white" />
              </div>

              {/* Live Preview badge */}
              <div className="flex items-center justify-between border-b border-cocoa-800 pb-4 mb-6">
                <div>
                  <span className="font-mono text-xs uppercase text-cream-300 tracking-widest block font-medium">INQUIRY DRAFT</span>
                  <span className="font-serif text-lg font-bold block mt-0.5">{t("orderLiveBoardTitle")}</span>
                </div>
                <div className="px-2.5 py-1 bg-berry-500 text-white font-semibold text-[10px] uppercase font-mono tracking-widest rounded-full flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-amber-300 animate-pulse" />
                  <span>Real-Time</span>
                </div>
              </div>

              {/* Receipt-style items display */}
              <div className="space-y-4 font-mono text-sm leading-relaxed border-b border-cocoa-800/60 pb-6 mb-6">
                
                <div className="flex justify-between items-start gap-4">
                  <span className="text-cocoa-400">CATEGORY:</span>
                  <span className="text-right font-bold text-cream-100">{order.category}</span>
                </div>

                {order.theme && (
                  <div className="flex justify-between items-start gap-4">
                    <span className="text-cocoa-400">THEME/OCCASION:</span>
                    <span className="text-right font-bold text-cream-100">{order.theme}</span>
                  </div>
                )}

                {order.category === t("itemCustomCakesTitle") || order.category.includes("Cakes") || order.category.includes("🎂") ? (
                  <>
                    <div className="flex justify-between items-start gap-4">
                      <span className="text-cocoa-400">FLAVOR TYPE:</span>
                      <span className="text-right font-bold text-cream-100">{order.flavor}</span>
                    </div>

                    <div className="flex justify-between items-start gap-4">
                      <span className="text-cocoa-400">ESTIMATED WEIGHT:</span>
                      <span className="text-right font-bold text-cream-200 bg-berry-500/10 px-2 rounded">{order.weight}</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex justify-between items-start gap-4">
                      <span className="text-cocoa-400">PACKING STYLE:</span>
                      <span className="text-right font-bold text-cream-100">{order.packingType}</span>
                    </div>

                    <div className="flex justify-between items-start gap-4">
                      <span className="text-cocoa-400">QUANTITY SPEC:</span>
                      <span className="text-right font-bold text-cream-200 bg-berry-500/10 px-2 rounded">{order.qty}</span>
                    </div>
                  </>
                )}

                {order.date && (
                  <div className="flex justify-between items-start gap-4">
                    <span className="text-cocoa-400">REQUIRED DATE:</span>
                    <span className="text-right font-bold text-cream-100">{order.date}</span>
                  </div>
                )}

                {order.message && (
                  <div className="flex justify-between items-start gap-4">
                    <span className="text-cocoa-400">CARD MESSAGE:</span>
                    <span className="text-right font-bold text-amber-200">"{order.message}"</span>
                  </div>
                )}

                <div className="flex justify-between items-start gap-4 pt-2">
                  <span className="text-cocoa-400">DIET PROTOCOL:</span>
                  <span className="text-emerald-400 font-bold tracking-widest text-[12px]">★ 100% EGGLESS</span>
                </div>

              </div>

              {/* Instructions banner */}
              <div className="bg-cocoa-950 p-4 rounded-xl border border-cocoa-800 space-y-2">
                <p className="text-xs text-cocoa-450 leading-relaxed">
                  Upon clicking send, your smartphone or desktop will open WhatsApp directly with these specifications pre-configured, so you don't have to re-type details.
                </p>
                <div className="flex items-center gap-1.5 text-xs text-berry-300 font-semibold">
                  <CheckSquare className="w-4 h-4 shrink-0" />
                  <span>Verified 100% Secure & Direct Connection</span>
                </div>
              </div>

            </div>

            {/* Simulated mini review box */}
            <div className="bg-white p-5 rounded-3xl border border-cocoa-100/50 flex gap-3.5 items-start">
              <div className="w-10 h-10 rounded-full bg-berry-50 flex items-center justify-center shrink-0">
                <Heart className="w-5 h-5 text-berry-500 fill-berry-100" />
              </div>
              <div className="space-y-1">
                <p className="text-xs text-cocoa-700 italic">
                  "No automated, frustrating bot lines! I order via WhatsApp and get to check specifications directly with the kind owner."
                </p>
                <span className="text-[10px] uppercase font-mono tracking-wider font-bold text-cocoa-400 block">— Ritu S., Ludhiana</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
