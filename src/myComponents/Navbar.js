import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark p-3" id="navbar">
      <div className="container-fluid">
        <Link className="navbar-brand text-white fw-bolder fs-5 " to="/">
          &pi;hub
        </Link>
        <button
          className="navbar-toggler bg-info"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link text-info fw-bolder fs-5  active"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link fw-bolder fs-5 text-warning text-opacity-75"
                to="/speechToText"
              >
                Speech to text
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link text-warning fw-bolder fs-5 text-opacity-75 "
                to="/textToSpeech"
              >
                Text to Speech
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link fw-bolder fs-5 text-warning text-opacity-75"
                to="/assistance"
              >
                Voice Assistence
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link fw-bolder fs-5 text-warning text-opacity-75"
                to="/contact"
              >
                Contact Me
              </Link>
            </li>
          </ul>

          <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://github.com/Nandish2021"
            target="_blank"
            role="button"
          >
            <i className="fab fa-github" />
          </a>
        </div>
      </div>
    </nav>
  );
}
