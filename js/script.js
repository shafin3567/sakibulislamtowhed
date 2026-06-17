// Active State variables
let currentLanguage = localStorage.getItem("homebakers_lang") || "en";
let activeReviewIdx = 0;
let activeGalleryIdx = null;
let autoPlayInterval = null;

// Product Images map
const productImages = {
  cakes: "images/hero/hero-cake.png",
  hampers: "images/products/gift-hamper.png",
  "return-gifts": "images/products/return-gifts.png",
  trousseau: "images/products/trousseau-packing.png"
};

// Reviews list of Ludhiana
const reviews = [
  {
    id: "1",
    name: "Priya Sharma",
    location: "BRS Nagar, Ludhiana",
    stars: 5,
    text: "Beautiful cake and amazing taste. Made my daughters birthday completely memorable!",
    date: "2 weeks ago"
  },
  {
    id: "2",
    name: "Jaspreet Kaur",
    location: "Sarabha Nagar, Ludhiana",
    stars: 5,
    text: "The hamper packaging was extremely elegant and delivered right on time in perfect state.",
    date: "1 month ago"
  },
  {
    id: "3",
    name: "Rajesh Mehra",
    location: "Civil Lines, Ludhiana",
    stars: 5,
    text: "Highly recommended for all special occasions. Pure luxury and absolute trust.",
    date: "3 weeks ago"
  },
  {
    id: "4",
    name: "Harneet Singh",
    location: "Model Town, Ludhiana",
    stars: 5,
    text: "Our guests couldn't believe the entire wedding packing was homemade. Utterly beautiful layouts!",
    date: "2 months ago"
  }
];

// Gallery Images lookbook list
const galleryItems = [
  {
    id: "1",
    src: "images/gallery/strawberry-cake.png",
    title: "Double Cream Strawberry Sponge Cake 🍓",
    category: "Cakes",
    likes: "128",
    comments: "14"
  },
  {
    id: "2",
    src: "images/products/gift-hamper.png",
    title: "Luxurious Chocolate & Dry Fruit Hamper 🎁",
    category: "Hampers",
    likes: "245",
    comments: "32"
  },
  {
    id: "3",
    src: "images/gallery/macarons.png",
    title: "Pastel French Macaron Collection Box 🌸",
    category: "Desserts",
    likes: "194",
    comments: "21"
  },
  {
    id: "4",
    src: "images/gallery/birthday-cake.png",
    title: "Magical Teddy Sleeping Under the Stars 🎂",
    category: "Custom Cakes",
    likes: "312",
    comments: "45"
  },
  {
    id: "5",
    src: "images/products/return-gifts.png",
    title: "Golden Floral Return favor boxes 🎀",
    category: "Return Gifts",
    likes: "156",
    comments: "18"
  },
  {
    id: "6",
    src: "images/products/trousseau-packing.png",
    title: "Ornate Bridesmaid Saree Packing Display 💝",
    category: "Trousseau Packing",
    likes: "284",
    comments: "39"
  }
];

// Order Form values
let orderState = {
  category: "Cakes", 
  theme: "",
  flavor: "Signature Chocolate Truffle 🍫",
  weight: "1.0 Kg",
  date: "",
  message: "",
  packingType: "Suede Basket / Tray 🌸",
  qty: "1 Tray/Box"
};

// Announcement Bubble titles
const bubbleTitle = {
  en: "Event coming up in Ludhiana? 🎂",
  pa: "ਲੁਧਿਆਣਾ ਵਿੱਚ ਕੋਈ ਪ੍ਰੋਗਰਾਮ ਆ ਰਿਹਾ ਹੈ? 🎂",
  hi: "लुधियाना में कोई समारोह आ रहा है? 🎂",
  ur: "لدھیانہ میں کوئی تقریب آ رہی ہے؟ 🎂"
};

const bubbleText = {
  en: "Let's design a custom 100% Eggless Cake or Hamper today!",
  pa: "ਆਓ ਅੱਜ ਹੀ ਬਿਨਾਂ ਅੰਡੇ ਦਾ ਇੱਕ ਖਾਸ ਕੇਕ ਜਾਂ ਤੋਹਫ਼ਾ ਡਿਜ਼ਾਈਨ ਕਰੀਏ!",
  hi: "आइए आज ही स्वादिष्ट अंडा-रहित केक या हैंपर डिजाइन करें!",
  ur: "آئیں آج ہی بغیر انڈے کا شاندار کیک یا ہیمپر آرڈر کریں!"
};

