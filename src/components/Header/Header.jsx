import { useEffect, useState } from "react";

import HeaderLinks from "./HeaderLinks";
import HeaderMenu from "./HeaderMenu";

import headerLogo from "../../assets/logo.svg";

function Header() {
  const [openMenu, setOpenMenu] = useState(false, true);
  const [bg, setBg] = useState(false);

  const handleClick = () => setOpenMenu((p) => !p);

  useEffect(() => {
    const throttle = (cb, delay) => {
      let lastTime = 0;
      return (...args) => {
        let now = Date.now();
        if (now - lastTime < delay) return;
        cb(...args);
        lastTime = now;
      };
    };
    const headerListener = () => {
      if (window.scrollY > 100) {
        setBg(true);
      } else {
        setBg(false);
      }
    };
    window.addEventListener("scroll", throttle(headerListener, 100));

    return () =>
      window.removeEventListener("scroll", throttle(headerListener, 100));
  }, []);
  return (
    <header
      id="header"
      className={`fixed z-50 left-0 right-0 transition-all duration-500  overflow-hidden ${
        bg ? "bg-primary" : ""
      }`}
    >
      <nav className="hoo-container py-6 flex justify-between items-center">
        <img src={headerLogo} alt="hoobank logo" className="h-8 w-32" />

        <HeaderLinks />
        <button className="sm:hidden space-y-1" onClick={handleClick}>
          <span
            className={`bg-white w-4 h-0.5 block transition-opacity duration-500 ${
              openMenu ? "opacity-0" : "opacity-1"
            }`}
          ></span>
          <span
            className={`bg-white w-6 h-0.5 block transition-transform duration-500 ${
              openMenu ? "translate-x-1 translate-y-2 rotate-45" : ""
            }`}
          ></span>
          <span
            className={`bg-white w-8 h-0.5 block transition-transform duration-500 ${
              openMenu ? "-rotate-45" : ""
            }`}
          ></span>
        </button>
      </nav>

      <HeaderMenu open={openMenu} />
    </header>
  );
}

export default Header;
