import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg bg-white shadow-sm sticky-top"
      style={{ height: "70px" }} // Hauteur fixe de la navbar
    >
      <div className="container d-flex align-items-center justify-content-between">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={logo}
            alt="Mon Mentor"
            style={{
              height: "90px",       // Taille du logo bien visible
              width: "auto",
              maxHeight: "100%",    // Ne dépasse jamais la navbar
              objectFit: "contain"
            }}
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Accueil</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Connexion</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">Inscription</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
