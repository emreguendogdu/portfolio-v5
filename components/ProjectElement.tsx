"use client";

import { Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef, useState } from "react";
import ArrowRightIcon from "./ui/ArrowRightIcon";
import Link from "next/link";

gsap.defaults({
  ease: "easeInOut",
  duration: "0.6",
});

const ProjectElement = ({
  project,
  type,
  isOdd,
}: {
  project: Project;
  type: "small" | "big";
  isOdd: boolean;
}) => {
  const hoverVideoElementRef = useRef(null);
  const hoverArrowRef = useRef(null);
  const projectImageRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  useGSAP(() => {
    gsap.set(hoverVideoElementRef.current, {
      scale: 0,
    });

    gsap.set(hoverArrowRef.current, {
      scale: 0,
    });
  });

  useGSAP(() => {
    if (hovered) {
      if (project.url) {
        gsap.to(projectImageRef.current, {
          scale: 1.02,
        });

        gsap.to(hoverArrowRef.current, {
          scale: 1,
        });
      }

      if (project.videoUrl) {
        gsap.to(projectImageRef.current, {
          filter: "blur(4px)",
        });

        gsap.to(hoverVideoElementRef.current, {
          scale: 1,
        });
      }
    } else {
      if (project.url) {
        gsap.to(projectImageRef.current, {
          scale: 1.0,
        });

        gsap.to(hoverArrowRef.current, {
          scale: 0,
        });
      }

      if (project.url || project.videoUrl) {
        gsap.to(projectImageRef.current, {
          filter: "blur(0px)",
        });
      }

      gsap.to(hoverVideoElementRef.current, {
        scale: 0,
      });
    }
  }, [hovered]);

  return (
    <article
      className={cn(
        "flex flex-col gap-6 col-span-10 sm:col-span-6",
        isOdd ? "col-start-2 sm:col-start-auto" : null
      )}
    >
      {/* Image Wrapper */}
      <Link
        href={project.url || ""}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={!!project.url ? "cursor-pointer" : "cursor-default"}
        target="_blank"
        onClick={(e) => {
          // TODO: Remove this and add conditional render for Link element.
          if (!project.url) {
            e.preventDefault();
            e.stopPropagation();
          }
        }}
      >
        <div
          className={cn(
            "relative bg-black/10 w-full rounded-lg overflow-hidden",
            type === "small"
              ? "aspect-[1/0.75] h-auto"
              : "aspect-[1/1.1] h-full"
          )}
        >
          <Image
            className="object-cover pointer-events-none"
            src={project.imageSource}
            alt={`${project.title} presentation`}
            fill
            aria-hidden
            ref={projectImageRef}
            loading="lazy"
            decoding="async"
          />

          {/* Hover Info Element */}
          <div className="absolute inset-0 z-10 hidden sm:flex flex-col justify-center items-center text-white gap-10 px-10 py-6 pointer-events-none">
            {/* Video */}
            <div
              className="video w-[90%] h-1/2 bg-red-500 origin-bottom rounded-lg mt-16"
              ref={hoverVideoElementRef}
            />
            {/* Arrow */}
            <div
              className="flex items-center justify-center bg-white text-black w-16 h-16 rounded-full origin-center"
              ref={hoverArrowRef}
            >
              <ArrowRightIcon className="w-6 h-6" />
            </div>
          </div>
        </div>
      </Link>

      <div className="w-full flex justify-between gap-6">
        <div className="flex flex-col gap-2">
          <h3 className="capitalize">{project.title}</h3>
          <p>{project.work}</p>
        </div>

        <p className="opacity-50 w-1/3 text-right">
          {project.shortDescription}
        </p>
      </div>
    </article>
  );
};

export default ProjectElement;