const bubbleBtn = {
  en: "Build custom order",
  pa: "ਆਰਡਰ ਤਿਆਰ ਕਰੋ",
  hi: "ऑर्डर तैयार करें",
  ur: "آرڈر ڈرافٹ کریں"
};

// Initialize everything on load
document.addEventListener("DOMContentLoaded", () => {
  initLanguage();
  initHeaderScroll();
  initMobileNav();
  initTestimonialSlider();
  initGallery();
  initOrderForm();
  initFloatingWidget();
  initClipboardSharing();
  initScrollAnimations();
});

// MULTILINGUAL & RTL ENGINE
function initLanguage() {
  setLanguage(currentLanguage);

  // Click outside lang dropdown handler
  const langBtn = document.getElementById("lang-btn");
  const langDropdown = document.getElementById("lang-dropdown");
  const mobileLangBtn = document.getElementById("mobile-lang-btn");
  const mobileLangDropdown = document.getElementById("mobile-lang-dropdown");

  if (langBtn && langDropdown) {
    langBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      langDropdown.classList.toggle("hidden");
    });
  }

  if (mobileLangBtn && mobileLangDropdown) {
    mobileLangBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      mobileLangDropdown.classList.toggle("hidden");
    });
  }

  document.addEventListener("click", () => {
    if (langDropdown) langDropdown.classList.add("hidden");
    if (mobileLangDropdown) mobileLangDropdown.classList.add("hidden");
  });

  // Handle Desk Dropdown selections
  document.querySelectorAll("[data-lang-select]").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const code = e.currentTarget.getAttribute("data-lang-select");
      setLanguage(code);
    });
  });

  // Handle Mobile Dropdown selections
  document.querySelectorAll("[data-lang-select-mobile]").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const code = e.currentTarget.getAttribute("data-lang-select-mobile");
      setLanguage(code);
    });
  });
}

function setLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem("homebakers_lang", lang);

  const isRtl = lang === "ur";
  document.documentElement.dir = isRtl ? "rtl" : "ltr";
  document.documentElement.lang = lang;

  // Sync fonts and alignment classes
  const bodyWrap = document.getElementById("body-wrapper");
  if (bodyWrap) {
    if (isRtl) {
      bodyWrap.className = "font-serif text-right text-cocoa-900";
    } else {
      bodyWrap.className = "font-sans text-left text-cocoa-900";
    }
  }

  // Update desk language label
  const currentLangLabel = document.getElementById("current-lang-label");
  if (currentLangLabel) {
    const flagMap = { en: "🇬🇧 English", pa: "🌾 ਪੰਜਾਬੀ", hi: "🌸 हिन्दी", ur: "✍️ اردو" };
    currentLangLabel.textContent = flagMap[lang] || flagMap.en;
  }

  // Translate all tags
  document.querySelectorAll("[data-t]").forEach(el => {
    const key = el.getAttribute("data-t");
    const val = translations[lang] && translations[lang][key] ? translations[lang][key] : (translations.en[key] || key);
    
    // Check if element is a placeholder or input
    if (el.tagName === "INPUT" && el.hasAttribute("placeholder")) {
      el.setAttribute("placeholder", val);
    } else {
      el.textContent = val;
    }
  });

  // Specifically sync order form categories with translated values
  updateOrderFormCategoryLabels();
  syncLiveReceipt();
  updateBubbleWidget();
  
  // Re-run lucide icons to keep visual consistency
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// STICKY HEADER
function initHeaderScroll() {
  const header = document.getElementById("main-header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("bg-cream-50/90", "backdrop-blur-md", "border-b", "border-cocoa-101", "shadow-sm", "py-2");
      header.classList.remove("bg-transparent", "py-5");
    } else {
      header.classList.remove("bg-cream-50/90", "backdrop-blur-md", "border-b", "border-cocoa-101", "shadow-sm", "py-2");
      header.classList.add("bg-transparent", "py-5");
    }
  });
}

