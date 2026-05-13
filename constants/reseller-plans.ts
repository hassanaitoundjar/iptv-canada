export interface ResellerPlan {
  credits: string;
  price: string;
  features: string[];
  paymentUrl: string;
}

export const resellerPlans: ResellerPlan[] = [
  {
    credits: "120 Credits",
    price: "350",
    features: [
      "Create up to 10 yearly subscriptions",
      "Advanced reseller dashboard",
      "Customer management tools",
      "Priority technical support",
      "Marketing materials included",
    ],
    paymentUrl: "https://wa.me/1xxxxxxxxxx?text=I%20want%20to%20order%20the%20120%20Credits%20Reseller%20Plan",
  },
  {
    credits: "240 Credits",
    price: "650",
    features: [
      "Create up to 20 yearly subscriptions",
      "Advanced reseller dashboard",
      "Customer management tools",
      "Priority technical support",
      "Marketing materials included",
    ],
    paymentUrl: "https://wa.me/1xxxxxxxxxx?text=I%20want%20to%20order%20the%20240%20Credits%20Reseller%20Plan",
  },
  {
    credits: "720 Credits",
    price: "1,950",
    features: [
      "Create up to 60 yearly subscriptions",
      "Advanced reseller dashboard",
      "Customer management tools",
      "Priority technical support",
      "Marketing materials included",
    ],
    paymentUrl: "https://wa.me/1xxxxxxxxxx?text=I%20want%20to%20order%20the%20720%20Credits%20Reseller%20Plan",
  },
];
