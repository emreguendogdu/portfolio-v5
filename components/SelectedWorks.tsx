import { Fragment } from "react";
import { projects } from "@/data/projects";
import ProjectElement from "./ProjectElement";
import AnimatedText from "./ui/AnimatedText";

const HeaderContent = () => {
  return (
    <div className="flex flex-row justify-between gap-sm items-end w-full col-span-full flex-wrap">
      <div className="w-full sm:flex-1 grid grid-cols-12 grid-rows-2 gap-y-2 sm:gap-y-5">
        <h2 className="h0 col-span-full">
          <AnimatedText>
            <span>Selected</span>
          </AnimatedText>
        </h2>
        <h2 className="h0 row-start-2 col-start-4 sm:col-start-3 col-span-8 sm:col-span-9">
          <AnimatedText>
            <span>Works</span>
          </AnimatedText>
        </h2>
      </div>

      <div className="relative">
        <h2 className="h0 -translate-y-full sm:translate-y-0">
          <AnimatedText>
            <span>({projects.length})</span>
          </AnimatedText>
        </h2>
      </div>
    </div>
  );
};

const bigIndices = new Set([1, 2, 4]);

export default function SelectedWorks() {
  return (
    <section
      id="selected-works"
      className="relative w-full grid grid-cols-12 gap-y-10 sm:gap-y-20 sm:gap-x-5"
    >
      <HeaderContent />

      {projects.map((project, i) => (
        <Fragment key={`sw__${i}`}>
          <ProjectElement
            project={project}
            type={bigIndices.has(i) ? "big" : "small"}
            isOdd={i % 2 === 1}
          />
        </Fragment>
      ))}
    </section>
  );
}
