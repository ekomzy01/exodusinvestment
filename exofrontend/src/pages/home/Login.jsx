import React, { useState, useContext } from "react";
import { useEffect } from "react";
import AuthContext from "../../context/AuthContext";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });

  const { loginUser, error, setError } = useContext(AuthContext);

  const handleClick = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(null);
      }, 3000);
    }
    // eslint-disable-next-line
  }, [error]);

  const loginBtn = () => {
    loginUser(user);
    setUser((prev) => ({ ...prev }));
  };

  return (
    <div className="form">
      {/* <p className="text-danger my-4">{error}</p> */}
      <h1 className="text-center my-4">Please Login to Access Your Wallet</h1>
      <div className="form-input my-3">
        <label htmlFor="email" className="form-label text-white">
          Email Address
        </label>
        <input
          type="email"
          className="form-control form_input"
          name="email"
          placeholder="Enter Your Email"
          value={user.email}
          onChange={handleClick}
        />
      </div>
      <div className="form-input">
        <label htmlFor="password" className="form-label text-white">
          password
        </label>
        <input
          type="password"
          className="form-control form_input"
          name="password"
          placeholder="Enter Your password"
          value={user.password}
          onChange={handleClick}
        />
      </div>
      {error && <p className="text-danger">{error}</p>}
      <button onClick={loginBtn} className="login-btn">
        Login
      </button>
      <div className="mt-6 text-white">
        If you don't have Account please
        <button
          className="btn btn-primary mx-2"
          onClick={() => (window.location.href = "/register")}>
          Register
        </button>
        Here
      </div>
    </div>
  );
};

export default Login;
