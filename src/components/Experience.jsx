import { Button } from "./MovingBorders";
import { workExperience } from "../data";

export const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>

      <div className="mt-12 grid w-full grid-cols-1 gap-10 lg:grid-cols-4">
        {workExperience.map((experience) => (
          <Button
            key={experience.id}
            borderRadius="1.75rem"
            className="flex-1 border-neutral-200 text-white dark:border-slate-800"
            duration={Math.floor(Math.random() * 10000 + 10000)}
          >
            <div className="flex h-full w-full flex-col gap-4 p-5">
              <div className="flex w-full items-start justify-between">
                <img
                  src={experience.thumbnail}
                  alt={experience.title}
                  className="w-14 rounded-lg object-contain md:w-16"
                  style={{ height: '60px' }}
                />
                <span className="rounded-full border border-purple/20 bg-purple/10 px-3 py-1 text-xs text-purple">
                  Dec 2025 - Present
                </span>
              </div>

              <div>
                <h1 className="text-start text-lg font-bold md:text-xl">
                  {experience.title}
                </h1>
                <p className="mt-1 text-start text-sm text-purple">
                  {experience.company}
                </p>
                <p className="mt-2 text-start text-sm font-medium text-white-100">
                  {experience.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </section>
  );
};
