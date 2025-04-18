import React from "react";
import step1 from "../assets/step1.png";
import step2 from "../assets/step2.png";
import step3 from "../assets/step3.png";

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-5" data-aos="fade-up">
      <div className="container">
        <h2 className="text-center mb-5">Comment ça marche</h2>
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <img src={step1} alt="Étape 1" className="img-fluid mb-3" />
            <h5>1. Crée ton profil</h5>
            <p>Inscris-toi en quelques clics et définis tes objectifs.</p>
          </div>
          <div className="col-md-4 mb-4">
            <img src={step2} alt="Étape 2" className="img-fluid mb-3" />
            <h5>2. Choisis ton mentor</h5>
            <p>Parcours les profils et choisis le mentor qui te correspond.</p>
          </div>
          <div className="col-md-4 mb-4">
            <img src={step3} alt="Étape 3" className="img-fluid mb-3" />
            <h5>3. Échange en direct</h5>
            <p>Profite de sessions personnalisées et de conseils concrets.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
