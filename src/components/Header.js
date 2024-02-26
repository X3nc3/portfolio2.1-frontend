import React from "react";
import Logo from "../assets/LogoMO.svg";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <img src={Logo} alt="" />
          <Link to="contact">
            <button className="btn btn-sm">Contactez moi </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
