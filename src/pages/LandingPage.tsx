import React from "react";
import { Link } from "react-router";

const LandingPage = () => {
  return (
    <div>
      <h1>Landing Page</h1>
      <ul>
        <li>
          <Link to="/users">Users Page</Link>
        </li>
        <li>
          <Link to="/products">Products Page</Link>
        </li>
        <li>
          <Link to="/orders">Orders Page</Link>
        </li>
        <li>
          <Link to="/lists">Lists Page</Link>
        </li>
      </ul>
    </div>
  );
};

export default LandingPage;
