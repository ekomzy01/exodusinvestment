import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import "./userInfo.css";

const UserInfo = () => {
  const { token } = useContext(AuthContext);

  return (
    <div className="text-white user_info d-flex align-items-center justify-content-center">
      <h2 className="me-4">Welcome</h2>
      <span>{token.email}</span>
    </div>
  );
};

export default UserInfo;
