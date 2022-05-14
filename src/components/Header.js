import React from "react";
import { Link } from "react-scroll";


const Header = () => {
  return (
   
    <div id="home" className="header-wraper">
      <div className="main-info">
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