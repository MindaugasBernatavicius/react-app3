import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/home">
          <img
            src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg"
            alt=""
            width="30"
            height="24"
          />
        </a>
        <Link className="navbar-brand" to="/home">
          Awesome App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              to="/home"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              to="/greeting"
            >
              Greeter
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              to="/increment"
            >
              Incrementor
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              to="/movies"
            >
              Movies
            </NavLink>
            <NavLink
              className={"nav-link"}
              style={({ isActive }) => {
                return {
                  color: isActive ? "orange" : "",
                  backgroundColor: isActive ? "black" : "",
                };
              }}
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              className={"nav-link"}
              style={({ isActive }) => {
                return {
                  color: isActive ? "orange" : "",
                  backgroundColor: isActive ? "black" : "",
                };
              }}
              to="/ssu"
            >
              SSU
            </NavLink>
            <NavLink
              className={"nav-link"}
              style={({ isActive }) => {
                return {
                  color: isActive ? "orange" : "",
                  backgroundColor: isActive ? "black" : "",
                };
              }}
              to="/bp"
            >
              Blogposts
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
