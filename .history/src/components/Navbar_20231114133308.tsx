import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="bg-gray-950">
        <div className="container mx-auto flex justify-between items-center p-4">
          <Link to="/" className="flex items-center" onClick={closeMobileMenu}>
            <img src="/images/SPB_logo.jpeg" alt="Logo" className="h-10 mr-4" />
            SOCIAL PROJECT BALI
            <i className="fab fa-typo3 ml-2" />
          </Link>
          <div className="md:hidden" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={`md:flex md:items-center ${click ? "block" : "hidden"}`}>
          <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/aboutus"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                ABOUT US
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/history"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                HISTORY
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/volunteer"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                VOLUNTEER
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/gallery"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                GALLERY
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="https://linktr.ee/socialprojectbali"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                CONTACT US
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                GALLERY
              </Link>
            </li>
            <li>
              <Link
                to="/volunteer"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                VOLUNTEER
              </Link>
            </li>

            <li>
              <Link
                to="https://linktr.ee/socialprojectbali"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                CONTACT US
              </Link>
            </li>
          </ul>
          <Link to="/donate" className="hidden md:block">
            <Button
              buttonStyle="btn--outline"
              onClick={closeMobileMenu}
              type="button"
              buttonSize="medium"
            >
              DONATE
            </Button>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
