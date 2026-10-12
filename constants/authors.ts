export interface Author {
  id: string;
  name: string;
  role: string;
  avatar: string;
  bio: string;
  url: string;
}

export const authors: Record<string, Author> = {
  editorial: {
    id: "editorial",
    name: "IPTV Canada Editorial & Network Testing Board",
    role: "Streaming Infrastructure & Quality Assurance",
    avatar: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    bio: "Our Montreal and Toronto-based technical team tests IPTV streaming performance across major Canadian ISPs (Bell Fibe, Rogers Ignite, Telus Optik) and streaming hardware (Fire TV Stick 4K Max, Apple TV 4K, Nvidia Shield TV Pro). All guides follow rigorous latency, EPG accuracy, and security verification standards.",
    url: "/team#editorial"
  },
  marc: {
    id: "marc",
    name: "Marc Tremblay",
    role: "Senior Streaming & Network Infrastructure Specialist",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    bio: "With over 11 years of experience in CDN edge routing, IPTV transport protocols (HLS, MPEG-TS), and Canadian ISP traffic shaping analysis, Marc leads technical streaming audits on Bell Fibe and Vidéotron networks across Eastern Canada.",
    url: "/team#marc"
  },
  sarah: {
    id: "sarah",
    name: "Sarah Jenkins",
    role: "Home Theater & Android TV Systems Engineer",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    bio: "Specializing in home theater audio/video integration, Sarah benchmarks streaming hardware (Firestick 4K, Nvidia Shield, Formuler Z11) and player apps (TiviMate, IPTV Smarters Pro). Based in Toronto, she focuses on sports streaming latency and 4K HDR playback.",
    url: "/team#sarah"
  }
};

export function getAuthor(id?: string): Author {
  if (id && authors[id]) {
    return authors[id];
  }
  return authors.editorial;
}