// NAVIGATION HANDLERS & SMOOTH ANCHORS
function initMobileNav() {
  const menuBtn = document.getElementById("mobile-menu-btn");
  const mobileDrawer = document.getElementById("mobile-drawer");
  const closeBtn = document.getElementById("close-mobile-drawer");

  if (menuBtn && mobileDrawer) {
    menuBtn.addEventListener("click", () => {
      mobileDrawer.classList.remove("hidden");
    });
  }

  if (closeBtn && mobileDrawer) {
    closeBtn.addEventListener("click", () => {
      mobileDrawer.classList.add("hidden");
    });
  }

  // Clicking smooth links
  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute("href").replace("#", "");
      const element = document.getElementById(targetId);
      
      if (mobileDrawer) {
        mobileDrawer.classList.add("hidden");
      }

      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

// TESTIMONIAL SLIDER ENGINE
function initTestimonialSlider() {
  const dotsContainer = document.getElementById("review-dots");
  const textEl = document.getElementById("review-text");
  const nameEl = document.getElementById("review-name");
  const locationEl = document.getElementById("review-location");
  const dateEl = document.getElementById("review-date");
  const ratingEl = document.getElementById("review-rating");

  const prevBtn = document.getElementById("review-prev-btn");
  const nextBtn = document.getElementById("review-next-btn");

  // Create dot buttons
  if (dotsContainer) {
    dotsContainer.innerHTML = "";
    reviews.forEach((_, idx) => {
      const dot = document.createElement("button");
      dot.className = "w-2.5 h-2.5 rounded-full transition-all focus:outline-none bg-cocoa-100 hover:bg-cocoa-200";
      dot.setAttribute("aria-label", `Slide ${idx + 1}`);
      dot.addEventListener("click", () => {
        showReview(idx);
        resetAutoScroll();
      });
      dotsContainer.appendChild(dot);
    });
  }

  function showReview(idx) {
    activeReviewIdx = idx;
    const r = reviews[idx];

    // Build star icons HTML
    let starsHtml = "";
    for (let i = 0; i < r.stars; i++) {
      starsHtml += `<svg class="w-6 h-6 fill-amber-400 stroke-amber-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
    }

    if (textEl) textEl.textContent = `"${r.text}"`;
    if (nameEl) nameEl.textContent = r.name;
    if (locationEl) locationEl.textContent = r.location;
    if (dateEl) dateEl.textContent = r.date;
    if (ratingEl) ratingEl.innerHTML = starsHtml;

    // Highlight dot indicator
    if (dotsContainer) {
      dotsContainer.childNodes.forEach((dot, dIdx) => {
        if (dIdx === idx) {
          dot.className = "w-6 h-2.5 rounded-full transition-all focus:outline-none bg-berry-500";
        } else {
          dot.className = "w-2.5 h-2.5 rounded-full transition-all focus:outline-none bg-cocoa-100 hover:bg-cocoa-200";
        }
      });
    }
  }

  // Handle arrows
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      activeReviewIdx = (activeReviewIdx - 1 + reviews.length) % reviews.length;
      showReview(activeReviewIdx);
      resetAutoScroll();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      activeReviewIdx = (activeReviewIdx + 1) % reviews.length;
      showReview(activeReviewIdx);
      resetAutoScroll();
    });
  }

  // Start auto scrolling
  function startAutoScroll() {
    autoPlayInterval = setInterval(() => {
      activeReviewIdx = (activeReviewIdx + 1) % reviews.length;
      showReview(activeReviewIdx);
    }, 5000);
  }

  function resetAutoScroll() {
    clearInterval(autoPlayInterval);
    startAutoScroll();
  }

  // Setup initial render
  showReview(0);
  startAutoScroll();
}

// GALLERY SECTION & LIGHTBOX CONTROLS
function initGallery() {
  const lightboxOverlay = document.getElementById("lightbox-overlay");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxTitle = document.getElementById("lightbox-title");
  const lightboxCategory = document.getElementById("lightbox-category");
  const lightboxIndex = document.getElementById("lightbox-index");
  const lightboxInquireBtn = document.getElementById("lightbox-inquire-btn");
  
  const lightboxClose = document.getElementById("lightbox-close");
  const lightboxPrev = document.getElementById("lightbox-prev");
  const lightboxNext = document.getElementById("lightbox-next");

  // Hook up hover card clicks to open lightbox
  document.querySelectorAll("[data-gallery-idx]").forEach(card => {
    card.addEventListener("click", (e) => {
      const idx = parseInt(e.currentTarget.getAttribute("data-gallery-idx"), 10);
      openLightbox(idx);
    });
  });

  function openLightbox(idx) {
    activeGalleryIdx = idx;
    const item = galleryItems[idx];
    if (!item) return;

    if (lightboxImg) lightboxImg.src = item.src;
    if (lightboxTitle) lightboxTitle.textContent = item.title;
    if (lightboxCategory) lightboxCategory.textContent = item.category;
    if (lightboxIndex) lightboxIndex.textContent = `${idx + 1} of ${galleryItems.length}`;

    // Dynamic WhatsApp inquiry on specific image
    if (lightboxInquireBtn) {
      const inquiryText = `Hi Home Baker's Ludhiana! 🍓 I saw your beautiful "${item.title}" Instagram lookbook photo and want to inquire about customizable eggless layouts!`;
      lightboxInquireBtn.href = `https://wa.me/917009142146?text=${encodeURIComponent(inquiryText)}`;
    }

    if (lightboxOverlay) {
      lightboxOverlay.classList.remove("hidden");
      lightboxOverlay.classList.add("flex");
      document.body.classList.add("overflow-hidden");
    }
  }

  function closeLightbox() {
    activeGalleryIdx = null;
    if (lightboxOverlay) {
      lightboxOverlay.classList.add("hidden");
      lightboxOverlay.classList.remove("flex");
      document.body.classList.remove("overflow-hidden");
    }
  }

  function navigateLightbox(dir) {
    if (activeGalleryIdx === null) return;
    let nextIdx = activeGalleryIdx + dir;
    if (nextIdx >= galleryItems.length) nextIdx = 0;
    if (nextIdx < 0) nextIdx = galleryItems.length - 1;
    openLightbox(nextIdx);
  }

  // Setup click listeners
  if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
  if (lightboxPrev) lightboxPrev.addEventListener("click", () => navigateLightbox(-1));
  if (lightboxNext) lightboxNext.addEventListener("click", () => navigateLightbox(1));

  // Dismiss on backdrop click
  if (lightboxOverlay) {
    lightboxOverlay.addEventListener("click", (e) => {
      if (e.target === lightboxOverlay) {
        closeLightbox();
      }
    });
  }

  // Key bindings handle
  window.addEventListener("keydown", (e) => {
    if (activeGalleryIdx === null) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") navigateLightbox(1);
    if (e.key === "ArrowLeft") navigateLightbox(-1);
  });
}

// PRODUCT CATALOG INTEGRATED PRE-SELECT
function selectOfferCategory(categoryKey) {
  // Translate category key if needed
  const translatedCategory = translations[currentLanguage][categoryKey] || translations.en[categoryKey] || categoryKey;
  
  // Set category select input value or orderState
  const categorySelector = document.getElementById("order-category-select");
  if (categorySelector) {
    categorySelector.value = translatedCategory;
    orderState.category = translatedCategory;
  }

  // Visual button updates
  document.querySelectorAll("[data-cat-btn]").forEach(btn => {
    const btnValue = btn.getAttribute("data-cat-btn");
    const labelTranslatedValue = translations[currentLanguage][btnValue] || translations.en[btnValue] || btnValue;
    if (labelTranslatedValue === translatedCategory) {
      btn.classList.add("bg-berry-500", "text-cream-50", "border-berry-500", "scale-[1.01]");
      btn.classList.remove("bg-cream-5", "hover:bg-cream-100", "text-cocoa-800", "border-cocoa-150");
    } else {
      btn.classList.remove("bg-berry-500", "text-cream-50", "border-berry-500", "scale-[1.01]");
      btn.classList.add("bg-cream-5", "hover:bg-cream-100", "text-cocoa-800", "border-cocoa-150");
    }
  });

  // Sync inputs toggle
  toggleConditionalInputs(translatedCategory);

  // Sync receipt state
  syncLiveReceipt();

  // Scroll smooth to Inquiry form
  const element = document.getElementById("order-form");
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// ORDER FORM & RECEIPT CONTROLLER
function initOrderForm() {
  const categorySelector = document.getElementById("order-category-select");
  const themeInput = document.getElementById("order-theme-input");
  const flavorSelector = document.getElementById("order-flavor-select");
  const weightInput = document.getElementById("order-weight-input");
  const packingStyleSelector = document.getElementById("order-packing-select");
  const qtyInput = document.getElementById("order-qty-input");
  const dateInput = document.getElementById("order-date-input");
  const msgInput = document.getElementById("order-message-input");
  const waSubmitBtn = document.getElementById("order-submit-wa");

  // Sync state values on input change
  if (categorySelector) {
    categorySelector.addEventListener("change", (e) => {
      orderState.category = e.target.value;
      
      // Update visual category button grids to correspond
      document.querySelectorAll("[data-cat-btn]").forEach(btn => {
        const btnValue = btn.getAttribute("data-cat-btn");
        const transVal = translations[currentLanguage][btnValue] || translations.en[btnValue] || btnValue;
        if (transVal === orderState.category) {
          btn.classList.add("bg-berry-500", "text-cream-50", "border-berry-500");
          btn.classList.remove("bg-cream-5", "hover:bg-cream-100", "text-cocoa-800", "border-cocoa-150");
        } else {
          btn.classList.remove("bg-berry-500", "text-cream-50", "border-berry-500");
          btn.classList.add("bg-cream-5", "hover:bg-cream-100", "text-cocoa-800", "border-cocoa-150");
        }
      });

      toggleConditionalInputs(orderState.category);
      syncLiveReceipt();
    });
  }

  // Hook-up grid category selector buttons directly
  document.querySelectorAll("[data-cat-btn]").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const btnValue = e.currentTarget.getAttribute("data-cat-btn");
      const translatedValue = translations[currentLanguage][btnValue] || translations.en[btnValue] || btnValue;
      
      if (categorySelector) {
        categorySelector.value = translatedValue;
      }
      orderState.category = translatedValue;

      document.querySelectorAll("[data-cat-btn]").forEach(b => {
        b.classList.remove("bg-berry-500", "text-cream-50", "border-berry-500", "scale-[1.01]");
        b.classList.add("bg-cream-5", "hover:bg-cream-100", "text-cocoa-800", "border-cocoa-150");
      });
      e.currentTarget.classList.add("bg-berry-500", "text-cream-50", "border-berry-500", "scale-[1.01]");
      e.currentTarget.classList.remove("bg-cream-5", "hover:bg-cream-100", "text-cocoa-800", "border-cocoa-150");

      toggleConditionalInputs(orderState.category);
      syncLiveReceipt();
    });
  });

  if (themeInput) {
    themeInput.addEventListener("input", (e) => {
      orderState.theme = e.target.value;
      syncLiveReceipt();
    });
  }

  if (flavorSelector) {
    flavorSelector.addEventListener("change", (e) => {
      orderState.flavor = e.target.value;
      syncLiveReceipt();
    });
  }

  if (weightInput) {
    weightInput.addEventListener("input", (e) => {
      orderState.weight = e.target.value;
      syncLiveReceipt();
    });
  }

  if (packingStyleSelector) {
    packingStyleSelector.addEventListener("change", (e) => {
      orderState.packingType = e.target.value;
      syncLiveReceipt();
    });
  }

  if (qtyInput) {
    qtyInput.addEventListener("input", (e) => {
      orderState.qty = e.target.value;
      syncLiveReceipt();
    });
  }

  if (dateInput) {
    dateInput.addEventListener("change", (e) => {
      orderState.date = e.target.value;
      syncLiveReceipt();
    });
  }

  if (msgInput) {
    msgInput.addEventListener("input", (e) => {
      orderState.message = e.target.value;
      syncLiveReceipt();
    });
  }

  // Launch pre-calculated receipt as WhatsApp link on inquiry click
  if (waSubmitBtn) {
    waSubmitBtn.addEventListener("click", (e) => {
      const waText = generateWhatsAppInquiryCopy();
      waSubmitBtn.href = `https://wa.me/917009142146?text=${encodeURIComponent(waText)}`;
    });
  }

  // Run initial state calculation
  toggleConditionalInputs(orderState.category);
  syncLiveReceipt();
}

