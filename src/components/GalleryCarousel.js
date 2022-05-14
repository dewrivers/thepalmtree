import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// AVATARS IMPORTS
import picture1 from "../images/gallery/1.png";
import picture2 from "../images/gallery/2.png";
import picture3 from "../images/gallery/3.png";
import picture4 from "../images/gallery/4.png";
import picture5 from "../images/gallery/5.png";
import picture6 from "../images/gallery/6.png";
import picture7 from "../images/gallery/7.png";
import picture8 from "../images/gallery/8.png";
import picture9 from "../images/gallery/9.png";
import picture10 from "../images/gallery/10.png";
import picture11 from "../images/gallery/11.png";
import picture12 from "../images/gallery/12.png";

const TestimonialsCarousel = () => {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={3500}
    >
      <>
        <img src={picture1} alt="Before" />
        <div className="myCarousel">
          <h3>Before</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ratione sequi saepe dicta blanditiis, molestias eum excepturi quod fugiat veniam!</p>
        </div>
      </>
      <>
        <img src={picture2} alt="After" />
        <div className="myCarousel">
          <h3>After</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ratione sequi saepe dicta blanditiis, molestias eum excepturi quod fugiat veniam!</p>
        </div>
      </>
      <>
        <img src={picture3} alt="Before" />
        <div className="myCarousel">
          <h3>Before</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ratione sequi saepe dicta blanditiis, molestias eum excepturi quod fugiat veniam!</p>
        </div>
      </>
      <>
        <img src={picture4} alt="After" />
        <div className="myCarousel">
          <h3>After</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ratione sequi saepe dicta blanditiis, molestias eum excepturi quod fugiat veniam!</p>
        </div>
      </>
      <>
        <img src={picture5} alt="Before" />
        <div className="myCarousel">
          <h3>Before</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ratione sequi saepe dicta blanditiis, molestias eum excepturi quod fugiat veniam!</p>
        </div>
      </>
      <>
        <img src={picture6} alt="After" />
        <div className="myCarousel">
          <h3>After</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ratione sequi saepe dicta blanditiis, molestias eum excepturi quod fugiat veniam!</p>
        </div>
      </>
      <>
        <img src={picture7} alt="Before" />
        <div className="myCarousel">
          <h3>After</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ratione sequi saepe dicta blanditiis, molestias eum excepturi quod fugiat veniam!</p>
        </div>
      </>
      <>
        <img src={picture8} alt="After" />
        <div className="myCarousel">
          <h3>After</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ratione sequi saepe dicta blanditiis, molestias eum excepturi quod fugiat veniam!</p>
        </div>
      </>
      <>
      <img src={picture9} alt="Before" />
        <div className="myCarousel">
          <h3>After</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ratione sequi saepe dicta blanditiis, molestias eum excepturi quod fugiat veniam!</p>
        </div>
      </>
      <>
        <img src={picture10} alt="After" />
        <div className="myCarousel">
          <h3>After</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ratione sequi saepe dicta blanditiis, molestias eum excepturi quod fugiat veniam!</p>
        </div>
      </>
      <>
      <img src={picture11} alt="Before" />
        <div className="myCarousel">
          <h3>Before</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ratione sequi saepe dicta blanditiis, molestias eum excepturi quod fugiat veniam!</p>
        </div>
      </>
      <>
        <img src={picture12} alt="After" />
        <div className="myCarousel">
          <h3>After</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ratione sequi saepe dicta blanditiis, molestias eum excepturi quod fugiat veniam!</p>
        </div>
      </>
    </Carousel>
  )
}

export default TestimonialsCarousel;
