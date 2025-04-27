import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getUserData } from "../services/authService";

const Profil = () => {
  const [userName, setUserName] = useState('Mon Mentor'); // Message par défaut

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await getUserData(); // Attendre la récupération des données utilisateur
        if (user && user.firstName && user.lastName) {
          setUserName(`${user.firstName} ${user.lastName}`);
        } else {
          setUserName('Utilisateur'); // Si aucune donnée utilisateur, message par défaut
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des données utilisateur:", error);
        setUserName('Utilisateur'); // En cas d'erreur, message par défaut
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="dashboard-container py-5 text-center">
      <h1 className="fw-bold mb-3">Bienvenue, {userName} </h1>
      <p className="lead text-muted mb-4">
        Heureux de vous revoir <strong>{userName}</strong>.<br />
      </p>

      {/* Carrousel d'images du mentorat */}
      <div id="mentorCarousel" className="carousel slide mb-5" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/src/assets/Mentor1.png"
              className="d-block w-100"
              alt="Mentorat 1"
              style={{
                objectFit: "contain", // Cela permet de maintenir l'image complète
                height: "300px", // Ajuster la hauteur
                margin: "auto", // Centrer l'image
              }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="/src/assets/Mentor2.png"
              className="d-block w-100"
              alt="Mentorat 2"
              style={{
                objectFit: "contain", // Cela permet de maintenir l'image complète
                height: "300px", // Ajuster la hauteur
                margin: "auto", // Centrer l'image
              }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="/src/assets/Mentor3.png"
              className="d-block w-100"
              alt="Mentorat 3"
              style={{
                objectFit: "contain", // Cela permet de maintenir l'image complète
                height: "300px", // Ajuster la hauteur
                margin: "auto", // Centrer l'image
              }}
            />
          </div>
        </div>

        {/* Contrôles du carrousel */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#mentorCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Précédent</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#mentorCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Suivant</span>
        </button>
      </div>

      <div className="d-flex justify-content-center gap-3 flex-wrap">
        <Link to="/Utilisateur" className="btn btn-outline-primary btn-lg">
          Mon Profil
        </Link>

        <Link to="/Mentor" className="btn btn-outline-success btn-lg">
          Trouver un Mentor
        </Link>

        <Link to="/logout" className="btn btn-danger btn-lg">
          Se Déconnecter
        </Link>
      </div>
    </div>
  );
};

export default Profil;
