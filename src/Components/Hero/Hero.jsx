import React from "react";
import "./Hero.css";
const Hero = () => {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth();

  const monthName = (num) => {
    const date = new Date();
    date.setMonth(num);
    var month = date.toLocaleString("default", { month: "short" });
    return month;
  };

    const composeEmail = () => {
      const email = 'ansuman.nayak03@gmail.com';
      const subject = 'Inquiry';
      const body = 'Dear Ansuman, \n\n';
      const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink;
    };

  return (
    <div className="Hero" id="home">
      <div className="HeroContainer">
        <div className="HeroLeft">
          <div className="Hero_left_text1">creative</div>
          <div className="Hero_left_text2">
            <span id="designer_text">designer</span><span id="and"> &</span> Developer
          </div>
        </div>
        <div className="HeroRight">
          <div className="available">
            {/* <div className="date">{date}</div>
            <div className="date_text">
              <span>{monthName(month)}</span>available for work
            </div> */}
          </div>
          <div className="hero_layout">
            <div className="hero_discription">
              I'm a front-end developer and UI/UX designer. I like minimalist
              design that grabs attention. I love nature, anime, food and art
            </div>
            <div className="button_cont">
              <button  onClick={composeEmail} className="hero_button">Contact me</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
