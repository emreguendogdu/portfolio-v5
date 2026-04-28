import AnimatedText from './ui/AnimatedText';

type Service = {
  number: string;
  title: string;
  description: string;
  includes: string[];
};

const services: Service[] = [
  {
    number: '01',
    title: 'Design & Development',
    description:
      'Custom design and front-end build, end to end — Figma to deploy. Best for founders who want one person owning the visual language and the code.',
    includes: [
      'Custom design system',
      'Responsive build',
      'CMS',
      'Motion',
      'Deployment',
    ],
  },
  {
    number: '02',
    title: 'Front-End Development',
    description:
      'You bring the design, I bring it to life with care. React and Next.js, motion, micro-interactions, and performance budgets that actually hold.',
    includes: [
      'Pixel-perfect implementation',
      'Motion',
      '95+ Lighthouse',
      'A/B-ready components',
    ],
  },
  {
    number: '03',
    title: 'Conversion-Focused Pages',
    description:
      'Landing pages, checkout flows, intake forms — built to be measured. For DTC and telehealth brands that ship every week and live or die by analytics.',
    includes: [
      'Landing pages',
      'Multi-step forms',
      'Checkout',
      'Stripe integrations',
    ],
  },
];

function ServiceRow({ number, title, description, includes }: Service) {
  return (
    <article className="col-span-full grid grid-cols-12 gap-x-5 gap-y-6 border-t border-current/10 pt-6 sm:pt-10">
      <div className="col-span-full sm:col-span-5 flex items-start gap-4 sm:gap-6">
        <AnimatedText>
          <span className="text-muted text-xs uppercase tracking-widest mt-1">
            {number}
          </span>
        </AnimatedText>
        <AnimatedText>
          <h3>{title}</h3>
        </AnimatedText>
      </div>

      <div className="col-span-full sm:col-span-7 flex flex-col gap-6">
        <AnimatedText>
          <p>{description}</p>
        </AnimatedText>
        <div className="flex flex-col gap-2">
          <h4 className="text-xs uppercase tracking-widest text-muted">
            Includes
          </h4>
          <AnimatedText>
            <p className="text-muted">{includes.join(' · ')}</p>
          </AnimatedText>
        </div>
      </div>
    </article>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative w-full grid grid-cols-12 gap-y-10 sm:gap-y-20 sm:gap-x-5"
    >
      <div className="relative flex flex-row justify-between gap-sm items-end w-full col-span-full flex-wrap">
        <div className="w-full sm:flex-1 grid grid-cols-12 grid-rows-2 gap-y-2 sm:gap-y-5">
          <h2 id="services-heading" className="h0 col-span-full">
            <AnimatedText>
              <span>What</span>
            </AnimatedText>
          </h2>
          <h2 className="h0 row-start-2 col-start-3 col-span-10">
            <AnimatedText>
              <span>I do.</span>
            </AnimatedText>
          </h2>
        </div>

        <div className="absolute right-0 top-0">
          <p className="text-muted text-xs uppercase tracking-widest">
            [03 — Services]
          </p>
        </div>
      </div>

      {services.map((service) => (
        <ServiceRow key={service.number} {...service} />
      ))}
    </section>
  );
}
