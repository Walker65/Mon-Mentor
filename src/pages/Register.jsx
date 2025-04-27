import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role] = useState('user');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !password) {
      toast.warning("Veuillez remplir tous les champs.");
      return;
    }

    setIsLoading(true);

    try {
      await axios.post('https://mentor-backend-wkkg.onrender.com/api/auth/register', {
        firstName,
        lastName,
        email,
        password,
        role,
      });

      toast.success('Inscription réussie ! Redirection en cours...');
      navigate('/Profil');
    } catch (error) {
      if (error.response && error.response.data?.message) {
        toast.error(`Erreur : ${error.response.data.message}`);
      } else {
        toast.error("Erreur lors de l'inscription.");
      }
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-md-9 col-lg-7 col-xl-6">
            <div className="card shadow" style={{ borderRadius: "15px" }}>
              <div className="card-body p-5">
                <h2
                  className="text-uppercase text-center mb-5"
                  style={{ color: "#157347" }}
                >
                  Créer un compte
                </h2>

                <form onSubmit={handleSubmit}>
                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      id="firstName"
                      className="form-control form-control-lg custom-border"
                      placeholder="Prénom"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      id="lastName"
                      className="form-control form-control-lg custom-border"
                      placeholder="Nom"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="email"
                      className="form-control form-control-lg custom-border"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="password"
                      className="form-control form-control-lg custom-border"
                      placeholder="Mot de passe"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>

                  <div className="d-flex justify-content-center">
                    <button
                      type="submit"
                      className="btn btn-lg btn-block"
                      style={{
                        backgroundColor: "#157347",
                        borderColor: "#157347",
                        color: "white",
                      }}
                      disabled={isLoading}
                    >
                      {isLoading ? "Chargement..." : "S'inscrire"}
                    </button>
                  </div>

                  <p className="text-center text-muted mt-5 mb-0">
                    Vous avez déjà un compte ?{" "}
                    <Link to="/login" className="fw-bold text-body">
                      <u>Connectez-vous ici</u>
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </section>
  );
}

export default Register;
