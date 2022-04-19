import React from "react";
import "./Review.css";

const Review = ({ review }) => {
  const { name, img, description } = review;
  return (
    <div className="d-flex review-card">
      <div className="image-container pe-3">
        <img src={img} alt="" className="review-image" />
      </div>
      <div>
        <div className="review-text">
          <h5><h2>{name}</h2></h5>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
