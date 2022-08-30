import star from "../../assets/Star.svg";
import shield from "../../assets/Shield.svg";
import send from "../../assets/Send.svg";
import Button from "../Button";

import { motion } from "framer-motion";
import useAnimate from "../../util/useAnimate";

function Features() {
  const { ref, control, variants, childVariants } = useAnimate({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <motion.section
      id="features"
      className="overflow-hidden"
      initial="offScreen"
      animate={control}
      ref={ref}
      variants={variants}
    >
      <div className="hoo-container pt-24 lg:pt-36 pb-8 font-poppins">
        <div className="flex flex-col lg:flex-row lg:gap-x-20">
          <div className="lg:basis-1/2 lg:max-w-[622px]">
            <motion.h2
              className="font-semibold text-white text-[2.5rem] leading-[4.175rem] lg:text-5xl lg:leading-[160%] max-w-[622px]"
              variants={childVariants}
            >
              You do the business, we’ll handle the money.
            </motion.h2>
            <motion.p
              className="font-normal text-dimWhite text-lg max-w-[29.275rem] leading-[1.75rem] mt-5 lg:mt-6 leading-[170%]"
              variants={childVariants}
            >
              With the right credit card, you can improve your financial life by
              building credit, earning rewards and saving money. But with
              hundreds of credit cards on the market.
            </motion.p>
            <motion.div variants={childVariants}>
              <Button>Get Started</Button>
            </motion.div>
          </div>

          <div className="mt-10 space-y-8 lg:mt-0 lg:basis-1/2 lg:max-w-[470px]">
            <motion.div
              variants={childVariants}
              className="flex items-center pt-5 px-5 pb-4 rounded-[1.25rem]  duration-500 transition-all feature-card"
            >
              <div className="w-16 h-16 rounded-full flex justify-center items-center bg-dimBlue">
                <img
                  src={star}
                  alt="star"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
              <div className="font-poppins flex flex-1 flex-col items-start ml-4">
                <h4 className="text-white text-lg leading-[23.4px] mb-1">
                  Rewards
                </h4>
                <p className="text-dimWhite">
                  The best credit cards offer some tantalizing combinations of
                  promotions and prizes
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={childVariants}
              className="flex items-center pt-5 px-5 pb-4 rounded-[1.25rem] duration-500 transition-all feature-card"
            >
              <div className="w-16 h-16 rounded-full flex justify-center items-center bg-dimBlue">
                <img
                  src={shield}
                  alt="shield"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
              <div className="font-poppins flex flex-1 flex-col items-start ml-4">
                <h4 className="text-white text-lg leading-[23.4px] mb-1">
                  100% Secured
                </h4>
                <p className="text-dimWhite">
                  We take proactive steps make sure your information and
                  transactions are secure.
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={childVariants}
              className="flex items-center pt-5 px-5 pb-4 rounded-[1.25rem] duration-500 transition-all feature-card"
            >
              <div className="w-16 h-16 rounded-full flex justify-center items-center bg-dimBlue">
                <img
                  src={send}
                  alt="send"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
              <div className="font-poppins flex flex-1 flex-col items-start ml-4">
                <h4 className="text-white text-lg leading-[23.4px] mb-1">
                  Balance Transfer
                </h4>
                <p className="text-dimWhite">
                  A balance transfer credit card can save you a lot of money in
                  interest charges.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Features;
