import React, { useState, useEffect } from "react";

import "./product.css";

const Transactions = ({
  image,
  current_price,
  price_change_percentage_24h,
  name,
}) => {
  const [price, setPrice] = useState(0);
  const [numberOfCoin] = useState(0);

  const handleBuy = () => {};
  const handleSell = () => {};

  useEffect(() => {
    numberOfCoin > 0 ? setPrice(numberOfCoin * current_price) : setPrice(0);
  }, [numberOfCoin, current_price]);

  return (
    <div className="transaction ">
      <div className="coin-logo">
        <div className="coin__info">
          <h3 className="text-bold fs-1">USD {price}</h3>
        </div>
      </div>

      <div className="cards">
        <div className="transaction__card" onClick={handleBuy}>
          <div className="transaction__icon">
            <i className="ri-bank-card-line"></i>
          </div>
          <h6>Deposit</h6>
        </div>
        <div className="transaction__card" onClick={handleSell}>
          <div className="transaction__icon">
            <i className="ri-bit-coin-line"></i>
          </div>
          <h6>Buy/Sell</h6>
        </div>
        <div className="transaction__card" onClick={handleSell}>
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
