import { CheckoutClient } from "@/components/sections/CheckoutClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Secure Checkout | IPTV Canada",
  description: "Complete your IPTV subscription for high-quality Canadian TV. Fast activation via WhatsApp.",
  robots: { index: false, follow: false }, // Private page
};

export default function CheckoutPage() {
  return (
    <main>
      <CheckoutClient />
    </main>
  );
}
