import { motion } from "framer-motion";

import Companies from "./Companies";
import Quotes from "./Quotes";

import useAnimate from "../../util/useAnimate";

function Testimonials() {
  const { ref, childVariants, variants, control } = useAnimate({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section
      id="clients"
      initial="offScreen"
      animate={control}
      ref={ref}
      variants={variants}
    >
      <div className="hoo-container">
        <div className="flex flex-col font-poppins mb-5 sm:mb-20 md:flex-row md:gap-x-12 lg:justify-between lg:items-center">
          <motion.h2
            className="font-semibold text-white text-[2.5rem] leading-[160%] lg:text-5xl lg:leading-[160%]  max-w-[470px] "
            variants={childVariants}
          >
            What People are saying about us
          </motion.h2>
          <motion.p
            className="text-dimWhite text-lg leading-[180%] max-w-[450px] mt-5  lg:mt-6 lg:mr-28"
            variants={childVariants}
          >
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </motion.p>
        </div>
        <Quotes variants={childVariants} />
        <Companies variants={childVariants} />
      </div>
    </motion.section>
  );
}

export default Testimonials;
