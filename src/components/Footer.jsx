import { FaLocationArrow } from "react-icons/fa6";

import { MagicButton } from "./MagicButton";

export const Footer = () => {
  return (
    <footer id="contact" className="mb-[100px] w-full pb-10 md:mb-auto">
      <div className="absolute -bottom-72 left-0 min-h-96 w-full">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="h-full w-full opacity-50"
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Let's Build <span className="text-purple">Exceptional</span>  Digital Experiences
        </h1>

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=kmadan369@gmail.com"
          target="_blank"
          rel="noreferrer noopener"
          className="md:mt-10"
        >
          <MagicButton
            title="Get In Touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
    </footer>
  );
};
