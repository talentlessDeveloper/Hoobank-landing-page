import { motion } from "framer-motion";
import { useState } from "react";

const ulVariants = {
  open: {
    visibility: "visible",
    opacity: 1,
    x: 0,
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    visibility: "hidden",
    opacity: 0,
    x: 400,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
      delay: 1,
    },
  },
};
const variants = {
  open: {
    y: 0,
    opacity: 1,

    transition: { ease: [0.17, 0.67, 0.83, 0.67], duration: 1 },
    //   transition: {
    //     y: { stiffness: 1000, velocity: -50 },

    //   },
  },
  closed: {
    y: 200,
    opacity: 0,

    transition: { ease: [0.17, 0.67, 0.83, 0.67], duration: 2 },
    //   transition: {
    //     y: { stiffness: 1000 },
    //   },
  },
};
function HeaderMenu({ open }) {
  const [active, setActive] = useState({
    home: true,
    features: false,
    products: false,
    clients: false,
  });
  const handleActive = ({ target: { dataset } }) => {
    switch (dataset.active) {
      case "features":
        setActive({
          home: false,
          products: false,
          clients: false,
          features: true,
        });
        break;
      case "product":
        setActive({
          home: false,
          features: false,
          clients: false,
          product: true,
        });
        break;
      case "clients":
        setActive({
          home: false,
          products: false,
          features: false,
          clients: true,
        });
        break;
      default:
        setActive({
          ...active,
          home: true,
        });
    }
  };

  return (
    <motion.ul
      className="fixed z-20 space-y-3 p-6 text-dimWhite w-36 right-4 rounded-xl mt-4 font-poppins font-bold overflow-hidden invisible block sm:hidden "
      variants={ulVariants}
      animate={open ? "open" : "closed"}
      style={{
        backgroundImage: `linear-gradient(
                            144.39deg,
                          #ffffff -278.56%,
                          #6d6d6d -78.47%,
                        #11101d 91.61%)`,
      }}
    >
      <motion.li variants={variants}>
        <a
          href="#hero"
          className={`active:text-white visited:text-white focus:text-white hover:text-white ${
            active.home ? "text-white" : "text-dimWhite"
          }`}
          data-active="home"
          onClick={handleActive}
        >
          Home
        </a>
      </motion.li>
      <motion.li variants={variants}>
        <a
          href="#features"
          className={`active:text-white visited:text-white focus:text-white hover:text-white ${
            active.features ? "text-white" : "text-dimWhite"
          }`}
          data-active="features"
          onClick={handleActive}
        >
          Features
        </a>
      </motion.li>
      <motion.li variants={variants}>
        <a
          href="#product"
          className={`active:text-white visited:text-white focus:text-white hover:text-white ${
            active.product ? "text-white" : "text-dimWhite"
          }`}
          data-active="product"
          onClick={handleActive}
        >
          Product
        </a>
      </motion.li>
      <motion.li variants={variants}>
        <a
          href="#clients"
          className={`active:text-white visited:text-white focus:text-white hover:text-white ${
            active.clients ? "text-white" : "text-dimWhite"
          }`}
          data-active="clients"
          onClick={handleActive}
        >
          Clients
        </a>
      </motion.li>
    </motion.ul>
  );
}

export default HeaderMenu;
