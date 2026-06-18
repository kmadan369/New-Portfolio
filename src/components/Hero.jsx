import { useState } from "react";
import { FaLocationArrow, FaLinkedin, FaPhone, FaEnvelope } from "react-icons/fa6";

import { Spotlight } from "./Spotlight";
import { TextGenerateEffect } from "./TextGenerateEffect";
import { MagicButton } from "./MagicButton";

export const Hero = () => {
  const [phoneCopied, setPhoneCopied] = useState(false);

  const handlePhoneCopy = () => {
    navigator.clipboard.writeText("+918807561408");
    setPhoneCopied(true);
    setTimeout(() => setPhoneCopied(false), 2000);
  };

  return (
    <div id="home" className="relative pb-20 pt-36">
      <div className="absolute left-10 top-12 z-50 flex items-center gap-3">
        <div className="relative h-10 w-10 overflow-hidden rounded-full border border-white/20">
          <img
            src="https://res.cloudinary.com/drhyerkn7/image/upload/v1781705387/Frame_1171282679_s4npo2.png"
            alt="Madan Kumar"
            className="h-full w-full object-cover"
          />
        </div>
        <span className="text-sm font-medium text-white">Madan Kumar</span>
      </div>

      <div>
        <Spotlight
          className="-left-10 -top-40 h-screen md:-left-32 md:-top-20"
          fill="white"
        />
        <Spotlight
          className="left-full top-10 h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="absolute left-0 top-0 flex h-screen w-full items-center justify-center bg-white bg-grid-black/[0.2] dark:bg-black-100 dark:bg-grid-white/[0.03]">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100" />
      </div>

      <div className="absolute right-10 top-12 z-50 flex items-center gap-4">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=kmadan369@gmail.com"
          target="_blank"
          rel="noreferrer noopener"
          className="flex size-10 items-center justify-center rounded-lg border border-black-300 bg-black-200 bg-opacity-75 backdrop-blur-lg backdrop-filter"
          title="Email"
        >
          <FaEnvelope className="text-white" />
        </a>
        <button
          onClick={handlePhoneCopy}
          className="group relative flex size-10 items-center justify-center rounded-lg border border-black-300 bg-black-200 bg-opacity-75 backdrop-blur-lg backdrop-filter"
        >
          <FaPhone className={`text-white transition-colors ${phoneCopied ? "text-purple" : ""}`} />
          <span className="absolute -top-8 scale-0 rounded bg-black-200 px-2 py-1 text-xs text-white transition-all group-hover:scale-100">
            {phoneCopied ? "Copied!" : "+918807561408"}
          </span>
        </button>
        <a
          href="https://www.linkedin.com/in/madan-kumar-b24250a8"
          target="_blank"
          rel="noreferrer noopener"
          className="flex size-10 items-center justify-center rounded-lg border border-black-300 bg-black-200 bg-opacity-75 backdrop-blur-lg backdrop-filter"
          title="LinkedIn"
        >
          <FaLinkedin className="text-white" />
        </a>
      </div>

      <div className="relative z-10 my-20 flex justify-center">
        <div className="flex max-w-[89vw] flex-col items-center justify-center md:max-w-2xl lg:max-w-[60vw]">
          <h2 className="max-w-80 text-center text-xs uppercase tracking-widest text-blue-100">
            SENIOR UI/UX & PRODUCT DESIGNER
          </h2>

          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Designing AI & SaaS Products That Drive Adoption and Growth"
          />

          <p className="mb-4 text-center text-xs md:text-sm md:tracking-wider lg:text-lg">
            Hi, I&apos;m Madan, with 5+ years of experience delivering 10+ products and 5+ enterprise modules across AI, SaaS, CRM, LMS, and FinTech platforms.
          </p>

          <a href="#projects" className="md:mt-10">
            <MagicButton
              title="View Case Studies"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
