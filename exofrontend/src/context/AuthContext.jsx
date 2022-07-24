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
  const [money, setMoney] = useState(null);
  const [isAuthenticate, setIsAuthenticate] = useState(false);

  const navigate = useNavigate();

  const coinsArray = async () => {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    );
    setCoins(response.data);
  };

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

  const loginUser = async (userData) => {
    const response = await fetch("api/auth/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();

    if (response.status === 200) {
      setToken(data.token);
      setUser(data.token);
      localStorage.setItem("authToken", data.token);
      setIsAuthenticate(true);
      loadUser();

      navigate("/wallet");
    } else if (response.status === 400) {
      const { message } = data;
      setError(message);
    }
  };

  const registerUser = async (register) => {
    const response = await fetch("api/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(register),
    });
    const resp = await response.json();
    const { email } = register;
    const { message } = resp;

    if (response.status === 400) {
      setError(message);
    }

    if (resp.status === "PENDING") {
      navigate(`/emailsent/${email}`);
      console.log(email);
      // setToken(resp);
      // setIsAuthenticate(true);
      // setIsLoading(false);
      // setUser(resp);
      // loadUser();
    } else {
      setError(resp.message);
      console.log("something went wrong");
    }
  };

  const logoutUser = () => {
    setToken(null);
    setUser(null);
    setMoney(null);
    localStorage.removeItem("authToken");
    navigate("/");
  };

  const getCoins = async () => {
    try {
      const res = await axios.get("api/coins");
      setMoney(res.data);
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
        money,
        setMoney,
        getCoins,
        coinsArray,
      }}>
      {isLoading ? null : children}
    </AuthContext.Provider>
  );
};
