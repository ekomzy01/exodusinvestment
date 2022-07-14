import React, { useState, useEffect } from "react";

import "./product.css";

const Transactions = ({
  image,
  current_price,
  price_change_percentage_24h,
  name,
}) => {
  const [price, setPrice] = useState(0);
  const [numberOfCoin, setNumberOfCoin] = useState(0);

  const handleBuy = () => {};
  const handleSell = () => {};

  useEffect(() => {
    numberOfCoin !== 0 ? setPrice(numberOfCoin * current_price) : setPrice(0);
  }, [numberOfCoin, current_price]);

  return (
    <div className="transaction">
      <div className="coin-logo">
        <div className="coin__logo">
          <img src={image} alt="logo" className="w-100" />
        </div>
        <div className="coin__info">
          <h3>USD {current_price}</h3>
          <h6>
            24 hrs charge{" "}
            <span
              className={
                price_change_percentage_24h >= 1
                  ? "text-success"
                  : "text-danger"
              }>
              {price_change_percentage_24h}%
            </span>
          </h6>
        </div>
      </div>
      <div className="wallet_bal">
        <h6 className="d-flex justify-content-center align-items-center">
          Wallet Balances
        </h6>
        {name} <span>{numberOfCoin}</span> ~ USD {price}
      </div>
      <div className="cards">
        <div className="transaction__card" onClick={handleBuy}>
          <div className="transaction__icon">
            <i className="ri-bank-card-line"></i>
          </div>
          <h6>Buy</h6>
        </div>
        <div className="transaction__card" onClick={handleSell}>
          <div className="transaction__icon">
            <i className="ri-exchange-dollar-line"></i>
          </div>
          <h6>Sell</h6>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
