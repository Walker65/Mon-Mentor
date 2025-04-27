// src/services/authService.js

import axios from "axios";

const API_URL = "https://mentor-backend-wkkg.onrender.com/api";

// 🔵 Sauvegarder les données utilisateur
export const saveUserData = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

// 🔵 Récupérer les données utilisateur
export const getUserData = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${API_URL}/users`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des données utilisateur:", error);
    throw error;
  }
};

// 🔵 Récupérer les données mentor
export const getMentorData = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${API_URL}/mentors`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des données mentor:", error);
    throw error;
  }
};

// 🔵 Effacer les données utilisateur (déconnexion)
export const clearUserData = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
};
