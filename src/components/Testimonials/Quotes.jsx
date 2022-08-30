import quote from "../../assets/quotes.svg";
import people1 from "../../assets/people01.png";
import people2 from "../../assets/people02.png";
import people3 from "../../assets/people03.png";

import { motion } from "framer-motion";

function Quotes({ variants }) {
  return (
    <>
      <motion.div className="grid grid-cols-1 justify-items-center space-y-5 mb-12 font-poppins sm:justify-items-start sm:grid-cols-2  sm:space-y-0 sm:gap-x-10 md:mb-[6.25rem] lg:grid-cols-3 ">
        <div
          className="feature-card flex flex-col justify-between px-10 py-12 rounded-[20px] max-w-[23.125rem]"
          variants={variants}
        >
          <motion.img
            src={quote}
            alt="quote"
            className="w-[42.6px] h-[27.6px] object-contain"
            variants={variants}
          />
          <motion.blockquote
            className="text-white text-lg leading-[32.4px] my-10  "
            variants={variants}
          >
            Money is only a tool. It will take you wherever you wish, but it
            will not replace you as the driver.
          </motion.blockquote>

          <div className="flex items-center">
            <motion.img
              src={people1}
              alt="Herman Jensen"
              className="w-12 h-12 rounded-full object-cover"
              variants={variants}
            />
            <div className="flex-flex-col ml-4">
              <motion.h4
                className="text-white font-semibold leading-[32px] text-xl"
                variants={variants}
              >
                Herman Jensen
              </motion.h4>
              <motion.p
                className="text-dimWhite leading-[1.5rem]"
                variants={variants}
              >
                Founder & Leader
              </motion.p>
            </div>
          </div>
        </div>
        <div className="feature-card flex flex-col justify-between px-10 py-12 rounded-[20px] max-w-[23.125rem] ">
          <motion.img
            src={quote}
            alt="quote"
            className="w-[42.6px] h-[27.6px] object-contain"
            variants={variants}
          />
          <motion.blockquote
            className="text-white text-lg leading-[32.4px] my-10 sm:mb-14"
            variants={variants}
          >
            Money makes your life easier. If you're lucky to have it, you're
            lucky.
          </motion.blockquote>

          <div className="flex items-center">
            <motion.img
              src={people2}
              alt="steve mark"
              className="w-12 h-12 rounded-full object-cover"
              variants={variants}
            />
            <div className="flex-flex-col ml-4">
              <motion.h4
                className="text-white font-semibold leading-[32px] text-xl"
                variants={variants}
              >
                Steve Mark
              </motion.h4>
              <motion.p
                className="text-dimWhite leading-[1.5rem]"
                variants={variants}
              >
                Founder & Leader
              </motion.p>
            </div>
          </div>
        </div>
        <div className="feature-card flex flex-col justify-between px-10 py-12 rounded-[20px] max-w-[23.125rem] ">
          <motion.img
            src={quote}
            alt="quote"
            className="w-[42.6px] h-[27.6px] object-contain"
            variants={variants}
          />
          <motion.blockquote
            className="text-white text-lg leading-[32.4px] my-10"
            variants={variants}
          >
            It is usually people in the money business, finance, and
            international trade that are really rich.
          </motion.blockquote>

          <div className="flex items-center">
            <motion.img
              src={people3}
              alt="Kenn Gallagher"
              className="w-12 h-12 rounded-full object-cover"
              variants={variants}
            />
            <div className="flex-flex-col ml-4">
              <motion.h4
                className="text-white font-semibold leading-[32px] text-xl"
                variants={variants}
              >
                Kenn Gallagher
              </motion.h4>
              <motion.p
                className="text-dimWhite leading-[1.5rem]"
                variants={variants}
              >
                Founder & Leader
              </motion.p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Quotes;
