import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className=" footer-color text-center text-white sticky-bottom">
      <div className="container p-4">
        <div
          className="text-center p-3"
        >
          <p className="text-center">
            <h6>
            &copy;All rights reserved by Shah Farhan Abid.{new Date().getFullYear()}
            </h6>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
