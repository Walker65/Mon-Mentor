import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Utilisateur = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Vérification des données stockées dans localStorage
    const storedUser = localStorage.getItem('user');
    console.log('Stored User:', storedUser); // Ajout d'un log ici
    
    if (storedUser) {
      try {
        // Parsing des données utilisateur
        const userData = JSON.parse(storedUser);
        console.log('Parsed User Data:', userData); // Log des données après parsing
        
        // Vérification de la validité des données
        if (userData && userData.firstName && userData.lastName && userData.email) {
          setUser(userData); // On met les données dans l'état
        } else {
          // Si données invalides ou corrompues
          localStorage.removeItem('user');
          navigate('/login');
        }
      } catch (error) {
        // En cas d'erreur dans le parsing
        console.error('Erreur de parsing:', error);
        localStorage.removeItem('user');
        navigate('/login');
      }
    } else {
      // Si aucune donnée n'est trouvée
      console.log('Aucun utilisateur trouvé dans localStorage');
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    // Nettoyage des données de l'utilisateur dans localStorage et redirection
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    navigate('/login');
  };

  // Si les données utilisateur ne sont pas encore chargées
  if (!user) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Profil Utilisateur</h1>

      <div className="card shadow">
        <div className="card-body">
          <h4 className="card-title">Informations</h4>
          <p className="card-text"><strong>Nom:</strong> {user.firstName} {user.lastName}</p>
          <p className="card-text"><strong>Email:</strong> {user.email}</p>

          <div className="d-flex justify-content-between">
            <button
              className="btn btn-primary"
              onClick={() => navigate('/edit-profile')}
            >
              Modifier mes informations
            </button>

            <button
              className="btn btn-danger"
              onClick={handleLogout}
            >
              Se déconnecter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Utilisateur;
