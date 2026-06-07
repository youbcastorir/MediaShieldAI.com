// app.js - MediaShield AI Manuscripts - Main Application Logic

let currentLang = localStorage.getItem('mediashield_lang') || 'ar';
let currentSection = 'blog-grid';

// ── Language Management ──────────────────────────────────────────
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('mediashield_lang', lang);
  const t = TRANSLATIONS[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = t.dir;
  document.body.dir = t.dir;
  document.body.className = t.dir === 'rtl' ? 'rtl' : 'ltr';
  renderAll(t);
  updateLangButtons(lang);
}

function updateLangButtons(lang) {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

// ── Render Engine ────────────────────────────────────────────────
function renderAll(t) {
  renderNav(t);
  renderHero(t);
  renderServices(t);
  renderProcess(t);
  renderTrust(t);
  renderPricing(t);
  renderTestimonials(t);
  renderFAQ(t);
  renderBlog(t);
  renderContact(t);
  renderFooter(t);
}

function renderNav(t) {
  const nav = document.getElementById('nav-links');
  if (!nav) return;
  const links = Object.entries(t.nav).map(([key, val]) =>
    `<a href="#${key}" class="nav-link" onclick="scrollToSection('${key}')">${val}</a>`
  ).join('');
  nav.innerHTML = links;
}

function renderHero(t) {
  const h = t.hero;
  const el = document.getElementById('hero-content');
  if (!el) return;
  const stats = SERVICES_DATA.stats.map(s => `
    <div class="stat-item">
      <span class="stat-value">${s.value}</span>
      <span class="stat-label">${s[`label_${currentLang}`]}</span>
    </div>
  `).join('');
  el.innerHTML = `
    <div class="hero-badge"><span class="badge-dot"></span>${h.badge}</div>
    <h1 class="hero-title">
      ${h.title}<br>
      <span class="hero-highlight">${h.titleHighlight}</span>
    </h1>
    <p class="hero-subtitle">${h.subtitle}</p>
    <div class="hero-cta">
      <a href="#contact" class="btn-primary" onclick="scrollToSection('contact')">${h.cta1}</a>
      <a href="${SERVICES_DATA.whatsapp}" target="_blank" class="btn-whatsapp">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
        ${h.cta2}
      </a>
    </div>
    <div class="hero-stats">${stats}</div>
  `;
}

function renderServices(t) {
  const s = t.services;
  const el = document.getElementById('services-content');
  if (!el) return;
  const cards = s.items.map((item, i) => `
    <div class="service-card fade-in" style="animation-delay:${i * 0.1}s">
      <div class="service-icon">${item.icon}</div>
      <h3 class="service-title">${item.title}</h3>
      <p class="service-desc">${item.desc}</p>
      <ul class="service-features">
        ${item.features.map(f => `<li><span class="feature-check">✓</span> ${f}</li>`).join('')}
      </ul>
      <a href="${SERVICES_DATA.whatsapp}" target="_blank" class="service-cta">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
        ${currentLang === 'ar' ? 'استفسر الآن' : currentLang === 'fr' ? 'Demander' : 'Inquire'}
      </a>
    </div>
  `).join('');
  el.innerHTML = `
    <div class="section-header">
      <h2 class="section-title">${s.title}</h2>
      <p class="section-subtitle">${s.subtitle}</p>
    </div>
    <div class="services-grid">${cards}</div>
  `;
}

function renderProcess(t) {
  const p = t.process;
  const el = document.getElementById('process-content');
  if (!el) return;
  const steps = p.steps.map((step, i) => `
    <div class="process-step fade-in" style="animation-delay:${i * 0.1}s">
      <div class="step-num">${step.num}</div>
      <div class="step-body">
        <h3 class="step-title">${step.title}</h3>
        <p class="step-desc">${step.desc}</p>
      </div>
      ${i < p.steps.length - 1 ? '<div class="step-arrow">→</div>' : ''}
    </div>
  `).join('');
  el.innerHTML = `
    <div class="section-header">
      <h2 class="section-title">${p.title}</h2>
      <p class="section-subtitle">${p.subtitle}</p>
    </div>
    <div class="process-grid">${steps}</div>
  `;
}

function renderTrust(t) {
  const tr = t.trust;
  const el = document.getElementById('trust-content');
  if (!el) return;
  const items = tr.items.map(item => `
    <div class="trust-item">
      <div class="trust-icon">${item.icon}</div>
      <h3 class="trust-title">${item.title}</h3>
      <p class="trust-desc">${item.desc}</p>
    </div>
  `).join('');
  el.innerHTML = `
    <div class="section-header">
      <h2 class="section-title">${tr.title}</h2>
    </div>
    <div class="trust-grid">${items}</div>
  `;
}

function renderPricing(t) {
  const p = t.pricing;
  const el = document.getElementById('pricing-content');
  if (!el) return;
  const plans = p.plans.map(plan => `
    <div class="pricing-card ${plan.featured ? 'featured' : ''}">
      ${plan.featured ? `<div class="featured-badge">${currentLang === 'ar' ? 'الأكثر طلباً' : currentLang === 'fr' ? 'Le plus populaire' : 'Most Popular'}</div>` : ''}
      <h3 class="plan-name">${plan.name}</h3>
      <p class="plan-desc">${plan.desc}</p>
      <div class="plan-price">${plan.price}</div>
      <ul class="plan-features">
        ${plan.features.map(f => `<li><span>✓</span> ${f}</li>`).join('')}
      </ul>
      <a href="${SERVICES_DATA.whatsapp}" target="_blank" class="plan-cta ${plan.featured ? 'featured-cta' : ''}">${plan.cta}</a>
    </div>
  `).join('');
  el.innerHTML = `
    <div class="section-header">
      <h2 class="section-title">${p.title}</h2>
      <p class="section-subtitle">${p.subtitle}</p>
    </div>
    <div class="pricing-grid">${plans}</div>
  `;
}

function renderTestimonials(t) {
  const tm = t.testimonials;
  const el = document.getElementById('testimonials-content');
  if (!el) return;
  const cards = tm.items.map(item => `
    <div class="testimonial-card">
      <div class="testimonial-stars">★★★★★</div>
      <p class="testimonial-text">"${item.text}"</p>
      <div class="testimonial-author">
        <div class="author-avatar">${item.name.charAt(0)}</div>
        <div>
          <div class="author-name">${item.name}</div>
          <div class="author-role">${item.role}</div>
        </div>
      </div>
    </div>
  `).join('');
  el.innerHTML = `
    <div class="section-header">
      <h2 class="section-title">${tm.title}</h2>
      <p class="section-subtitle">${tm.subtitle}</p>
    </div>
    <div class="testimonials-grid">${cards}</div>
  `;
}

function renderFAQ(t) {
  const faq = t.faq;
  const el = document.getElementById('faq-content');
  if (!el) return;
  const items = faq.items.map((item, i) => `
    <div class="faq-item" onclick="toggleFAQ(${i})">
      <div class="faq-q">
        <span>${item.q}</span>
        <span class="faq-icon" id="faq-icon-${i}">+</span>
      </div>
      <div class="faq-a" id="faq-a-${i}">${item.a}</div>
    </div>
  `).join('');
  el.innerHTML = `
    <div class="section-header">
      <h2 class="section-title">${faq.title}</h2>
      <p class="section-subtitle">${faq.subtitle}</p>
    </div>
    <div class="faq-list">${items}</div>
  `;
}

function toggleFAQ(i) {
  const answer = document.getElementById(`faq-a-${i}`);
  const icon = document.getElementById(`faq-icon-${i}`);
  if (!answer) return;
  const isOpen = answer.classList.contains('open');
  document.querySelectorAll('.faq-a').forEach(a => a.classList.remove('open'));
  document.querySelectorAll('.faq-icon').forEach(ic => ic.textContent = '+');
  if (!isOpen) {
    answer.classList.add('open');
    icon.textContent = '−';
  }
}

function renderBlog(t) {
  const b = t.blog;
  const el = document.getElementById('blog-content');
  if (!el) return;
  const articles = BLOG_ARTICLES[currentLang].slice(0, 6).map(article => `
    <article class="blog-card" onclick="openArticle('${article.slug}', '${currentLang}')">
      <div class="blog-category">${article.category}</div>
      <h3 class="blog-title">${article.title}</h3>
      <p class="blog-excerpt">${article.excerpt}</p>
      <div class="blog-meta">
        <span class="blog-date">${article.date}</span>
        <span class="blog-read">${article.readTime}</span>
      </div>
      <div class="blog-tags">
        ${article.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
      </div>
      <span class="blog-more">${b.readMore} →</span>
    </article>
  `).join('');
  el.innerHTML = `
    <div class="section-header">
      <h2 class="section-title">${b.title}</h2>
      <p class="section-subtitle">${b.subtitle}</p>
    </div>
    <div class="blog-grid">${articles}</div>
    <div class="blog-all-link">
      <button class="btn-secondary" onclick="showAllArticles()">${currentLang === 'ar' ? 'عرض جميع المقالات' : currentLang === 'fr' ? 'Voir tous les articles' : 'View All Articles'} (${BLOG_ARTICLES[currentLang].length})</button>
    </div>
  `;
}

function openArticle(slug, lang) {
  const articles = BLOG_ARTICLES[lang];
  const article = articles.find(a => a.slug === slug);
  if (!article) return;
  const modal = document.getElementById('article-modal');
  const content = document.getElementById('modal-content');
  if (!modal || !content) return;
  content.innerHTML = `
    <button class="modal-close" onclick="closeModal()">✕</button>
    <div class="modal-category">${article.category}</div>
    <h1 class="modal-title">${article.title}</h1>
    <div class="modal-meta">${article.date} · ${article.readTime}</div>
    <div class="modal-body">
      <p>${article.excerpt}</p>
      <p>${currentLang === 'ar' ? 'هذا المقال يتناول موضوعاً بالغ الأهمية في مجال المخطوطات العربية. تواصل معنا عبر واتساب للاستفسار عن خدماتنا المتخصصة.' : currentLang === 'fr' ? "Cet article aborde un sujet d'une grande importance dans le domaine des manuscrits arabes. Contactez-nous via WhatsApp pour plus d'informations." : 'This article addresses a topic of great importance in the field of Arabic manuscripts. Contact us via WhatsApp for more information about our specialized services.'}</p>
      <a href="${SERVICES_DATA.whatsapp}" target="_blank" class="btn-whatsapp" style="display:inline-flex;margin-top:1.5rem">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
        ${currentLang === 'ar' ? 'تواصل معنا عبر واتساب' : currentLang === 'fr' ? 'Contactez via WhatsApp' : 'Contact via WhatsApp'}
      </a>
    </div>
  `;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('article-modal');
  if (modal) modal.classList.remove('open');
  document.body.style.overflow = '';
}

function showAllArticles() {
  const t = TRANSLATIONS[currentLang];
  const el = document.getElementById('blog-content');
  if (!el) return;
  const articles = BLOG_ARTICLES[currentLang].map(article => `
    <article class="blog-card" onclick="openArticle('${article.slug}', '${currentLang}')">
      <div class="blog-category">${article.category}</div>
      <h3 class="blog-title">${article.title}</h3>
      <p class="blog-excerpt">${article.excerpt}</p>
      <div class="blog-meta">
        <span class="blog-date">${article.date}</span>
        <span class="blog-read">${article.readTime}</span>
      </div>
      <span class="blog-more">${t.blog.readMore} →</span>
    </article>
  `).join('');
  const grid = el.querySelector('.blog-grid');
  if (grid) grid.innerHTML = articles;
  const btn = el.querySelector('.blog-all-link');
  if (btn) btn.style.display = 'none';
}

function renderContact(t) {
  const c = t.contact;
  const f = c.form;
  const el = document.getElementById('contact-content');
  if (!el) return;
  const serviceOptions = SERVICES_DATA.serviceCategories.map(s => `<option value="${s}">${s}</option>`).join('');
  el.innerHTML = `
    <div class="section-header">
      <h2 class="section-title">${c.title}</h2>
      <p class="section-subtitle">${c.subtitle}</p>
    </div>
    <div class="contact-layout">
      <div class="contact-info">
        <a href="${SERVICES_DATA.whatsapp}" target="_blank" class="contact-method whatsapp-method">
          <div class="method-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
          </div>
          <div>
            <div class="method-label">${c.whatsapp}</div>
            <div class="method-value">${c.phone}</div>
          </div>
        </a>
        <a href="mailto:${SERVICES_DATA.email}" class="contact-method email-method">
          <div class="method-icon">📧</div>
          <div>
            <div class="method-label">${c.email}</div>
            <div class="method-value">${c.emailAddr}</div>
          </div>
        </a>
      </div>
      <div class="contact-form">
        <div class="form-group">
          <label>${f.name}</label>
          <input type="text" id="form-name" placeholder="${f.name}">
        </div>
        <div class="form-group">
          <label>${f.email}</label>
          <input type="email" id="form-email" placeholder="${f.email}">
        </div>
        <div class="form-group">
          <label>${f.service}</label>
          <select id="form-service">
            <option value="">-- ${f.service} --</option>
            ${serviceOptions}
          </select>
        </div>
        <div class="form-group">
          <label>${f.message}</label>
          <textarea id="form-message" rows="5" placeholder="${f.message}"></textarea>
        </div>
        <button class="btn-primary full-width" onclick="submitForm()">${f.submit}</button>
      </div>
    </div>
  `;
}

function submitForm() {
  const name = document.getElementById('form-name')?.value || '';
  const service = document.getElementById('form-service')?.value || '';
  const message = document.getElementById('form-message')?.value || '';
  const text = encodeURIComponent(`*MediaShield AI Manuscripts*\nالاسم: ${name}\nالخدمة: ${service}\nالرسالة: ${message}`);
  window.open(`${SERVICES_DATA.whatsapp}?text=${text}`, '_blank');
}

function renderFooter(t) {
  const f = t.footer;
  const nav = t.nav;
  const el = document.getElementById('footer-content');
  if (!el) return;
  const year = new Date().getFullYear();
  el.innerHTML = `
    <div class="footer-grid">
      <div class="footer-brand">
        <div class="footer-logo">
          <span class="logo-icon">📜</span>
          <span>MediaShield AI</span>
        </div>
        <p class="footer-desc">${f.desc}</p>
        <div class="footer-social">
          <a href="${SERVICES_DATA.whatsapp}" target="_blank" class="social-btn whatsapp-btn" title="WhatsApp">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
          </a>
          <a href="mailto:${SERVICES_DATA.email}" class="social-btn email-social" title="Email">📧</a>
        </div>
      </div>
      <div class="footer-col">
        <h4>${f.links}</h4>
        <ul>
          ${Object.entries(nav).slice(0, 5).map(([k, v]) => `<li><a href="#${k}" onclick="scrollToSection('${k}')">${v}</a></li>`).join('')}
        </ul>
      </div>
      <div class="footer-col">
        <h4>${f.services}</h4>
        <ul>
          ${SERVICES_DATA.serviceCategories.map(s => `<li><a href="${SERVICES_DATA.whatsapp}" target="_blank">${s}</a></li>`).join('')}
        </ul>
      </div>
      <div class="footer-col">
        <h4>${f.contact}</h4>
        <ul>
          <li><a href="${SERVICES_DATA.whatsapp}" target="_blank">${SERVICES_DATA.phone}</a></li>
          <li><a href="mailto:${SERVICES_DATA.email}">${SERVICES_DATA.email}</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© ${year} MediaShield AI Manuscripts. ${f.rights}</p>
    </div>
  `;
}

// ── Navigation & Scroll ──────────────────────────────────────────
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
  // close mobile menu
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenu) mobileMenu.classList.remove('open');
}

function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  if (menu) menu.classList.toggle('open');
}

// ── Intersection Observer for animations ────────────────────────
function initObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-in, .service-card, .blog-card').forEach(el => observer.observe(el));
}

// ── Sticky Nav ────────────────────────────────────────────────────
function initStickyNav() {
  const nav = document.getElementById('main-nav');
  window.addEventListener('scroll', () => {
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 50);
  });
}

// ── Init ──────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);
  initObserver();
  initStickyNav();
  // Close modal on backdrop click
  document.getElementById('article-modal')?.addEventListener('click', (e) => {
    if (e.target.id === 'article-modal') closeModal();
  });
});
