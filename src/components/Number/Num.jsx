import { motion } from "framer-motion";
import useAnimate from "../../util/useAnimate";

function Num() {
  const { ref, control, variants, childVariants } = useAnimate();
  return (
    <motion.section
      className="overflow-hidden"
      initial="offScreen"
      animate={control}
      ref={ref}
      variants={variants}
    >
      <div className="hoo-container pt-12">
        <div className="grid gap-x-2 gap-y-8 grid-cols-1 ss:grid-cols-2 lg:gap-x-8 lg:grid-cols-[0.75fr_1fr_1fr]">
          <motion.div
            className="font-poppins flex gap-2 items-center"
            variants={childVariants}
          >
            <h4 className="text-white text-3xl font-semibold ">3800+</h4>
            <p
              className="uppercase text-transparent bg-clip-text text-[15px] font-poppins font-[500] lg:text-xl leading-[160%] whitespace-nowrap"
              style={{
                backgroundImage: `radial-gradient(64.18% 64.18% at 71.16% 35.69%, #DEF9FA 0.89%, #BEF3F5 17.23%, #9DEDF0 42.04%, #7DE7EB 55.12%, #5CE1E6 71.54%, #33BBCF 100%)`,
              }}
            >
              User Active
            </p>
          </motion.div>
          <motion.div
            className="font-poppins flex gap-2 items-center"
            variants={childVariants}
          >
            <h4 className="text-white text-3xl font-semibold ">230+</h4>
            <p
              className="uppercase text-transparent bg-clip-text text-[15px] font-poppins font-[500] lg:text-xl leading-[160%]  whitespace-nowrap"
              style={{
                backgroundImage: `radial-gradient(64.18% 64.18% at 71.16% 35.69%, #DEF9FA 0.89%, #BEF3F5 17.23%, #9DEDF0 42.04%, #7DE7EB 55.12%, #5CE1E6 71.54%, #33BBCF 100%)`,
              }}
            >
              Trusted By Company
            </p>
          </motion.div>
          <motion.div
            className="font-poppins flex gap-2 items-center"
            variants={childVariants}
          >
            <h4 className="text-white text-3xl font-semibold ">$230M+</h4>
            <p
              className="uppercase text-transparent bg-clip-text text-[15px] font-poppins font-[500] lg:text-xl leading-[160%]  whitespace-nowrap"
              style={{
                backgroundImage: `radial-gradient(64.18% 64.18% at 71.16% 35.69%, #DEF9FA 0.89%, #BEF3F5 17.23%, #9DEDF0 42.04%, #7DE7EB 55.12%, #5CE1E6 71.54%, #33BBCF 100%)`,
              }}
            >
              Transaction
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default Num;
