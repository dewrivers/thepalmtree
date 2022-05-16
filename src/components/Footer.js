import React from "react";
import { Link } from "react-scroll";
import {
  FacebookShareButton,
  FacebookIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon
} from "react-share";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>Phone Number</p>
            </div>
            <div className="d-flex">
              <a href="tel:(732)5433003">(732)5433003</a>
            </div>
            <div className="d-flex">
              <p>palmtreenj@gmail.com</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <Link 
                className="footer-nav" 
                href="#"
                smooth={true}
                to="home"
                offset={-110}
                >Home</Link>
                <br />
                <Link 
                className="footer-nav"
                smooth={true} 
                to="about" 
                offset={-110}
                >About</Link>
                <br />
                <Link
                 className="footer-nav"
                 smooth={true} 
                 to="services"
                 offset={-110} 
                 >Services</Link>
              </div>
              <div className="col">
                <Link
                 className="footer-nav"
                 smooth={true} 
                 to="experience" 
                 offset={-110}
                 >Experience</Link>
                <br />
                <Link
                 className="footer-nav"
                 smooth={true} 
                 to="gallery" 
                 offset={-110}
                 >Gallery</Link>
                <br />
                <Link 
                className="footer-nav"
                smooth={true} 
                to="contacts" 
                offset={-110}
                >Contacts</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center">
              <FacebookShareButton
                url={"https://www.youtube.com/8020coding"}
                quote={"Garden and lawn care specialists"}
                hashtag="#landscaping"
              >
                <FacebookIcon className="mx-3" size={36} />
              </FacebookShareButton>

              <FacebookMessengerShareButton
                url={"https://www.youtube.com/8020coding"}
                quote={"Garden and lawn care specialists"}
                hashtag="#javascript"
              >
                <FacebookMessengerIcon className="mx-3" size={36} />
              </FacebookMessengerShareButton>
              <TwitterShareButton
                url={"https://www.youtube.com/8020coding"}
                quote={"Garden and lawn care specialists"}
                hashtag="#javascript"
              >
                <TwitterIcon className="mx-3" size={36} />
              </TwitterShareButton>
              <WhatsappShareButton
                url={"https://www.youtube.com/8020coding"}
                quote={"Garden and lawn care specialists"}
                hashtag="#javascript"
              >
                <WhatsappIcon className="mx-3" size={36} />
              </WhatsappShareButton>
              <LinkedinShareButton
                url={"https://www.youtube.com/8020coding"}
                quote={"Garden and lawn care specialists"}
                hashtag="#javascript"
              >
                <LinkedinIcon className="mx-3" size={36} />
              </LinkedinShareButton>
            </div>
            <p className="pt-3 text-center">
              Copyright&copy;
              {new Date().getFullYear()}&nbsp;New Horizon | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
