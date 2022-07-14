import React from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import CountUp from "react-countup";

import BTC from "./img/logos/BTC.svg";
import BNB from "./img/logos/BNB.svg";
import ADA from "./img/logos/ADA.svg";
import NANO from "./img/logos/NANO.svg";
import DCR from "./img/logos/DCR.svg";
import ZEC from "./img/logos/ZEC.svg";
import XTZ from "./img/logos/XTZ.svg";
import LINK from "./img/logos/LINK.svg";
import ETC from "./img/logos/ETC.svg";
import BCH from "./img/logos/BCH.svg";
import XRP from "./img/logos/XRP.svg";
import EOS from "./img/logos/EOS.svg";
import XMR from "./img/logos/XMR.svg";
import ETH from "./img/logos/ETH.svg";
import USDT from "./img/logos/USDT.svg";
import LTC from "./img/logos/LTC.svg";
import DOGE from "./img/logos/DOGE.svg";
import ATOM from "./img/logos/ATOM.svg";
import ONT from "./img/logos/ONT.svg";
import NEO from "./img/logos/NEO.svg";
import BSV from "./img/logos/BSV.svg";
import TRX from "./img/logos/TRX.svg";
import DGB from "./img/logos/DGB.svg";
import VET from "./img/logos/VET.svg";
import DASH from "./img/logos/DASH.svg";
import "./asset-support.css";

const AssestSupport = () => {
  return (
    <Container>
      <section className="x-assets-supported x__width">
        <div id="asset-count-heading" className="assets-count-heading">
          <span className="x__animated-number">
            <span>
              <CountUp end={200} />
            </span>
            <span>+</span>
          </span>
          <h2 className="x__heading">
            <span>200+ Cryptocurrency Assets</span>
          </h2>
        </div>
        <div className="x-assets-supported__row-container">
          <div className="x-assets-supported__row x-assets-supported__row--chrome1">
            <span></span>
          </div>
          <div
            className="x-assets-supported__row rellax"
            data-rellax-speed="-0.8"
            style={{ transform: "translate3d(0px, 58px, 0px)" }}>
            <Link to="/binance-coin-wallet" title="Binance Coin (BNB)">
              <img src={BNB} alt="Binance Coin" />
            </Link>
            <Link to="/ada-cardano-wallet" title="Cardano (ADA)">
              <img src={ADA} alt="Cardano" />
            </Link>
            <Link to="/nano-wallet" title="Nano (NANO)">
              <img src={NANO} alt="Nano" />
            </Link>
            <Link to="/decred-wallet-dcr" title="Decred (DCR)">
              <img src={DCR} alt="Decred" />
            </Link>
          </div>
          <div
            className="x-assets-supported__row rellax"
            data-rellax-speed="0.8"
            style={{ transform: "translate3d(0px, -50px, 0px)" }}>
            <Link to="/zcash-wallet-zec" title="Zcash (ZEC)">
              <img src={ZEC} alt="Zcash" />
            </Link>
            <Link to="/chainlink-wallet" title="Chainlink (LINK)">
              <img src={LINK} alt="Chainlink" />
            </Link>
            <Link
              to="/ethereum-classic-wallet-etc"
              title="Ethereum Classic (ETC)">
              <img src={ETC} alt="Ethereum Classic" />
            </Link>
            <Link to="/tezos-wallet-xtz" title="Tezos (XTZ)">
              <img src={XTZ} alt="Tezos" />
            </Link>
          </div>
          <div className="x-assets-supported__row x-assets-supported__row--long">
            <Link to="/bitcoin-cash-wallet-app" title="Bitcoin Cash (BCH)">
              <img src={BCH} alt="Bitcoin Cash" />
            </Link>
            <Link to="/ripple-xrp-wallet" title="XRP (XRP)">
              <img src={XRP} alt="XRP" />
            </Link>
            <Link to="/eos-wallet" title="EOS (EOS)">
              <img src={EOS} alt="EOS" />
            </Link>
            <span className="x-assets-supported__row-break"></span>
            <Link to="/monero-wallet-xmr" title="Monero (XMR)">
              <img
                className="x-assets-supported__style1"
                src={XMR}
                alt="Monero"
              />
            </Link>
            <Link to="/bitcoin-wallet" title="Bitcoin (BTC)">
              <img src={BTC} alt="Bitcoin" />
            </Link>
            <Link to="/ethereum-wallet" title="Ethereum (ETH)">
              <img
                className="x-assets-supported__style2"
                src={ETH}
                alt="Ethereum"
              />
            </Link>
            <span className="x-assets-supported__row-break"></span>
            <Link to="/tether-usdt-wallet" title="Tether (USDT)">
              <img src={USDT} alt="Tether" />
            </Link>
            <Link to="/litecoin-wallet" title="Litecoin (LTC)">
              <img src={LTC} alt="Litecoin" />
            </Link>
            <Link to="/dogecoin-wallet" title="Dogecoin (DOGE)">
              <img src={DOGE} alt="Dogecoin" />
            </Link>
          </div>
          <div
            className="x-assets-supported__row rellax"
            data-rellax-speed="0.8"
            style={{ transform: "translate3d(0px, -35px, 0px)" }}>
            <Link to="/cosmos-wallet-atom" title="Cosmos (ATOM)">
              <img src={ATOM} alt="Cosmos" />
            </Link>
            <Link to="/ontology-wallet" title="Ontology (ONT)">
              <img src={ONT} alt="Ontology" />
            </Link>
            <Link to="/neo-wallet" title="NEO (NEO)">
              <img src={NEO} alt="NEO" />
            </Link>
            <Link to="/bitcoin-sv-wallet" title="Bitcoin SV (BSV)">
              <img src={BSV} alt="Bitcoin SV" />
            </Link>
          </div>
          <div
            className="x-assets-supported__row"
            data-rellax-speed="-0.8"
            style={{ transform: "translate3d(0px, 27px, 0px)" }}>
            <Link to="/tron-wallet-trx" title="TRON (TRX)">
              <img src={TRX} alt="TRON" />
            </Link>
            <Link to="/digibyte-wallet-dgb" title="DigiByte (DGB)">
              <img src={DGB} alt="DGB" />
            </Link>
            <Link to="/vechain-wallet-vet-coin" title="VeChain (VET)">
              <img src={VET} alt="Civic" />
            </Link>
            <Link to="/dash-wallet" title="Dash (DASH)">
              <img src={DASH} alt="Dash" />
            </Link>
          </div>
          <div className="x-assets-supported__row x-assets-supported__row--chrome2">
            <span></span>
          </div>
        </div>
        <Link to="/status/#assets" className="x__button">
          <span className="x__button-align">
            <span className="x__button-align-text">See the full list</span>
          </span>
        </Link>

        <div className="asset__pattern">
          <div className="asset__pattern-content">
            <img src={BTC} alt="btc" />
            <div className="asset__pattern-content-text">
              <h3 className="asset__pattern-content-heading">
                Best Bitcoin Wallet for Beginners according to Investopedia!
              </h3>
              <p className="asset__pattern-content-p">
                Send, Receive and Exchange Bitcoin and more than 100 different
                cryptocurrencies...
              </p>
            </div>
            <Link to="/#" className="asset__pattern-btn">
              <span>Learn more about bitcoin</span>
            </Link>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default AssestSupport;
