export interface NavLink {
  title: string;
  slug: string;
  alt?: boolean;
}

export const navLinks: NavLink[] = [
  { title: "Admin", slug: "admin" },
  { title: "Try Redux", slug: "try_redux" },
  { title: "Try Firebase", slug: "try_firebase" },
];

// pages that would be rendered alternatively

export const altPages = navLinks
  .filter((item) => item.alt)
  .map((item) => "/" + item.slug);
