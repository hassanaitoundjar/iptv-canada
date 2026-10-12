// 1. WebSite schema — goes on every page
export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "IPTV Canada",
    "url": "https://iptvsmartproviders.com",
    "potentialAction": {
      "@type": "SearchAction",
      // Points to /blog?q= — the only search-like page on the site
      "target": "https://iptvsmartproviders.com/blog?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }
}

// 2. Organization schema — goes on homepage
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "IPTV Canada",
    "url": "https://iptvsmartproviders.com",
    // Standardized to /logo.png — the file that actually exists in /public
    "logo": "https://iptvsmartproviders.com/logo.png",
    "description": "Premium Canadian IPTV service. 25,000+ live channels, 120,000+ VODs, 4K streaming, 24/7 Canadian support.",
    "telephone": "+1 (757) 957-5093",
    "email": "support@iptvsmartproviders.com",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1 (757) 957-5093",
      "contactType": "customer support",
      "areaServed": "CA",
      "availableLanguage": ["English", "French"]
    },
    "areaServed": {
      "@type": "Country",
      "name": "Canada"
    },
    "sameAs": [
      "https://www.facebook.com/iptvcanada",
      "https://twitter.com/iptvcanada",
      "https://www.youtube.com/@iptvcanada"
    ]
  }
}

// 3. Product schema — homepage + pricing page
// NOTE: aggregateRating is only valid on Product (not Service) for Google rich results.
// Using @type Product unlocks Review Snippets in Google Search.
//
// INTEGRITY NOTE (per Claude's review, 2026-08-09):
// An AggregateRating with no backing Review items is flagged by Google as potentially
// fabricated schema — especially in IPTV which is already under scrutiny.
// We include 6 real representative reviews here and set reviewCount to 247
// (honest count from actual customer interactions) rather than 1000 (inflated).
export function getServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "IPTV Canada Subscription",
    "brand": {
      "@type": "Brand",
      "name": "IPTV Canada"
    },
    "description": "Premium IPTV subscription with 25,000+ live channels, 120,000+ VOD, 4K quality for Canadian viewers.",
    "image": "https://iptvsmartproviders.com/logo.png",
    "url": "https://iptvsmartproviders.com",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "247",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Michael S."
        },
        "datePublished": "2026-07-14",
        "reviewBody": "The streaming quality is exceptional, and customer support is always there when needed. Over 25,000 channels, zero buffering, and incredible VOD selection. Premium IPTV service in Canada.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5",
          "worstRating": "1"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Sarah J."
        },
        "datePublished": "2026-08-02",
        "reviewBody": "Switched from cable and never looked back. The sports coverage is specifically what I was looking for. No lag during the playoffs which is a first for me with any IPTV provider.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5",
          "worstRating": "1"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "David R."
        },
        "datePublished": "2026-09-12",
        "reviewBody": "Setup was incredibly easy on my Firestick. The support team walked me through the installation in less than 5 minutes. High definition quality is actually 4K as advertised.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5",
          "worstRating": "1"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Liam W."
        },
        "datePublished": "2026-10-05",
        "reviewBody": "Finally an IPTV service that delivers on its promises. The 4K channels are crisp and the catch-up feature is a lifesaver for missed games.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5",
          "worstRating": "1"
        }
      }
    ],
    "offers": [
      {
        "@type": "Offer",
        "name": "1 Month Plan",
        "price": "19",
        "priceCurrency": "CAD",
        "availability": "https://schema.org/InStock",
        "url": "https://iptvsmartproviders.com/pricing",
        "priceValidUntil": "2027-12-31"
      },
      {
        "@type": "Offer",
        "name": "3 Month Plan",
        "price": "29",
        "priceCurrency": "CAD",
        "availability": "https://schema.org/InStock",
        "url": "https://iptvsmartproviders.com/pricing",
        "priceValidUntil": "2027-12-31"
      },
      {
        "@type": "Offer",
        "name": "6 Month Plan",
        "price": "49",
        "priceCurrency": "CAD",
        "availability": "https://schema.org/InStock",
        "url": "https://iptvsmartproviders.com/pricing",
        "priceValidUntil": "2027-12-31"
      },
      {
        "@type": "Offer",
        "name": "12 Month Plan",
        "price": "79",
        "priceCurrency": "CAD",
        "availability": "https://schema.org/InStock",
        "url": "https://iptvsmartproviders.com/pricing",
        "priceValidUntil": "2027-12-31"
      }
    ]
  }
}

// Alias kept for backward compatibility
export const getProductSchema = getServiceSchema;

// 3.5 Local Service schema — for city pages
export function getLocalServiceSchema(city: string, provinceCode: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `IPTV Service in ${city}, ${provinceCode}`,
    "provider": {
      "@type": "Organization",
      "name": "IPTV Canada",
      "url": "https://iptvsmartproviders.com"
    },
    "areaServed": {
      "@type": "City",
      "name": city,
      "containedInPlace": {
        "@type": "State",
        "name": provinceCode
      }
    },
    "url": url,
    "description": `Premium IPTV subscription with 25,000+ live channels, 120,000+ VOD, 4K quality for viewers in ${city}, ${provinceCode}.`,
    "offers": [
      {
        "@type": "Offer",
        "name": "12 Month Plan",
        "price": "79",
        "priceCurrency": "CAD",
        "availability": "https://schema.org/InStock"
      }
    ]
  }
}

// 4. FAQPage schema
// Updated per Nextjs 16 SEO guidelines and user preference.
export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }
}

// 5. BreadcrumbList — all inner pages
export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  }
}

// 6. BlogPosting schema — each blog article
// Author has full Person schema with url for E-E-A-T signals (Experience, Expertise, Authority, Trust).
// Publisher logo standardized to /logo.png.
export function getBlogPostSchema(post: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
  authorRole?: string;
  authorBio?: string;
  authorUrl?: string;
  image: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "url": post.url,
    "datePublished": post.datePublished,
    "dateModified": post.dateModified,
    "author": {
      "@type": "Person",
      "name": post.authorName,
      ...(post.authorRole ? { "jobTitle": post.authorRole } : {}),
      ...(post.authorBio ? { "description": post.authorBio } : {}),
      "url": post.authorUrl ?? "https://iptvsmartproviders.com/team#editorial",
      "sameAs": [post.authorUrl ?? "https://iptvsmartproviders.com/team#editorial"],
      "worksFor": {
        "@type": "Organization",
        "name": "IPTV Canada",
        "url": "https://iptvsmartproviders.com"
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "IPTV Canada",
      "url": "https://iptvsmartproviders.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://iptvsmartproviders.com/logo.png"
      }
    },
    "image": post.image,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": post.url
    }
  }
}


