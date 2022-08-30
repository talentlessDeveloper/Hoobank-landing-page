import apple from "../../assets/apple.svg";
import google from "../../assets/google.svg";
import bill from "../../assets/bill.png";

import { motion } from "framer-motion";
import useAnimate from "../../util/useAnimate";

function Product() {
  const { ref, control, variants, childVariants } = useAnimate({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <motion.section
      id="product"
      initial="offScreen"
      animate={control}
      ref={ref}
      variants={variants}
    >
      <div className="hoo-container py-10 lg:pt-32 lg:pb-40 ">
        <div className="flex flex-col font-poppins lg:flex-row-reverse lg:items-center lg:justify-between">
          <div className="max-w-[29.375rem]">
            <motion.h2
              className="font-semibold text-white text-[2.5rem] leading-[160%] lg:text-5xl lg:leading-[160%]"
              variants={childVariants}
            >
              Easily control your billing & invoicing
            </motion.h2>
            <motion.p
              className="text-dimWhite text-lg leading-[160%] mt-5  lg:mt-6"
              variants={childVariants}
            >
              Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
              aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
              placerat.
            </motion.p>

            <div className="flex mt-6 gap-x-5">
              <motion.img
                src={apple}
                alt="apple playstore"
                variants={childVariants}
              />
              <motion.img
                src={google}
                alt="google playstore"
                variants={childVariants}
              />
            </div>
          </div>

          <motion.div
            className="mt-10 relative max-w-[33.125rem] lg:mt-0"
            variants={childVariants}
          >
            <img src={bill} alt="bill" className="relative z-10" />
            <div className="pink-gradient absolute w-1/2 h-1/2 z-0 bg-gradient-to-r from-[#fff] to-[#fff]  blur-[750px] -left-[15.15rem] top-[0]  ss:-left-[25rem] ss:-top[5rem] lg:h-full lg:w-full lg:-left-[40rem] lg:-top-[100px] before:-bottom-[4.8rem] before:w-full before:h-full lg:before:-bottom-[12rem]"></div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default Product;
