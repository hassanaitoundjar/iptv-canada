# SEO Action Plan & Implementation Roadmap

**Target Domain:** `www.iptvsmartproviders.com`  
**Priority Hierarchy:** Critical > High > Medium > Low

---

## 🚨 Phase 1: Critical Technical Fixes (Immediate / Day 1–2)

### 1. Resolve Canonical vs. 308 Redirect Discrepancy
- **Problem:** `https://iptvsmartproviders.com` redirects (308) to `https://iptvsmartproviders.com`, but `<link rel="canonical">` points to the non-www domain.
- **Action:**
  - In `config/site.ts`: change `url` to `"https://www.iptvsmartproviders.com"`.
  - In `app/layout.tsx`: change `metadataBase` to `new URL('https://www.iptvsmartproviders.com')` and `canonical` to `'https://www.iptvsmartproviders.com'`.
- **Expected Outcome:** Eliminates canonical loop and consolidates all indexing signals on the www version.

### 2. Update Sitemap Base URL to Prevent Redirected Sitemap Entries
- **Problem:** Search engines crawling `sitemap.xml` encounter 308 redirects on every single entry.
- **Action:**
  - In `app/sitemap.ts`: set `baseUrl = 'https://www.iptvsmartproviders.com'`.
  - In `app/robots.ts`: set `sitemap: 'https://iptvsmartproviders.comsitemap.xml'`.
- **Expected Outcome:** Sitemaps serve 100% clean 200 OK canonical URLs.

### 3. Add RFC 9116 `security.txt`
- **Problem:** Cloudflare Security Insights flags missing `security.txt`.
- **Action:**
  - Create `public/.well-known/security.txt` specifying security contact email and canonical link.
- **Expected Outcome:** Clears Cloudflare Security Center recommendation.

---

## ⚡ Phase 2: Schema & On-Page Harmony (Week 1)

### 1. Align Schema Identifiers with Canonical Domain
- **Action:** Update `lib/schemas.ts` to reference `https://www.iptvsmartproviders.com` across `WebSite`, `Organization`, `Product`, `Offer`, and `LocalService` schemas.
- **Expected Outcome:** Clean structured data validation in Google Rich Results Test without domain hops.

### 2. Fix Homepage H1 Spacing
- **Action:** Adjust `components/sections/Hero.tsx` around the `<br />` tag in the `<h1>` to ensure automated crawlers parse `Best IPTV Canada Service In 2026` with proper word separation.

### 3. Update AI Search `llms.txt`
- **Action:** In `public/llms.txt`, update the canonical URL line to `https://www.iptvsmartproviders.com`.

---

## 📈 Phase 3: Content Freshness & E-E-A-T (Weeks 2–3)

### 1. Update Outdated Year References in Legacy Articles
- **Action:** Review titles and introductions in `content/blog/` to refresh 2024 and 2025 references to 2026.
- **Expected Outcome:** Boost SERP click-through rates (CTR) on evergreen query topics.

### 2. Enrich Author Credential Schemas
- **Action:** Expand blog post schemas in `lib/schemas.ts` to include verified author credentials for streaming technology expertise.

### 3. Contextual Internal Linking to City Pages
- **Action:** Add natural contextual links from high-ranking guide posts (e.g. ISP guides, sports streaming guides) pointing directly to relevant Canadian city landing pages (`/iptv-toronto`, `/iptv-vancouver`, `/iptv-montreal`).

---

## 🔍 Phase 4: Monitoring & Ongoing Governance (Monthly)

1. **Google Search Console Indexing Verification:** Check URL Inspection for key pages to ensure Google recognises `www.iptvsmartproviders.com` as user-declared and Google-selected canonical.
2. **SEO Drift Baseline Check:** Run `drift_compare.py` against stored baseline upon major deployments to detect any accidental metadata drops.
3. **Core Web Vitals Monitoring:** Monitor real user metric (RUM) field data via Vercel Speed Insights.
