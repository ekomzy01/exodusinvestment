import axios from "axios";
import { createContext, useState, useEffect } from "react";
import setAuthTokenApi from "../utils/setAuthToken";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => {
    const token = localStorage.getItem("authTtoken");
    if (token !== undefined) {
      JSON.parse(localStorage.getItem("authTtoken"));
    }
    return null;
  });

  const [user, setUser] = useState(() => {
    const token = localStorage.getItem("authTtoken");
    if (token !== undefined) {
      JSON.stringify(localStorage.getItem("authTtoken"));
    }
    return null;
  });

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [coins, setCoins] = useState([]);
  const [coin, setCoin] = useState([]);
  const [isAuthenticate, setIsAuthenticate] = useState(false);

  const navigate = useNavigate();

  const coinsArray = async () => {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    );
    setCoins(response.data);
  };

  useEffect(() => {
    coinsArray();
  }, []);

  const loadUser = async () => {
    if (localStorage.authToken) {
      setAuthTokenApi(localStorage.authToken);
    }

    try {
      const res = await axios.get("/api/auth");
      setUser(res.data);
      setToken(res.data);
      setIsAuthenticate(true);
      setIsLoading(false);
    } catch (err) {
      setError(err.response.data.msg);
      setToken(localStorage.removeItem("authToken"));
      setIsAuthenticate(false);
      setIsLoading(false);
      setUser(null);
    }
  };

  const loginUser = async (email, password) => {
    const response = await fetch("api/auth/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(email, password),
    });
    const data = await response.json();

    if (response.status === 200) {
      setToken(data.token);
      setUser(data.token);
      localStorage.setItem("authToken", data.token);
      setIsAuthenticate(true);
      loadUser();

      navigate("/wallet");
    } else {
      setError(data.errors[0].msg);
      console.log(data.errors[0].msg);
      console.error(data);
    }
  };

  const registerUser = async (first_name, last_name, username, email) => {
    const response = await fetch("api/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(first_name, last_name, username, email),
    });
    const resp = await response.json();

    if (response.status === 200) {
      navigate("/wallet");
      setToken(resp);
      setIsAuthenticate(true);
      setIsLoading(false);
      setUser(resp);
      loadUser();
    } else {
      setError(resp.errors[0].msg);
    }
  };

  const logoutUser = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("authToken");
    navigate("/");
  };

  const getCoins = async () => {
    try {
      const res = await axios.get("api/coins");
      setCoin(res.data);
    } catch (err) {
      setError(err.response.msg);
    }
  };

  useEffect(() => {
    if (token) {
      setUser(JSON.stringify(token));
    }
    setIsLoading(false);
  }, [token, isLoading]);

  return (
    <AuthContext.Provider
      value={{
        loginUser,
        registerUser,
        logoutUser,
        user,
        setUser,
        setError,
        error,
        isLoading,
        setIsLoading,
        isAuthenticate,
        setIsAuthenticate,
        token,
        setToken,
        coins,
        loadUser,
        coin,
        setCoin,
        getCoins,
      }}>
      {isLoading ? null : children}
    </AuthContext.Provider>
  );
};
