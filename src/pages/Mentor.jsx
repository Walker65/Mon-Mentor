import React, { useState } from 'react';

const Mentor = () => {
  const mentors = [
    {
      id: 1,
      name: "Freddy AGBONA",
      domain: "Ingénierie Logicielle",
      experience: "Software Engineer, Mentor, et futur Chef de projet (Project Manager) ambitieux.",
      photo: "https://media.licdn.com/dms/image/v2/D4E03AQGsrMXk-L957A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1700255064565?e=1751500800&v=beta&t=4QF_GHHW1FOrOMzPUPhC0TjVgRVbhgYUrwe78Ovwcco", 
      bio: "Freddy est un ingénieur logiciel avec une passion pour le mentorat et le développement des compétences des jeunes talents en tech.",
      reviews: [
        "Un mentor exceptionnel, Freddy a su rendre les concepts complexes faciles à comprendre.",
        "Très pédagogue, ses sessions sont toujours très enrichissantes."
      ]
    },
    // Ajoute les autres mentors ici
  ];
  
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [message, setMessage] = useState(""); // État pour afficher le message

  const handleReserve = () => {
    setMessage("Cette fonctionnalité sera bientôt disponible !");
  };

  const defaultPhoto = "https://via.placeholder.com/150"; // Photo par défaut

  return (
    <div className="container py-5">
      <h2 className="text-center mb-5">Nos mentors disponibles</h2>
      
      {/* Affichage du message */}
      {message && <div className="alert alert-info">{message}</div>}
      
      <div className="row">
        {mentors.map((mentor) => (
          <div className="col-md-6 mb-4" key={mentor.id}>
            <div className="card shadow-sm h-100">
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <img 
                    src={mentor.photo || defaultPhoto}
                    alt={mentor.name} 
                    className="card-img-top mb-3"
                    style={{
                      height: '150px', 
                      width: '150px',
                      objectFit: 'cover', 
                      borderRadius: '50%', 
                      margin: 'auto' 
                    }}
                  />
                  <h5 className="card-title text-primary">{mentor.name}</h5>
                  <p className="card-text"><strong>Domaine :</strong> {mentor.domain}</p>
                  <p className="card-text"><strong>Profil :</strong> {mentor.experience}</p>
                  <p className="card-text"><strong>Bio :</strong> {mentor.bio}</p>
                  <div>
                    <strong>Avis :</strong>
                    <ul>
                      {mentor.reviews.map((review, index) => (
                        <li key={index}>"{review}"</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <button 
                  className="btn btn-success mt-3"
                  onClick={handleReserve}
                >
                  Réserver une session
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mentor;
