import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark navbar-custom">
          <span>
            <i className="fas fa-smog mr-2" style={{ color: "white" }}></i>{" "}
          </span>
          <Link className="navbar-brand m-auto" to="/">
            <h3>Air Pollution</h3>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="favorites">
                  Favorites
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="news">
                  News{" "}
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
