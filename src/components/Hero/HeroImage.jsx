import robot from "../../assets/robot.png";

function HeroImage() {
  return (
    <div className="mt-10 -mr-6 relative flex justify-center ss:col-span-2  ss:mt-14 ss:-mr-20 lg:row-start-1 lg:col-start-2 lg:col-span-1 lg:-mt-40 lg:max-w-[40rem] ">
      <img src={robot} alt="billing" className="z-20 object-contain" />
      <div
        className="absolute pink-gradient after-gradient top-[5rem] left-1/2 -translate-x-1/2  z-0 w-1/2 h-1/2 max-w-xl blur-[123px] before:-top-[2rem] before:w-1/2 before:h-1/2 before:z-0"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(188, 165, 255, 0) 0%, #214D76 100%)`,
        }}
      ></div>
    </div>
  );
}

export default HeroImage;
