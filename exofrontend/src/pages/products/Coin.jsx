import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../../context/AuthContext";
import "./coin.css";

const Coin = ({
  name,
  image,
  current_price,
  onclick,
  price_change_percentage_24h,
  symbol,
}) => {
  const { coin, coins } = useContext(AuthContext);
  const [price, setPrice] = useState(0);
  const [numberOfCoins, setNumberOfCoins] = useState(0);

  const formatpercentage = (number) => `${new Number(number).toFixed(2)}`;
  if (coin.length > 0) {
    coins.map((coinItem) => {
      return coinItem.name === symbol
        ? setNumberOfCoins((prev) => prev + coinItem.amount_of_coin)
        : "";
    });
  }
  console.log(coin);
  const marketPrice = () =>
    numberOfCoins !== 0 ? setPrice(numberOfCoins * current_price) : setPrice(0);

  useEffect(() => {
    marketPrice();
    // eslint-disable-next-line
  }, [numberOfCoins, current_price]);

  return (
    <div className="coin-card" onClick={onclick}>
      <div className="coin__content d-flex ">
        <div className="coin__img mx-3 d-flex justify-content-center align-item-center ">
          <img src={image} alt={name} className="w-100 " />
        </div>
        <div className="coin__details">
          <div className="coin-amount">
            <span className="mx-2 my-2">{name}</span>
            <span className="mx-2 my-2">{symbol.toUpperCase()}</span>

            <span>{numberOfCoins}</span>
          </div>
          <div className="coin-price">
            <span className="mx-2">USD</span>
            <span>{price}</span>
          </div>
        </div>
      </div>
      <div className="coin__percent d-flex mx-4">
        <p
          className={
            price_change_percentage_24h >= 1 ? "text-success" : "text-danger"
          }>
          {formatpercentage(price_change_percentage_24h)}%
        </p>
      </div>
    </div>
  );
};

export default Coin;
