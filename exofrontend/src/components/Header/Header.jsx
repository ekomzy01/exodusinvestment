import React, { useState } from "react";
import { Container } from "reactstrap";
import { NavLink } from "react-router-dom";
import logo from "../../assests/images/Exodus_Logo.svg";
import { Spin as Hamburger } from "hamburger-react";
import "./header.css";
import "./hambuger.css";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const Nav__Link = [
    {
      display: "Home",
      url: "/home",
    },
    {
      display: "Product",
      url: "/desktop",
    },
    {
      display: "Crypto News",
      url: "/news",
    },
    {
      display: "About",
      url: "/about",
    },
    {
      display: "Wallet",
      url: "/wallet",
    },
  ];

  const handleClick = () => {
    setOpen(false);
  };

  return (
    <header className="header">
      <Container>
        <nav className="navigation d-flex align-item-center justify-content-around">
          <div className="logo d-flex align-item-center">
            <h2 className="d-flex logo-container">
              <a href="/">
                <img src={logo} alt="logo" />
              </a>
            </h2>
          </div>

          <div className="nav__menu ">
            <ul className="nav__list ">
              <li className="nav__item d-flex gap-3">
                <NavLink to="/home">Home</NavLink>
              </li>
            </ul>
          </div>
          <div className="nav__menu ">
            <ul className="nav__list ">
              <li className="nav__item d-flex gap-3">
                <NavLink to="/desktop">Product</NavLink>
              </li>
            </ul>
          </div>
          <div className="nav__menu ">
            <ul className="nav__list ">
              <li className="nav__item d-flex gap-3">
                <NavLink to="/news">Crypto News</NavLink>
              </li>
            </ul>
          </div>
          <div className="nav__menu ">
            <ul className="nav__list ">
              <li className="nav__item d-flex gap-3">
                <NavLink to="/about">About</NavLink>
              </li>
            </ul>
          </div>
          <div className="nav__menu ">
            <ul className="nav__list ">
              <li className="nav__item d-flex gap-3">
                <NavLink to="/wallet">Wallet</NavLink>
              </li>
            </ul>
          </div>

          {/* <button className="header__btn">Download</button> */}
          <div className=" hamburger">
            <Hamburger
              direction="right"
              toggled={isOpen}
              toggle={setOpen}
              size={32}
              duration={0.5}
              distance="lg"
              color="#fff"
              easing="ease-in"
              rounded
              onToggle={(toggled) => {
                if (toggled) {
                  // open a menu

                  setOpen(toggled);
                } else {
                  // close a menu
                  setOpen(false);
                }
              }}
            />

            {isOpen && (
              <div
                className=" navbar-collapse collapse show"
                id="navbarSupportedContent">
                <div className="x__topbar-header-container">
                  <div className="x__topbar-header-logo-space"></div>
                  <ul className="x__topbar-header-navigation" id="headernav">
                    <li
                      className="x__topbar-header-navigation-item x__topbar-header-navigation-item__home"
                      onClick={handleClick}>
                      {Nav__Link.map((item, index) => (
                        <NavLink to={item.url} key={index}>
                          {item.display}
                        </NavLink>
                      ))}
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
