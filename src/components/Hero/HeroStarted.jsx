import arrow from "../../assets/arrow-up.svg";

function HeroStarted() {
  return (
    <div className="flex justify-center mt-8 ss:mt-0 ss:row-start-1 ss:col-start-2 ss:items-center lg:absolute lg:row-start-2 lg:col-start-1 lg:-top-[29rem] lg:left-[29rem]">
      <div
        className="w-[140px] h-[140px] rounded-full p-0.5"
        style={{
          backgroundImage: `linear-gradient(157.81deg,#def9fa -43.27%,#bef3f5 -21.24%,#9dedf0 12.19%,#7de7eb 29.82%,#5ce1e6 51.94%,#33bbcf 90.29%)`,
        }}
      >
        <div className="flex flex-col  bg-primary items-center justify-center w-full h-full rounded-full">
          <div className="flex gap-0.5">
            <span
              className="text-transparent bg-clip-text text-lg font-poppins font-[500]"
              style={{
                backgroundImage: `radial-gradient(64.18% 64.18% at 71.16% 35.69%, #DEF9FA 0.89%, #BEF3F5 17.23%, #9DEDF0 42.04%, #7DE7EB 55.12%, #5CE1E6 71.54%, #33BBCF 100%)`,
              }}
            >
              Get
            </span>
            <img src={arrow} alt="arrow" />
          </div>
          <span
            className="text-transparent bg-clip-text text-lg font-poppins font-[500]"
            style={{
              backgroundImage: `radial-gradient(64.18% 64.18% at 71.16% 35.69%, #DEF9FA 0.89%, #BEF3F5 17.23%, #9DEDF0 42.04%, #7DE7EB 55.12%, #5CE1E6 71.54%, #33BBCF 100%)`,
            }}
          >
            Started
          </span>
        </div>
      </div>
    </div>
  );
}

export default HeroStarted;
