import React from "react";
import "./Movies.css";
import { Link, Outlet } from "react-router-dom";

const Movies = () => (
  <>
    <div className="Movies p-5" data-testid="Movies">
      Movies Component
    </div>
    <div className="p-5">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link className="nav-link" to="/movies/top-10-movies">
            Top 10 Movies
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/movies/worst-movies">
            Worst Movies
          </Link>
        </li>
      </ul>
      <div className="p-5">
        <Outlet />
      </div>
    </div>
  </>
);

export default Movies;
