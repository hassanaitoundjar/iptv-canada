# On-Page SEO Findings

## Status: 92 / 100 🟢

### Analysis
- **Title Tags:**
  - Format: `%s | IPTV Canada` with default `IPTV Canada — #1 Premium IPTV Subscription in Canada 2026`.
  - Length: 58 characters (within the optimal 50–60 character threshold).
- **Meta Descriptions:**
  - Length: ~120–150 characters across all templates.
  - Value propositions: 25,000+ live channels, 120,000+ VODs, 4K streaming, 24/7 Canadian support.
- **Heading Outline:**
  - Clean H1 -> H2 -> H3 hierarchy across homepage and blog templates.
  - Minor fix: In `Hero.tsx`, add a space before `<br />` to prevent concatenated words in text extractors.
- **Social Tags:**
  - `og:image` and `twitter:image` dynamically rendered using `@vercel/og` with Canadian branding.
