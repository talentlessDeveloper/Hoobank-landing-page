import HeroText from "./HeroText";
import HeroImage from "./HeroImage";
import HeroStarted from "./HeroStarted";

import discount from "../../assets/Discount.svg";
import useAnimate from "../../util/useAnimate";

import { motion } from "framer-motion";

function Hero() {
  const { ref, control, variants, childVariantsX } = useAnimate();
  return (
    <motion.section
      id="hero"
      initial="offScreen"
      animate={control}
      ref={ref}
      variants={variants}
    >
      <div className="hoo-container pb-6 pt-24 sm:py-16 lg:pt-40 lg:mr-0">
        <motion.div
          variants={childVariantsX}
          className="max-w-sm flex items-center gap-2  py-1.5 px-4 rounded-[10px] sm:mt-10 lg:mt-16"
          style={{
            backgroundImage: `linear-gradient(125.17deg, #272727 0%, #11101d 100%)`,
          }}
        >
          <motion.img src={discount} alt="hero" className="w-8 h-8" />
          <p className="text-dimWhite font-poppins text-lg">
            <span className="text-white">20%</span> <span>Discount For</span>{" "}
            <span className="text-white">1 Month</span> <span>Account</span>
          </p>
        </motion.div>

        <motion.div
          variants={childVariantsX}
          className="mt-2 relative grid grid-cols-1 ss:grid-cols-[2fr_1fr] lg:grid-cols-[1.25fr_1fr]"
        >
          <motion.div variants={childVariantsX}>
            <HeroText />
          </motion.div>
          <HeroImage />
          <HeroStarted />
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Hero;
