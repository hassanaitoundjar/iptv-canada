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
    name: "IPTV Canada Editorial Team",
    role: "Content Team",
    avatar: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    bio: "The IPTV Canada editorial team provides transparent, up-to-date guides, troubleshooting tips, and news on the Canadian streaming landscape.",
    url: "/team#editorial"
  }
};

export function getAuthor(id?: string): Author {
  // Always return editorial team since we removed fabricated personas
  return authors.editorial;
}
