import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="Header">
      <nav>
        <div className="logo">
          <h1>
            <span>
              <svg
                width="23"
                height="24"
                viewBox="0 0 23 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.6726 23.4814L22.519 23.4814L15.8468 16.8093L0.000450134 16.8093L6.6726 23.4814ZM15.8468 16.8093L15.8468 0.962923L22.519 7.63508L22.519 23.4814L15.8468 16.8093Z"
                  fill="black"
                />
              </svg>
            </span>
            Logo
          </h1>
        </div>
        <ul className="navlink">
          <li>Features</li>
          <li>Pricing</li>
          <li>Community</li>
          <li>Support</li>
        </ul>
        <div className="loginbutton">
          <button>Login</button>
          <button>Register</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
