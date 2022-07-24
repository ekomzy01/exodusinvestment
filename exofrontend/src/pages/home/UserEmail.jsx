import React from "react";
import { useParams, Link } from "react-router-dom";
import "./userInfo.css";

const UserEmail = () => {
  const { userEmail } = useParams();
  return (
    <div className="user-email">
      <h1>Account Confirmation</h1>
      <p>
        An email with your acount confirmation has been sent to your email:{" "}
        <em className="text-primary">{userEmail}</em>
      </p>
      <p>check your email and come back to proceed!</p>
      <Link className="btn btn-primary" to={`/login`}>
        proceed
      </Link>
    </div>
  );
};

export default UserEmail;
