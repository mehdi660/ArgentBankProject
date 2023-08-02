import axios from "axios";

const BaseUrl = "http://localhost:3001/api/v1";

// Toute les actions de l'api
const apiAction = {
  login: {
    method: "post",
    url: "/user/login",
    requiresAuth: false,
  },
  getProfile: {
    method: "post",
    url: "/user/profile",
    requiresAuth: true,
  },
  editUser: {
    method: "put",
    url: "/user/profile",
    requiresAuth: true,
  },
  signUp: {
    method: "post",
    url: "/user/signup",
    requiresAuth: false,
  },
};
// fonction pour gerer les appel a l'api avec l'action donnée
export const performApiAction = async (action, token, data = {}) => {
  const actionConfig = apiAction[action];

  if (!actionConfig) {
    console.error("Action non prise en charge.");
    return;
  }

  const headers = {
    "Content-Type": "application/json",
  };

  if (actionConfig.requiresAuth) {
    headers.Authorization = `Bearer ${token}`;
  }

  try {
    const response = await axios({
      method: actionConfig.method,
      url: `${BaseUrl}${actionConfig.url}`,
      data,
      headers,
    });

    return response.data;
  } catch (error) {
    console.error("Erreur lors de l'exécution de l'action :", error);
    throw error;
  }
};
