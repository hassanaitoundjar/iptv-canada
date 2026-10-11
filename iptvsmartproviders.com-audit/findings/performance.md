# Performance & Core Web Vitals Findings

## Status: 86 / 100 🟢

### Architecture & Optimization Strengths
- **Static Pre-Rendering (SSG):** All 97 marketing pages, blog posts, and city pages are pre-rendered into static HTML at build time, yielding instant server response times (TTFB < 50ms on edge).
- **Zero CLS Typography:** Using Next.js `next/font/google` with `Geist` and `Geist_Mono` automatically inlines font CSS and utilizes fallback size metrics, preventing Cumulative Layout Shift during text rendering.
- **Modern Compression:** Served through Cloudflare edge network with HTTP/2 and Zstandard compression.
- **Built-in Telemetry:** Vercel Analytics and SpeedInsights are active in `app/layout.tsx`.

### Optimization Opportunities
- **Responsive Image Sizing:** Audit `<Image>` component `sizes` attributes across the hero collage and blog previews to ensure mobile screens load appropriately scaled Unsplash assets rather than full-resolution desktop images.
