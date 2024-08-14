import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [activeItem, setActiveItem] = useState("Home");
  const [isActive, setIsActive] = useState(false);

  const [name, setName] = useState("");
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  useEffect(() => {
    if (searchParams.get("scrollTo")) {
      document
        .getElementById(searchParams.get("scrollTo"))
        ?.scrollIntoView?.({ block: "start", behavior: "smooth" });
    }
    document
      .getElementById(name)
      ?.scrollIntoView?.({ block: "start", behavior: "smooth" });

    setName("");
  }, [searchParams.get("scrollTo"), name]);

  return (
    <header>
      <div className="bottom">
        <div className="left">
          <Link to={"/"}>
            <img src="/assets/images/logo1.avif" alt="logo" width={60} />
          </Link>
        </div>
        <div className="right">
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={() => {
                  setIsActive(false);
                }}
              >
                About
              </Link>
            </li>
            <li>
              <Link to={"https://shop.javatimescaffe.com/"} target="_blank">
                Shop
              </Link>
            </li>
            <li>
              <Link
                to="/alliance"
                onClick={() => {
                  setIsActive(false);
                }}
              >
                Alliance
              </Link>
            </li>
            <li>
              <Link to={"https://menu.javatimescaffe.com/"} target="_blank">
                Menu
              </Link>
            </li>
            <li>
              <Link to={"/news"}>News</Link>
            </li>
            <li>
              <Link to={"/career"}>Careers</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>
        
        <div className="hamburger-mobile">
          <ul>
            <li className="hamburger" onClick={() => setIsActive(!isActive)}>
              <GiHamburgerMenu color="#000" />
            </li>
          </ul>
        </div>
        <div
          className={`mobile-nav ${isActive ? "active" : ""}`}
          id="mobile-hambargur"
        >
          <div className="one">
            <div className="one-left">
              <a href="/">
              <img src="/assets/images/logo1.avif" alt="logo" width={60} />
              </a>
            </div>
            <div
              className={`one-right ${isActive ? "active" : ""}`}
              onClick={() => setIsActive(!isActive)}
            >
              <RxCross2 color="#fff" />
            </div>
          </div>

          <div className="two" id="after-login-mobile">
            <ul>
              <Link
                to="/"
                onClick={() => {
                  setIsActive(false);
                }}
              >
                <li>Home</li>
              </Link>
              <Link
                to="/about"
                onClick={() => {
                  setIsActive(false);
                }}
              >
                <li>About</li>
              </Link>
              <Link
                to="/?scrollTo=feature"
                onClick={() => {
                  setIsActive(false);
                }}
              >
                <li>Shop</li>
              </Link>
              <Link
                to="/alliance"
                onClick={() => {
                  setIsActive(false);
                }}
              >
                <li>Alliance</li>
              </Link>
              <Link
                to="/?scrollTo=faqs"
                onClick={() => {
                  setIsActive(false);
                }}
              >
                <li>Menu</li>
              </Link>
              <Link
                to="/?scrollTo=ourTeam"
                onClick={() => {
                  setIsActive(false);
                }}
              >
                <Link to={"/news"}>
                  <li>News</li>
                </Link>
              </Link>
              <Link
                to="/?scrollTo=ourTeam"
                onClick={() => {
                  setIsActive(false);
                }}
              >
                <Link
                  to={"/career"}
                  onClick={() => {
                    setIsActive(false);
                  }}
                >
                  <li>Careers</li>
                </Link>
              </Link>
              <Link
                to="/?scrollTo=ourTeam"
                onClick={() => {
                  setIsActive(false);
                }}
              >
                <Link
                  to={"/contact"}
                  onClick={() => {
                    setIsActive(false);
                  }}
                >
                  <li>Contact</li>
                </Link>
              </Link>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
