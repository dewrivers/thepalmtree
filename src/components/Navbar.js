import React from "react";
import logo from "../logoPT.png";
import { Link } from "react-scroll";
// REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark fixed-top">
      <div className="container navbar-container">

        <Link 
        className="navbar-brand"
        smooth={true} 
        to="home">
          <img 
          className="logo" 
          src={logo} 
          alt="logo..." />
          </Link>
       
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
        </button>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link smooth={true} to="home" className="nav-link">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="about" offset={-110} className="nav-link" >about</Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="services" offset={-110} className="nav-link" >services</Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="experience" offset={-110} className="nav-link" >experience</Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="gallery" offset={-110} className="nav-link" >gallery</Link>
            </li>

            <li className="nav-item">
              <Link smooth={true} to="contacts" offset={-110} className="nav-link" >contacts</Link>
            </li>

          </ul>

        </div>

      </div>
    </nav>
  )
}

export default Navbar