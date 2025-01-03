import React from 'react';
import { Link } from 'react-router-dom';

function Others() {
  return (
    <div>
      <h1>Others</h1>
      <p>This is a page for miscellaneous information.</p>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/contact-us">Contact Us</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Others;
