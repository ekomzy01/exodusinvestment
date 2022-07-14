import React from "react";
import { Container } from "reactstrap";
import portfolio from "./image/portfolio-msize.png";
import BNB from "./image/logos/BNB.svg";
import XRP from "./image/logos/XRP.svg";
import EOS from "./image/logos/EOS.svg";
import DCR from "./image/logos/DCR.svg";
import LINK from "./image/logos/LINK.svg";
import ZEC from "./image/logos/ZEC.svg";
import LTC from "./image/logos/LTC.svg";
import BTC from "./image/logos/BTC.svg";
import ETH from "./image/logos/ETH.svg";
import NEO from "./image/logos/NEO.svg";
import XTZ from "./image/logos/XTZ.svg";
import BCH from "./image/logos/BCH.svg";
import BSV from "./image/logos/BSV.svg";
import TRX from "./image/logos/TRX.svg";
import USDT from "./image/logos/USDT.svg";
import ETC from "./image/logos/ETC.svg";
import Countup from "react-countup";
import "./desktop.css";
import { Link } from "react-router-dom";
import small from "./image/exchange-assets-lsize.png";
import exmedium from "./image/exchange-assets-msize.png";

import medium from "./image/send-receive-msize.png";
import lager from "./image/send-receive-lsize.png";
const Desktop = () => {
  return (
    <div className="desktop">
      <header id="desktop" className="desktop__header">
        <Container>
          <div className="x__content">
            <div className="x-header__container">
              <h1 className="x-header__heading">
                <span>
                  Control Your Crypto in Your{" "}
                  <strong>Desktop Crypto Wallet</strong>
                </span>
              </h1>
              <p className="x-header__description">
                Secure engineering inside beautiful design to easily manage your
                cryptocurrency.
              </p>
              <div className="x__download-buttons">
                <a
                  href="https://www.youtube.com/watch?v=m3miyYQXnrs"
                  data-fancybox="true"
                  className="x__button x__button-sec">
                  <span className="x__button-align">
                    <span className="x__button-align-text">Watch Video</span>
                  </span>
                </a>
                <Link className="x__button" to="/download/">
                  <span className="x__button-align">
                    <span className="x__button-align-text">
                      Download Wallet
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <img src={portfolio} alt="portfolio" className="w-100" />
        </Container>
      </header>
      <section className="x__wallet__quote x__wallet__quote--1 x__width">
        <div className="x__quote">
          <div className="x__quote__container">
            <svg
              className="x__logo"
              version="1.1"
              viewBox="0 0 22 22"
              xmlns="http://www.w3.org/2000/svg">
              <g fill="#fff" fillRule="nonzero">
                <path d="M19.8802 5.5843L11.3633 0V3.12221L16.827 6.67261L16.1842 8.70651H11.3633V11.2935H16.1842L16.827 13.3274L11.3633 16.8778V20L19.8802 14.4335L18.4875 10.0089L19.8802 5.5843Z"></path>
                <path d="M3.95338 11.2935H8.75643V8.70651H3.93553L3.3106 6.67261L8.75643 3.12221V0L0.239502 5.5843L1.63221 10.0089L0.239502 14.4335L8.77429 20V16.8778L3.3106 13.3274L3.95338 11.2935Z"></path>
              </g>
            </svg>
            <div className="x__quote__content">
              Exodus Desktop gives you a way to Secure, Manage, and Exchange
              your cryptocurrency in one beautiful application.
            </div>
          </div>
        </div>
      </section>
      <section className="x__wallet__assets-supported">
        <div id="asset-count-heading" className="x__assets-count-heading">
          <span className="x__animated-number">
            <span>
              <Countup end={215} />
            </span>
            <span>+</span>
          </span>
          <h2 className="x__heading">
            <span>215+ Cryptocurrency Assets</span>
          </h2>
        </div>
        <div className="x-assets-supported__row-container">
          <div
            className="x-assets-supported__row x-assets-supported__row--long rellax"
            data-rellax-speed="0.8">
            <img src={BNB} alt="Binance Coin" />

            <div className="x-assets-supported__row-break"></div>

            <img src={XRP} alt="XRP" />

            <img src={EOS} alt="EOS" />

            <div className="x-assets-supported__row-break"></div>

            <img src={DCR} alt="Decred" />

            <img src={LINK} alt="ChainLink" />
          </div>
          <div
            className="x-assets-supported__row x-assets-supported__row--long rellax"
            data-rellax-speed="-0.8">
            <img src={ZEC} alt="Zcash" />

            <div className="x-assets-supported__row-break"></div>

            <img src={LTC} alt="Litecoin" />

            <img src={BTC} alt="Bitcoin" />

            <div className="x-assets-supported__row-break"></div>

            <img src={ETH} alt="Ehereum" />

            <div className="x-assets-supported__row-break"></div>
            <div className="x-assets-supported__row-break"></div>

            <img src={NEO} alt="Neo" />

            <img src={XTZ} alt="Tezos" />
          </div>
          <div
            className="x-assets-supported__row x-assets-supported__row--long rellax"
            data-rellax-speed="0.8">
            <img src={BCH} alt="Bitcoin Cash" />

            <div className="x-assets-supported__row-break"></div>

            <img src={BSV} alt="Bitcoin SV" />

            <img src={TRX} alt="Tron" />

            <div className="x-assets-supported__row-break"></div>

            <img src={USDT} alt="Tether USD" />

            <div className="x-assets-supported__row-break"></div>
            <div className="x-assets-supported__row-break"></div>

            <img src={ETC} alt="Ethereum Classic" />
          </div>
        </div>
        <button
          data-toggle="collapse"
          className="x__button"
          id="x-assets-supported-btn">
          <span className="x__button-align">
            <span className="x__button-align-text">See the full list</span>
          </span>
        </button>
      </section>
      <section className="x__wallet__exchange x__wallet__exchange--1">
        <div className="x__width">
          <h2 className="x-header__subheading">
            <span>
              Exchange <span className="x-break-lg">24/7 - In Seconds</span>
            </span>
          </h2>
          <p className="x-header__description">
            Buy and sell one cryptocurrency for another from the comfort of your
            wallet, in seconds - no registration needed.
          </p>
          <div className="x__preview">
            <div className="x__image">
              <div
                className=" gatsby-image-wrapper"
                style={{ position: "relative", overflow: "hidden" }}>
                <div
                  aria-hidden="true"
                  style={{
                    width: "100%",
                    paddingBottom: "67.88866259334691%",
                  }}></div>
                <picture>
                  <source
                    srcSet={`${exmedium} 640w,${exmedium} 1536w,${small} 2320w`}
                    sizes="(max-width: 640px) 100vw,(max-width: 1536px) 100vw,2320px"
                  />
                  <img
                    sizes="(max-width: 640px) 100vw,(max-width: 1536px) 100vw,2320px"
                    srcSet={`${exmedium} 640w,${exmedium} 1536w,${small} 2320w"`}
                    src={small}
                    alt={small}
                    loading="lazy"
                    style={{
                      position: "absolute",
                      top: "0px",
                      left: "0px",
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center center",
                      opacity: "1",
                      transition: "opacity 2000ms ease 0s",
                    }}
                  />
                </picture>
                <noscript>
                  <picture>
                    <source
                      srcSet={`${exmedium} 640w,${exmedium} 1536w,${small} 2320w"`}
                      sizes="(max-width: 640px) 100vw,(max-width: 1536px) 100vw,2320px"
                    />
                    <img
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw,(max-width: 1536px) 100vw,2320px"
                      srcSet={`${exmedium} 640w,${exmedium}1536w,${small} 2320w"`}
                      src={small}
                      alt="exchange"
                      style={{
                        position: "absolute",
                        top: "0",
                        left: "0",
                        opacity: "1",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                    />
                  </picture>
                </noscript>
              </div>
            </div>
          </div>
          <span
            className="x__preview__chrome x__preview__chrome--2 exchange-rellax"
            data-rellax-speed="-1"
            role="presentation"
            style={{ transform: "translate3d(0px, 32px, 0px)" }}></span>
          <span
            className="x__preview__chrome x__preview__chrome--3 exchange-rellax"
            data-rellax-speed="-1"
            role="presentation"
            style={{ transform: "translate3d(0px, -64px, 0px)" }}></span>
          <span
            className="x__preview__chrome x__preview__chrome--4 exchange-rellax"
            data-rellax-speed="1"
            role="presentation"
            style={{ transform: "translate3d(0px, 104px, 0px)" }}></span>
        </div>
        <span className="x__preview__chrome x__preview__chrome--1"></span>
      </section>
      <section className="x__wallet__diversify">
        <p className="x-header__description">
          Exchange Between Any Assets To Effortlessly Diversify Your Portfolio
        </p>
        <div className="x__image" role="presentation"></div>
        <span
          className="x__preview__chrome x__preview__chrome--1 diversify-rellax"
          data-rellax-speed="-3"
          role="presentation"
          style={{ transform: "translate3d(0px, -82px, 0px)" }}></span>
      </section>
      <section className="x__wallet__sendreceive x__wallet__sendreceive--1">
        <h2 className="x-header__subheading">
          <span>Send &amp; Receive</span>
        </h2>
        <p className="x-header__description">
          Send and receive safely, using a QR code or address, knowing Exodus
          automatically checks all addresses for errors.
        </p>
        <div className="x__preview">
          <div className="x__image">
            <div
              className=" gatsby-image-wrapper"
              style={{ position: "relative", overflow: "hidden" }}>
              <div
                aria-hidden="true"
                style={{
                  width: "100%",
                  paddingBottom: "63.69426751592356%",
                }}></div>
              <picture>
                <source
                  srcSet={`${medium}640w,${medium} 1536w,${lager} 2380w`}
                  sizes="(max-width: 640px) 100vw,(max-width: 1536px) 100vw,2380px"
                />
                <img
                  sizes="(max-width: 640px) 100vw,(max-width: 1536px) 100vw,2380px"
                  srcSet={`${medium} 640w,${medium} 1536w,${lager} 2380w`}
                  src={lager}
                  alt="Send and Receive Digital Assets"
                  loading="lazy"
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center center",
                    opacity: "1",
                    transition: "opacity 1000ms ease 0s",
                  }}
                />
              </picture>
              <noscript>
                <picture>
                  <source
                    srcSet={`${medium} 640w,${medium} 1536w,${lager} 2380w"`}
                    sizes="(max-width: 640px) 100vw,(max-width: 1536px) 100vw,2380px"
                  />
                  <img
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw,(max-width: 1536px) 100vw,2380px"
                    srcSet={`${medium} 640w,${medium} 1536w,${lager} 2380w"`}
                    src={lager}
                    alt="Send and Receive Digital Assets"
                    style={{
                      position: "absolute",
                      top: "0",
                      left: "0",
                      opacity: "1",
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                </picture>
              </noscript>
            </div>
          </div>
        </div>
        <span className="x__preview__chrome x__preview__chrome--1"></span>
        <span
          className="x__preview__chrome x__preview__chrome--2 sendreceive-rellax"
          data-rellax-speed="-1"
          role="presentation"
          style={{ transform: "translate3d(0px, -109px, 0px)" }}></span>
        <span
          className="x__preview__chrome x__preview__chrome--3 sendreceive-rellax"
          data-rellax-speed="-1"
          role="presentation"
          style={{ transform: "translate3d(0px, -40px, 0px)" }}></span>
        <span
          className="x__preview__chrome x__preview__chrome--4 sendreceive-rellax"
          data-rellax-speed="-1"
          role="presentation"
          style={{ transform: "translate3d(0px, -52px, 0px)" }}></span>
        <span
          className="x__preview__chrome x__preview__chrome--5 sendreceive-rellax"
          data-rellax-speed="-1"
          role="presentation"
          style={{ transform: "translate3d(0px, -64px, 0px)" }}></span>
        <span
          className="x__preview__chrome x__preview__chrome--6 sendreceive-rellax"
          data-rellax-speed="-2"
          role="presentation"
          style={{ transform: "translate3d(0px, -18px, 0px)" }}></span>
        <span
          className="x__preview__chrome x__preview__chrome--7 sendreceive-rellax"
          data-rellax-speed="1"
          role="presentation"
          style={{ transform: "translate3d(0px, 111px, 0px)" }}></span>
        <span
          className="x__preview__chrome x__preview__chrome--8 sendreceive-rellax"
          data-rellax-speed="2"
          role="presentation"
          style={{ transform: "translate3d(0px, 13px, 0px)" }}></span>
        <span
          className="x__preview__chrome x__preview__chrome--9 sendreceive-rellax"
          data-rellax-speed="-1"
          role="presentation"
          style={{ transform: "translate3d(0px, -132px, 0px)" }}></span>
      </section>
      <section className="x__wallet__features x__wallet__features--1 x-features">
        <div className="x__width">
          <h2 className="x-header__subheading">
            <span>More Control When You're Ready</span>
          </h2>
          <div
            id="desktopPageCarousel3"
            className="carousel-dark"
            style={{ width: "100%" }}>
            <div style={{ display: "block" }}>
              <div className="row carousel-inner">
                <div
                  className="col-md-4 col-sm-12 x__feature x__feature--1"
                  style={{ minHeight: "390.391px" }}>
                  <h3>
                    <span></span>Keep Your Data Private
                  </h3>
                  <p className="x-p x-p--light">
                    Exodus encrypts private keys and transaction data on your
                    device and for your eyes only. Your data remains private -
                    no registration or account setup required.
                  </p>
                </div>
                <div
                  className="col-md-4 col-sm-12 x__feature x__feature--2"
                  style={{ minHeight: "390.391px" }}>
                  <h3>
                    <span></span>Hardware Wallet (Trezor)
                  </h3>
                  <p className="x-p x-p--light">
                    Take your security to the next-level by managing and
                    exchanging your cryptocurrencies in Exodus securely from
                    your Trezor Hardware Wallet.
                  </p>
                </div>
                <div
                  className="col-md-4 col-sm-12 x__feature x__feature--3"
                  style={{ minHeight: "390.391px" }}>
                  <h3>
                    <span></span>24/7 Human Support
                  </h3>
                  <p className="x-p x-p--light">
                    We won't leave you out on your own. Exodus provides an
                    online help desk and 24/7 customer support to get your
                    questions answered, fast.
                  </p>
                </div>
                <div
                  className="col-md-4 col-sm-12 x__feature x__feature--4"
                  style={{ minHeight: "390.391px" }}>
                  <h3>
                    <span></span>One-Click Easy
                  </h3>
                  <p className="x-p x-p--light">
                    Exodus is designed for people who have never used an
                    exchange. Ready to exchange Bitcoin for another asset?
                    Exodus hides the complex details while assets are exchanged
                    behind the scenes in seconds.
                  </p>
                </div>
                <div
                  className="col-md-4 col-sm-12 x__feature x__feature--5"
                  style={{ minHeight: "390.391px" }}>
                  <h3>
                    <span></span>Friendly and Trusted
                  </h3>
                  <p className="x-p x-p--light">
                    Exodus makes it fun and easy to learn and use blockchain
                    assets. No “tech speak” or confusing steps. Control your
                    wealth with ease - and have fun doing it!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Desktop;
