import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer col-xs-12">
      <h1 className="text-center col-xs-12">Made for You IITians by Fellow IITians</h1>
      <p className="text-center mt-3 col-xs-12">
        <Link to="/about">About</Link>|<Link to="/contact">Contact</Link>|
        <Link to="/policy">Privacy Policy</Link>
      </p>
    </div>
  );
};

export default Footer;