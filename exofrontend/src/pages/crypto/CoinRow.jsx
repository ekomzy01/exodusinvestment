import React from "react";

const CoinRow = ({ coin, index }) => {
  return (
    <tr>
      <td className="text-white ">{index}</td>
      <td>
        <img
          src={coin.image}
          alt={coin.name}
          style={{ width: "3%" }}
          className="me-4"
        />
        <span className="text-white">{coin.name}</span>
        <span className="text-white text-muted text-uppercase ms-3">
          {coin.symbol}
        </span>
      </td>
      <td>${coin.current_price}</td>
      <td
        className={
          coin.price_change_percentage_24h > 0 ? "text-success" : "text-danger"
        }>
        {coin.price_change_percentage_24h.toFixed(2)}
      </td>
      <td>{coin.total_volume}</td>
      <td>{coin.market_cap}</td>
    </tr>
  );
};

export default CoinRow;
