import axios from "axios";
import { createContext, useState } from "react";

export const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticate, setIsAuthenticate] = useState(false);
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : ""
  );
  const [error, setError] = useState(null);
  const [alert, setAlert] = useState(null);

  const Alert = (msg) => {
    setAlert(() => msg);

    setTimeout(() => setAlert(null), 5000);
  };

  const registerUser = async (formData) => {
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/api/users", formData, config);
      setToken(res.data);
      setIsAuthenticate(true);
      setLoading(false);
      
    } catch (err) {
      setError(err.res.data.msg);
      setToken(localStorage.removeItem("token"));
      setIsAuthenticate(false);
      setLoading(false);
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        // loginUser,
        registerUser,
        // logoutUser,
        alert,
        Alert,
        setAlert,
        user,
        setUser,
        setError,
        error,
        loading,
        setLoading,
        isAuthenticate,
        setIsAuthenticate,
        token,
        setToken,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
