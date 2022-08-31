import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function useAnimate(options = { triggerOnce: true, threshold: 0.3 }) {
  const variants = {
    offScreen: {
      opacity: 0,
    },
    onScreen: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    offScreen: {
      opacity: 0,
      y: 50,
    },

    onScreen: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };
  const childVariantsX = {
    offScreen: {
      opacity: 0,
    },

    onScreen: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };
  const control = useAnimation();
  const [ref, inView] = useInView(options);

  useEffect(() => {
    if (inView) {
      control.start("onScreen");
    } else {
      control.start("offScreen");
    }
  }, [control, inView]);
  return { ref, variants, childVariants, childVariantsX, control };
}

export default useAnimate;
