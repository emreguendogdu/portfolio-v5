import CTA from "../ui/CTA";
import FullScreenImageLayout from "../layouts/FullScreenImageLayout";

export default function SomeStays() {
  return (
    <FullScreenImageLayout
      sectionId="some-stays"
      contentClassName="flex flex-col gap-10 items-end"
    >
      <p className="mb-5 secondary-text">A Sense of Place</p>

      <h2 className="text-right">
        Some stays, <br /> stays with you
      </h2>

      <CTA type="white" text="Book Yours" />
    </FullScreenImageLayout>
  );
}
