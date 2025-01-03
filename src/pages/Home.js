import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to My Personal Website</h1>
      <p>This is the homepage of my personal website built with React.js.</p>
      <nav>
        <ul>
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/contact-us">Contact Us</Link></li>
          <li><Link to="/others">Others</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
