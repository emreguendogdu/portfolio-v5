import Image from 'next/image';
import CardImage from '../ui/CardImageWrapper';
/* TODO: Replace this images with SPA images */
import CardImage1 from '../../images/card-image-1.png';
import CardImage2 from '../../images/card-image-2.png';

/* TODO: Replace this images with SPA images */
const SPA_ITEMS = [
  {
    id: 1,
    title: 'Thermal Places',
    description:
      'A spa is a perfect getaway for relaxation and rejuvenation. It offers a variety of treatments, from massages to facials, designed to pamper the body and mind. The serene environment helps to melt away stress and tension.',
    imageUrl:
      'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2670&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Wellness Programs',
    description:
      'Comprehensive wellness programs tailored to your needs. From yoga sessions to meditation classes, we offer holistic approaches to health and well-being.',
    imageUrl:
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2599&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Recovery Treatments',
    description:
      'Specialized recovery treatments designed to restore balance and vitality. Our expert therapists use ancient techniques combined with modern practices.',
    imageUrl:
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2670&auto=format&fit=crop',
  },
];

export default function SpaWellness() {
  return (
    <section
      id="spa-wellness"
      className="relative w-full min-h-svh px-10 py-20"
    >
      <div className="flex flex-col items-end w-fit gap-2.5 relative">
        <h2>Wellness & Spa</h2>
        <span className="secondary-text w-fit">Rest & Recovery</span>

        {/* Image */}
        <CardImage
          src={CardImage2}
          /* TODO: Fix alt attributes */
          ariaHidden
          alt="."
          className="absolute right-0 -top-32 rotate-[4deg]"
        />

        {/* Image */}
        <CardImage
          src={CardImage1}
          /* TODO: Fix alt attributes */
          alt="."
          ariaHidden
          className="absolute left-0 -bottom-32 rotate-[-4deg]"
        />
      </div>

      <div className="grid grid-cols-12 gap-x-10 w-full mt-30">
        <p className="col-start-7 col-span-5 max-w-sm">
          Et tempor consequat dolor magna ad excepteur irure exercitation
          commodo adipisicing labore. Ipsum commodo tempor laboris. Ullamco
          officia ullamco consequat quis. Non sint nulla incididunt dolor veniam
          anim ad pariatur ut consequat laboris irure.
        </p>

        <div className="flex flex-col w-fit">
          <p className="secondary-text text-right mr-0.75">کیانی</p>
          <p className="secondary-text opacity-50 text-right">(Kiani)</p>
        </div>
      </div>

      <div className="w-full mt-60 space-y-0">
        {SPA_ITEMS.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-12 gap-x-10 w-full py-5 border-t border-t-black/20"
          >
            <div className="col-span-5 relative h-[40vh] overflow-hidden">
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="col-start-7 col-span-3 h-full flex flex-col justify-between">
              <h3 className="secondary-text">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
