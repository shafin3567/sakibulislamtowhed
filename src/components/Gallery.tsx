import { useState } from "react";
import { Instagram, MapPin, X, ChevronLeft, ChevronRight, Heart, MessageCircle, Award } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { GalleryItem } from "../types";
import { useLanguage } from "../context/LanguageContext";

import strawberryImage from "../assets/images/ig_strawberry_1781682095315.jpg";
import giftHamperImage from "../assets/images/gift_hamper_1781682042798.jpg";
import macaronImage from "../assets/images/ig_macarons_1781682111012.jpg";
import birthdayCakeImage from "../assets/images/ig_birthday_cake_1781682127663.jpg";
import returnGiftsImage from "../assets/images/return_gifts_1781682058690.jpg";
import trousseauImage from "../assets/images/trousseau_packing_1781682075779.jpg";
import heroCakeImage from "../assets/images/hero_cake_1781682025087.jpg";

export default function Gallery() {
  const { t, isRtl } = useLanguage();
  const [activeImageIdx, setActiveImageIdx] = useState<number | null>(null);

  // 6 beautifully matched square images for our premium instagram grid
  const galleryItems: GalleryItem[] = [
    {
      id: "1",
      src: strawberryImage,
      title: "🍓 Double Cream Strawberry Sponge Cake",
      category: "Cakes",
      likes: "128",
      comments: "14",
    },
    {
      id: "2",
      src: giftHamperImage,
      title: "🎁 Luxurious Chocolate & Dry Fruit Hamper",
      category: "Hampers",
      likes: "245",
      comments: "32",
    },
    {
      id: "3",
      src: macaronImage,
      title: "🌸 Pastel French Macaron Collection Box",
      category: "Desserts",
      likes: "194",
      comments: "21",
    },
    {
      id: "4",
      src: birthdayCakeImage,
      title: "🎂 Magical Teddy Sleeping Under the Stars",
      category: "Custom Cakes",
      likes: "312",
      comments: "45",
    },
    {
      id: "5",
      src: returnGiftsImage,
      title: "🎀 Golden Floral Return favor boxes",
      category: "Return Gifts",
      likes: "156",
      comments: "18",
    },
    {
      id: "6",
      src: trousseauImage,
      title: "💝 Ornate Bridesmaid Saree Packing Display",
      category: "Trousseau Packing",
      likes: "284",
      comments: "39",
    },
  ];

  const handleNext = () => {
    if (activeImageIdx !== null) {
      setActiveImageIdx((activeImageIdx + 1) % galleryItems.length);
    }
  };

  const handlePrev = () => {
    if (activeImageIdx !== null) {
      setActiveImageIdx((activeImageIdx - 1 + galleryItems.length) % galleryItems.length);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-cream-50 relative text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-berry-500 font-bold bg-berry-100 px-3 py-1 rounded-full inline-block">
            {t("galleryBadge")}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-cocoa-900 leading-tight">
            {t("galleryTitle")}
          </h2>
          <div className="w-16 h-1 bg-berry-400 mx-auto rounded-full" />
          <p className="font-sans text-sm sm:text-base text-cocoa-600 max-w-xl mx-auto">
            {t("gallerySubtitle")}
          </p>
        </div>

        {/* Live Instagram Simulated Profile Header Card (owner request) */}
        <div className="max-w-3xl mx-auto bg-white border border-cocoa-100 rounded-3xl p-6 sm:p-8 shadow-sm mb-16 relative overflow-hidden">
          {/* Subtle Pink Backdrop Glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-berry-50 rounded-full blur-2xl" />

          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-center sm:items-start relative z-10 text-center sm:text-left">
            {/* Instagram Profile Avatar */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600">
              <div className="w-full h-full rounded-full bg-white p-1">
                <div className="w-full h-full rounded-full bg-berry-100 flex items-center justify-center text-berry-600 relative overflow-hidden">
                  <img
                    src={heroCakeImage}
                    alt="Home Baker's profile avatar"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>

            {/* Profile Bio Details */}
            <div className="flex-1 space-y-4 text-center sm:text-left">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 justify-center sm:justify-start">
                <span className="font-serif text-xl sm:text-2xl font-bold text-cocoa-900">home_bakers_11111</span>
                
                <div className="flex gap-2 justify-center">
                  <a
                    href="https://instagram.com/home_bakers_11111"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-1.5 bg-berry-500 hover:bg-berry-600 text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-all shadow-sm"
                  >
                    <Instagram className="w-3.5 h-3.5" />
                    <span>View Profile</span>
                  </a>
                </div>
              </div>

              {/* Counts Stats Bar */}
              <div className="flex items-center justify-center sm:justify-start gap-8 border-y border-cocoa-100 py-2.5 text-sm">
                <div>
                  <span className="font-bold text-cocoa-900 block font-mono text-left">439</span>
                  <span className="text-xs text-cocoa-450 block font-sans text-left">posts</span>
                </div>
                <div>
                  <span className="font-bold text-cocoa-900 block font-mono text-left">1,172</span>
                  <span className="text-xs text-cocoa-450 block font-sans text-left">followers</span>
                </div>
                <div>
                  <span className="font-bold text-cocoa-900 block font-mono text-left">8</span>
                  <span className="text-xs text-cocoa-450 block font-sans text-left">following</span>
                </div>
              </div>

              {/* Bio descriptions */}
              <div className="text-sm text-cocoa-700 leading-relaxed space-y-1 text-center sm:text-left">
                <div className="flex items-center gap-1.5 justify-center sm:justify-start">
                  <span className="font-semibold text-cocoa-900 font-serif">Home Baker's</span>
                  <span className="bg-cream-200 text-cocoa-800 text-[10px] uppercase font-mono tracking-widest px-1.5 rounded">Entrepreneur</span>
                </div>
                <p className="italic">"Love at first bite ❤️"</p>
                <p>🎂 100% Eggless cakes | 🎁 Hampers | 🎀 Return gifts | 💝 Trousseau packing</p>
                <p className="text-xs font-medium text-cocoa-500 font-mono">📞 For order call or DM @7009142146</p>
                
                <div className="flex items-center gap-1 justify-center sm:justify-start text-xs font-semibold text-berry-600 pt-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Jain homes, Ludhiana, Punjab, India 141011</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {galleryItems.map((item, idx) => (
            <motion.div
              layoutId={`gallery-item-${item.id}`}
              key={item.id}
              onClick={() => setActiveImageIdx(idx)}
              className="group relative aspect-square bg-cream-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl cursor-pointer border border-cocoa-100/50"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              
              {/* Instagram Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-cocoa-950/85 via-cocoa-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 sm:p-5 text-left">
                <div className="space-y-1.5">
                  <span className="inline-block text-[9px] font-mono tracking-wider text-cream-50 uppercase bg-berry-500/80 px-2 py-0.5 rounded font-semibold mb-1">
                    {item.category}
                  </span>

                  <p className="text-white text-xs sm:text-sm font-semibold line-clamp-2 leading-tight">
                    {item.title}
                  </p>
                  
                  {/* Stats line with likes & comments */}
                  <div className="flex items-center gap-4 text-white hover:text-white/95 text-xs pt-1.5 border-t border-white/20">
                    <span className="flex items-center gap-1">
                      <Heart className="w-4.5 h-4.5 fill-berry-400 stroke-berry-400" />
                      <span className="font-mono font-medium">{item.likes}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-4.5 h-4.5 text-neutral-200 fill-white/10" />
                      <span className="font-mono font-medium">{item.comments}</span>
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mini disclaimer */}
        <div className="text-center mt-10 text-xs text-cocoa-450 italic font-medium">
          📸 Platter images represent actual creations delivered within Ludhiana. All contents are freshly handmade.
        </div>

      </div>

      {/* Lightbox Overlay Drawer portal */}
      <AnimatePresence>
        {activeImageIdx !== null && (
          <div className="fixed inset-0 z-55 flex items-center justify-center bg-cocoa-950/95 backdrop-blur-md">
            
            {/* Close trigger on outer box */}
            <button
              onClick={() => setActiveImageIdx(null)}
              className="absolute top-4 right-4 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all focus:outline-none z-10 cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left Nav trigger */}
            <button
              onClick={handlePrev}
              className="absolute left-4 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all focus:outline-none z-10 cursor-pointer"
              aria-label="Prev image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Main Lightbox Card content */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl max-w-2xl w-full mx-4 overflow-hidden shadow-2xl relative border border-cocoa-101 text-left"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-square bg-cream-50 relative">
                <img
                  src={galleryItems[activeImageIdx].src}
                  alt={galleryItems[activeImageIdx].title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Description & Action bar inside the overlay */}
              <div className="p-6 space-y-4">
                <div className="flex gap-2 items-center">
                  <span className="px-2.5 py-1 bg-berry-150 text-berry-600 font-semibold text-[10px] uppercase font-mono tracking-widest rounded-full">
                    {galleryItems[activeImageIdx].category}
                  </span>
                  <span className="text-[10px] text-cocoa-400 font-mono tracking-widest uppercase flex items-center gap-1 bg-cream-100 px-2 py-1 rounded-full font-semibold">
                    <Award className="w-3.5 h-3.5 text-berry-400" />
                    <span>Ludhiana Made</span>
                  </span>
                </div>

                <h3 className="font-serif text-lg sm:text-xl font-bold text-cocoa-900">
                  {galleryItems[activeImageIdx].title}
                </h3>

                <div className="flex items-center justify-between border-t border-cocoa-115 pt-4">
                  {/* Simulated Stats */}
                  <div className="flex items-center gap-4 text-xs font-mono text-cocoa-500">
                    <span className="flex items-center gap-1">
                      <Heart className="w-4 h-4 text-berry-500 fill-berry-100" />
                      <span>{galleryItems[activeImageIdx].likes} {t("galleryLikes")}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4 text-cocoa-400" />
                      <span>{galleryItems[activeImageIdx].comments} {t("galleryComments")}</span>
                    </span>
                  </div>

                  {/* WhatsApp Order helper from lightbox */}
                  <a
                    href={`https://wa.me/917009142146?text=Hi%20Home%20Bakers!%20I%20saw%20your%20Instagram%20post%20"${encodeURIComponent(galleryItems[activeImageIdx].title)}"%20on%20your%20website%20and%20would%20like%20to%20inquire%2520about%20it.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-berry-500 hover:bg-berry-600 text-cream-50 text-xs font-semibold rounded-full flex items-center gap-1.5 transition-all shadow-sm"
                  >
                    <span>Inquire on WhatsApp</span>
                    <Instagram className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </motion.div>

            {/* Right Nav trigger */}
            <button
              onClick={handleNext}
              className="absolute right-4 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all focus:outline-none z-10 cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
