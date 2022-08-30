import Button from "../Button";

import card from "../../assets/card.png";

import { motion } from "framer-motion";
import useAnimate from "../../util/useAnimate";

function Bank() {
  const { ref, control, variants, childVariantsX } = useAnimate({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <motion.section
      initial="offScreen"
      animate={control}
      ref={ref}
      variants={variants}
    >
      <div className="hoo-container pb-10 md:py-14 lg:pt-0 lg:pb-[170px]">
        <div className="flex flex-col font-poppins lg:flex-row lg:justify-between lg:items-center">
          <div className="max-w-xl">
            <motion.h2
              className="font-semibold text-white text-[2.5rem] leading-[160%] lg:text-5xl lg:leading-[160%]"
              variants={childVariantsX}
            >
              Find a better card deal in few easy steps.
            </motion.h2>

            <motion.p
              className="text-dimWhite text-lg leading-[160%] mt-5  lg:mt-6"
              variants={childVariantsX}
            >
              Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
              aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
            </motion.p>

            <motion.div variants={childVariantsX}>
              <Button>Get Started</Button>
            </motion.div>
          </div>

          <div className="mt-10 max-w-lg lg:mt-0 ">
            <motion.img src={card} alt="billing" variants={childVariantsX} />
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Bank;
