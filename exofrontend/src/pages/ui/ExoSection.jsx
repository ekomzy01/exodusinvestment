import React from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import bgDevices from "../../assests/images/ramp-banner-devices.png";

import bgDevicesSm from "../../assests/images/ramp-banner-devices-sm.png";
import bgBannerSm from "../../assests/images/ramp-banner-background-sm.png";
import bgBanner from "../../assests/images/ramp-banner-background.png";
import BTC from "../assetSupport/img/logos/BTC.svg";
import XRP from "../assetSupport/img/logos/XRP.svg";
import ETH from "../assetSupport/img/logos/ETH.svg";
import "./exoz_section.css";

const ExoSection = () => {
  return (
    <section className="home">
      <Container>
        <div className="home__content">
          <h1 className="home__heading text-center">
            Exodus Bitcoin &
            <br />
            Crypto Wallet
          </h1>
          <p className="home_text">
            Send, receive, and exchange Bitcoin and 200+ cryptocurrencies with
            ease on the world's leading <strong>Desktop, Mobile</strong> and
            <strong> Hardware</strong> crypto wallets
          </p>

          <div className="home__btn d-flex align-item-center text-center justify-content-center">
            <Link to="/login" className="watch btn__home ">
              <i className="ri-play-mini-fill"></i>Login wallet
            </Link>
            <Link to="/register" className="get btn__home ">
              Register wallet
            </Link>
          </div>
        </div>

        <div className="x__feature-banner">
          <div className="x__feature-banner__container">
            <span
              className="x__asset assets-rellax"
              data-rellax-speed="-0.5"
              role="presentation"
              style={{ transform: "translate3d(0px, 44px, 0px)" }}>
              <img src={BTC} alt="BTC" />
            </span>
            <span
              className="x__asset assets-rellax"
              data-rellax-speed="0.5"
              role="presentation"
              style={{ transform: "translate3d(0px, -44px, 0px)" }}>
              <img src={XRP} alt="XRP" />
            </span>
            <span
              className="x__asset assets-rellax"
              data-rellax-speed="1.5"
              role="presentation"
              style={{ transform: "translate3d(0px, -130px, 0px)" }}>
              <img src={ETH} alt="ETH" />
            </span>
            <div
              className="x__preview-img x__responsive-image"
              role="presentation">
              <img
                className="x__responsive-image__img x__responsive-image__img--sm"
                src={bgDevicesSm}
                alt="bg"
              />
              <img
                className="x__responsive-image__img x__responsive-image__img--ml"
                src={bgDevices}
                alt="bg"
              />
            </div>
            <div
              className="x__feature-banner__wrapper x__responsive-image x__responsive-image--background"
              role="presentation">
              <div className="x__content">
                <span className="x__heading">
                  Buy Crypto
                  <span className="x__break-sm">
                    with USD, EUR, and GBP. 0% fees.
                  </span>
                </span>
                <span className="x__subheading">
                  Pay by credit/debit card, bank transfer, or Apple Pay and
                  enjoy 0% fees on Bitcoin and select assets for a limited time.
                </span>
              </div>
              <img
                className="x__responsive-image__img x__responsive-image__img--sm"
                src={bgBannerSm}
                alt="bg"
              />
              <img
                className="x__responsive-image__img x__responsive-image__img--ml"
                src={bgBanner}
                alt="bg"
              />
            </div>
            <div className="x__buttons">
              <a
                className="x__button-default x__button-default--largest x__button-default--primary x__button-default--active"
                tabIndex="0"
                href="/buy-crypto-zero-fees/">
                <span className="x__copy">
                  <span>LEARN MORE</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ExoSection;
