import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "../data";
import { PinContainer } from "./Pin3D";

export const RecentProjects = () => {
  return (
    <section id="projects" className="py-20">
      <h1 className="heading">
        Selected Product Design {" "}
        <span className="text-purple">Case Studies</span>
      </h1>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-x-24 gap-y-8 p-4">
        {projects.map(
          ({ id, des, img, link, sourceCode, title }) => (
            <div
              key={id}
              className="flex h-[32rem] w-[90vw] items-center justify-center sm:h-[41rem] sm:w-[570px] lg:min-h-[32.5rem]"
            >
              <PinContainer
                title={id === 4 ? undefined : "Visit"}
                href={id === 4 ? "#" : link}
                containerClassName={id === 4 ? "cursor-default" : ""}
              >
                <div className="relative mb-10 flex h-[30vh] w-[80vw] items-center justify-center overflow-hidden sm:h-[40vh] sm:w-[570px]">
                  <div className="relative h-full w-full overflow-hidden bg-[#13162d] lg:rounded-3xl">
                    <img
                      src="/bg.png"
                      alt="bg-img"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <img
                    src={img}
                    alt={title}
                    className={`absolute bottom-0 z-10 ${id === 4 ? "object-cover" : ""}`}
                    style={{ height: '300px', width: '464px' }}
                  />

                  {id === 4 && (
                    <div className="absolute left-1/2 top-8 z-20 -translate-x-1/2 rounded-full bg-purple/80 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md">
                      In Progress
                    </div>
                  )}
                </div>

                <h1 className="line-clamp-1 text-base font-bold md:text-xl lg:text-2xl">
                  {title}
                </h1>

                <p className="line-clamp-2 text-sm font-light lg:text-xl lg:font-normal">
                  {des}
                </p>

                <div className="mb-3 mt-7 flex items-center justify-end">
                  {id === 4 ? (
                    <span className="flex items-center gap-2 text-sm text-gray-400 md:text-xs lg:text-xl">
                      Coming Soon
                    </span>
                  ) : (
                    <div className="flex items-center justify-center group">
                      <a
                        href={sourceCode}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="flex text-sm text-purple transition-all duration-300 group-hover:scale-110 md:text-xs lg:text-xl"
                      >
                        View Project
                      </a>

                      <FaLocationArrow className="ms-3 transition-all duration-300 group-hover:scale-110" color="#cbacf9" />
                    </div>
                  )}
                </div>
              </PinContainer>
            </div>
          )
        )}
      </div>
    </section>
  );
};