// Filter fields dynamically depending on Custom Cake Selection
function toggleConditionalInputs(category) {
  const cakeFields = document.getElementById("cake-conditional-fields");
  const nonCakeFields = document.getElementById("non-cake-conditional-fields");

  const isCake = category.includes("Cakes") || category.includes("🎂") || category === "Custom Cakes";

  if (isCake) {
    if (cakeFields) cakeFields.classList.remove("hidden");
    if (nonCakeFields) nonCakeFields.classList.add("hidden");
  } else {
    if (cakeFields) cakeFields.classList.add("hidden");
    if (nonCakeFields) nonCakeFields.classList.remove("hidden");
  }
}

// Live Receipt state compiler
function syncLiveReceipt() {
  const isCake = orderState.category.includes("Cakes") || orderState.category.includes("🎂") || orderState.category === "Custom Cakes" || orderState.category === "🎂 Custom Cakes";

  const recCat = document.getElementById("receipt-val-category");
  const recThemeRow = document.getElementById("receipt-row-theme");
  const recThemeVal = document.getElementById("receipt-val-theme");
  
  const recStyleRow = document.getElementById("receipt-row-style");
  const recStyleVal = document.getElementById("receipt-val-style");

  const recSpecRow = document.getElementById("receipt-row-spec");
  const recSpecLabel = document.getElementById("receipt-label-spec");
  const recSpecVal = document.getElementById("receipt-val-spec");

  const recDateRow = document.getElementById("receipt-row-date");
  const recDateVal = document.getElementById("receipt-val-date");

  const recMsgRow = document.getElementById("receipt-row-message");
  const recMsgVal = document.getElementById("receipt-val-message");

  if (recCat) recCat.textContent = orderState.category;

  if (orderState.theme) {
    if (recThemeRow) recThemeRow.classList.remove("hidden");
    if (recThemeVal) recThemeVal.textContent = orderState.theme;
  } else {
    if (recThemeRow) recThemeRow.classList.add("hidden");
  }

  if (isCake) {
    // Show Flavor & Weight options
    if (recStyleRow) recStyleRow.classList.remove("hidden");
    if (recStyleVal) {
      recStyleVal.textContent = orderState.flavor;
      const label = document.getElementById("receipt-label-style");
      if (label) label.textContent = "FLAVOR TYPE:";
    }

    if (recSpecRow) recSpecRow.classList.remove("hidden");
    if (recSpecLabel) recSpecLabel.textContent = "ESTIMATED WEIGHT:";
    if (recSpecVal) recSpecVal.textContent = orderState.weight ? orderState.weight : "1.0 Kg";
  } else {
    // Show Packing style & Quantities options
    if (recStyleRow) recStyleRow.classList.remove("hidden");
    if (recStyleVal) {
      recStyleVal.textContent = orderState.packingType;
      const label = document.getElementById("receipt-label-style");
      if (label) label.textContent = "PACKING STYLE:";
    }

    if (recSpecRow) recSpecRow.classList.remove("hidden");
    if (recSpecLabel) recSpecLabel.textContent = "QUANTITY SPEC:";
    if (recSpecVal) recSpecVal.textContent = orderState.qty ? orderState.qty : "1 Tray/Box";
  }

  if (orderState.date) {
    if (recDateRow) recDateRow.classList.remove("hidden");
    if (recDateVal) recDateVal.textContent = orderState.date;
  } else {
    if (recDateRow) recDateRow.classList.add("hidden");
  }

  if (orderState.message) {
    if (recMsgRow) recMsgRow.classList.remove("hidden");
    if (recMsgVal) recMsgVal.textContent = `"${orderState.message}"`;
  } else {
    if (recMsgRow) recMsgRow.classList.add("hidden");
  }
}

