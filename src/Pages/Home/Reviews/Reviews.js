import React from "react";
import "./Reviews.css";
import person1 from "../../../images/reviews/person-1.jpg";
import person2 from "../../../images/reviews/person-2.jpg";
import person3 from "../../../images/reviews/person-3.jpg";
import Review from "../Review/Review";

const reviews = [
  {
    id: 1,
    name: "David Miller",
    img: person1,
    description:
      "Thier healthcare support was amazing.They always provide us with a better treatment and consultant without any hesitation undoubtly.",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Hardik Pandya",
    img: person2,
    description:
      "By using their support and services and health management system,i became injury free in less than a month.Always love to find them when i feel injured.",
    rating: 4.7,
  },
  {
    id: 3,
    name: "Jonchina Alauddin",
    img: person3,
    description:
      "The best health care managment system in town! They dont lack a single effort to make your health smooth and secure. Always love to acquire their service!",
    rating: 5,
  },
  {
    id: 3,
    name: "Jonchina Alauddin",
    img: person3,
    description:
      "The best health care managment system in town! They dont lack a single effort to make your health smooth and secure. Always love to acquire their service!",
    rating: 5,
  },
];

const Reviews = () => {
  return (
    <div className="reviews-section ">
      <h2 className="text-center my-5">Patient and Supporters Acknowledgement about us</h2>
      <div className="review-container">
        {reviews.map((review) => (
          <Review key={review.id} review={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
