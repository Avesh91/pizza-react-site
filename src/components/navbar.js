import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__text">
        <div className="logo">
          <img src="/img/logo.png" alt="logo" />
        </div>
        <ul className="navbar__ul">
          <li>
            <a href="" className="n-item">Home</a>
          </li>
          <li>
            <a href="" className="n-item">Menu</a>
          </li>
          <li>
            <a href="" className="n-item">Shop</a>
          </li>
          <li>
            <a href="" className="n-item">News</a>
          </li>
          <li>
            <a href="" className="n-item">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;