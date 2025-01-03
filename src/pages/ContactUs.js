import React from 'react';
import { Link } from 'react-router-dom';

function ContactUs() {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>Feel free to reach out to us via email or phone.</p>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/others">Others</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default ContactUs;