// Outline formatter for WhatsApp text
function generateWhatsAppInquiryCopy() {
  const isCake = orderState.category.includes("Cakes") || orderState.category.includes("🎂") || orderState.category === "Custom Cakes";

  let msg = `Hi Home Baker's Ludhiana! ❤️ *Eggless Order Inquiry*\n\n`;
  msg += `*🛍️ Category:* ${orderState.category}\n`;
  
  if (orderState.theme) {
    msg += `*🎈 Occasion/Theme:* ${orderState.theme}\n`;
  }

  if (isCake) {
    msg += `*🍰 Flavor Choice:* ${orderState.flavor}\n`;
    msg += `*⚖️ Estimated Weight:* ${orderState.weight || '1.0 Kg'}\n`;
  } else {
    msg += `*📦 Packing Style:* ${orderState.packingType}\n`;
    msg += `*🔢 Custom Quantity:* ${orderState.qty || '1 Tray/Box'}\n`;
  }

  if (orderState.date) {
    msg += `*📅 Delivery / Pick-up Date:* ${orderState.date}\n`;
  }

  if (orderState.message) {
    msg += `*✍️ Message on Cake / Card:* "${orderState.message}"\n`;
  }

  msg += `\n_Catalog Reference URL: homebakersguide.com_`;
  msg += `\n\nPlease let me know scheduling availability and cost estimate. Thanks!`;
  return msg;
}

