import React from "react";
import { Link } from "react-scroll";
import name from "../name.png";

const Header = () => {
  return (
   
    <div id="home" className="header-wraper">
      <div className="main-info">
      <img className="name-img" src={name} alt="company name" />
        <div className="white-space">
        
        <h1>Nature's Feature Landscaping LLC.</h1>
        <h3>Garden and lawn care specialists</h3>
        <br />
        <Link smooth={true} to="contacts" offset={-110} className="btn-ghost">Get Your Quote </Link>
      </div>
      </div>
    </div>
  )
}

export default Header;