import React from "react";
import GalleryCarousel from "./GalleryCarousel";

const Gallery = () => {
  return (
    <div id="gallery" className="gallery">
        
      <div className="container">
      <h1>gallery</h1>
        <div className="gallery-content">
          <GalleryCarousel />
        </div>
      </div>
    </div>
  )
}

export default Gallery;