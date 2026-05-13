import { 
  Wifi, 
  ShieldAlert, 
  RefreshCw, 
  PlayCircle, 
  ShieldCheck, 
  Trash2, 
  Lock
} from "lucide-react";

const tips = [
  {
    icon: <Wifi className="text-red-500" size={20} />,
    text: "Check your internet connection. A stable connection of at least 15-20 Mbps is recommended for smooth HD streaming.",
  },
  {
    icon: <ShieldAlert className="text-orange-500" size={20} />,
    text: "Make sure your Xtream Codes (Credentials) are entered correctly. These details are case-sensitive.",
  },
  {
    icon: <RefreshCw className="text-blue-500" size={20} />,
    text: "Update your IPTV player app to the latest version to avoid playback and loading issues.",
  },
  {
    icon: <PlayCircle className="text-green-500" size={20} />,
    text: "Restart your device and also reboot your router/modem.",
  },
  {
    icon: <ShieldCheck className="text-purple-500" size={20} />,
    text: "If you are using a VPN, try switching to another server or temporarily disabling it to test whether it resolves the issue.",
  },
  {
    icon: <Trash2 className="text-pink-500" size={20} />,
    text: "Clear the cache of your IPTV player app, then reopen it and test again.",
  },
  {
    icon: <Lock className="text-slate-500" size={20} />,
    text: "Some internet providers may restrict IPTV traffic. If you suspect this, using a VPN can often help improve access.",
  },
];

export function Troubleshooting() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-brand-dark tracking-tight">
            Troubleshooting Tips
          </h2>
        </div>

        <div className="space-y-3">
          {tips.map((tip, index) => (
            <div 
              key={index}
              className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4 transition-transform hover:scale-[1.01]"
            >
              <div className="mt-0.5 shrink-0">
                {tip.icon}
              </div>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {tip.text.split(/(\d+-\d+\sMbps|Xtream\sCodes|Credentials|latest\sversion|router\/modem|VPN)/g).map((part, i) => {
                  const boldTerms = ["15-20 Mbps", "Xtream Codes", "Credentials", "latest version", "router/modem", "VPN"];
                  if (boldTerms.includes(part)) {
                    return <strong key={i} className="text-brand-dark font-black">{part}</strong>;
                  }
                  return part;
                })}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
