import React from "react";

export default function Nav() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark py-2"
      id="nav-top"
    >
      <div className="container">
        <a href="index.html" className="navbar-brand">
          Notes App
        </a>
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
}
