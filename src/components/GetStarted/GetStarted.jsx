import { motion } from "framer-motion";

import useAnimate from "../../util/useAnimate";
import Button from "../Button";

function GetStarted() {
  const { ref, variants, childVariants, control } = useAnimate({
    triggerOnce: true,
    threshold: 0.3,
  });
  return (
    <motion.section
      ref={ref}
      initial="offScreen"
      variants={variants}
      animate={control}
    >
      <div className="hoo-container">
        <div className="feature-bg py-4 px-6 mb-12  md:flex md:justify-between md:items-center md:py-8 md:px-10 lg:py-[4.5rem] lg:px-[6.0625rem]  rounded-[20px] lg:mb-20 ">
          <div className="font-poppins max-w-[312px] md:max-w-md lg:max-w-[600px]">
            <motion.h2
              className="text-white font-semibold leading-[120%] text-4xl md:text-5xl md:leading-[140%]"
              variants={childVariants}
            >
              Let’s try our service now!
            </motion.h2>
            <motion.p
              className="text-dimWhite mt-6 max-w-md text-lg leading-[30.8px]"
              variants={childVariants}
            >
              Everything you need to accept card payments and grow your business
              anywhere on the planet.
            </motion.p>
          </div>
          <motion.div className="text-center" variants={childVariants}>
            <Button>Get Started</Button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default GetStarted;
