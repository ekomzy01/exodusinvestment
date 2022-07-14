import React, { useContext, useState, useEffect } from "react";
import { Container } from "reactstrap";
import Coin from "./Coin";
import UserInfo from "../home/UserInfo";
import AuthContext from "../../context/AuthContext";
import Transactions from "./Transactions";

const TrezorWallet = () => {
  const [element, setElement] = useState("");
  const [transaction, setTransaction] = useState(false);
  const { user, logoutUser, coins, loadUser, getCoins } =
    useContext(AuthContext);

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    getCoins();
    // eslint-disable-next-line
  }, []);

  const handleClick = (coinName) => {
    coins.map((coin) => {
      return coin.name === coinName
        ? setElement(() => <Transactions key={coin.id} {...coin} />)
        : "it did't work";
    });
    setTransaction((prev) => !prev);
  };
  return (
    <Container>
      <div className="terzor">
        <div className="d-flex justify-content-between align-item-center mb-4 position-relative">
          <UserInfo user={user} />
          <button onClick={() => logoutUser()} className="btn btn-primary">
            Logout
          </button>
        </div>

        {coins.map((coin) => (
          <Coin
            key={coin.id}
            {...coin}
            onclick={() => handleClick(coin.name)}
          />
        ))}

        {transaction && <div className="transaction-wedget">{element}</div>}
      </div>
    </Container>
  );
};

export default TrezorWallet;
