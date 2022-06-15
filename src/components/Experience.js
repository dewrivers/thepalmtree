import React from "react";

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>experience</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2018-2022</h3>
            <p>2018 was a year in which I made the decision to start my own company, even so I did not stop working for Church's Company, two more years had to pass before I could dedicate myself 100% to my company and I do not regret it little by little I have been growing my portfolio of clients to whom I appreciate their preference.</p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2010-2020</h3>
            <p>I worked for 10 years at Church's company, learning everything about Landscaping, Lawn cutting and paver, I really liked this job and that's why I decided to open my own company and in 2018 having enough knowledge I started my own company.</p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>The Beginning</h3>
            <p>This company was created by a young Mexican who grew up in the hills surrounded by nature, which inspired him to take care of it, at the young age of 13 he began to take care of nature and the animals, from there the company was born. Idea of ​​creating a form for the care and conservation of nature and land.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience;
