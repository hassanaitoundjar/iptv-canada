import Image from "next/image";
import Link from "next/link";
import { Users } from "lucide-react";
import { Author, getAuthor } from "@/constants/authors";

interface AuthorBioProps {
  /** Optional variant: "full" (detailed card) or "compact" (inline) */
  variant?: "full" | "compact";
  author?: Author;
}

export function AuthorBio({ variant = "full", author }: AuthorBioProps) {
  const authorData = author || getAuthor("editorial");
  
  if (variant === "compact") {
    return (
      <div className="flex items-center gap-3">
        <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border-2 border-brand-blue/10 bg-slate-100 flex items-center justify-center text-brand-blue">
          <Users size={20} />
        </div>
        <div>
          <p className="text-xs font-black text-brand-dark">{authorData.name}</p>
          <p className="text-[10px] text-slate-400 font-semibold">{authorData.role}</p>
        </div>
      </div>
    );
  }

  return (
    <aside
      aria-label="About the author"
      className="mt-16 border-t border-slate-100 pt-10"
    >
      <div className="flex flex-col sm:flex-row gap-6 items-start bg-slate-50 border border-slate-100 rounded-2xl p-6 sm:p-8">
        <div className="relative w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 border-2 border-brand-blue/10 bg-slate-100 flex items-center justify-center text-brand-blue">
          <Users size={36} />
        </div>
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <h3 className="text-base font-black text-brand-dark">{authorData.name}</h3>
            <span className="text-[10px] font-black uppercase tracking-widest bg-brand-blue/10 text-brand-blue px-2.5 py-1 rounded-full">
              {authorData.role}
            </span>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            {authorData.bio}
          </p>
          <p className="text-xs text-slate-500 font-semibold mt-3">
            Read more on our{" "}
            <Link href={authorData.url} className="text-brand-blue font-bold hover:underline">
              Team Page
            </Link>.
          </p>
        </div>
      </div>
    </aside>
  );
}
