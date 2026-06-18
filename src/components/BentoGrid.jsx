import { useEffect, useState } from "react";
import { IoCopyOutline } from "react-icons/io5";

import { links } from "../data";
import { techStack } from "../data";
import { cn } from "../utils";

import { BackgroundGradientAnimation } from "./BackgroundGradientAnimation";
import { MagicButton } from "./MagicButton";
import { GridGlobe } from "./GridGlobe";
import BentoGridLottie from "./BentoGridLottie";

export const BentoGrid = ({
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-5",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  id,
  className,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(links.ownerEmail);
    setCopied(true);
  };

  useEffect(() => {
    if (!copied) return;

    const copyTimeout = setTimeout(() => {
      setCopied(false);
    }, 3500);

    return () => clearTimeout(copyTimeout);
  }, [copied]);

  return (
    <div
      className={cn(
        "group/bento relative row-span-1 flex flex-col justify-between space-y-4 overflow-hidden rounded-3xl border border-white/[0.1] shadow-input transition duration-200 hover:shadow-xl dark:shadow-none",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={cn("h-full", id === 6 && "flex justify-center")}>
        {id === 5 && (
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black-100 via-transparent to-transparent" />
        )}
        <div className="absolute h-full w-full">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(
                "h-full w-full object-cover object-center",
                id === 5 && "mix-blend-luminosity opacity-60",
                imgClassName
              )}
            />
          )}
        </div>

        <div
          className={cn(
            "absolute right-0 -mb-5",
            id === 5 && "w-full opacity-80"
          )}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="h-full w-full object-cover object-center"
            />
          )}
        </div>

        {id === 6 && <BackgroundGradientAnimation />}

        <div
          className={cn(
            "relative flex min-h-40 flex-col p-5 px-5 transition duration-200 group-hover/bento:translate-x-2 md:h-full lg:p-10",
            titleClassName
          )}
        >
          <div className="z-10 font-sans text-sm font-extralight text-[#c1c2d3] md:text-xs lg:text-base">
            {description}
          </div>

          <div className="z-10 max-w-96 font-sans text-lg font-bold lg:text-3xl">
            {title}
          </div>

          {id === 2 && <GridGlobe />}

          {id === 3 && (
            <div className="absolute -right-3 flex w-fit gap-1 lg:-right-2 lg:gap-5">
              <div className="flex flex-col gap-3 lg:gap-8">
                {techStack.stack1.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg bg-[#10132e] px-3 py-2 text-center text-[10px] opacity-50 lg:px-3 lg:py-4 lg:text-sm lg:opacity-100"
                  >
                    {item}
                  </span>
                ))}

                <span className="rounded-lg bg-[#10132e] px-3 py-4 text-center" />
              </div>

              <div className="flex flex-col gap-3 lg:gap-8">
                <span className="rounded-lg bg-[#10132e] px-3 py-4 text-center" />
                {techStack.stack2.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg bg-[#10132e] px-3 py-2 text-center text-[10px] opacity-50 lg:px-3 lg:py-4 lg:text-sm lg:opacity-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="group relative mt-5">
              <BentoGridLottie copied={copied} />

              <MagicButton
                title={copied ? "Email copied!" : "Copy my email"}
                icon={<IoCopyOutline />}
                otherClasses="!bg-[#161a31]"
                handleClick={handleCopy}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
