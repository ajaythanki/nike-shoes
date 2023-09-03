import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { useState } from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <header className="padding-x py-8 absolute z-20 w-full">
      <nav className="flex justify-between items-center max-container">
        <Link to="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </Link>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((navLink) => (
            <li className="" key={navLink.label}>
              <Link
                className="font-montserrat leading-normal text-lg text-slate-gray"
                to={navLink.href}
              >
                {navLink.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block" onClick={()=>setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <img src={hamburger} alt="Menu" height={25} width={25} />
          <div className={`${isMobileMenuOpen ? `flex opacity-100 transition-opacity duration-1000`: `hidden opacity-0`} w-full absolute bg-white top-0 mt-16 left-0 p-4`}>
            <ul className="w-full flex flex-col justify-center items-center gap-8">
              {navLinks.map((navLink) => (
                <li className="" key={"mobile_" + navLink.label}>
                  <Link
                    className="font-montserrat leading-normal text-lg text-slate-gray"
                    to={navLink.href}
                  >
                    {navLink.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
