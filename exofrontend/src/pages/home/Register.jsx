import React, { useState, useContext } from "react";
import AuthContext from "../../context/AuthContext";

const Register = () => {
  const [register, setRegister] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const { registerUser, setError, error } = useContext(AuthContext);

  const handleClick = (e) => {
    const { name, value } = e.target;
    setRegister((prev) => ({ ...prev, [name]: value }));
  };

  const { username, email, password, password2 } = register;

  const handleSubmit = () => {
    if (username === "" || email === "" || password === "") {
      setError("Please Enter all fills");
    } else if (password !== password2) {
      setError("Passwords do not match");
    } else {
      registerUser(register);
    }
  };

  return (
    <div className="form">
      <p className="text-danger my-4">{error}</p>
      <h1 className="text-center">Please Register</h1>
      <div className="form-input my-3">
        <label htmlFor="firstName" className="form-label text-white">
          First Name
        </label>
        <input
          type="text"
          className="form-control form_input"
          name="first_name"
          placeholder="Enter Your firstName"
          value={register.first_name}
          onChange={handleClick}
          required
        />
      </div>
      <div className="form-input my-3">
        <label htmlFor="lastName" className="form-label text-white">
          Last Name
        </label>
        <input
          type="text"
          className="form-control form_input"
          name="last_name"
          placeholder="Enter Your lastName"
          value={register.last_name}
          onChange={handleClick}
          required
        />
      </div>
      <div className="form-input my-3">
        <label htmlFor="username" className="form-label text-white">
          Username
        </label>
        <input
          type="text"
          className="form-control form_input"
          name="username"
          placeholder="Enter Your Username"
          value={register.username}
          onChange={handleClick}
          required
        />
      </div>
      <div className="form-input my-3">
        <label htmlFor="email" className="form-label text-white">
          Email
        </label>
        <input
          type="email"
          className="form-control form_input"
          name="email"
          placeholder="Enter Your Email"
          value={register.email}
          onChange={handleClick}
          required
        />
      </div>
      <div className="form-input">
        <label htmlFor="password" className="form-label text-white">
          Password
        </label>
        <input
          type="password"
          className="form-control form_input"
          name="password"
          placeholder="Enter Your password"
          value={register.password}
          onChange={handleClick}
          required
          minLength="8"
        />
      </div>
      <div className="form-input">
        <label htmlFor="password2" className="form-label text-white">
          Password2
        </label>
        <input
          type="password"
          className="form-control form_input"
          name="password2"
          placeholder="Enter Your password"
          value={register.password2}
          onChange={handleClick}
          required
          minLength="8"
        />
      </div>
      <button onClick={handleSubmit} className="login-btn">
        Register
      </button>
      <div className="mt-6 text-white">
        If you Already have Account please
        <button
          className="btn btn-primary mx-2"
          onClick={() => {
            window.location.href = "/login";
          }}>
          Login
        </button>
        Here
      </div>
    </div>
  );
};

export default Register;
