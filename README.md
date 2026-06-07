# 📜 MediaShield AI Manuscripts

**خدمات متخصصة في تحقيق المخطوطات العربية ورقمنتها وتفريغها**  
*Services professionnels de transcription et numérisation de manuscrits arabes*  
*Professional Arabic Manuscript Transcription & Digitization Services*

---

## 🌐 Live Website

> **[https://mediashieldai.com](https://mediashieldai.com)**

---

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [File Structure](#file-structure)
3. [GitHub Pages Deployment](#github-pages-deployment)
4. [SEO Guide](#seo-guide)
5. [Content Management Guide](#content-management-guide)
6. [Multilingual Setup Guide](#multilingual-setup-guide)
7. [Customization Guide](#customization-guide)
8. [Contact & Support](#contact--support)

---

## Project Overview

MediaShield AI Manuscripts is a fully multilingual (Arabic/French/English) professional website for Arabic manuscript services:

- ✅ **Arabic manuscript transcription** (تفريغ المخطوطات)
- ✅ **Manuscript digitization** (رقمنة المخطوطات)
- ✅ **Scholarly editing / Tahqiq** (التحقيق العلمي)
- ✅ **Word & PDF conversion** (تحويل إلى وورد وPDF)
- ✅ **OCR & AI processing**
- ✅ **Digital archiving** (الأرشفة الرقمية)

### Technical Features

| Feature | Details |
|---------|---------|
| Languages | Arabic (RTL), French, English |
| SEO | Full meta, Open Graph, Twitter Cards, schema.org |
| PWA | manifest.json, offline-ready |
| Blog | 50 AR + 20 FR + 20 EN SEO articles |
| WhatsApp | Floating button + inline buttons + form integration |
| Responsive | Mobile-first, works on all devices |
| No dependencies | Pure HTML/CSS/JS — no frameworks needed |

---

## File Structure

```
mediashieldai/
├── index.html          # Main HTML — all sections
├── style.css           # Premium academic design
├── app.js              # Core application logic & rendering
├── translations.js     # AR/FR/EN translation strings
├── services.js         # Service data, portfolio, stats
├── blog.js             # 90 SEO blog articles (50 AR + 20 FR + 20 EN)
├── manifest.json       # PWA manifest
├── sitemap.xml         # Full XML sitemap (90+ URLs)
├── robots.txt          # Search engine directives
├── .gitignore          # Git ignore rules
└── README.md           # This file
```

---

## GitHub Pages Deployment

### Step 1 — Initialize Repository

```bash
cd mediashieldai
git init
git add .
git commit -m "🚀 Launch MediaShield AI Manuscripts"
```

### Step 2 — Connect to GitHub

```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/mediashieldai.git
git push -u origin main
```

> Replace `YOUR_USERNAME` with your actual GitHub username.

### Step 3 — Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select `main` branch, `/ (root)` folder
4. Click **Save**
5. Your site will be live at: `https://YOUR_USERNAME.github.io/mediashieldai/`

### Step 4 — Custom Domain (mediashieldai.com)

1. In GitHub Pages settings, enter `mediashieldai.com` in the **Custom domain** field
2. Create a `CNAME` file in the root:
   ```
   mediashieldai.com
   ```
3. At your domain registrar (GoDaddy, Namecheap, etc.), add DNS records:
   ```
   A     @    185.199.108.153
   A     @    185.199.109.153
   A     @    185.199.110.153
   A     @    185.199.111.153
   CNAME www  YOUR_USERNAME.github.io
   ```
4. Wait 24-48 hours for DNS propagation
5. Enable **Enforce HTTPS** in GitHub Pages settings

### Step 5 — Update Sitemap URLs

After deploying, update `sitemap.xml` — replace all `https://mediashieldai.com/` with your actual domain.

---

## SEO Guide

### On-Page SEO Already Implemented

| Element | Status |
|---------|--------|
| Title tag (multilingual) | ✅ Optimized |
| Meta description | ✅ 160 chars, keyword-rich |
| Meta keywords | ✅ Arabic + French + English |
| Canonical URL | ✅ Set |
| Hreflang tags (ar/fr/en/x-default) | ✅ Implemented |
| Open Graph tags | ✅ Full set |
| Twitter Card tags | ✅ Large image |
| schema.org ProfessionalService | ✅ JSON-LD |
| schema.org LocalBusiness | ✅ JSON-LD |
| schema.org FAQPage | ✅ JSON-LD |
| schema.org WebSite + SearchAction | ✅ JSON-LD |
| XML Sitemap | ✅ 90+ URLs |
| robots.txt | ✅ Configured |
| Semantic HTML (nav, main, section, article) | ✅ |
| ARIA labels | ✅ |
| Mobile-first responsive | ✅ |

### Local SEO — Morocco Priority

The schema.org data targets:
- **Primary**: Rabat, Morocco
- **Secondary**: Casablanca, Fez, Marrakech
- **Tertiary**: Arab World, Gulf Countries
- **International**: Academic institutions worldwide

### Google Search Console Setup

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add your property (domain or URL prefix)
3. Verify ownership via HTML file or DNS TXT record
4. Submit your sitemap: `https://mediashieldai.com/sitemap.xml`
5. Monitor performance for target keywords

### Target Keywords Performance Tracking

**Arabic keywords to monitor:**
- تحقيق المخطوطات
- تفريغ المخطوطات العربية
- تحويل المخطوطات إلى وورد
- رقمنة المخطوطات المغرب
- خدمات المخطوطات بالمغرب

**French keywords:**
- Transcription de manuscrits arabes
- Numérisation de manuscrits Maroc
- Édition scientifique de manuscrits

**English keywords:**
- Arabic manuscript transcription Morocco
- Arabic manuscript digitization services
- Manuscript to Word conversion

---

## Content Management Guide

### Adding New Blog Articles

Open `blog.js` and add to the appropriate language array:

```javascript
// Arabic article example:
{
  id: 51,                          // Increment ID
  title: "عنوان المقال الجديد",
  slug: "new-article-slug",        // URL-friendly, no spaces
  date: "2025-01-15",
  category: "تحقيق المخطوطات",
  excerpt: "وصف قصير للمقال...",
  readTime: "8 دقائق",
  tags: ["تحقيق المخطوطات", "تراث"]
}
```

Then add the URL to `sitemap.xml`:
```xml
<url>
  <loc>https://mediashieldai.com/blog/ar/new-article-slug</loc>
  <lastmod>2025-01-15</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
```

### Updating Portfolio Items

Edit the `portfolio` array in `services.js`:

```javascript
{
  title: "اسم المخطوطة",
  type: "نوع الخدمة",
  pages: 200,
  lang: "ar",
  year: 2024,
  client: "اسم العميل أو المؤسسة"
}
```

### Updating Statistics

Edit the `stats` array in `services.js`:

```javascript
{ 
  value: "600+",                        // The number
  label_ar: "مخطوطة محققة",             // Arabic label
  label_fr: "Manuscrits traités",       // French label
  label_en: "Manuscripts Processed"     // English label
}
```

### Updating Testimonials

Edit `testimonials.items` in `translations.js` for each language:

```javascript
{
  name: "د. اسم العميل",
  role: "أستاذ جامعي، البلد",
  text: "نص الشهادة..."
}
```

---

## Multilingual Setup Guide

### How the Language System Works

1. **Language detection**: URL parameter (`?lang=ar`) → localStorage → default (`ar`)
2. **Rendering**: `app.js` calls `setLanguage(lang)` which updates all DOM elements
3. **RTL/LTR**: Automatically switches `dir` attribute on `<html>` and `<body>`
4. **Fonts**: Arabic uses `Noto Naskh Arabic` + `Amiri`; Latin uses `Cormorant Garamond`

### Adding a New Language (e.g., Spanish)

1. **Add translation object** in `translations.js`:
   ```javascript
   const TRANSLATIONS = {
     ar: { ... },
     fr: { ... },
     en: { ... },
     es: {               // ← New language
       dir: "ltr",
       lang: "es",
       nav: { home: "Inicio", ... },
       // ... all translation keys
     }
   };
   ```

2. **Add blog articles** in `blog.js`:
   ```javascript
   const BLOG_ARTICLES = {
     ar: [...],
     fr: [...],
     en: [...],
     es: [...]   // ← New articles
   };
   ```

3. **Add language button** in `index.html`:
   ```html
   <button class="lang-btn" data-lang="es" onclick="setLanguage('es')">ES</button>
   ```

4. **Add hreflang** in `<head>`:
   ```html
   <link rel="alternate" hreflang="es" href="https://mediashieldai.com/?lang=es">
   ```

### URL Strategy for Languages

Currently using query parameters: `?lang=fr`, `?lang=en`

For subdomain or subdirectory strategy (better SEO), consider:
- `fr.mediashieldai.com` (subdomains)
- `mediashieldai.com/fr/` (subdirectories — recommended by Google)

---

## Customization Guide

### Changing Colors

Edit CSS variables at the top of `style.css`:

```css
:root {
  --ink: #1a1209;          /* Main text color */
  --parchment: #f5f0e6;    /* Background color */
  --gold: #b8912a;         /* Primary accent */
  --crimson: #8b1a1a;      /* Secondary accent (headings) */
  --teal: #1a5f5f;         /* Tertiary accent */
  --whatsapp: #25d366;     /* WhatsApp green */
}
```

### Changing Fonts

The site uses Google Fonts. To change:

1. Update the `@import` URL in `style.css`
2. Update the font variables:
```css
--font-arabic: 'Noto Naskh Arabic', serif;
--font-latin: 'Cormorant Garamond', serif;
--font-heading: 'Amiri', serif;
```

### Updating Contact Information

In `services.js`:
```javascript
const SERVICES_DATA = {
  whatsapp: "https://wa.me/212612605737",  // ← Your WhatsApp
  phone: "+212612605737",                   // ← Your phone
  email: "salatrir@gmail.com",              // ← Your email
  ...
};
```

Also update in `index.html` (nav WhatsApp button and floating button href attributes).

### Updating Prices

In `translations.js`, find each language's `pricing.plans` and update:
```javascript
{ name: "الباقة الأساسية", price: "من 500 درهم", ... }
```

### Adding a New Section

1. Add HTML placeholder in `index.html`:
   ```html
   <div class="section" id="new-section">
     <div id="new-section-content"></div>
   </div>
   ```

2. Add render function in `app.js`:
   ```javascript
   function renderNewSection(t) {
     const el = document.getElementById('new-section-content');
     if (!el) return;
     el.innerHTML = `...your HTML...`;
   }
   ```

3. Call it inside `renderAll()`:
   ```javascript
   function renderAll(t) {
     // ... existing calls
     renderNewSection(t);
   }
   ```

4. Add translations to each language in `translations.js`

---

## Performance Optimization

### Already Optimized
- ✅ No external JavaScript dependencies
- ✅ Google Fonts loaded with `preconnect`
- ✅ CSS variables for consistent theming
- ✅ Intersection Observer for lazy animation
- ✅ Single-page app architecture (fast navigation)

### Further Optimization Tips
1. **Images**: Add WebP manuscript images with `loading="lazy"`
2. **Service Worker**: Register for offline PWA support
3. **CDN**: Host on Cloudflare for global performance
4. **Compression**: Enable gzip/brotli on your server

---

## Analytics Setup

### Google Analytics 4

Add before closing `</head>` in `index.html`:
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Microsoft Clarity (Heatmaps)

```html
<script type="text/javascript">
  (function(c,l,a,r,i,t,y){...})(window, document, "clarity", "script", "YOUR_ID");
</script>
```

---

## Contact & Support

| Channel | Details |
|---------|---------|
| 📱 WhatsApp | [+212612605737](https://wa.me/212612605737) |
| 📧 Email | [salatrir@gmail.com](mailto:salatrir@gmail.com) |
| 🌐 Website | [https://mediashieldai.com](https://mediashieldai.com) |

---

## GitHub Commands Summary

```bash
# Initial setup
git init
git add .
git commit -m "🚀 Launch MediaShield AI Manuscripts"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/mediashieldai.git
git push -u origin main

# After making changes
git add .
git commit -m "✏️ Update content"
git push

# Check status
git status
git log --oneline
```

---

## License

© 2024 MediaShield AI Manuscripts. All rights reserved.

جميع الحقوق محفوظة لـ MediaShield AI Manuscripts.  
Tous droits réservés — MediaShield AI Manuscripts.

---

*Built with ❤️ for the preservation of Arabic manuscript heritage.*  
*بُني بشغف لصون التراث المخطوط العربي.*
