import user from "./user/user";

export const login = (email, password) => {
  if (email === user.email && password === user.password) {
    localStorage.setItem("auth", "true");
    return true;
  }
  return false;
};

export const logout = () => {
  localStorage.removeItem("auth");
};

export const isAuthenticated = () => {
  return localStorage.getItem("auth") === "true";
};