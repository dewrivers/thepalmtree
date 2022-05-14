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
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit omnis laboriosam odio deserunt reprehenderit optio cum ratione sequi pariatur deleniti iste perspiciatis officiis minima iusto hic, ipsa ea dicta velit! Quos, placeat ratione. Sunt cumque delectus asperiores et quas qui.</p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2014-2018</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit omnis laboriosam odio deserunt reprehenderit optio cum ratione sequi pariatur deleniti iste perspiciatis officiis minima iusto hic, ipsa ea dicta velit! Quos, placeat ratione. Sunt cumque delectus asperiores et quas qui.</p>
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
