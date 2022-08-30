function HeroText() {
  return (
    <div className="lg:max-w-2xl w-full">
      <h1 className="font-poppins font-semibold text-[3.25rem] leading-[4.6875rem] text-white ss:text-7xl ss:leading-[6.25rem]">
        The Next <br className="sm:block hidden" />{" "}
        <span
          className="bg-clip-text text-transparent"
          style={{
            backgroundImage: `radial-gradient(64.18% 64.18% at 71.16% 35.69%, #DEF9FA 0.89%, #BEF3F5 17.23%, #9DEDF0 42.04%, #7DE7EB 55.12%, #5CE1E6 71.54%, #33BBCF 100%)`,
          }}
        >
          Generation
        </span>{" "}
        <br /> Payment Method.
      </h1>
      <p className="text-dimWhite text-lg font-poppins font-normal max-w-[29.375rem] leading-[1.925rem] mt-5">
        Our team of experts uses a methodology to identify the credit cards most
        likely to fit your needs. We examine annual percentage rates, annual
        fees.
      </p>
    </div>
  );
}

export default HeroText;
