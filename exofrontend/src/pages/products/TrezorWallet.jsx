import React, { useContext, useEffect } from "react";
import { Container } from "reactstrap";
import Coin from "./Coin";
import UserInfo from "../home/UserInfo";
import AuthContext from "../../context/AuthContext";
import Transactions from "./Transactions";

const TrezorWallet = () => {
  const { user, logoutUser, coins, loadUser, coinsArray } =
    useContext(AuthContext);

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    coinsArray();
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <div className="terzor">
        <div className="d-flex justify-content-between align-item-center m-4 position-relative">
          <UserInfo user={user} />
          <button onClick={() => logoutUser()} className="btn btn-primary">
            Logout
          </button>
        </div>
        <Transactions />

        {coins.map((coin) => (
          <Coin key={coin.id} {...coin} />
        ))}
      </div>
    </Container>
  );
};

export default TrezorWallet;
