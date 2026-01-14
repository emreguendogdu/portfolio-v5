export type Project = {
  slug:
    | 'ethera-supplements'
    | 'atlas-coworking'
    | 'aelora-luxury'
    | 'shortfy'
    | 'solara'
    | 'kiani';
  title: string;
  shortDescription: string;
  work: 'Design' | 'Design & Development' | 'Development';
  url: string | null;
  imageSource: string;
  videoUrl: string | null;
  inProgress?: boolean;
};

export const projects: Project[] = [
  {
    slug: 'ethera-supplements',
    title: 'Ethera Supplements',
    shortDescription: '3D E-Commerce Experience',
    work: 'Design & Development',
    url: 'https://ethera-supplements.vercel.app/',
    imageSource: '/images/projects/ethera.webp',
    videoUrl: null,
  },
  {
    slug: 'atlas-coworking',
    title: 'Atlas Coworking',
    shortDescription: 'Modern Co-Working Space Website',
    work: 'Design & Development',
    url: 'https://atlas.emregnd.com/',
    imageSource: '/images/projects/atlas.webp',
    videoUrl: null,
    inProgress: true,
  },

  {
    slug: 'solara',
    title: 'Solara Grand & Aqua Hotel',
    shortDescription: 'Modern Hotel Website',
    work: 'Design & Development',
    url: 'https://emregnd.com/solara',
    imageSource: '/images/projects/solara.png',
    videoUrl: null,
    inProgress: true,
  },

  {
    slug: 'kiani',
    title: 'Kiani Luxury Hotel & Spa',
    shortDescription: 'Modern Hotel Website',
    work: 'Design & Development',
    url: 'https://emregnd.com/kiani',
    imageSource: '/images/projects/kiani.png',
    videoUrl: null,
    inProgress: true,
  },

  {
    slug: 'shortfy',
    title: 'Shortfy',
    shortDescription: 'SAAS Website',
    work: 'Development',
    url: 'https://shortfy.io/',
    imageSource: '/images/projects/shortfy.webp',
    videoUrl: null,
  },

  {
    slug: 'aelora-luxury',
    title: 'Aelora Luxury',
    shortDescription: 'Luxury Hotel Website',
    work: 'Design',
    url: null,
    imageSource: '/images/projects/aelora-luxury.webp',
    videoUrl: null,
  },
];
