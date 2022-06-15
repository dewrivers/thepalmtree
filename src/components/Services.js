import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTree, faSeedling, faWater, faHardHat} from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <div id="services" className="services">
      <h1 className="py-5">our services</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-xm-12">
            <div className="box box-one">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faTree} size="2x" /></div>
              <h3>Landscape Design</h3>
              <p>Build your dream lawn or garden with our designers.
             </p> <p>Tree trimming, Stone top soil, Summer Flowers
                Planting, Sod Seed</p>
            </div>
          </div>
          {/* - */}
          <div className="col-md-3 col-xm-12">
            <div className="box box-two">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faSeedling} size="2x" /></div>

              <h3>Lawn Maintenance</h3>
              <p>We offer end-to-end services from mowing to pruning.</p>
             <p>Pruning, Lawn cutting, Spring fall clean ups, Mulch</p>
            </div>
          </div>
          {/* - */}
          <div className="col-md-3 col-xm-12">
            <div className="box box-tree">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faWater} size="2x" /></div>

              <h3>Water Management</h3>
              <p>Maximize water while ensuring the health of your plants.</p>
            </div>
          </div>
           {/* - */}
           <div className="col-md-3 col-xm-12">
            <div className="box box-four">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faHardHat} size="2x" /></div>

              <h3>Pavers</h3>
              <p>Garden design.</p>
              <p>Reteiner walk, Walk way, Patio</p>
            </div>
          </div>
        </div> 
      </div>
    </div>

  )
}

export default Services;