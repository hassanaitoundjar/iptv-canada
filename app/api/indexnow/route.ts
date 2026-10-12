import { NextResponse } from "next/server";
import { siteConfig } from "@/config/site";
import { cities } from "@/constants/city-pages";

export async function POST(req: Request) {
  try {
    let urlsToSubmit: string[] = [];

    try {
      const body = await req.json();
      if (body && Array.isArray(body.urls) && body.urls.length > 0) {
        urlsToSubmit = body.urls;
      }
    } catch {
      // If no JSON body, use default core URLs
    }

    if (urlsToSubmit.length === 0) {
      const corePages = [
        siteConfig.url,
        `${siteConfig.url}/pricing`,
        `${siteConfig.url}/free-trial`,
        `${siteConfig.url}/tutorial`,
        `${siteConfig.url}/reseller`,
        `${siteConfig.url}/blog`,
        `${siteConfig.url}/about`,
        `${siteConfig.url}/channels`,
        `${siteConfig.url}/apps`,
        `${siteConfig.url}/iptv-firestick-canada`,
      ];
      const cityPages = cities.map((c) => `${siteConfig.url}/${c.slug}`);
      urlsToSubmit = [...corePages, ...cityPages];
    }

    const payload = {
      host: "iptvsmartproviders.com",
      key: siteConfig.verification.indexNow,
      keyLocation: `${siteConfig.url}/${siteConfig.verification.indexNow}.txt`,
      urlList: urlsToSubmit,
    };

    const response = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    return NextResponse.json({
      success: response.ok,
      status: response.status,
      submittedCount: urlsToSubmit.length,
      payload,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  // Allow triggering via simple GET request
  const corePages = [
    siteConfig.url,
    `${siteConfig.url}/pricing`,
    `${siteConfig.url}/free-trial`,
    `${siteConfig.url}/tutorial`,
    `${siteConfig.url}/reseller`,
    `${siteConfig.url}/blog`,
  ];

  const payload = {
    host: "iptvsmartproviders.com",
    key: siteConfig.verification.indexNow,
    keyLocation: `${siteConfig.url}/${siteConfig.verification.indexNow}.txt`,
    urlList: corePages,
  };

  try {
    const response = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    return NextResponse.json({
      success: response.ok,
      status: response.status,
      submittedCount: corePages.length,
      note: "IndexNow submission dispatched to Bing and participating search engines.",
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
