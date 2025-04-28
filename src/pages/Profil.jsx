import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getUserData } from "../services/authService";

const Profil = () => {
  const [userName, setUserName] = useState('Mon Mentor');
  const [showModal, setShowModal] = useState(false); // pour gérer l'ouverture/fermeture de la modale

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await getUserData();
        if (user && user.firstName && user.lastName) {
          setUserName(`${user.firstName} ${user.lastName}`);
        } else {
          setUserName('Utilisateur');
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des données utilisateur:", error);
        setUserName('Utilisateur');
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

      {/* Carrousel */}
      <div id="mentorCarousel" className="carousel slide mb-5" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/src/assets/Mentor1.png"
              className="d-block w-100"
              alt="Mentorat 1"
              style={{
                objectFit: "contain",
                height: "300px",
                margin: "auto",
              }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="/src/assets/Mentor2.png"
              className="d-block w-100"
              alt="Mentorat 2"
              style={{
                objectFit: "contain",
                height: "300px",
                margin: "auto",
              }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="/src/assets/Mentor3.png"
              className="d-block w-100"
              alt="Mentorat 3"
              style={{
                objectFit: "contain",
                height: "300px",
                margin: "auto",
              }}
            />
          </div>
        </div>

        {/* Contrôles */}
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

      {/* Boutons */}
      <div className="d-flex justify-content-center gap-3 flex-wrap">
        <button
          className="btn btn-outline-primary btn-lg"
          onClick={() => setShowModal(true)} // ouvrir la modale
        >
          Mon Profil
        </button>

        <Link to="/Mentor" className="btn btn-outline-success btn-lg">
          Trouver un Mentor
        </Link>

        <Link to="/logout" className="btn btn-danger btn-lg">
          Se Déconnecter
        </Link>
      </div>

      {/* Modal Bootstrap */}
      {showModal && (
        <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Fonctionnalité bientôt disponible</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <p>Cette fonctionnalité sera bientôt disponible !</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profil;
