import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://mentor-backend-wkkg.onrender.com/api/auth/login",
        credentials,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = response.data;

      // Sauvegarder le token dans le localStorage
      localStorage.setItem("token", data.token);

      // Sauvegarder les données de l'utilisateur dans le localStorage si "Se souvenir de moi" est activé
      if (rememberMe) {
        localStorage.setItem("user", JSON.stringify(data.user));
      }

      // Décoder le token pour récupérer le rôle
      const tokenPayload = JSON.parse(atob(data.token.split('.')[1]));
      const userRole = tokenPayload.role;

      // Rediriger selon le rôle
      if (userRole === "mentor") {
        navigate("/MentorProfil");
      } else {
        navigate("/Profil");
      }

    } catch (err) {
      const errorMessage =
        err.response?.data?.message || "Erreur lors de la connexion.";
      alert(errorMessage);
    }
  };

  return (
    <section
      className="bg-image gradient-custom-3 py-5"
      style={{
        backgroundColor: "#F8F9FA", // Arrière-plan en couleur #F8F9FA
        minHeight: "100vh",
      }}
    >
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-md-9 col-lg-7 col-xl-6">
            <div className="card shadow" style={{ borderRadius: "15px" }}>
              <div className="card-body p-5">
                <h2
                  className="text-uppercase text-center mb-5"
                  style={{
                    color: "#157347", // Couleur du titre en #157347
                  }}
                >
                  Connexion
                </h2>

                <form onSubmit={handleLogin}>
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="email"
                      className="form-control form-control-lg"
                      placeholder="Adresse email"
                      value={credentials.email}
                      onChange={handleChange}
                      required
                      style={{
                        borderColor: "#157347", // Couleur du contour des champs en #157347
                      }}
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="password"
                      className="form-control form-control-lg"
                      placeholder="Mot de passe"
                      value={credentials.password}
                      onChange={handleChange}
                      required
                      style={{
                        borderColor: "#157347", // Couleur du contour des champs en #157347
                      }}
                    />
                  </div>

                  <div className="form-check d-flex justify-content-center mb-4">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      id="rememberMe"
                      checked={rememberMe}
                      onChange={() => setRememberMe(!rememberMe)}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="rememberMe"
                      style={{
                        color: "#157347", // Couleur du texte du label en #157347
                      }}
                    >
                      Se souvenir de moi
                    </label>
                  </div>

                  <div className="d-flex justify-content-center">
                    <button
                      type="submit"
                      className="btn btn-lg btn-block"
                      style={{
                        backgroundColor: "#157347", // Couleur du bouton en #157347
                        borderColor: "#157347", // Couleur du contour du bouton en #157347
                        color: "#FFFFFF",
                      }}
                    >
                      Se connecter
                    </button>
                  </div>

                  <p className="text-center text-muted mt-5 mb-0">
                    Vous n'avez pas encore de compte ?{" "}
                    <Link to="/Inscription" className="fw-bold text-body">
                      <u>Inscrivez-vous ici</u>
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
