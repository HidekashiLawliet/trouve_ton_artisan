// L'URL de base peut venir du .env, sinon on utilise l'API locale par defaut.
const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:4000/api";

export default API_BASE_URL;
