import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import { UilLinkedin } from '@iconscout/react-unicons'
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>owaissyed65@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.instagram.com/syedowais283/" target="_blank" rel="noreferrer"><Insta color="white" size={"3rem"} /></a>
          <a href="https://www.linkedin.com/in/syed-owais-029a32244/" target="_blank" rel="noreferrer"><UilLinkedin color="white" size={"3rem"} /></a>
          <a href="https://github.com/owaissyed65/" target="_blank" rel="noreferrer"><Gitub color="white" size={"3rem"} /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
