# Schema & Structured Data Findings

## Status: 90 / 100 🟢

### Detected Structured Data Blocks
1. **Organization Schema:**
   - Declares name, official logo (`https://iptvsmartproviders.com/logo.png`), phone support (`+1 (757) 957-5093`), email, and social profiles.
   - `contactPoint` with bilingual support specification (English, French).
2. **WebSite Schema:**
   - Declares `SearchAction` targeting `/blog?q={search_term_string}`.
3. **Product & Offer Schema:**
   - Declares subscription tiers (1, 3, 6, 12 months) in CAD currency with validity date up to 2027-12-31.
4. **FAQPage Schema:**
   - 10+ detailed question and accepted answer entities on homepage and dedicated FAQ page.
5. **LocalService Schema:**
   - Applied dynamically to city landing pages (`/iptv-toronto`, `/iptv-vancouver`, etc.) with city and province codes.
6. **BreadcrumbList:**
   - Applied across subpages for rich breadcrumb trail navigation in Google SERPs.

### Recommendation
- Ensure all target URLs in `lib/schemas.ts` are updated to `https://www.iptvsmartproviders.com` so search engine crawlers do not see schema entities referencing redirect targets.
