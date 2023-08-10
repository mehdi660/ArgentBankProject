const API_URL = "http://localhost:3001/api/v1";

const apiEndpoints = {
  login: {
    method: "POST",
    path: "/user/login",
    requiresAuth: false,
  },
  getProfile: {
    method: "POST",
    path: "/user/profile",
    requiresAuth: true,
  },
  editUser: {
    method: "PUT",
    path: "/user/profile",
    requiresAuth: true,
  },
  signUp: {
    method: "POST",
    path: "/user/signup",
    requiresAuth: false,
  },
};

export const makeApiRequest = async (action, token, data = {}) => {
  const { method, path, requiresAuth } = apiEndpoints[action];

  const headers = { "Content-Type": "application/json" };

  if (!method || !path) {
    console.error("Endpoint not supported.");
    return;
  }

  if (requiresAuth) {
    headers.Authorization = `Bearer ${token}`;
  }

  const url = `${API_URL}${path}`;

  try {
    const response = await fetch(url, {
      method,
      headers,
      body: JSON.stringify(data),
    });

    return response.json(); // Ne pas analyser la réponse ici, renvoyer simplement la réponse
  } catch (error) {
    console.error("Error to executing the action:", error);
    throw error;
  }
};
