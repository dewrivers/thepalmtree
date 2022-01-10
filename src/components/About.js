import React from "react";
import logo from "../logoW.png";

const About = () => {
  return (
    <div id="about" className="about-wraper">
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={logo} alt="author..." />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">About Our Company</h1>
          <p className="p-about">
          The Palm Tree is a company that contributes to the biodiversity conservation and design processes in the Cape May County region.
          <br />
          Whose mission is to promote and improve the environment, through the design and improvement of gardens and green areas, We offer users a quality service, security, good speed, leadership, with qualified personnel that ensures the satisfaction of those who request our services and products.
          <br />
          We have been serving home and business owners since 2018.
          <br />
          The vision of our company is to lead the provision of services in maintenance, garden and green areas for the contribution of the environment, work with the purpose of providing an international certification service to reduce forest degradation in our region and be able to meet expectations of all our clients.
          <br />
          The values ​​that strengthen our companies are morality, ethics, Transparency, Honesty, Punctuality in deliveries,
          Excellence and commitment to each of our clients.
          </p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default About
