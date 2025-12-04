import { Fragment } from "react";
import { projects } from "@/data/projects";
import ProjectElement from "./ProjectElement";

const HeaderContent = () => {
  return (
    <div className="flex justify-between items-center w-full col-span-full">
      <div className="sm:flex-1 grid grid-cols-6 grid-rows-2 gap-y-2 sm:gap-y-5">
        <h2 className="h0">Selected</h2>
        <h2 className="h0 row-start-2 col-start-3">Works</h2>
      </div>

      <div>
        <h2 className="h0">({projects.length})</h2>
      </div>
    </div>
  );
};

const bigIndices = new Set([1, 2, 4]);

export default function SelectedWorks() {
  return (
    <section
      id="selected-works"
      className="w-full grid grid-cols-12 min-h-svh gap-y-20 gap-x-10"
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
