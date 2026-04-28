import AnimatedText from './ui/AnimatedText';

type AsideGroup = {
  title: string;
  items: string[];
};

const stackGroups: AsideGroup[] = [
  {
    title: 'Stack',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'GSAP'],
  },
  {
    title: 'Design & CMS',
    items: ['Figma', 'Webflow', 'Shopify'],
  },
  {
    title: 'Edge & Payments',
    items: ['Stripe', 'Cloudflare Workers'],
  },
];

const metaGroups: AsideGroup[] = [
  {
    title: 'Based In',
    items: ['Istanbul, TR — currently Da Nang, VN'],
  },
  {
    title: 'Booking',
    items: ['Q2 2026'],
  },
];

function AsideList({ title, items }: AsideGroup) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-xs uppercase tracking-widest text-muted">{title}</h3>
      <ul className="flex flex-col gap-1">
        {items.map((item) => (
          <li key={item}>
            <AnimatedText>
              <span>{item}</span>
            </AnimatedText>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative w-full grid grid-cols-12 gap-y-10 sm:gap-y-20 sm:gap-x-5"
    >
      <div className="relative flex flex-row justify-between gap-sm items-end w-full col-span-full flex-wrap">
        <div className="w-full sm:flex-1 grid grid-cols-12 grid-rows-2 gap-y-2 sm:gap-y-5">
          <h2 id="about-heading" className="h0 col-span-full">
            <AnimatedText>
              <span>About</span>
            </AnimatedText>
          </h2>
          <h2 className="h0 row-start-2 col-start-3 col-span-10">
            <AnimatedText>
              <span>the maker</span>
            </AnimatedText>
          </h2>
        </div>

        <div className="absolute right-0 top-0">
          <p className="text-muted text-xs uppercase tracking-widest">
            [02 — Who I am]
          </p>
        </div>
      </div>

      <div className="col-span-full sm:col-span-7 flex flex-col gap-6">
        <AnimatedText>
          <p>
            I&apos;m Emre, a freelance front-end developer based in Istanbul
            and currently working remotely from Da Nang. I partner with
            founders, agencies, and design studios on websites that need to
            look distinct and convert hard.
          </p>
        </AnimatedText>

        <AnimatedText>
          <p>
            Most of my client work is for DTC and telehealth brands — landing
            pages, checkout flows, intake forms, payment systems. The kind of
            pages where every render and every click is measured against
            revenue.
          </p>
        </AnimatedText>

        <AnimatedText>
          <p className="text-muted">
            Outside of client work I prototype interaction ideas in GSAP and
            Three.js, and ship small tools when I find a problem worth solving
            twice.
          </p>
        </AnimatedText>
      </div>

      <div className="col-span-full sm:col-start-9 sm:col-span-4 flex flex-col gap-8">
        {stackGroups.map((group) => (
          <AsideList key={group.title} {...group} />
        ))}
        <div className="pt-6 border-t border-current/10 flex flex-col gap-8">
          {metaGroups.map((group) => (
            <AsideList key={group.title} {...group} />
          ))}
        </div>
      </div>
    </section>
  );
}
