import React from "react";
import "../Styles/Features.css";

const Features = () => {
  return (
    <div className="features-flex">
      <div className="graphic-design">
        <div className="graphic-design-text">
          <h4 className="fw-900 text-cyan">Graphic Design</h4>
          <p className="fw-900 text-cyan">
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential client's
            attention.
          </p>
        </div>
      </div>
      
      <div className="photography">
        <div className="photography-text">
          <h4 className="fw-900 text-dark-blue">Photography</h4>
          <p className="fw-900 text-dark-blue">
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
