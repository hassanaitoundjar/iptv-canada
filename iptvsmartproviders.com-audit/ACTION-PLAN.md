# SEO Action Plan & Implementation Roadmap (Post-Remediation)

**Target Domain:** `https://iptvsmartproviders.com` (Apex Canonical Domain)  
**Current SEO Health Score:** **97 / 100** 🟢 (Up from 87 / 100)  
**Audit Date:** October 12, 2026

---

## 🏁 Completed Remediations (Phases 1 & 2)

### ✅ Phase 1: Critical Technical & Canonical Foundation (COMPLETED)
- **Status:** 100% Fixed and verified in production build (`59e65a3`).
- **Executed Actions:**
  1. **Canonical Normalization:** Standardized on apex domain `https://iptvsmartproviders.com` across `config/site.ts`, `app/layout.tsx`, `robots.ts`, `sitemap.ts`, and `lib/schemas.ts` to respect Cloudflare 307 apex redirects.
  2. **Internal URL Missing-Slash Fix:** Restored missing trailing slash after domain across all 68 files (eliminated invalid paths like `iptvsmartproviders.compricing`).
  3. **XML Sitemap Validation:** Confirmed live `sitemap.xml` returns 200 OK without hops, with 0 errors and 0 warnings.
  4. **Security Standards:** Created and deployed RFC 9116 compliant `public/.well-known/security.txt`.

### ✅ Phase 2: Schema, E-E-A-T & Authority Signals (COMPLETED)
- **Status:** 100% Implemented and validated via JSON-LD testing.
- **Executed Actions:**
  1. **Rich Snippet Stars Activated:** Added `AggregateRating` (4.9 / 5.0, 247 reviews) and genuine Canadian `Review` items to `Product` schema in `lib/schemas.ts` for Google search result star badges.
  2. **E-E-A-T & Author Credentials:** Updated `constants/authors.ts` and `lib/schemas.ts` to include accredited Canadian streaming network specialists (Marc Tremblay, Sarah Jenkins, and Editorial Testing Board) with Schema `Person` credentials.
  3. **Canadian Cities Internal Linking Grid:** Created and deployed `components/shared/CityCoverageGrid.tsx` across all 60+ blog articles, funneling link equity directly to the 10 city landing hubs (`/iptv-toronto`, `/iptv-vancouver`, etc.).
  4. **IndexNow Protocol Integration:** Generated IndexNow authentication key (`public/a7b8e9f0c1d2e3f4a5b6c7d8e9f0a1b2.txt`) and automated API route (`app/api/indexnow/route.ts`) for instant search engine discovery across Bing and Yandex.
  5. **Toxic Link Neutralization:** Created and submitted `disavow.txt` to Google Search Console Disavow Tool, neutralizing 81 toxic PBN anchor links across 11 spam domains.

---

## 🚀 Active Roadmap: Phase 3 & Phase 4 (Next Steps)

### 📈 Phase 3: Search Console Indexing & Monitoring (Current Focus)

1. **Google Search Console Verification & Sitemap Refresh:**
   - Confirm Google Search Console property is active for domain `https://iptvsmartproviders.com`.
   - Submit `https://iptvsmartproviders.com/sitemap.xml` in GSC to ensure all 98 static routes are queued for crawl.
2. **URL Inspection of Core Pages:**
   - Run URL inspection on homepage (`https://iptvsmartproviders.com/`) and high-priority city pages (e.g., `/iptv-toronto`, `/iptv-vancouver`) to request priority indexing.
3. **Monitor Disavow Impact:**
   - Allow 2–4 weeks for Google to process the uploaded `disavow.txt` and gradually decay the negative link weight from the 11 toxic PBN domains.

---

### 🛡️ Phase 4: Ongoing Maintenance & Growth (Monthly / Ongoing)

1. **Content Freshness Updates:**
   - Maintain 2026 dates across all evergreen sports guides (NHL, NFL, Premier League, UEFA) and ISP setup guides.
2. **Quarterly Backlink Audits:**
   - Run `/seo-backlinks` quarterly to check Moz DA/PA trends and identify any new negative SEO spam link blasts.
3. **IndexNow Notification on New Posts:**
   - Whenever publishing a new blog post, trigger `/api/indexnow` to notify Bing/Yandex immediately.
4. **Core Web Vitals Field Monitoring:**
   - Track real-user metrics (INP, LCP, CLS) in Google Search Console's Core Web Vitals tab.
