import { useState } from "react";
import { Cake, Gift, Heart, Sparkles, MessageCircle, ArrowRight, Check, Share2, Clipboard, Globe } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Product } from "../types";
import { useLanguage } from "../context/LanguageContext";

import heroCakeImage from "../assets/images/hero_cake_1781682025087.jpg";
import giftHamperImage from "../assets/images/gift_hamper_1781682042798.jpg";
import returnGiftsImage from "../assets/images/return_gifts_1781682058690.jpg";
import trousseauImage from "../assets/images/trousseau_packing_1781682075779.jpg";

interface ProductCatalogProps {
  onSelectCategoryForOrder: (category: string) => void;
}

export default function ProductCatalog({ onSelectCategoryForOrder }: ProductCatalogProps) {
  const { t, isRtl } = useLanguage();
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const products: Product[] = [
    {
      id: "cakes",
      title: t("itemCustomCakesTitle"),
      icon: "Cake",
      image: heroCakeImage,
      description: t("itemCustomCakesDesc"),
      bulletItems: [t("bulletEggless"), t("bulletCustomized"), t("bulletFresh")],
      subItems: [
        { id: "c1", name: "🎂 Birthday Cakes", description: "Bespoke elegant chocolate or cartoon designs.", popular: true },
        { id: "c2", name: "✨ Anniversary Cakes", description: "Textured palette knife style or premium tier setups.", popular: false },
        { id: "c3", name: "🎨 Theme Cakes", description: "Custom fondant work crafted with detail.", popular: true },
      ],
    },
    {
      id: "hampers",
      title: t("itemGiftHampersTitle"),
      icon: "Gift",
      image: giftHamperImage,
      description: t("itemGiftHampersDesc"),
      bulletItems: [t("bulletWoodBasket"), t("bulletHandmades"), t("bulletBulkOptions")],
      subItems: [
        { id: "h1", name: "🌸 Festival Hampers", description: "Bespoke packing for Diwali, Rakhi, Holi or New Year.", popular: true },
        { id: "h2", name: "💼 Corporate Hampers", description: " artisanal dry fruit or customized cookie hampers.", popular: false },
        { id: "h3", name: "💝 Customized Hampers", description: "Custom prints, mugs and secret sweet additions.", popular: true },
      ],
    },
    {
      id: "return-gifts",
      title: t("itemReturnGiftsTitle"),
      icon: "Ribbon",
      image: returnGiftsImage,
      description: t("itemReturnGiftsDesc"),
      bulletItems: [t("bulletLabels"), t("bulletChildSafe"), t("bulletBoxVariety")],
      subItems: [
        { id: "r1", name: "💍 Wedding Return Gifts", description: "Traditional sweet setups or customized jars.", popular: true },
        { id: "r2", name: "🎈 Birthday Return Gifts", description: "Warm cookies, chocolates, and name-tags.", popular: false },
        { id: "r3", name: "👶 Baby Shower Gifts", description: "Rich pastel gift boxes or baby custom chocolates.", popular: true },
      ],
    },
    {
      id: "trousseau",
      title: t("itemTrousseauTitle"),
      icon: "Heart",
      image: trousseauImage,
      description: t("itemTrousseauDesc"),
      bulletItems: [t("bulletTrays"), t("bulletAcrylic"), t("bulletBridalMatch")],
      subItems: [
        { id: "t1", name: "👰 Wedding Packing", description: "Bespoke jewelry, clothing, or accessory trunks.", popular: true },
        { id: "t2", name: "🎀 Gift Decoration", description: "Premium handmade floral lace wraps.", popular: false },
        { id: "t3", name: "👑 Premium Packaging", description: "Velvet trays and crystal clear acrylic mirror trunks.", popular: true },
      ],
    },
  ];

  const handleCopyLink = (productId: string, productTitle: string) => {
    const shareUrl = `${window.location.origin}${window.location.pathname}#${productId}`;
    navigator.clipboard.writeText(shareUrl)
      .then(() => {
        setCopiedId(productId);
        setTimeout(() => setCopiedId(null), 2000);
      })
      .catch((err) => {
        console.error("Clipboard copy failed: ", err);
      });
  };

  const getWhatsAppShareLink = (productId: string, productTitle: string) => {
    const shareUrl = `${window.location.origin}${window.location.pathname}#${productId}`;
    const text = `Check out this gorgeous 100% Eggless ${productTitle} from Home Baker's Ludhiana! Elegant designs custom crafted with premium quality. View it here: ${shareUrl}`;
    return `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="products" className="py-24 bg-cream-50 relative">
      {/* Decorative vector shape background */}
      <div className="absolute top-[30%] left-0 w-64 h-96 bg-berry-50/50 rounded-r-3xl blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Block */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-berry-500 font-semibold bg-berry-100 px-3 py-1 rounded-full">
            {t("catalogBadge")}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-cocoa-900 leading-tight">
            {t("catalogTitle")}
          </h2>
          <p className="font-sans text-base sm:text-lg text-cocoa-600 leading-relaxed">
            {t("catalogSubtitle")}
          </p>
          <div className="w-24 h-1 bg-berry-400 mx-auto rounded-full" />
        </div>

        {/* Categories Stack */}
        <div className="space-y-16">
          {products.map((p, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                id={p.id}
                key={p.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  isEven ? "" : "lg:flex-row-reverse"
                } scroll-mt-24`}
              >
                
                {/* Visual Column */}
                <div
                  className={`lg:col-span-5 order-first ${
                    isEven ? "lg:order-first" : "lg:order-last"
                  }`}
                >
                  <div className="relative group overflow-hidden rounded-2xl border-4 border-white shadow-xl hover:shadow-2xl transition-all duration-300">
                    <div className="aspect-square sm:aspect-[4/3] lg:aspect-square overflow-hidden bg-cream-100">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    {/* Floating pill indicators */}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-cocoa-800 shadow-sm border border-cocoa-100/30 flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                      <span>{t("catalogPremiumLudhiana")}</span>
                    </div>
                  </div>
                </div>

                {/* Content Details Column */}
                <div className="lg:col-span-7 space-y-6 text-left">
                  <div className="flex items-center gap-3">
                    <span className="p-3 bg-berry-100 text-berry-600 rounded-xl font-serif text-xl font-bold">
                      {idx + 1}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-cocoa-900 border-b border-berry-100 pb-2 w-full">
                      {p.title}
                    </h3>
                  </div>

                  <p className="text-base text-cocoa-600 leading-relaxed">
                    {p.description}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pb-2">
                    {p.bulletItems.map((b, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-cocoa-700 font-medium justify-start">
                        <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>

                  {/* Sub-items Showcase Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                    {p.subItems.map((sub) => (
                      <div
                        key={sub.id}
                        className="bg-white p-4 rounded-xl border border-cocoa-100 hover:border-berry-250 hover:shadow-md transition-all relative flex flex-col justify-between"
                      >
                        {sub.popular && (
                          <span className={`absolute -top-2 px-2 py-0.5 bg-berry-500 text-cream-50 text-[8px] font-mono uppercase tracking-wider rounded-full font-bold ${isRtl ? "left-3" : "right-3"}`}>
                            Most Loved
                          </span>
                        )}
                        <div>
                          <span className="text-sm font-semibold text-cocoa-800 block mb-1">
                            {sub.name}
                          </span>
                          <span className="text-xs text-cocoa-450 leading-snug block">
                            {sub.description}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Sharing Action Panel */}
                  <div className="p-3 bg-cream-100/50 rounded-xl border border-cocoa-100 flex flex-wrap items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-2 text-cocoa-800 font-bold">
                      <Share2 className="w-4 h-4 text-berry-500" />
                      <span>{t("catalogShareTitle")}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {/* Copy Link Button */}
                      <button
                        onClick={() => handleCopyLink(p.id, p.title)}
                        className={`px-3 py-1.5 rounded-lg border font-mono font-bold transition-all flex items-center gap-1.5 ${
                          copiedId === p.id
                            ? "bg-emerald-500 text-white border-emerald-500"
                            : "bg-white text-cocoa-800 border-cocoa-150 hover:bg-cream-150"
                        }`}
                      >
                        <Clipboard className="w-3.5 h-3.5" />
                        <span>{copiedId === p.id ? t("catalogShareCopied") : t("catalogShareCopyBtn")}</span>
                      </button>

                      {/* WhatsApp Share Button */}
                      <a
                        href={getWhatsAppShareLink(p.id, p.title)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-semibold flex items-center gap-1.5 transition-all shadow-xs"
                      >
                        <MessageCircle className="w-3.5 h-3.5 fill-current" />
                        <span>{t("catalogShareWaBtn")}</span>
                      </a>
                    </div>
                  </div>

                  {/* Quick Customize Button */}
                  <div className="pt-3 flex flex-col sm:flex-row items-center gap-4">
                    <button
                      onClick={() => onSelectCategoryForOrder(p.title)}
                      className="w-full sm:w-auto px-6 py-3 bg-cocoa-800 hover:bg-cocoa-900 text-cream-100 font-medium text-sm rounded-full flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
                    >
                      <span>{t("catalogCustomizeBtn")}</span>
                      <ArrowRight className={`w-4 h-4 ${isRtl ? "rotate-180" : ""}`} />
                    </button>
                    <a
                      href={`https://wa.me/917009142146?text=Hi%20Home%20Bakers!%20I%20am%20interested%20in%20your%20${encodeURIComponent(p.title)}%20catalog.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-6 py-3 bg-white hover:bg-cream-100 text-cocoa-800 font-semibold text-sm border border-cocoa-200 rounded-full flex items-center justify-center gap-2 transition-all"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-500 fill-emerald-100" />
                      <span>{t("catalogBrochureBtn")}</span>
                    </a>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
