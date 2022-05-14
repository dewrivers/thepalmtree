import React from "react";
import GalleryCarousel from "./GalleryCarousel";

const Gallery = () => {
  return (
    <div id="gallery" className="gallery">
        
      <div className="container">
      
        <div className="gallery-content">
        <h1>gallery</h1>
          <GalleryCarousel />
        </div>
      </div>
    </div>
  )
}

export default Gallery;