import { useState } from "react";

function HeaderLinks() {
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
    <ul className="hidden gap-10 font-poppins text-dimWhite sm:flex">
      <li>
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
      </li>
      <li>
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
      </li>
      <li>
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
      </li>
      <li>
        <a
          href="#clients"
          className={`active:text-white visited:text-white focus:text-white hover:text-white ${
            active.clients ? "text-white" : "text-dimWhite"
          }`}
          onClick={handleActive}
        >
          Clients
        </a>
      </li>
    </ul>
  );
}

export default HeaderLinks;
