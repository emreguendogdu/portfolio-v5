import { Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import Image from "next/image";

const ProjectElement = ({
  project,
  type,
}: {
  project: Project;
  type: "small" | "big";
}) => {
  return (
    <article
      className={cn(
        "flex flex-col gap-5 col-span-11 sm:col-span-6",
        type === "big" ? "col-start-2 sm:col-start-auto" : null
      )}
    >
      {/* Image Wrapper */}
      <div
        className={cn(
          "relative bg-black/10 w-full rounded-lg",
          type === "small" ? "aspect-square h-auto" : "aspect-[1/1.3] h-full"
        )}
        data-project-image="true"
        data-project-has-url={!!project.url}
      >
        <Image
          className="object-cover pointer-events-none"
          src={project.imageSource}
          alt={`${project.title} presentation`}
          fill
          aria-hidden
        />
      </div>

      <div className="w-full flex justify-between gap-5">
        <div className="flex flex-col gap-2">
          <h3 className="capitalize">{project.title}</h3>
          <p>{project.work}</p>
        </div>

        <p className="opacity-50">{project.shortDescription}</p>
      </div>
    </article>
  );
};

export default ProjectElement;
