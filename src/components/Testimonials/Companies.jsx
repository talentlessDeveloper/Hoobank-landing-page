import airbnb from "../../assets/airbnb.png";
import binance from "../../assets/binance.png";
import coinbase from "../../assets/coinbase.png";
import dropbox from "../../assets/dropbox.png";

import { motion } from "framer-motion";

function Companies({ variants }) {
  return (
    <section className="mb-14 md:mb-28">
      <div className="flex justify-center flex-wrap items-center gap-y-7 md:gap-y-10 gap-x-[6.15rem]">
        <div className="max-w-[192px]">
          <motion.img
            src={airbnb}
            alt="airbnb"
            className="w-[100px] sm:w-full"
            variants={variants}
          />
        </div>
        <div className="max-w-[192px]">
          <motion.img
            src={binance}
            alt="binance"
            className="w-[100px] sm:w-full"
            variants={variants}
          />
        </div>
        <div className="max-w-[192px]">
          <motion.img
            src={coinbase}
            alt="coinbase"
            className="w-[100px] sm:w-full"
            variants={variants}
          />
        </div>
        <div className="max-w-[192px]">
          <motion.img
            src={dropbox}
            alt="dropbox"
            className="w-[100px] sm:w-full"
            variants={variants}
          />
        </div>
      </div>
    </section>
  );
}

export default Companies;
