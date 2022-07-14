import React from "react";
import { Link } from "react-router-dom";
import investopedia from "./img/investopedia.svg";
import bitcoins from "./img/99bitcoins.svg";
import coinBureau from "./img/CoinBureau.svg";
import Carousel from "react-elastic-carousel";
import "./testimonial.css";

const Testimonial = () => {
  return (
    <>
      <div className="x-testimonials x-testimonials-carousel">
        <div id="testimonials" className="carousel slide">
          <div className="carousel-inner">
            <Carousel>
              <div className="active carousel-item">
                <div className="x-testimonials-carousel__content">
                  <p>
                    Even if you’re just starting out with Bitcoin or
                    cryptocurrencies you would still be able to use this wallet
                    effortlessly. Exodus is the kind of product you “fall in
                    love with” the first time you use it, and that’s quite rare
                    in the cryptocurrency world.
                  </p>
                  <Link
                    target="_blank"
                    rel="noreferrer noopener"
                    to="https://99bitcoins.com/bitcoin-wallet/exodus-review/"
                    className="x-testimonials-carousel__author">
                    <img src={bitcoins} alt="99bitcoins logo" />
                    <span className="x-testimonials-carousel__author-txt">
                      <span className="x-testimonials-carousel__author-txt1">
                        99Bitcoins
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
              <div className="carousel-item">
                <div className="x-testimonials-carousel__content">
                  <p>
                    Exodus was built with beginning cryptocurrency users in
                    mind, but is also ideal for most mainstream cryptocurrency
                    enthusiasts who are looking for a secure, easy to use,
                    beautiful wallet.
                  </p>
                  <Link
                    target="_blank"
                    rel="noreferrer noopener"
                    to="https://www.coinbureau.com/review/exodus-wallet/"
                    className="x-testimonials-carousel__author">
                    <img src={coinBureau} alt="coin bureau Logo" />
                    <span className="x-testimonials-carousel__author-txt">
                      <span className="x-testimonials-carousel__author-txt1">
                        Coinbureau
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
              <div className="carousel-item">
                <div className="x-testimonials-carousel__content">
                  <p>
                    With its simplicity, this wallet is great for beginners just
                    getting into the crypto space. It also has great support,
                    which is an essential feature for beginners getting into
                    what many would consider a confusing market.
                  </p>
                  <Link
                    target="_blank"
                    rel="noreferrer noopener"
                    to="https://www.investopedia.com/best-bitcoin-wallets-5070283#mntl-sc-block_2-0"
                    className="x-testimonials-carousel__author">
                    <img src={investopedia} alt="investopedia logo" />
                    <span className="x-testimonials-carousel__author-txt">
                      <span className="x-testimonials-carousel__author-txt1">
                        Investopedia
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
