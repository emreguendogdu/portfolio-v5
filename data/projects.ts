export type Project = {
  slug: "ethera-supplements" | "atlas-coworking" | "aelora-luxury" | "shortfy";
  title: string;
  shortDescription: string;
  work: "Design" | "Design & Development" | "Development";
  url: string | null;
  imageSource: string;
  videoUrl: string | null;
};

export const projects: Project[] = [
  {
    slug: "ethera-supplements",
    title: "Ethera Supplements",
    shortDescription: "3D E-Commerce Experience",
    work: "Design & Development",
    url: "https://ethera-supplements.vercel.app/",
    imageSource: "/images/projects/ethera.webp",
    videoUrl: null,
  },
  {
    slug: "atlas-coworking",
    title: "Atlas Coworking",
    shortDescription: "Modern Co-Working Space Website",
    work: "Design",
    url: null,
    imageSource: "/images/projects/atlas.webp",
    videoUrl: null,
  },

  {
    slug: "shortfy",
    title: "Shortfy",
    shortDescription: "SAAS Website",
    work: "Development",
    url: "https://shortfy.io/",
    imageSource: "/images/projects/shortfy.webp",
    videoUrl: null,
  },

  {
    slug: "aelora-luxury",
    title: "Aelora Luxury",
    shortDescription: "Luxury Hotel Website",
    work: "Design",
    url: null,
    imageSource: "/images/projects/aelora-luxury.webp",
    videoUrl: null,
  },
];
