import logo from "../../assets/logo.svg";
import FooterLinks from "./FooterLinks";
import FooterSocials from "./FooterSocials";

import { motion } from "framer-motion";
import useAnimate from "../../util/useAnimate";

function Footer() {
  const { ref, variants, childVariants, control } = useAnimate({
    triggerOnce: true,
    threshold: 0.6,
  });
  return (
    <motion.footer
      initial="offScreen"
      animate={control}
      variants={variants}
      ref={ref}
    >
      <div className="hoo-container font-poppins">
        <div className="lg:grid lg:grid-cols-3 lg:gap-x-[8.75rem]">
          <div>
            <motion.img
              src={logo}
              alt="Hoobank Logo"
              className="h-8 w-32 md:w-[16.625rem] md:h-[4.5rem]"
              variants={childVariants}
            />
            <motion.p
              className="text-dimWhite text-lg mt-4 leading-[30.8px] max-w-[19.5rem] md:mt-9"
              variants={childVariants}
            >
              A new way to make the payments easy, reliable and secure.
            </motion.p>
          </div>
          <FooterLinks variants={childVariants} />
        </div>
        <FooterSocials variants={childVariants} />
      </div>
    </motion.footer>
  );
}

export default Footer;
