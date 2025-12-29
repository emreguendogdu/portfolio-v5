import CTA from "../ui/CTA";
import FullScreenImageLayout from "../layouts/FullScreenImageLayout";
import Image from "@/public/work/kiani/images/tst-3.png";

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
            “Ullamco nostrud culpa ipsum aliqua incididunt velit occaecat.
            Fugiat sint amet sit veniam ex id quis duis fugiat in ut dolor
            minim. Velit nulla elit dolor officia esse. Lorem enim exercitation
            reprehenderit pariatur.
          </p>

          <span className="secondary-text">Sophia Teller</span>
        </div>

        <CTA type="white" text="Book Yours" />
      </div>
    </FullScreenImageLayout>
  );
}
