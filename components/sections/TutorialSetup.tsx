import { AlertTriangle } from "lucide-react";

export function TutorialSetup() {
  return (
    <section className="bg-white py-14">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-black text-brand-dark tracking-tight mb-3">
            IPTV Setup Tutorials
          </h2>
          <p className="text-slate-500 text-sm sm:text-base flex items-center justify-center gap-2">
            <span>👇</span>
            <span>
              Choose your device below and scroll down to see the{" "}
              <span className="text-brand-blue font-semibold">installation guide</span>
            </span>
          </p>
        </div>

        {/* Important Notice */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 flex items-start gap-4">
          <div className="shrink-0 mt-0.5">
            <AlertTriangle size={20} className="text-amber-500" />
          </div>
          <div className="text-sm text-amber-900 leading-relaxed space-y-1">
            <p>
              <strong>Important:</strong> We sell the IPTV subscription only. V17Mate (our app) is free on Android/Firestick. You can use any player you want.
            </p>
            <p>
              But other players like Hot Player, IMPlayer require you to buy their own paid license after the trial.
            </p>
            <p className="text-amber-700 italic">
              Example: Your subscription is the SIM card — you still need a phone (the player app) to use it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
