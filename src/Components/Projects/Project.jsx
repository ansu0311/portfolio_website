import React, { useEffect, useState } from "react";
import "./Project.css";
import Data from "../../Data/Project";
import Typewriter from "../DisplayText";
import { Button } from "react-scroll";

const Project = () => {
  let items = Data;
  const [active, setActive] = useState(0);
  let Heading_text = items[active].name;
  let Description_text = items[active].body;

  function slideNext() {
    if (active < items.length - 1) {
      setActive(active + 1);
    }
  }
  function slidePrev() {
    if (active > 0) {
      setActive(active - 1);
    }
  }

  const [show, setShow] = useState(false);
  useEffect(() => {
    // Trigger animation when 'active' changes
    setShow(true);
    // Reset animation after a delay (adjust as needed)
    const timeout = setTimeout(() => {
      setShow(false);
    }, 500); // 2000 milliseconds (2 seconds) delay, adjust as needed

    return () => clearTimeout(timeout); // Cleanup on component unmount
  }, [active]);


  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const newWindowWidth = window.innerWidth;
      setIsSmallScreen(newWindowWidth < 650);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="Project" id="work">
      <div className="ProjectContainer">
        <p>Projects</p>
        <div className="body1">
          <div className="slider">
            {items.map((slide, index) => {
          if (slide.id === active) {
            return (
              <img
                key={index}
                className="item"
                style={{ opacity: "1", zIndex: `${items.length}` }}
                src={isSmallScreen ?slide.image_phone:slide.image}
              />
            );
          } else if (slide.id > active) {
            var stt = slide.id - active;
            return (
              <img
                key={index}
                className="item"
                style={{
                  transform: `translate(${6 * stt}vw, 0px) scale(${
                    1 - 0.15 * stt
                  }) perspective(30px) rotateY(-1deg)`,
                  zIndex: `${items.length - stt}`,
                  filter: `blur(${5*(0.7*stt)}px)`,
                  opacity: `${stt > 4 ? 0 : 0.2 * (4 - (stt))}`,
                }}
                src={isSmallScreen ?slide.image_phone:slide.image}
              />
            );
          } else {
            var stt = -(slide.id - active);
            return (
              <img
                key={index}
                className="item"
                style={{
                  transform: `translate(${-6 * stt}vw, 0px) scale(${
                    1 - 0.15 * stt
                  }) perspective(30px) rotateY(1deg)`,
                  zIndex: `${items.length - stt}`,
                  filter: `blur(${5*(0.7*stt)}px)`,
                  opacity: `${stt > 4 ? 0 :  0.2 * (4 - stt)}`,
                }}
                src={isSmallScreen ?slide.image_phone:slide.image}
              />
            );
          }
        })}
            <div className="buttom_holder">
              <Button id="prev" onClick={() => slidePrev()}>
                &lt;
              </Button>
              <Button id="next" onClick={() => slideNext()}>
                &gt;
              </Button>
            </div>
          </div>
          <div className="text_box">
            <div id="project_header">
              {/* <Typewriter text={Heading_text} speed={40} /> */}
              {Heading_text}
            </div>
            <div className={`slide-fade-text ${show ? "active" : ""}`}>
              {Description_text}
            </div>
            <div className="button_box">
              <a href={items[active].links} className="button_butt" style={{textDecoration:"none"}} target="_blank" rel="noopener noreferrer">website</a>
              <a href={items[active].design} className={items[active].design?"button_butt":"hide"} style={{textDecoration:"none"}} target="_blank" rel="noopener noreferrer">Design</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
