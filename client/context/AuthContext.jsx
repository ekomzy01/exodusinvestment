import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticate, setIsAuthenticate] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token", token));
  const [error, setError] = useState(null);

  const Register = async (formData) => {
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

  // const [authToken, setAuthToken] = useState(() => {
  //   const token = localStorage.getItem("authToken");
  //   if (token !== undefined) {
  //     JSON.parse(localStorage.getItem("authToken"));
  //   }
  //   return null;
  // });

  // const [user, setUser] = useState(() => {
  //   const token = localStorage.getItem("authToken");
  //   if (token !== undefined) {
  //     JSON.stringify(localStorage.getItem("authToken"));
  //   }
  //   return null;
  // });

  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState("");
  // const [coins, setCoins] = useState([]);
  // const navigate = useNavigate();

  // const coinsArray = async () => {
  //   const response = await axios.get(
  //     "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  //   );
  //   setCoins(response.data);
  // };

  // useEffect(() => {
  //   coinsArray();
  // }, []);

  // const loginUser = async (username, password) => {
  //   const response = await fetch("http://127.0.0.1:8000/auth/", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(username, password),
  //   });
  //   const data = await response.json();

  //   if (response.status === 200) {
  //     setAuthToken(data);
  //     setUser(JSON.stringify(data));
  //     localStorage.setItem("authTokens", JSON.stringify(data));
  //     navigate("/wallet");
  //   } else {
  //     setError("Invalid username or password");
  //   }
  // };

  // const registerUser = async (first_name, last_name, username, email) => {
  //   const response = await fetch("http://127.0.0.1:8000/api/register/", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(first_name, last_name, username, email),
  //   });
  //   const resp = await response.json();

  //   console.log(resp);
  //   console.log(response);

  //   if (response.status === 201) {
  //     navigate("/wallet");
  //   } else {
  //     setError("Something went wrong");
  //   }
  // };

  // const logoutUser = () => {
  //   setAuthToken(null);
  //   setUser(null);
  //   localStorage.removeItem("authToken");
  //   navigate("/");
  // };

  // useEffect(() => {
  //   if (authToken) {
  //     setUser(JSON.stringify(authToken));
  //   }
  //   setIsLoading(false);
  // }, [authToken, isLoading]);
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
        loading,
        setLoading,
        isAuthenticate,
        setIsAuthenticate,
        token,
        setToken,
      }}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