// Dyn sync category lists on language transition
function updateOrderFormCategoryLabels() {
  const categorySelector = document.getElementById("order-category-select");
  if (!categorySelector) return;

  const cats = [
    translations[currentLanguage].itemCustomCakesTitle || translations.en.itemCustomCakesTitle,
    translations[currentLanguage].itemGiftHampersTitle || translations.en.itemGiftHampersTitle,
    translations[currentLanguage].itemReturnGiftsTitle || translations.en.itemReturnGiftsTitle,
    translations[currentLanguage].itemTrousseauTitle || translations.en.itemTrousseauTitle
  ];

  // Store active selection index
  const activeIdx = categorySelector.selectedIndex >= 0 ? categorySelector.selectedIndex : 0;

  categorySelector.innerHTML = "";
  cats.forEach(c => {
    const opt = document.createElement("option");
    opt.value = c;
    opt.textContent = c;
    categorySelector.appendChild(opt);
  });

  categorySelector.selectedIndex = activeIdx;
  orderState.category = cats[activeIdx];

  // Sync category select buttons trans texts
  document.querySelectorAll("[data-cat-btn]").forEach(b => {
    const rawVal = b.getAttribute("data-cat-btn");
    const transText = translations[currentLanguage][rawVal] || translations.en[rawVal] || rawVal;
    b.textContent = transText;
  });
}

