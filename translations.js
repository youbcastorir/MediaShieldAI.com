// translations.js - MediaShield AI Manuscripts
const TRANSLATIONS = {
  ar: {
    dir: "rtl",
    lang: "ar",
    nav: {
      home: "الرئيسية",
      services: "الخدمات",
      process: "آلية العمل",
      pricing: "الأسعار",
      portfolio: "الأعمال",
      testimonials: "الشهادات",
      faq: "الأسئلة الشائعة",
      blog: "المدونة",
      contact: "تواصل معنا"
    },
    hero: {
      badge: "خدمات المخطوطات العربية",
      title: "تحقيق ورقمنة",
      titleHighlight: "المخطوطات العربية",
      subtitle: "نحوّل مخطوطاتكم النفيسة إلى نصوص رقمية دقيقة ومحققة وفق أعلى المعايير الأكاديمية",
      cta1: "ابدأ مشروعك",
      cta2: "تواصل عبر واتساب",
      stat1: "مخطوطة محققة",
      stat2: "باحث موثوق",
      stat3: "دقة التفريغ",
      stat4: "جامعة شريكة"
    },
    services: {
      title: "خدماتنا المتخصصة",
      subtitle: "نقدم حلولاً شاملة لتحقيق المخطوطات العربية وحفظ التراث",
      items: [
        {
          icon: "📜",
          title: "تفريغ المخطوطات",
          desc: "نسخ المخطوطات العربية المكتوبة بخط اليد بدقة عالية، سواء كانت وثائق تاريخية أو كتباً قديمة أو أرشيفات شخصية.",
          features: ["مخطوطات عربية مكتوبة بخط اليد", "وثائق تاريخية نادرة", "كتب قديمة وأرشيفات", "مخطوطات مغربية وأندلسية"]
        },
        {
          icon: "📄",
          title: "تحويل إلى وورد",
          desc: "تحويل المخطوطات إلى ملفات Word قابلة للتحرير مع التنسيق الأكاديمي الاحترافي.",
          features: ["ملفات DOCX قابلة للتحرير", "تنسيق أكاديمي متكامل", "دعم اللغة العربية RTL", "تخطيط احترافي"]
        },
        {
          icon: "🔍",
          title: "تحويل إلى PDF",
          desc: "إنشاء ملفات PDF قابلة للبحث بطباعة نظيفة ومناسبة للأرشفة.",
          features: ["PDF قابل للبحث", "طباعة نظيفة واحترافية", "جودة أرشيفية", "فهارس وعناوين"]
        },
        {
          icon: "✒️",
          title: "التحقيق العلمي",
          desc: "تحقيق النصوص التراثية وفق المنهج العلمي الأكاديمي مع الهوامش والمصادر.",
          features: ["التحقق من النصوص", "إعداد الهوامش العلمية", "توثيق المصادر والمراجع", "مراجعة أكاديمية متكاملة"]
        },
        {
          icon: "🤖",
          title: "معالجة OCR والذكاء الاصطناعي",
          desc: "استخدام أحدث تقنيات التعرف الضوئي على الحروف والذكاء الاصطناعي لاستخراج النصوص.",
          features: ["تعرف ضوئي على الحروف", "استخراج نصوص بالذكاء الاصطناعي", "تحقق يدوي دقيق", "ضبط الجودة"]
        },
        {
          icon: "🏛️",
          title: "الأرشفة الرقمية",
          desc: "حفظ الموروث الثقافي ورقمنة مقتنيات المكتبات والأرشيفات التاريخية.",
          features: ["حفظ التراث الرقمي", "رقمنة مقتنيات المكتبات", "فهرسة الوثائق", "صون الموروث الثقافي"]
        }
      ]
    },
    process: {
      title: "آلية العمل",
      subtitle: "نتبع منهجية علمية صارمة لضمان أعلى مستوى من الدقة والجودة",
      steps: [
        { num: "01", title: "استلام المخطوطة", desc: "نستلم نسخة المخطوطة رقمياً أو نرسل فريقنا لمسحها ضوئياً بأعلى دقة." },
        { num: "02", title: "التفريغ الأولي", desc: "يقوم فريقنا المتخصص بتفريغ النص العربي باستخدام تقنيات OCR المتقدمة." },
        { num: "03", title: "المراجعة العلمية", desc: "يراجع علماؤنا المتخصصون كل كلمة ويتحقق منها وفق المنهج العلمي." },
        { num: "04", title: "التحقيق والتوثيق", desc: "نضيف الهوامش والتوثيقات العلمية ونوثق المصادر والمراجع." },
        { num: "05", title: "تنسيق الملف النهائي", desc: "نسلمكم الملف بالصيغة المطلوبة (Word أو PDF) مع تنسيق احترافي." },
        { num: "06", title: "ضبط الجودة", desc: "مراجعة نهائية شاملة للتأكد من دقة النص وجودة التنسيق قبل التسليم." }
      ]
    },
    pricing: {
      title: "باقات الأسعار",
      subtitle: "أسعار تنافسية مع ضمان أعلى جودة أكاديمية",
      plans: [
        {
          name: "الباقة الأساسية",
          price: "تواصل معنا",
          desc: "للمخطوطات البسيطة",
          features: ["تفريغ نصي أساسي", "تنسيق Word أو PDF", "مراجعة مرة واحدة", "تسليم خلال 7 أيام"],
          cta: "اطلب الآن"
        },
        {
          name: "الباقة الاحترافية",
          price: "تواصل معنا",
          desc: "للمشاريع الأكاديمية",
          features: ["تفريغ نصي متكامل", "تحقيق علمي أولي", "هوامش وتوثيق", "تسليم خلال 14 يوماً", "مراجعتان مجانيتان"],
          cta: "اطلب الآن",
          featured: true
        },
        {
          name: "باقة التحقيق الكامل",
          price: "تواصل معنا",
          desc: "للأطروحات والكتب",
          features: ["تحقيق علمي كامل", "هوامش تفصيلية", "مقابلة المصادر", "فهارس متكاملة", "مراجعات غير محدودة", "دعم ما بعد التسليم"],
          cta: "اطلب الآن"
        }
      ]
    },
    testimonials: {
      title: "شهادات العملاء",
      subtitle: "ما يقوله الباحثون والأكاديميون عن خدماتنا",
      items: [
        { name: "د. محمد العلوي", role: "أستاذ جامعي، المغرب", text: "خدمة استثنائية في تفريغ المخطوطات. الدقة والاحترافية تتجاوز كل التوقعات. أنصح بها كل باحث في التراث." },
        { name: "د. فاطمة الزهراء", role: "باحثة دكتوراه، مصر", text: "ساعدتني MediaShield في تحقيق مخطوطتي ضمن الإطار الزمني المحدد. جودة العمل رائعة وفريق العمل متعاون جداً." },
        { name: "أ. عبد الرحمن الحسني", role: "مدير مكتبة، الرباط", text: "نتعاون معهم في رقمنة مقتنيات مكتبتنا منذ سنتين. العمل دقيق ومتقن وفق أعلى المعايير الأرشيفية." },
        { name: "Prof. James Mitchell", role: "باحث في الدراسات الإسلامية، بريطانيا", text: "Exceptional service for Arabic manuscript transcription. The team's expertise in classical Arabic is remarkable." }
      ]
    },
    faq: {
      title: "الأسئلة الشائعة",
      subtitle: "إجابات على أكثر الأسئلة شيوعاً حول خدماتنا",
      items: [
        { q: "كيف أرسل المخطوطة؟", a: "يمكنك إرسال صور عالية الدقة للمخطوطة عبر البريد الإلكتروني أو واتساب، أو رفعها على منصات التخزين السحابي. نقبل جميع صيغ الصور الشائعة." },
        { q: "كم تستغرق مدة التفريغ؟", a: "تعتمد المدة على حجم المخطوطة ودرجة تعقيدها. عادةً ما يستغرق تفريغ 100 صفحة بين 7 إلى 14 يوماً. نلتزم دائماً بالمواعيد المحددة." },
        { q: "هل تضمنون سرية المخطوطات؟", a: "نعم، نلتزم تماماً بسرية جميع المخطوطات والوثائق. نوقع اتفاقية عدم إفصاح مع كل عميل ونحمي ملكيتهم الفكرية." },
        { q: "ما هي أنواع المخطوطات التي تعملون عليها؟", a: "نعمل على جميع أنواع المخطوطات العربية: المخطوطات الدينية، الفلسفية، العلمية، الأدبية، الطبية، التاريخية والقانونية." },
        { q: "هل تقدمون خدمة التحقيق العلمي الكامل؟", a: "نعم، نقدم خدمة التحقيق العلمي الكامل التي تشمل: التفريغ الدقيق، الهوامش العلمية، توثيق المصادر، الفهارس المتكاملة وفق المنهج الأكاديمي المعتمد." },
        { q: "هل تعملون مع الجامعات والمؤسسات الثقافية؟", a: "نعم، لدينا شراكات مع عدد من الجامعات والمكتبات والمؤسسات الثقافية في المغرب والدول العربية. نقدم أسعاراً خاصة للمؤسسات." }
      ]
    },
    blog: {
      title: "المدونة الأكاديمية",
      subtitle: "مقالات ودراسات متخصصة في علم المخطوطات والتراث العربي",
      readMore: "اقرأ المزيد"
    },
    contact: {
      title: "تواصل معنا",
      subtitle: "نحن هنا لمساعدتكم في تحقيق مخطوطاتكم",
      whatsapp: "واتساب",
      email: "البريد الإلكتروني",
      phone: "+212612605737",
      emailAddr: "salatrir@gmail.com",
      form: {
        name: "الاسم الكامل",
        email: "البريد الإلكتروني",
        service: "الخدمة المطلوبة",
        message: "تفاصيل المشروع",
        submit: "إرسال الطلب"
      }
    },
    footer: {
      desc: "خدمات متخصصة في تحقيق المخطوطات العربية ورقمنتها وتفريغها وفق أعلى المعايير الأكاديمية.",
      links: "روابط سريعة",
      services: "الخدمات",
      contact: "تواصل معنا",
      rights: "جميع الحقوق محفوظة"
    },
    trust: {
      title: "لماذا تختار MediaShield AI؟",
      items: [
        { icon: "🎓", title: "خبرة أكاديمية", desc: "فريق من المتخصصين في علم المخطوطات والدراسات الإسلامية" },
        { icon: "🔒", title: "سرية تامة", desc: "نوقع اتفاقية عدم إفصاح مع كل عميل لحماية مقتنياته" },
        { icon: "✅", title: "ضمان الجودة", desc: "مراجعة ثلاثية متكاملة قبل تسليم كل عمل" },
        { icon: "⚡", title: "التزام بالمواعيد", desc: "نلتزم دائماً بالمواعيد المحددة مع أعلى معايير الجودة" }
      ]
    }
  },
  fr: {
    dir: "ltr",
    lang: "fr",
    nav: {
      home: "Accueil",
      services: "Services",
      process: "Processus",
      pricing: "Tarifs",
      portfolio: "Portfolio",
      testimonials: "Témoignages",
      faq: "FAQ",
      blog: "Blog",
      contact: "Contact"
    },
    hero: {
      badge: "Services de Manuscrits Arabes",
      title: "Transcription & Numérisation",
      titleHighlight: "de Manuscrits Arabes",
      subtitle: "Nous transformons vos précieux manuscrits en textes numériques précis, édités selon les plus hauts standards académiques",
      cta1: "Démarrer votre projet",
      cta2: "WhatsApp",
      stat1: "Manuscrits traités",
      stat2: "Chercheurs satisfaits",
      stat3: "Précision garantie",
      stat4: "Universités partenaires"
    },
    services: {
      title: "Nos Services Spécialisés",
      subtitle: "Solutions complètes pour la transcription et la préservation des manuscrits arabes",
      items: [
        { icon: "📜", title: "Transcription de Manuscrits", desc: "Transcription précise de manuscrits arabes écrits à la main, documents historiques, anciens livres et archives personnelles.", features: ["Manuscrits arabes calligraphiés", "Documents historiques rares", "Anciens livres et archives", "Manuscrits maghrébo-andalous"] },
        { icon: "📄", title: "Conversion en Word", desc: "Conversion des manuscrits en fichiers Word éditables avec mise en page académique professionnelle.", features: ["Fichiers DOCX éditables", "Mise en page académique", "Support RTL arabe", "Format professionnel"] },
        { icon: "🔍", title: "Conversion en PDF", desc: "Création de fichiers PDF consultables avec typographie claire et qualité d'archivage.", features: ["PDF consultable", "Typographie claire", "Qualité d'archivage", "Index et tables"] },
        { icon: "✒️", title: "Édition Scientifique (Tahqiq)", desc: "Édition critique des textes patrimoniaux selon la méthode académique avec notes et sources.", features: ["Vérification des textes", "Notes de bas de page", "Documentation des sources", "Révision académique"] },
        { icon: "🤖", title: "OCR & Intelligence Artificielle", desc: "Utilisation des dernières technologies de reconnaissance optique et d'IA pour l'extraction de texte.", features: ["Reconnaissance optique (OCR)", "Extraction IA", "Vérification manuelle", "Contrôle qualité"] },
        { icon: "🏛️", title: "Archivage Numérique", desc: "Préservation du patrimoine culturel et numérisation des collections de bibliothèques.", features: ["Préservation numérique", "Numérisation de collections", "Catalogage de documents", "Conservation patrimoniale"] }
      ]
    },
    process: {
      title: "Notre Processus",
      subtitle: "Nous suivons une méthodologie scientifique rigoureuse pour garantir la plus haute qualité",
      steps: [
        { num: "01", title: "Réception du manuscrit", desc: "Nous recevons votre manuscrit numérisé ou envoyons notre équipe pour le scanner en haute résolution." },
        { num: "02", title: "Transcription initiale", desc: "Notre équipe spécialisée transcrit le texte arabe en utilisant des technologies OCR avancées." },
        { num: "03", title: "Révision scientifique", desc: "Nos experts vérifient chaque mot selon la méthode scientifique rigoureuse." },
        { num: "04", title: "Édition et documentation", desc: "Nous ajoutons les notes de bas de page et documentons toutes les sources et références." },
        { num: "05", title: "Mise en forme finale", desc: "Nous vous livrons le fichier dans le format souhaité (Word ou PDF) avec mise en page professionnelle." },
        { num: "06", title: "Contrôle qualité", desc: "Révision finale complète pour garantir l'exactitude du texte et la qualité de la mise en page." }
      ]
    },
    pricing: {
      title: "Nos Tarifs",
      subtitle: "Tarifs compétitifs avec garantie de la plus haute qualité académique",
      plans: [
        { name: "Pack Essentiel", price: "Contactez-nous", desc: "Pour les manuscrits simples", features: ["Transcription de base", "Format Word ou PDF", "Une révision incluse", "Livraison sous 7 jours"], cta: "Commander" },
        { name: "Pack Professionnel", price: "Contactez-nous", desc: "Pour les projets académiques", features: ["Transcription complète", "Édition scientifique initiale", "Notes et documentation", "Livraison sous 14 jours", "2 révisions gratuites"], cta: "Commander", featured: true },
        { name: "Pack Édition Complète", price: "Contactez-nous", desc: "Pour thèses et livres", features: ["Édition scientifique complète", "Notes détaillées", "Comparaison des sources", "Index complets", "Révisions illimitées", "Support après livraison"], cta: "Commander" }
      ]
    },
    testimonials: {
      title: "Témoignages",
      subtitle: "Ce que disent chercheurs et académiciens de nos services",
      items: [
        { name: "Dr. Mohammed Al-Alaoui", role: "Professeur d'université, Maroc", text: "Service exceptionnel pour la transcription de manuscrits. La précision et le professionnalisme dépassent toutes les attentes." },
        { name: "Dr. Fatima Zahra", role: "Doctorante, Égypte", text: "MediaShield m'a aidée à éditer mon manuscrit dans les délais impartis. La qualité du travail est remarquable." },
        { name: "M. Abderrahmane Al-Hassani", role: "Directeur de bibliothèque, Rabat", text: "Nous collaborons avec eux depuis deux ans pour numériser notre collection. Le travail est précis et conforme aux normes." },
        { name: "Prof. James Mitchell", role: "Chercheur en études islamiques, UK", text: "Exceptional service for Arabic manuscript transcription. Their expertise in classical Arabic is truly remarkable." }
      ]
    },
    faq: {
      title: "Questions Fréquentes",
      subtitle: "Réponses aux questions les plus courantes sur nos services",
      items: [
        { q: "Comment envoyer mon manuscrit ?", a: "Vous pouvez envoyer des photos haute résolution par e-mail ou WhatsApp, ou les télécharger sur des plateformes de stockage cloud. Nous acceptons tous les formats d'image courants." },
        { q: "Combien de temps prend la transcription ?", a: "Cela dépend du volume et de la complexité du manuscrit. En général, 100 pages nécessitent entre 7 et 14 jours." },
        { q: "Garantissez-vous la confidentialité ?", a: "Oui, nous nous engageons à la confidentialité totale. Nous signons un accord de non-divulgation avec chaque client." },
        { q: "Quels types de manuscrits traitez-vous ?", a: "Nous travaillons sur tous types de manuscrits arabes : religieux, philosophiques, scientifiques, littéraires, médicaux, historiques et juridiques." },
        { q: "Proposez-vous l'édition scientifique complète ?", a: "Oui, notre service d'édition complète comprend la transcription précise, les notes scientifiques, la documentation des sources, les index et la bibliographie." },
        { q: "Travaillez-vous avec les universités ?", a: "Oui, nous avons des partenariats avec des universités et bibliothèques au Maroc et dans les pays arabes. Nous offrons des tarifs spéciaux aux institutions." }
      ]
    },
    blog: { title: "Blog Académique", subtitle: "Articles et études spécialisés en codicologie et patrimoine arabe", readMore: "Lire la suite" },
    contact: {
      title: "Contactez-nous",
      subtitle: "Nous sommes là pour vous aider avec vos manuscrits",
      whatsapp: "WhatsApp",
      email: "Email",
      phone: "+212612605737",
      emailAddr: "salatrir@gmail.com",
      form: { name: "Nom complet", email: "Adresse e-mail", service: "Service souhaité", message: "Détails du projet", submit: "Envoyer la demande" }
    },
    footer: {
      desc: "Services spécialisés dans la transcription, numérisation et édition scientifique de manuscrits arabes.",
      links: "Liens rapides",
      services: "Services",
      contact: "Contact",
      rights: "Tous droits réservés"
    },
    trust: {
      title: "Pourquoi choisir MediaShield AI ?",
      items: [
        { icon: "🎓", title: "Expertise académique", desc: "Équipe de spécialistes en codicologie et études islamiques" },
        { icon: "🔒", title: "Confidentialité totale", desc: "Accord de non-divulgation signé avec chaque client" },
        { icon: "✅", title: "Garantie qualité", desc: "Triple révision systématique avant chaque livraison" },
        { icon: "⚡", title: "Respect des délais", desc: "Engagement de livraison dans les délais convenus" }
      ]
    }
  },
  en: {
    dir: "ltr",
    lang: "en",
    nav: {
      home: "Home",
      services: "Services",
      process: "Process",
      pricing: "Pricing",
      portfolio: "Portfolio",
      testimonials: "Testimonials",
      faq: "FAQ",
      blog: "Blog",
      contact: "Contact"
    },
    hero: {
      badge: "Arabic Manuscript Services",
      title: "Arabic Manuscript",
      titleHighlight: "Transcription & Digitization",
      subtitle: "We transform your precious manuscripts into accurate, scholarly-edited digital texts meeting the highest academic standards",
      cta1: "Start Your Project",
      cta2: "WhatsApp Us",
      stat1: "Manuscripts Processed",
      stat2: "Scholars Served",
      stat3: "Transcription Accuracy",
      stat4: "Partner Universities"
    },
    services: {
      title: "Our Specialized Services",
      subtitle: "Comprehensive solutions for Arabic manuscript transcription and heritage preservation",
      items: [
        { icon: "📜", title: "Manuscript Transcription", desc: "Precise transcription of handwritten Arabic manuscripts, historical documents, ancient books and personal archives.", features: ["Handwritten Arabic manuscripts", "Rare historical documents", "Ancient books & archives", "Moroccan & Andalusian texts"] },
        { icon: "📄", title: "Word Conversion", desc: "Convert manuscripts to editable Word files with professional academic formatting.", features: ["Editable DOCX files", "Academic formatting", "Arabic RTL support", "Professional layout"] },
        { icon: "🔍", title: "PDF Conversion", desc: "Create searchable PDF files with clean typography and archival quality.", features: ["Searchable PDF", "Clean typography", "Archival quality", "Indices & tables"] },
        { icon: "✒️", title: "Scholarly Editing (Tahqiq)", desc: "Critical editing of heritage texts following academic methodology with footnotes and sources.", features: ["Text verification", "Scholarly footnotes", "Source documentation", "Academic peer review"] },
        { icon: "🤖", title: "OCR & AI Processing", desc: "Using the latest optical character recognition and AI technology for text extraction.", features: ["Optical character recognition", "AI-assisted extraction", "Manual verification", "Quality control"] },
        { icon: "🏛️", title: "Digital Archiving", desc: "Cultural heritage preservation and library digitization of historical collections.", features: ["Digital preservation", "Library digitization", "Document cataloging", "Heritage conservation"] }
      ]
    },
    process: {
      title: "Our Process",
      subtitle: "We follow a rigorous scientific methodology to ensure the highest level of accuracy and quality",
      steps: [
        { num: "01", title: "Manuscript Reception", desc: "We receive your digitized manuscript or send our team to scan it at the highest resolution." },
        { num: "02", title: "Initial Transcription", desc: "Our specialized team transcribes the Arabic text using advanced OCR technologies." },
        { num: "03", title: "Scientific Review", desc: "Our expert scholars verify every word according to rigorous academic methodology." },
        { num: "04", title: "Editing & Documentation", desc: "We add scholarly footnotes and document all sources and references." },
        { num: "05", title: "Final Formatting", desc: "We deliver the file in your required format (Word or PDF) with professional layout." },
        { num: "06", title: "Quality Control", desc: "Comprehensive final review to ensure text accuracy and formatting quality before delivery." }
      ]
    },
    pricing: {
      title: "Our Pricing",
      subtitle: "Competitive pricing with guaranteed highest academic quality",
      plans: [
        { name: "Essential Package", price: "Contact Us", desc: "For simple manuscripts", features: ["Basic transcription", "Word or PDF format", "One revision included", "7-day delivery"], cta: "Order Now" },
        { name: "Professional Package", price: "Contact Us", desc: "For academic projects", features: ["Full transcription", "Initial scholarly editing", "Footnotes & documentation", "14-day delivery", "2 free revisions"], cta: "Order Now", featured: true },
        { name: "Full Editing Package", price: "Contact Us", desc: "For theses and books", features: ["Complete scholarly editing", "Detailed footnotes", "Source comparison", "Complete indices", "Unlimited revisions", "Post-delivery support"], cta: "Order Now" }
      ]
    },
    testimonials: {
      title: "Testimonials",
      subtitle: "What researchers and academics say about our services",
      items: [
        { name: "Dr. Mohammed Al-Alaoui", role: "University Professor, Morocco", text: "Exceptional service for manuscript transcription. The accuracy and professionalism exceed all expectations. I recommend it to every heritage researcher." },
        { name: "Dr. Fatima Zahra", role: "PhD Researcher, Egypt", text: "MediaShield helped me edit my manuscript within the set timeframe. The work quality is outstanding and the team is very cooperative." },
        { name: "Mr. Abderrahmane Al-Hassani", role: "Library Director, Rabat", text: "We have been collaborating with them for two years to digitize our library collection. The work is precise and meets the highest archival standards." },
        { name: "Prof. James Mitchell", role: "Islamic Studies Researcher, UK", text: "Exceptional service for Arabic manuscript transcription. The team's expertise in classical Arabic is truly remarkable and invaluable." }
      ]
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Answers to the most common questions about our services",
      items: [
        { q: "How do I send my manuscript?", a: "You can send high-resolution photos via email or WhatsApp, or upload them to cloud storage platforms. We accept all common image formats." },
        { q: "How long does transcription take?", a: "It depends on the volume and complexity of the manuscript. Generally, 100 pages takes between 7 to 14 days." },
        { q: "Do you guarantee confidentiality?", a: "Yes, we are fully committed to confidentiality. We sign a non-disclosure agreement with every client to protect their intellectual property." },
        { q: "What types of manuscripts do you work on?", a: "We work on all types of Arabic manuscripts: religious, philosophical, scientific, literary, medical, historical and legal." },
        { q: "Do you offer complete scholarly editing?", a: "Yes, our full editing service includes precise transcription, scholarly footnotes, source documentation, comprehensive indices and bibliography." },
        { q: "Do you work with universities?", a: "Yes, we have partnerships with universities and libraries in Morocco and Arab countries. We offer special pricing for institutions." }
      ]
    },
    blog: { title: "Academic Blog", subtitle: "Specialized articles and studies in manuscript studies and Arabic heritage", readMore: "Read More" },
    contact: {
      title: "Contact Us",
      subtitle: "We are here to help you with your manuscripts",
      whatsapp: "WhatsApp",
      email: "Email",
      phone: "+212612605737",
      emailAddr: "salatrir@gmail.com",
      form: { name: "Full Name", email: "Email Address", service: "Required Service", message: "Project Details", submit: "Send Request" }
    },
    footer: {
      desc: "Specialized services in Arabic manuscript transcription, digitization and scholarly editing.",
      links: "Quick Links",
      services: "Services",
      contact: "Contact",
      rights: "All rights reserved"
    },
    trust: {
      title: "Why Choose MediaShield AI?",
      items: [
        { icon: "🎓", title: "Academic Expertise", desc: "Team of specialists in manuscript studies and Islamic studies" },
        { icon: "🔒", title: "Full Confidentiality", desc: "Non-disclosure agreement signed with every client" },
        { icon: "✅", title: "Quality Guarantee", desc: "Triple systematic review before every delivery" },
        { icon: "⚡", title: "On-Time Delivery", desc: "Commitment to delivering within agreed timelines" }
      ]
    }
  }
};
