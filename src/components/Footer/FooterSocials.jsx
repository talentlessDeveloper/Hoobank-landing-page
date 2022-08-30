import instagram from "../../assets/instagram.svg";
import linkedin from "../../assets/linkedin.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";

function FooterSocials() {
  return (
    <>
      <div className="w-full flex justify-between items-center md:flex-row flex-col py-6 my-6 border-t-[1px] border-t-[#3F3E45] md:py-8 md:my-10">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
          Copyright Ⓒ 2022 HooBank. All Rights Reserved.
        </p>
        <div className="flex flex-row md:mt-0 mt-6">
          <img
            src={instagram}
            alt="social-media-1"
            className="w-[21px] h-[21px] object-contain cursor-pointer mr-6"
          />
          <img
            src={facebook}
            alt="social-media-2"
            className="w-[21px] h-[21px] object-contain cursor-pointer mr-6"
          />
          <img
            src={twitter}
            alt="social-media-3"
            className="w-[21px] h-[21px] object-contain cursor-pointer mr-6"
          />
          <img
            src={linkedin}
            alt="social-media-4"
            className="w-[21px] h-[21px] object-contain cursor-pointer mr-0"
          />
        </div>
      </div>
    </>
  );
}

export default FooterSocials;
