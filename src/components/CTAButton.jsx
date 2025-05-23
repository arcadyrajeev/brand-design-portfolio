import React from "react";
import { NavLink } from "react-router-dom";

export default function CTAButton({ text, link }) {
  return (
    <div className="cta-button">
      <div className="inner-box">
        <NavLink to={link} className="box" id="up">
          {text}
        </NavLink>
        <NavLink to={link} className="box" id="down">
          {text}
        </NavLink>
      </div>
    </div>
  );
}
