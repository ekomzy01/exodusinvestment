import React from "react";
import logo from "../../assests/images/Exodus_Logo.svg";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

import "./footer.css";

const Footer = () => {
  const Product = [
    {
      display: "Desktop Wallet",
      urls: "/desktop",
    },
    {
      display: "Mobile Wallet",
      urls: "/wallet",
    },

    {
      display: "Trezor Hardware Wallet",
      urls: "/wallet",
    },
  ];
  const Supports = [
    {
      display: "Support",
      urls: "/desktop",
    },
    {
      display: "Knowledge base",
      urls: "/desktop",
    },
    {
      display: "Legal Inquiries",
      urls: "/desktop",
    },
    {
      display: "Status",
      urls: "/desktop",
    },
  ];
  const CryptoNews = [
    {
      display: "News and Insights",
      urls: "/news",
    },
    {
      display: "YouTube",
      urls: "/news",
    },
    {
      display: "Newsletter",
      urls: "/news",
    },
  ];
  const Company = [
    {
      display: "About Us",
      urls: "/about",
    },
    {
      display: "Investors",
      urls: "/about",
    },
    {
      display: "Careers",
      urls: "/about",
    },
    {
      display: "Contact Us",
      urls: "/about",
    },
    {
      display: "Brand Guidelines",
      urls: "/about",
    },
  ];
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="2" sm="6" md="3" className="footer__list">
            <h5>Product</h5>
            <ListGroup className="list__group">
              {Product.map((item, index) => (
                <ListGroupItem key={index} className="list__item">
                  <Link to={item.urls}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="2" sm="6" md="3">
            <h5>Support</h5>
            <ListGroup className="list__group">
              {Supports.map((item, index) => (
                <ListGroupItem className="list__item" key={index}>
                  <Link to={item.urls}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="2" sm="6" md="3">
            <h5>Crypto News</h5>
            <ListGroup className="list__group">
              {CryptoNews.map((item, index) => (
                <ListGroupItem className="list__item" key={index}>
                  <Link to={item.urls}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="2" sm="6" md="3">
            <h5>Company</h5>
            <ListGroup className="list__group">
              {Company.map((item, index) => (
                <ListGroupItem className="list__item" key={index}>
                  <Link to={item.urls}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="4" sm="6" md="3">
            <div className="subscribe">
              <h5 className="subscribe__heading">Subscribe to Exodus</h5>
              <p className="subscribe__text">
                Sign up to receive our newsletter with update about your wallet
              </p>
              <p className="subscribe__btn">
                <Link to="/newsletter" className="d-flex">
                  <span className="subscribe__btn-align">
                    <span className="subscribe__btn-text">SIGN ME UP</span>
                  </span>
                </Link>
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <div className="footer__content">
            <Col xs="6">
              <div className="footer__copyright">
                <div className="footer__copyright-logo">
                  <img src={logo} alt="" />
                </div>
                <div className="footer__copyright-copy">
                  Copyright © 2022 Exodus Movement, Inc. <br /> Exodus was
                  co-founded by Daniel Castagnoli and JP Richardson.
                </div>
              </div>
            </Col>
            <Col xs="6">
              <div className="social__link">
                <span>
                  <Link to="#">
                    <i className="ri-discord-line"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i className="ri-github-line"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i className="ri-youtube-line"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i className="ri-reddit-line"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i className="ri-twitter-line"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i className="ri-slack-line"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i className="ri-facebook-fill"></i>
                  </Link>
                </span>
              </div>
            </Col>
          </div>
        </Row>
        <div className="footer__page-text">
          <span>
            Exodus is a software platform ONLY and does not conduct any
            independent diligence on or substantive review of any blockchain
            asset, digital currency, cryptocurrency or associated funds. You are
            fully and solely responsible for evaluating your investments, for
            determining whether you will exchange blockchain assets based on
            your own, and for all your decisions as to whether to exchange
            blockchain assets with the Exodus in app exchange feature. In many
            cases, blockchain assets you exchange on the basis of your research
            may not increase in value, and may decrease in value. Similarly,
            blockchain assets you exchange on the basis of your research may
            increase in value after your exchange.
          </span>
          <span>
            Past performance is not indicative of future results. Any investment
            in blockchain assets involves the risk of loss of part or all of
            your investment. The value of the blockchain assets you exchange is
            subject to market and other investment risks.
          </span>
          <span>
            Exodus users are responsible for storing their own recovery phrase.
            If the recovery phrase is lost, the user might not be able to
            retrieve their private keys.
          </span>
          <span className="terms">
            <Link to="/privacy">privacy Policy</Link>

            <Link to="terms">Terms and Service</Link>
          </span>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
