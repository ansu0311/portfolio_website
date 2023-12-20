import React from "react";
import "./Connect.css";
import { Link } from "react-router-dom";

const Connect = () => {
  return (
    <div className="image_back" id="connect">
      <div className="Connect">
        <div className="ConnectContainer">
            <div className="connect_header">Let's connect</div>
            <div className="connect_des">
              <div>A project on your mind?</div>
              <div className="connect_button">contact me</div>
            </div>
        </div>
      </div>
      {/*<hr />*/}
      <div className="right_links">
      <ul className="links">
      <div className="linkFirstRow">
        <Link style={{textDecoration:"none"}} to="https://www.linkedin.com/in/ansumannayak03/">
          <li>Linkedin</li>
        </Link>
        <Link style={{textDecoration:"none"}} to="https://drive.google.com/file/d/1nAelXE1CLXMYDqlhg2yks1e0hGm_9kOO/view?usp=sharing">
          <li>Resume</li>
        </Link>
        </div>
        <div className="linkSecondRow">
        <Link style={{textDecoration:"none"}} to="https://github.com/ansu0311">
          <li>GitHub</li>
        </Link>
        <Link style={{textDecoration:"none"}} to="https://dribbble.com/Ansu0311">
          <li>Dribbble</li>
        </Link>
        </div>
      </ul>
      </div>
    </div>
  );
};

export default Connect;
