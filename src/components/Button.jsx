function Button({ children }) {
  return (
    <button
      className="py-4 px-6 font-poppins font-medium text-lg text-primary font-[500]  rounded-[0.625rem] outline-none mt-10 lg:mt-12"
      style={{
        backgroundImage: `linear-gradient(157.81deg,#def9fa -43.27%,#bef3f5 -21.24%,#9dedf0 12.19%,#7de7eb 29.82%,#5ce1e6 51.94%,#33bbcf 90.29%)`,
      }}
    >
      {children}
    </button>
  );
}

export default Button;
