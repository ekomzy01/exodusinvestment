import React from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import hpDesktop from "../../assests/images/hp-desktop-crypto-wallet-lsize.png";
import WalletArrowSVG from "./WalletArrowSVG";

import "./home-wallet.css";

const HomeWallet = () => {
  return (
    <Container>
      <div className="home__wallet">
        <div className="home__wallet-img">
          <img src={hpDesktop} alt="" className="wallet-app" />
        </div>
        <div className="home__wallet-more">
          <h3>
            Pro-level control to manage your cryptocurrency in one beautiful
            application…
          </h3>
          <Link to="/desktop" className="wallet-btn">
            DESKTOP WALLET
            <WalletArrowSVG />
          </Link>
        </div>
        <div className="home__wallet-apps">
          <h2 className="x-h2-hp-section">
            <span>A New World of Crypto Apps</span>
          </h2>
          <p className="x-p-hp-section">
            Apps transform Exodus to give you more control over your wealth.
            <span className="x-break-lg">
              Discover how to easily earn interest and more...
            </span>
          </p>
          <div className="home__wallet-apps__img">{/* <AppSvg /> */}</div>
          <a
            href="/apps/"
            className="home__button d-flex text-center align-item-center justify-content-center">
            <span className="home__button-align">
              <span className="home__button-align-text justify-content-center">
                Explore Apps
              </span>
            </span>
          </a>
        </div>
      </div>
      <section className="features x__width d-flex align-item-center justify-content-center gap-4">
        <div className="x-features__col">
          <svg
            version="1.1"
            viewBox="0 0 36 36"
            xmlns="http://www.w3.org/2000/svg">
            <title>Live charts &amp; portfolio</title>
            <g fill="#fff" fillRule="nonzero">
              <path d="m18.5 0c9.7099 0.26482 17.5 8.2193 17.5 17.993 0 4.7907-1.8716 9.1443-4.9234 12.369l-2.8298-2.8298c2.3286-2.5001 3.7532-5.8535 3.7532-9.5397 0-7.5646-5.9996-13.728-13.5-13.991v-4.002z"></path>
              <path
                d="m17.5 0v4.002c-3.4889 0.12247-6.653 1.5216-9.0397 3.7445l-2.8298-2.8298c3.1126-2.9453 7.2762-4.7913 11.869-4.9166z"
                opacity=".1"></path>
              <path
                d="m4.9234 5.6237l2.8298 2.8298c-2.3286 2.5001-3.7532 5.8535-3.7532 9.5397s1.4246 7.0395 3.7532 9.5397l-2.8298 2.8298c-3.0518-3.2252-4.9234-7.5788-4.9234-12.369s1.8716-9.1443 4.9234-12.369z"
                opacity=".3"></path>
              <path
                d="m30.369 31.07c-3.2252 3.0518-7.5788 4.9234-12.369 4.9234s-9.1443-1.8716-12.369-4.9234l2.8298-2.8298c2.5001 2.3286 5.8535 3.7532 9.5397 3.7532s7.0395-1.4246 9.5397-3.7532l2.8298 2.8298z"
                opacity=".6"></path>
            </g>
          </svg>
          <span className="x-features__numbering">01</span>
          <h3>Live charts &amp; portfolio</h3>
        </div>
        <div className="x-features__col">
          <svg
            version="1.1"
            viewBox="0 0 40 38"
            xmlns="http://www.w3.org/2000/svg">
            <title>Built-in Exchange</title>
            <g fill="#fff">
              <path
                d="m14.197 8.9701l9.788 5.7443c0.9094 0.5337 1.4696 1.52 1.4696 2.5874v11.489c0 1.0674-0.56022 2.0537-1.4696 2.5874l-9.788 5.7443c-0.9094 0.5337-2.0298 0.5337-2.9392 0l-9.788-5.7443c-0.9094-0.5337-1.4696-1.52-1.4696-2.5874v-11.489c-7.2516e-16 -1.0674 0.56022-2.0537 1.4696-2.5874l9.788-5.7443c0.9094-0.5337 2.0298-0.5337 2.9392 0z"
                opacity=".1"></path>
              <path
                d="m21.47 4.6873l9.788 5.7443c0.9094 0.5337 1.4696 1.52 1.4696 2.5874v11.489c0 1.0674-0.56022 2.0537-1.4696 2.5874l-9.788 5.7443c-0.9094 0.5337-2.0298 0.5337-2.9392 0l-9.788-5.7443c-0.9094-0.5337-1.4696-1.52-1.4696-2.5874v-11.489c0-1.0674 0.56022-2.0537 1.4696-2.5874l9.788-5.7443c0.9094-0.5337 2.0298-0.5337 2.9392 0z"
                opacity=".4"></path>
              <path
                d="m28.742 0.40027l9.788 5.7443c0.9094 0.5337 1.4696 1.52 1.4696 2.5874v11.489c0 1.0674-0.56022 2.0537-1.4696 2.5874l-9.788 5.7443c-0.9094 0.5337-2.0298 0.5337-2.9392 0l-9.788-5.7443c-0.9094-0.5337-1.4696-1.52-1.4696-2.5874v-11.489c0-1.0674 0.56022-2.0537 1.4696-2.5874l9.788-5.7443c0.9094-0.5337 2.0298-0.5337 2.9392 0z"
                opacity=".8"></path>
              <path d="m31.516 26.924c0.75604-0.55825 1.2114-1.4547 1.2114-2.417v-11.489c0-1.0674-0.56022-2.0537-1.4696-2.5874l-9.788-5.7443c-0.9094-0.5337-2.0298-0.5337-2.9392 0l-2.7736 1.6277c0.082563-0.060964 0.16871-0.1179 0.25825-0.17044l9.788-5.7443c0.9094-0.5337 2.0298-0.5337 2.9392 0l9.788 5.7443c0.9094 0.5337 1.4696 1.52 1.4696 2.5874v11.489c0 1.0674-0.56022 2.0537-1.4696 2.5874l-7.0145 4.1166z"></path>
            </g>
          </svg>
          <span className="x-features__numbering">02</span>
          <h3>Built-in Exchange</h3>
        </div>
        <div className="x-features__col ">
          <svg
            version="1.1"
            viewBox="0 0 40 38"
            xmlns="http://www.w3.org/2000/svg"
            xlink="http://www.w3.org/1999/xlink">
            <title>24/7 human support</title>
            <defs>
              <path
                id="x-features__col3"
                d="m4.6394 27.041c-6.1859-6.1859-6.1859-16.215 0-22.401 6.1859-6.1859 16.215-6.1859 22.401 0 6.1859 6.1859 6.1859 16.215 0 22.401s-16.215 6.1859-22.401 0zm5.6003-5.6003c3.093 3.093 8.1076 3.093 11.201 0s3.093-8.1076 0-11.201-8.1076-3.093-11.201 0-3.093 8.1076 0 11.201z"></path>
            </defs>
            <g transform="translate(0 -1)" fill="none">
              <path
                d="m4.8355 12.85c-0.51739 0.41497-0.98821 0.88489-1.4042 1.4015-3.1743 3.9422-2.5518 9.7113 1.3905 12.886l4.8133 3.8757 0.07788 0.078385 3.1665 3.985c0.42219 0.53132 0.90209 1.0141 1.4309 1.4395 3.9438 3.1724 9.7126 2.5471 12.885-1.3966l3.787-4.7078 0.078373-0.077938 4.0299-3.205c0.53262-0.42358 1.0164-0.90517 1.4424-1.4359 3.1684-3.947 2.5371-9.7152-1.4099-12.884l-4.5692-3.6678-0.077955-0.078213-3.311-4.1528c-0.42759-0.5363-0.91405-1.0229-1.4502-1.4507-3.9565-3.1565-9.7227-2.5081-12.879 1.4484l-3.3456 4.1935-0.078017 0.078218-4.5764 3.6705z"
                opacity=".5"
                stroke="#fff"></path>
              <g transform="translate(4.16 4.16)">
                <mask id="x-features__col3b" fill="white">
                  <use href="#x-features__col3"></use>
                </mask>
                <use fill="#FFFFFF" opacity=".3" href="#x-features__col3"></use>
                <polygon
                  points="15.84 11.767 25.004 2.603 29.077 6.6759 19.913 15.84 29.077 25.004 25.004 29.077 15.84 19.913 6.6759 29.077 2.603 25.004 11.767 15.84 2.603 6.6759 6.6759 2.603"
                  fill="#fff"
                  mask="url(#x-features__col3b)"></polygon>
              </g>
            </g>
          </svg>
          <span className="x-features__numbering">03</span>
          <h3>24/7 human support</h3>
        </div>
      </section>
    </Container>
  );
};

export default HomeWallet;
