import { motion } from "framer-motion";

function FooterLinks({ variants }) {
  return (
    <>
      <div className="font-poppins mt-10 lg:mt-0 grid gap-x-3 grid-cols-2 md:grid-cols-3 lg:col-span-2 overflow-hidden">
        <motion.div
          className="flex flex-col ss:my-0 my-4 min-w-[150px]"
          variants={variants}
        >
          <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
            Useful Links
          </h4>
          <ul className="list-none mt-4">
            <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-4">
              Content
            </li>
            <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-4">
              How it Works
            </li>
            <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-4">
              Create
            </li>
            <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-4">
              Explore
            </li>
            <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-0">
              Terms &amp; Services
            </li>
          </ul>
        </motion.div>
        <motion.div
          className="flex flex-col ss:my-0 my-4 min-w-[150px]"
          variants={variants}
        >
          <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
            Community
          </h4>
          <ul className="list-none mt-4">
            <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-4">
              Help Center
            </li>
            <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-4">
              Partners
            </li>
            <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-4">
              Suggestions
            </li>
            <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-4">
              Blog
            </li>
            <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-0">
              Newsletters
            </li>
          </ul>
        </motion.div>
        <motion.div
          className="flex flex-col ss:my-0 my-4 min-w-[150px]"
          variants={variants}
        >
          <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
            Partner
          </h4>
          <ul className="list-none mt-4">
            <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-4">
              Our Partner
            </li>
            <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-0">
              Become a Partner
            </li>
          </ul>
        </motion.div>
      </div>
    </>
  );
}

export default FooterLinks;
