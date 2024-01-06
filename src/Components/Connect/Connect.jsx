import React from "react";
import "./Connect.css";
import { Link } from "react-router-dom";
import SocialLinks from "../../Data/SocialLinks";

const Connect = () => {
  return (
    <div className="image_back" id="connect">
      <div className="Connect">
        <div className="ConnectContainer">
          <div className="connect_header">Let's connect</div>
          <div className="connect_des">
            <div>A project on your mind?</div>
            <div className="trigger_text connect_button">contact me</div>
          </div>
        </div>
      </div>
      <div className="right_links">
        <ul className="links">
          <Link
            className="trigger_text trigger"
            style={{ textDecoration: "none" }}
            to="https://drive.google.com/file/d/1nAelXE1CLXMYDqlhg2yks1e0hGm_9kOO/view?usp=sharing"
          >
            Resume
          </Link>
          {SocialLinks.map((social, index) => (
            <Link style={{ textDecoration: "none" }} to={`${social.links}`}>
              <img
                className="trigger"
                src={`${social.logo}`}
                alt="logo for socials"
              />
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Connect;
