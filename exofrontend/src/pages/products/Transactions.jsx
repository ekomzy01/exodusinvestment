import React, { useState, useEffect } from "react";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import "./product.css";

const Transactions = () => {
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
        <div className="coin__info">
          {money !== null &&
          money.length > 0 &&
          isAuthenticate &&
          !isLoading ? (
            <h3 className="text-bold fs-1">USD {money[0].amount_of_coin}</h3>
          ) : (
            <h3 className="text-bold fs-1">USD {price}</h3>
          )}
        </div>
      </div>

      <div className="cards">
        <div className="transaction__card">
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
        <div className="transaction__card">
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
