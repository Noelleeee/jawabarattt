import React from "react";

const Navbar = ({ logo }) => {
  return (
    <div className="navbarhome">
      <img src={logo} className="logohome" alt="Logo" />
      <nav>
        <ul>
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/media">MEDIA</a>
          </li>
          <li>
            <a href="/search">SEARCH</a>
          </li>
          <li>
            <a href="/about">ABOUT</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
