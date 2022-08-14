import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./product.css";

const Transactions = () => {
  const navigate = useNavigate();
  const [price] = useState(0);
  const { money, getCoins, isAuthenticate, isLoading } =
    useContext(AuthContext);

  useEffect(() => {
    getCoins();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="transaction ">
      <div className="coin-logo">
        <p className="text-white text-bold fz-4">Your Total Balance</p>
        <div className="coin__info">
          {money !== null &&
          money.length > 0 &&
          isAuthenticate &&
          !isLoading ? (
            <h2 className="text-bold fs-1">&#36; {money[0].amount_of_coin}</h2>
          ) : (
            <h2 className="text-bold fs-1">&#36; {price}</h2>
          )}
        </div>
      </div>

      <div className="cards">
        <div className="transaction__card" onClick={() => navigate("deposite")}>
          <div className="transaction__icon">
            <i className="ri-bank-card-line"></i>
          </div>
          <h6>Deposit</h6>
        </div>
        <div className="transaction__card">
          <div className="transaction__icon">
            <i className="ri-bit-coin-line"></i>
          </div>
          <h6>Buy/Sell</h6>
        </div>
        <div
          className="transaction__card"
          onClick={() => navigate("withdrawal")}>
          <div className="transaction__icon">
            <i className="ri-exchange-dollar-line"></i>
          </div>
          <h6>Withdraw</h6>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
