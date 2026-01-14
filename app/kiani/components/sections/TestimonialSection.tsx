import CTA from '../ui/CTA';
import FullScreenImageLayout from '../layouts/FullScreenImageLayout';
import Image from '../../images/testimonial-image.png';

export default function TestimonialSection() {
  return (
    <FullScreenImageLayout
      sectionId="testimonial-section"
      imageUrl={Image}
      contentClassName="flex flex-col gap-10 justify-between h-full"
      objectPosition="0% 60%"
    >
      <h2>
        "What people <br />
        are saying
      </h2>

      <div className="flex flex-col gap-20">
        <div className="flex flex-col gap-5">
          <p className="max-w-lg h3">
            “From the moment I arrived, everything felt unforced. The
            architecture, the silence... Kiani gives you space to feel present.
            We left feeling lighter.
          </p>

          <span className="secondary-text">Sophia Teller</span>
        </div>

        <CTA type="white" text="Book Yours" />
      </div>
    </FullScreenImageLayout>
  );
}
