import React from 'react';
import { Link } from 'react-router-dom';

function AboutUs() {
  return (
    <div>
      <h1>About Us</h1>
      <p>Learn more about the company and our mission.</p>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact-us">Contact Us</Link></li>
          <li><Link to="/others">Others</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default AboutUs;
