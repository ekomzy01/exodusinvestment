import React from "react";
import { useContext, useState } from "react";
import { Container } from "reactstrap";
import AuthContext from "../../context/AuthContext";
import "./crypto.css";
import TableCoin from "./TableCoin";

const News = () => {
  const { coins } = useContext(AuthContext);
  const [search, setSearch] = useState("");

  return (
    <div className="news">
      <Container>
        <div className="row mt-5">
          <input
            type="text"
            placeholder="Search a Coin"
            className="form-control bg-dark text-light border-0 text-center mt-5 w-100"
            onChange={(e) => setSearch(e.target.value)}
          />
          <TableCoin coins={coins} search={search} />
        </div>
      </Container>
    </div>
  );
};

export default News;
