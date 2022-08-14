import React from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";

import mobileImg1 from "./img/hp-mobile-crypto-wallet1-lsize.png";
import mobileImg2 from "./img/hp-mobile-crypto-wallet2-lsize.png";
import mobileImg3 from "./img/hp-mobile-crypto-wallet3-lsize.png";
import trezorWallet from "./img/hp-trezor-lsize.png";
// import Dots from "./Dots";
import "./mobile-wallet.css";

// const techData = data.technology;
// const len = techData.length - 1;

const MobileWallet = () => {
  // const [activeIndex, setActiveIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(
  //     () => setActiveIndex((prevD) => (prevD === len ? 0 : prevD + 1)),
  //     5000
  //   );
  //   return () => clearInterval(interval);
  // }, []);

  // const onclick = (activeIndex) => setActiveIndex(activeIndex);

  return (
    <Container>
      <section className="mobile-wallet">
        <h2 className="h2-mobile-wallet">Manage Crypto on Mobile</h2>
        <p className="p-mobile-wallet">
          Control your digital assets while you're on the move with Exodus for
          iOS and Android.
        </p>
        <div className="mobile__wallet-content">
          <div className="mobile-wallet-pictures">
            <div className="m-w-img">
              <img src={mobileImg1} alt="" />
            </div>
          </div>
          <div className="mobile-wallet-pictures">
            <div className="m-w-img">
              <img src={mobileImg2} alt="" />
            </div>
          </div>
          <div className="mobile-wallet-pictures">
            <div className="m-w-img">
              <img src={mobileImg3} alt="" />
              <div aria-hidden="true" className="mobile-wallet-dommie"></div>
            </div>
          </div>
        </div>
        <div className="x-more">
          Experience the world's best cryptocurrency wallet from any location...
          <Link to="/wallet" className="x-more__btn">
            Mobile Wallet
            <svg width="31" height="15" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M28.698 7l-5.532-5.532.707-.707 6.718 6.718-6.718 6.717-.707-.707L28.656 8H0V7h28.698z"
                fill="#FFF"
                fillRule="evenodd"></path>
            </svg>
          </Link>
        </div>
      </section>
      <section className="mobile__features">
        <div className="mobile-features__col">
          <svg
            version="1.1"
            viewBox="0 0 40 32"
            xmlns="http://www.w3.org/2000/svg">
            <title>Sync with your Exodus Desktop app</title>
            <g fill="#fff" fillRule="nonzero">
              <path
                d="m4 16h-4l6-6 6 6h-4c0 6.6274 5.3726 12 12 12 3.3137 0 6.3137-1.3431 8.4853-3.5147l2.8284 2.8284c-2.8954 2.8954-6.8954 4.6863-11.314 4.6863-8.8366 0-16-7.1634-16-16z"
                opacity=".5"></path>
              <path d="m36 16h4l-6 6-6-6h4c0-6.6274-5.3726-12-12-12-3.3137 0-6.3137 1.3431-8.4853 3.5147l-2.8284-2.8284c2.8954-2.8954 6.8954-4.6863 11.314-4.6863 8.8366 0 16 7.1634 16 16z"></path>
            </g>
          </svg>
          <span className="x-features__numbering">01</span>
          <h3>
            Sync with your
            <span className="x-break-lg">Exodus Desktop app</span>
          </h3>
        </div>
        <div className="mobile-features__col">
          <svg
            version="1.1"
            viewBox="0 0 40 38"
            xmlns="http://www.w3.org/2000/svg">
            <title>Exchange crypto in just two taps</title>
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
          <h3>
            Exchange crypto in <span className="x-break-lg">just two taps</span>
          </h3>
        </div>
        <div className="mobile-features__col">
          <svg
            version="1.1"
            viewBox="0 0 33 40"
            xmlns="http://www.w3.org/2000/svg">
            <title>Monitor market movements on the go</title>
            <g transform="translate(-3)" fill="#fff">
              <path
                d="m3 10h7v19h-7v-19zm4 21v5h-1v-5h1zm0-23h-1v-5h1v5z"
                opacity=".15"></path>
              <path
                d="m16 17h7v16h-7v-16zm4 18v5h-1v-5h1zm0-20h-1v-5h1v5z"
                opacity=".5"></path>
              <path d="m29 7h7v21h-7v-21zm4 23v6h-1v-6h1zm0-25h-1v-5h1v5z"></path>
            </g>
          </svg>
          <span className="x-features__numbering">03</span>
          <h3>
            Monitor market
            <span className="x-break-lg">movements on the go</span>
          </h3>
        </div>
      </section>
      <section className="mobile__trezor">
        <h2 className="x-h2-hp-section">
          <span>Effortless Hardware Security</span>
        </h2>
        <p className="x-p-hp-section">
          Manage crypto assets in Exodus securely from your Trezor hardware
          wallet.
        </p>
        <div className="trezor__wallet-img">
          <img src={trezorWallet} alt="" />
        </div>
        <div className="trezor-more">
          The security of Trezor meets the intuitive design of Exodus…
          <Link to="/wallet" className="x-more__btn">
            Hardware Wallet
            <svg width="31" height="15" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M28.698 7l-5.532-5.532.707-.707 6.718 6.718-6.718 6.717-.707-.707L28.656 8H0V7h28.698z"
                fill="#FFF"
                fillRule="evenodd"></path>
            </svg>
          </Link>
        </div>
      </section>
      <section className="mobile__features">
        <div className="mobile-features__col">
          <svg
            version="1.1"
            viewBox="0 0 28 32"
            xmlns="http://www.w3.org/2000/svg">
            <title>Advanced security made easy</title>
            <g fill="#fff">
              <path d="m13.999 32c-9.3198-4.6629-13.986-11.07-13.998-19.222-0.0022733-1.5644-0.0022733-4.1296 0-7.6956l13.998-5.0823v32z"></path>
              <path
                d="m14 22.172v-6.3431l11.612-11.612 2.3859 0.86626c7.206e-4 1.1304 0.0012127 2.1602 0.0014765 3.0895l-14 14zm0 5.6569l13.969-13.969c-0.40842 7.6394-5.0647 13.686-13.969 18.14v-4.1712zm0-17.657v-10.172l7.4623 2.7093-7.4623 7.4623z"
                opacity=".5"></path>
            </g>
          </svg>
          <span className="x-features__numbering">01</span>
          <h3>Advanced security for your cryptocurrency, made easy</h3>
        </div>
        <div className="mobile-features__col">
          <svg
            version="1.1"
            viewBox="0 0 40 38"
            xmlns="http://www.w3.org/2000/svg">
            <title>Exchange assets between Trezor and Exodus</title>
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
          <h3>Exchange assets between Trezor and Exodus</h3>
        </div>
        <div className="mobile-features__col">
          <svg
            version="1.1"
            viewBox="0 0 24 36"
            xmlns="http://www.w3.org/2000/svg">
            <title>Assets stay securely offline on Trezor hardware</title>
            <g fill="#fff" fillRule="nonzero">
              <path d="m4 11v-3c0-4.4183 3.5817-8 8-8s8 3.5817 8 8v3h4v19.21h-0.024149l-11.975 5.7895-11.976-5.7895h-0.024149v-19.21h4zm4 0h8v-3c0-2.2091-1.7909-4-4-4s-4 1.7909-4 4v3zm12 16.69v-12.743h-16v12.743l8.0005 3.9375 7.9995-3.9375z"></path>
            </g>
          </svg>
          <span className="x-features__numbering">03</span>
          <h3>Assets stay securely offline on Trezor hardware</h3>
        </div>
      </section>
    </Container>
  );
};

export default MobileWallet;
