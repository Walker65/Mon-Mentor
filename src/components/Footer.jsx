import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container text-center">
        <p>&copy; {new Date().getFullYear()} Mon Mentor. Tous droits réservés.</p>
        <div>
          <Link to="/terms" className="text-white me-3">Conditions d'utilisation</Link>
          <Link to="/privacy" className="text-white">Politique de confidentialité</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