// FLOATING WIDGET CHAT BUBBLE ENGINE
function initFloatingWidget() {
  const bubble = document.getElementById("whatsapp-bubble");
  const closeBubble = document.getElementById("close-bubble");
  const scrollBtn = document.getElementById("scroll-top-btn");

  if (closeBubble && bubble) {
    closeBubble.addEventListener("click", (e) => {
      e.stopPropagation();
      bubble.classList.add("hidden");
    });
  }

  if (scrollBtn) {
    scrollBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  updateBubbleWidget();
}

function updateBubbleWidget() {
  const bTitle = document.getElementById("bubble-title");
  const bText = document.getElementById("bubble-text");
  const bBtn = document.getElementById("bubble-action-btn");

  if (bTitle) bTitle.textContent = bubbleTitle[currentLanguage] || bubbleTitle.en;
  if (bText) bText.textContent = bubbleText[currentLanguage] || bubbleText.en;
  if (bBtn) bBtn.textContent = bubbleBtn[currentLanguage] || bubbleBtn.en;
}

// CLIPBOARD CATALOG SHARING UTILITY
function initClipboardSharing() {
  document.querySelectorAll("[data-copy-id]").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const prodId = e.currentTarget.getAttribute("data-copy-id");
      const shareUrl = `${window.location.origin}${window.location.pathname}#${prodId}`;
      
      navigator.clipboard.writeText(shareUrl).then(() => {
        // Toggle copied feedback banner
        const originalText = e.currentTarget.innerHTML;
        const copiedTerm = translations[currentLanguage].catalogShareCopied || "Copied Link!";
        e.currentTarget.innerHTML = `
          <svg class="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
          <span>${copiedTerm}</span>
        `;
        e.currentTarget.classList.add("bg-emerald-500", "text-white", "border-emerald-500");

        setTimeout(() => {
          e.currentTarget.innerHTML = originalText;
          e.currentTarget.classList.remove("bg-emerald-500", "text-white", "border-emerald-500");
          if (window.lucide) window.lucide.createIcons();
        }, 2000);
      });
    });
  });
}

// PREMIUM SCROLL REVEAL INTERSECTION OBSERVER SETUP
function initScrollAnimations() {
  const elements = document.querySelectorAll(".scroll-reveal");
  if (!elements.length) return;

  // Gracefully fallback if Interaction Observer is not present
  if (!("IntersectionObserver" in window)) {
    elements.forEach(el => el.classList.add("active"));
    return;
  }

  const observerOptions = {
    root: null,
    rootMargin: "0px 0px -100px 0px", // Trigger when elements enter 100px above viewport bottom
    threshold: 0.08
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        obs.unobserve(entry.target); // Trigger only once for a smooth visual entry
      }
    });
  }, observerOptions);

  elements.forEach(el => observer.observe(el));
}
