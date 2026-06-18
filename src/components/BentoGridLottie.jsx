import { useEffect, useRef } from "react";
import lottie from "lottie-web";

import animationData from "../data/confetti.json";

const BentoGridLottie = ({ copied }) => {
  const lottieRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current && !lottieRef.current) {
      lottieRef.current = lottie.loadAnimation({
        container: containerRef.current,
        renderer: "svg",
        loop: copied,
        autoplay: copied,
        animationData,
      });
    }
  }, []);

  useEffect(() => {
    if (lottieRef.current) {
      if (copied) {
        lottieRef.current.goToAndPlay(0);
      } else {
        lottieRef.current.pause();
      }
    }
  }, [copied]);

  return (
    <button
      ref={containerRef}
      tabIndex={-1}
      className="pointer-events-none absolute -bottom-5 right-0 cursor-default"
    />
  );
};

export default BentoGridLottie;
