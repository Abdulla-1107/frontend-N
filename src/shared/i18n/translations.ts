export type Lang = "uz" | "en" | "ru";

export const translations = {
  // Nav
  "nav.home": { uz: "Bosh sahifa", en: "Home", ru: "Главная" },
  "nav.products": { uz: "Mahsulotlar", en: "Products", ru: "Продукты" },
  "nav.about": { uz: "Biz haqimizda", en: "About", ru: "О нас" },
  "nav.contact": { uz: "Aloqa", en: "Contact", ru: "Контакты" },

  // Hero
  "hero.subtitle": {
    uz: "Har bir naqsh - Meros, Har bir buyum - hikoya",
    en: "Handcrafted luxury",
    ru: "Роскошь ручной работы",
  },
  "hero.title1": {
    uz: "Ipak va san'at —",
    en: "Silk & Art —",
    ru: "Шёлк и искусство —",
  },
  "hero.desc": {
    uz: "Har bir dasturxon — 70% ipak va 30% paxta tolasidan qo'lda to'qilingan mato,mashhur rassomlar tomonidan miniatura san'ati chizilgan va u qo'l kashtasi bilan bezatilgan. KASHTAGA IPAK IPLAR BILAN KASHTA SOLINADI",
    en: "Each tablecloth is handwoven from 70% silk and 30% cotton, adorned with miniature art — a unique masterpiece.",
    ru: "Каждая скатерть соткана вручную из 70% шёлка и 30% хлопка, украшенная миниатюрным искусством — уникальное произведение.",
  },
  "hero.cta": {
    uz: "Mahsulotlarni ko'rish",
    en: "View Products",
    ru: "Смотреть продукты",
  },
  "hero.badge1": {
    uz: "100% qo'lda",
    en: "100% Handmade",
    ru: "100% ручная работа",
  },
  "hero.badge2": {
    uz: "70% ipak",
    en: "70% Silk",
    ru: "70% шёлк",
  },
  "hero.badge3": {
    uz: "Miniatura san'ati",
    en: "Miniature Art",
    ru: "Миниатюрное искусство",
  },

  // Brand story
  "story.title1": { uz: "An'ana va", en: "Tradition &", ru: "Традиции и" },
  "story.title2": { uz: "zarafat", en: "elegance", ru: "изящество" },
  "story.p1": {
    uz: "Naqshizarr brendi o'zbek qo'l hunarmandchiligining eng nozik namunalarini yaratadi. Har bir dasturxon ustida tajribali ustalar oylab mehnat qiladi — ipak tolalarini sinchiklab  kashta tikilinadi, an'anaviy miniatura tasvirlarini chizadi.",
    en: "The Naqshizarr brand creates the finest examples of Uzbek handcraft. Skilled artisans work for weeks on each tablecloth — meticulously weaving silk fibers and painting traditional miniature art.",
    ru: "Бренд Naqshizarr создаёт лучшие образцы узбекского ремесла. Опытные мастера неделями трудятся над каждой скатертью — тщательно ткут шёлковые волокна и рисуют традиционные миниатюры.",
  },
  "story.p2": {
    uz: "Natija — uy bezagini yangi bosqichga olib chiqadigan, avloddan-avlodga o'tadigan san'at asari.",
    en: "The result — a work of art that elevates home décor, passed down from generation to generation.",
    ru: "Результат — произведение искусства, которое преображает интерьер и передаётся из поколения в поколение.",
  },

  // Features
  "feature.handmade": { uz: "100% qo'lda", en: "100% Handmade", ru: "100% ручная" },
  "feature.handmade.desc": { uz: "Har bir tikuv — usta qo'li bilan", en: "Every stitch — by artisan hands", ru: "Каждый стежок — руками мастера" },
  "feature.silk": { uz: "70% ipak", en: "70% Silk", ru: "70% шёлк" },
  "feature.silk.desc": { uz: "Eng sifatli tabiiy tolalar", en: "Finest natural fibers", ru: "Лучшие натуральные волокна" },
  "feature.art": { uz: "Miniatura san'ati", en: "Miniature Art", ru: "Миниатюры" },
  "feature.art.desc": { uz: "An'anaviy o'zbek naqshlari", en: "Traditional Uzbek patterns", ru: "Традиционные узбекские узоры" },

  // Featured products
  "featured.title1": { uz: "Tanlangan", en: "Featured", ru: "Избранные" },
  "featured.title2": { uz: "mahsulotlar", en: "products", ru: "продукты" },
  "featured.subtitle": {
    uz: "Eng mashhur qo'lda tayyorlangan mahsulotlarimiz",
    en: "Our most popular handmade tablecloths",
    ru: "Наши самые популярные скатерти ручной работы",
  },
  "featured.viewAll": { uz: "Barcha mahsulotlar", en: "All Products", ru: "Все продукты" },
  "featured.empty": { uz: "Mahsulotlar topilmadi", en: "No products found", ru: "Продукты не найдены" },

  // Products page
  "products.title": { uz: "Mahsulotlar", en: "Products", ru: "Продукты" },
  "products.subtitle": {
    uz: "Qo'lda tayyorlangan sifatli mahsulotlar",
    en: "Unique handcrafted silk tablecloths",
    ru: "Уникальные шёлковые скатерти ручной работы",
  },
  "products.error": {
    uz: "Mahsulotlarni yuklashda xatolik yuz berdi.",
    en: "Failed to load products.",
    ru: "Ошибка загрузки продуктов.",
  },
  "products.empty": { uz: "Mahsulotlar topilmadi", en: "No products found", ru: "Продукты не найдены" },

  // Product detail
  "detail.back": { uz: "Mahsulotlarga qaytish", en: "Back to products", ru: "Назад к продуктам" },
  "detail.notFound": { uz: "Mahsulot topilmadi.", en: "Product not found.", ru: "Продукт не найден." },
  "detail.back2": { uz: "Orqaga", en: "Go back", ru: "Назад" },
  "detail.qty": { uz: "Miqdor:", en: "Quantity:", ru: "Количество:" },
  "detail.order": { uz: "Buyurtma berish", en: "Place Order", ru: "Заказать" },
  "detail.currency": { uz: "so'm", en: "so'm", ru: "сум" },

  // Order modal
  "order.title": { uz: "Buyurtma berish", en: "Place Order", ru: "Оформить заказ" },
  "order.fullName": { uz: "To'liq ism *", en: "Full name *", ru: "Полное имя *" },
  "order.fullNamePh": { uz: "Ism Familiya", en: "First Last", ru: "Имя Фамилия" },
  "order.phone": { uz: "Telefon *", en: "Phone *", ru: "Телефон *" },
  "order.phonePh": { uz: "+998 90 123 45 67", en: "+998 90 123 45 67", ru: "+998 90 123 45 67" },
  "order.address": { uz: "Manzil *", en: "Address *", ru: "Адрес *" },
  "order.addressPh": { uz: "Yetkazib berish manzili", en: "Delivery address", ru: "Адрес доставки" },
  "order.email": { uz: "Email", en: "Email", ru: "Email" },
  "order.emailPh": { uz: "email@example.com", en: "email@example.com", ru: "email@example.com" },
  "order.oferta": {
    uz: "Oferta shartlarini qabul qilaman",
    en: "I accept the terms of the offer",
    ru: "Я принимаю условия оферты",
  },
  "order.submit": { uz: "Buyurtma berish", en: "Place Order", ru: "Оформить заказ" },
  "order.success": { uz: "Buyurtmangiz qabul qilindi!", en: "Your order has been placed!", ru: "Ваш заказ принят!" },
  "order.error": {
    uz: "Xatolik yuz berdi. Qayta urinib ko'ring.",
    en: "An error occurred. Please try again.",
    ru: "Произошла ошибка. Попробуйте снова.",
  },

  // About page
  "about.title": { uz: "haqida", en: "About", ru: "О бренде" },
  "about.subtitle": {
    uz: "Biz O'zbekistonning boy hunarmandchilik an'analarini zamonaviy hayotga olib kiramiz. Har bir mahsulotimiz — bu avlodlar tajribasining noyob ifodasi. Naqshizarr bu — oddiy buyumni san'at va moqom ramziga aylantirish",
    en: "We bring the rich craft traditions of Uzbekistan into modern life. Every product is a unique expression of generational expertise.",
    ru: "Мы привносим богатые ремесленные традиции Узбекистана в современную жизнь. Каждый продукт — уникальное выражение многовекового опыта.",
  },
  "about.handmade": { uz: "Qo'l mehnati", en: "Handcraft", ru: "Ручной труд" },
  "about.handmade.desc": {
    uz: "Har bir dasturxon tajribali usta tomonidan oylab qo'lda tayyorlanadi.",
    en: "Each tablecloth is handcrafted by skilled artisans over weeks. No machines are used.",
    ru: "Каждая скатерть изготавливается вручную опытными мастерами в течение недель. Никаких машин.",
  },
  "about.fiber": { uz: "Tola sifati", en: "Fiber Quality", ru: "Качество волокна" },
  "about.fiber.desc": {
    uz: "70% tabiiy ipak va 30% yuqori navli paxta — nafislik va mustahkamlikning mukammal uyg'unligi.",
    en: "70% natural silk and 30% premium cotton — a perfect blend of elegance and durability.",
    ru: "70% натурального шёлка и 30% хлопка премиум-класса — идеальное сочетание элегантности и прочности.",
  },
  "about.miniature": { uz: "Miniatura san'ati", en: "Miniature Art", ru: "Миниатюрное искусство" },
  "about.miniature.desc": {
    uz: "O'zbek miniatura tasvirlari qadimiy uslubda qo'lda chiziladi — har bir naqsh o'ziga xos hikoya.",
    en: "Uzbek miniature paintings are hand-drawn in ancient style — each pattern tells a unique story.",
    ru: "Узбекские миниатюры рисуются вручную в древнем стиле — каждый узор рассказывает свою историю.",
  },
  "about.philosophy": { uz: "Falsafa", en: "Philosophy", ru: "Философия" },
  "about.philosophy.desc": {
    uz: "Naqshizarr vaqt va trenddan mustaqil milliy kashtachilik va san'at orqali hamisha global ruhiy darajasida yetakchi bo'lish takrorlanmas va doimiy qadrlanadigan brend bo'lish, o'z mahsulotlari bilan tarix zarvaraqlarida qolish",
    en: "We strive to preserve and share with the world the art of true handcraftsmanship, rare in today's world.",
    ru: "Мы стремимся сохранить и представить миру настоящее ремесло ручной работы, редкое в наши дни.",
  },

  // Contact page
  "contact.title": { uz: "Aloqa", en: "Contact", ru: "Контакты" },
  "contact.subtitle": {
    uz: "Savollaringiz bormi? Biz bilan bog'laning",
    en: "Have questions? Get in touch with us",
    ru: "Есть вопросы? Свяжитесь с нами",
  },
  "contact.addressLabel": { uz: "Manzil", en: "Address", ru: "Адрес" },
  "contact.addressValue": { uz: "Toshkent, O'zbekiston", en: "Tashkent, Uzbekistan", ru: "Ташкент, Узбекистан" },
  "contact.phoneLabel": { uz: "Telefon", en: "Phone", ru: "Телефон" },
  "contact.emailLabel": { uz: "Email", en: "Email", ru: "Email" },
  "contact.name": { uz: "Ism *", en: "Name *", ru: "Имя *" },
  "contact.phone": { uz: "Telefon *", en: "Phone *", ru: "Телефон *" },
  "contact.email": { uz: "Email *", en: "Email *", ru: "Email *" },
  "contact.message": { uz: "Xabar *", en: "Message *", ru: "Сообщение *" },
  "contact.send": { uz: "Yuborish", en: "Send", ru: "Отправить" },
  "contact.success": { uz: "Xabaringiz yuborildi!", en: "Message sent!", ru: "Сообщение отправлено!" },
  "contact.error": {
    uz: "Xatolik yuz berdi. Qayta urinib ko'ring.",
    en: "An error occurred. Please try again.",
    ru: "Произошла ошибка. Попробуйте снова.",
  },

  // Footer
  "footer.desc": {
    uz: "Qo'lda tayyorlangan hashamatli dasturxonlar — ipak va paxta, miniatura san'ati va an'anaviy kashtachilik.",
    en: "Handcrafted luxury tablecloths — silk and cotton, miniature art and traditional embroidery.",
    ru: "Роскошные скатерти ручной работы — шёлк и хлопок, миниатюрное искусство и традиционная вышивка.",
  },
  "footer.pages": { uz: "Sahifalar", en: "Pages", ru: "Страницы" },
  "footer.contactTitle": { uz: "Bog'lanish", en: "Contact", ru: "Контакты" },
  "footer.phone": { uz: "Telefon:", en: "Phone:", ru: "Телефон:" },
  "footer.rights": {
    uz: "Barcha huquqlar himoyalangan.",
    en: "All rights reserved.",
    ru: "Все права защищены.",
  },
} as const;

export type TranslationKey = keyof typeof translations;
