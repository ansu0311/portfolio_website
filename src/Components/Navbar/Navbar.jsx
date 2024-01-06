import React, { useState, useEffect } from "react";
import { Link as LinkScroll } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const [navbar, setNavbar] = useState("#ffffff00");
  const [blurPx, setBlurPx] = useState("blur(0px)");

  //navbar scroll changeBackground function
  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNavbar("#ffffff2a");
    } else {
      setNavbar("#ffffff00");
    }
  };
  const changeBlur = () => {
    if (window.scrollY >= 50) {
      setBlurPx("blur(8px)");
    } else {
      setBlurPx("blur(0px)");
    }
  };

  useEffect(() => {
    changeBackground();
    changeBlur();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <div
      className="Navbar"
      style={{
        transition: "all 0.6s",
        backgroundColor: navbar,
        backdropFilter: blurPx,
      }}
    >
      <div className="NavContainer">
        <div className="Navleft">
          <p id="name">
            <LinkScroll
              activeClass="active"
              to="home"
              span={true}
              smooth={true}
            >
              Ansuman Nayak
            </LinkScroll>
          </p>
        </div>
        <div>
          <ul className="Navright">
            <li>
              <LinkScroll to="work" span={true} smooth={true}>
                work
              </LinkScroll>
            </li>
            <li>
              <LinkScroll to="about" span={true} smooth={true}>
                about
              </LinkScroll>
            </li>
            <li>
              <LinkScroll to="connect" span={true} smooth={true}>
                contact
              </LinkScroll>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
